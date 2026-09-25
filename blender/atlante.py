"""Atlante 3D — costruzione della scena in Blender ed esportazione in glTF.

Costruisce la gerarchia dei modelli dell'atlante e la esporta in .glb con
i nomi che il sito si aspetta. I nomi non sono scritti due volte: lo script
li rilegge da data/atlante.js e si ferma se non combaciano.

    Encefalo   emisferi displaced, tagliati nei quattro lobi lungo le
               scissure reali, aree funzionali ritagliate dalla superficie
               del lobo che le contiene, sottocorticali, tronco, cervelletto.
    Neurone    la stessa geometria che il sito genera a runtime, qui per
               chi la voglia scolpire a mano e riesportare.
    SNP        lo schema: sagoma, midollo, nervi, le due colonne.

Uso, senza aprire Blender:

    blender --background --python blender/atlante.py
    blender --background --python blender/atlante.py -- --tutto
    blender --background --python blender/atlante.py -- --salva-blend

Sistema di riferimento in Blender:  +x destra, -y rostrale, +z dorsale.
L'esportatore glTF (+Y up) lo converte in  +x destra, +y dorsale, +z rostrale,
che è quello che assets/atlante3d.js si aspetta.
"""

import bpy
import bmesh
import json
import math
import os
import re
import sys
from mathutils import Vector, Matrix, Euler

RADICE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATI = os.path.join(RADICE, "data", "atlante.js")
USCITA = os.path.join(RADICE, "modelli")


# =====================================================================
# 0 — i nomi attesi, riletti dal sito
# =====================================================================

def mesh_attesi(sezione):
    """Estrae i prefissi `mesh:"…"` della sezione da data/atlante.js.

    Non è un parser JavaScript: cerca il blocco della sezione fra
    `id:"<sezione>"` e la chiusura `]});`, poi i campi mesh e pari.
    """
    with open(DATI, encoding="utf-8") as f:
        testo = f.read()
    avvio = testo.find('id:"%s"' % sezione)
    if avvio < 0:
        raise SystemExit("atlante.py: sezione '%s' assente da data/atlante.js" % sezione)
    fine = testo.find("]});", avvio)
    blocco = testo[avvio:fine]
    attesi = {}
    for m in re.finditer(r'mesh:"([A-Za-z0-9_]+)"(.*?)(?=\n\{ id:|\Z)', blocco, re.S):
        attesi[m.group(1)] = bool(re.search(r"\bpari:\s*true", m.group(2)))
    return attesi


def verifica(sezione, costruiti):
    attesi = mesh_attesi(sezione)
    mancanti, sovrappiu = [], []
    for nome, pari in attesi.items():
        voluti = [nome + "_L", nome + "_R"] if pari else [nome]
        for v in voluti:
            if v not in costruiti:
                mancanti.append(v)
    radici = set(attesi)
    for nome in costruiti:
        base = re.sub(r"_(L|R)$", "", nome)
        if base not in radici:
            sovrappiu.append(nome)
    if mancanti:
        print("  ! mancano dal modello: " + ", ".join(sorted(mancanti)))
    if sovrappiu:
        print("  ! non previsti dai dati: " + ", ".join(sorted(sovrappiu)))
    if not mancanti and not sovrappiu:
        print("  · %d mesh, tutti corrispondenti a data/atlante.js" % len(costruiti))
    return not mancanti and not sovrappiu


# =====================================================================
# 1 — utilità di scena
# =====================================================================

def pulisci():
    """Toglie solo ciò che ha costruito questo script: camera e luci restano."""
    for nome in ("Encefalo", "Neurone", "SNP"):
        if nome in bpy.data.collections:
            coll = bpy.data.collections[nome]
            for ob in list(coll.objects):
                bpy.data.objects.remove(ob, do_unlink=True)
            bpy.data.collections.remove(coll)
    for ob in list(bpy.data.objects):
        if ob.type in ("MESH", "CURVE", "EMPTY") and ob.name not in ("Camera", "Light"):
            bpy.data.objects.remove(ob, do_unlink=True)
    for blocco in (bpy.data.meshes, bpy.data.curves, bpy.data.textures, bpy.data.materials):
        for d in list(blocco):
            if d.users == 0:
                blocco.remove(d)


def collezione(nome):
    if nome in bpy.data.collections:
        c = bpy.data.collections[nome]
    else:
        c = bpy.data.collections.new(nome)
        bpy.context.scene.collection.children.link(c)
    return c


def metti_in(ob, coll):
    for c in list(ob.users_collection):
        c.objects.unlink(ob)
    coll.objects.link(ob)
    return ob


def attiva(ob):
    bpy.ops.object.select_all(action="DESELECT")
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    return ob


def congela(ob):
    """Porta le trasformazioni dell'oggetto dentro il mesh.

    Serve perché taglia() e ritaglia_area() lavorano sui vertici, che
    sono in coordinate locali: se l'oggetto resta traslato, ogni piano
    di taglio arriva spostato della stessa quantità. Dopo questa
    chiamata locale e globale coincidono.
    """
    attiva(ob)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return ob


def applica_modificatori(ob):
    attiva(ob)
    for m in list(ob.modifiers):
        bpy.ops.object.modifier_apply(modifier=m.name)


def liscia(ob, angolo=52):
    attiva(ob)
    bpy.ops.object.shade_smooth()
    if hasattr(ob.data, "use_auto_smooth"):          # Blender ≤ 4.0
        ob.data.use_auto_smooth = True
        ob.data.auto_smooth_angle = math.radians(angolo)


# =====================================================================
# 2 — primitive
# =====================================================================

def ellissoide(nome, centro, scala, coll, seg=48, anelli=24):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=anelli, radius=1.0, location=centro)
    ob = bpy.context.active_object
    ob.name = nome
    ob.scale = Vector(scala)
    congela(ob)
    return metti_in(ob, coll)


def tubo(nome, punti, raggio, coll, raggio_fine=None, risoluzione=14, chiuso=False):
    """Curva di Bézier addolcita, ispessita e convertita in mesh."""
    dati = bpy.data.curves.new(nome, "CURVE")
    dati.dimensions = "3D"
    dati.resolution_u = 10
    dati.bevel_depth = raggio
    dati.bevel_resolution = 5
    dati.use_fill_caps = True
    spline = dati.splines.new("BEZIER")
    spline.bezier_points.add(len(punti) - 1)
    for bp, p in zip(spline.bezier_points, punti):
        bp.co = Vector(p)
        bp.handle_left_type = bp.handle_right_type = "AUTO"
    spline.use_cyclic_u = chiuso
    if raggio_fine is not None:
        n = len(punti) - 1
        for i, bp in enumerate(spline.bezier_points):
            k = i / n if n else 0
            bp.radius = (1 - k) + k * (raggio_fine / raggio)
    ob = bpy.data.objects.new(nome, dati)
    bpy.context.scene.collection.objects.link(ob)
    attiva(ob)
    bpy.ops.object.convert(target="MESH")
    ob = bpy.context.active_object
    ob.name = nome
    congela(ob)
    return metti_in(ob, coll)


def nastro(nome, punti, larghezza, spessore, coll):
    """Come tubo, ma con sezione rettangolare: serve al corpo calloso."""
    bpy.ops.mesh.primitive_plane_add(size=1)
    prof = bpy.context.active_object
    prof.name = nome + "_Profilo"
    prof.scale = (larghezza / 2, spessore / 2, 1)
    bpy.ops.object.transform_apply(scale=True)
    bpy.ops.object.convert(target="CURVE")
    prof = bpy.context.active_object

    dati = bpy.data.curves.new(nome, "CURVE")
    dati.dimensions = "3D"
    dati.resolution_u = 12
    dati.bevel_mode = "OBJECT"
    dati.bevel_object = prof
    dati.use_fill_caps = True
    spline = dati.splines.new("BEZIER")
    spline.bezier_points.add(len(punti) - 1)
    for bp, p in zip(spline.bezier_points, punti):
        bp.co = Vector(p)
        bp.handle_left_type = bp.handle_right_type = "AUTO"
    ob = bpy.data.objects.new(nome, dati)
    bpy.context.scene.collection.objects.link(ob)
    attiva(ob)
    bpy.ops.object.convert(target="MESH")
    ob = bpy.context.active_object
    ob.name = nome
    bpy.data.objects.remove(prof, do_unlink=True)
    congela(ob)
    return metti_in(ob, coll)


def specchia_x(ob, nome):
    """Copia speculare rispetto al piano sagittale, con le normali a posto."""
    copia = ob.copy()
    copia.data = ob.data.copy()
    copia.name = nome
    for c in ob.users_collection:
        c.objects.link(copia)
    attiva(copia)
    copia.matrix_world = Matrix.Diagonal(Vector((-1, 1, 1, 1))) @ copia.matrix_world
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    me = copia.data
    bm = bmesh.new()
    bm.from_mesh(me)
    for f in bm.faces:
        f.normal_flip()
    bm.to_mesh(me)
    bm.free()
    me.update()
    return copia


# =====================================================================
# 3 — operazioni di forma
# =====================================================================

def taglia(ob, punto, normale, tieni="positivo", tappa=True):
    """Biseca con un piano e scarta il lato indicato.

    `tieni="positivo"` conserva i vertici per cui (v - punto)·normale > 0.
    """
    p, n = Vector(punto), Vector(normale).normalized()
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    esito = bmesh.ops.bisect_plane(
        bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:],
        plane_co=p, plane_no=n, clear_inner=(tieni == "positivo"),
        clear_outer=(tieni != "positivo"),
    )
    if tappa:
        bordo = [e for e in esito["geom_cut"] if isinstance(e, bmesh.types.BMEdge)]
        if bordo:
            bmesh.ops.holes_fill(bm, edges=bordo)
    bm.to_mesh(me)
    bm.free()
    me.update()
    return ob


def forma_emisfero(ob):
    """Da ellissoide a sagoma: polo frontale, pollice temporale, occipite.

    I tagli delle scissure arrivano dopo. Qui si decide solo il profilo, così
    da laterale si legge un cervello e non un uovo: il temporale pende sotto
    Silvio, il frontale resta più alto, l'occipite si stringe, la cupola
    è più piatta di una sfera.
    """
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    for v in bm.verts:
        x, y, z = v.co.x, v.co.y, v.co.z

        # pollice temporale: sotto Silvio, laterale e un po' in avanti
        if x > 0.16 and -0.70 < y < 0.60:
            ventrale = max(0.0, min(1.0, (0.14 - z) / 0.72))
            fascia = max(0.0, 1.0 - abs(y - 0.08) / 0.70)
            laterale = max(0.0, min(1.0, (x - 0.16) / 0.42))
            k = ventrale * fascia * laterale
            k *= 0.38 + 0.62 * max(0.0, min(1.0, (0.26 - z) / 0.48))
            v.co.z -= 0.80 * k
            v.co.x += 0.13 * k
            if y < 0.04:
                v.co.y -= 0.18 * k * min(1.0, (0.04 - y) / 0.46)

        # valle di Silvio: insellatura diagonale, prima dei solchi
        d_s = (y + 0.07) * 0.50 + (z + 0.13) * (-0.87)
        if x > 0.18 and abs(d_s) < 0.20 and -0.62 < y < 0.52:
            g = (1.0 - abs(d_s) / 0.20) ** 2
            g *= min(1.0, (x - 0.18) / 0.34)
            v.co.x -= 0.070 * g
            v.co.z -= 0.028 * g

        # polo occipitale: più appuntito e un poco più basso
        if y > 0.68:
            t = min(1.0, (y - 0.68) / 0.52)
            v.co.x *= 1.0 - 0.22 * t
            v.co.z *= 1.0 - 0.16 * t
            v.co.z -= 0.05 * t

        # polo frontale: si stringe; l'orbitario NON pende come il temporale
        if y < -0.58:
            t = min(1.0, (-0.58 - y) / 0.54)
            v.co.x *= 1.0 - 0.13 * t
            if z < 0.08:
                v.co.z += 0.10 * t * max(0.0, min(1.0, (0.08 - z) / 0.42))

        # cupola: meno sfera, più tetto del cranio
        if z > 0.24:
            t = min(1.0, (z - 0.24) / 0.40)
            v.co.z *= 1.0 - 0.14 * t
            if x > 0.18:
                v.co.x += 0.035 * t * min(1.0, (x - 0.18) / 0.30)

        # vita sopra il temporale: toglie il «uovo» tra Silvio e il vertice
        if x > 0.22 and 0.10 < z < 0.42 and -0.20 < y < 0.35:
            w = (1.0 - abs(z - 0.24) / 0.18) * min(1.0, (x - 0.22) / 0.28)
            w *= 1.0 - abs(y - 0.06) / 0.32
            if w > 0:
                v.co.x -= 0.028 * max(0.0, w)

    bm.to_mesh(me)
    bm.free()
    me.update()
    return ob


def scava_solco(ob, punto, normale, larghezza=0.08, profondita=0.05, x_min=0.18):
    """Solco sulla faccia laterale: i vertici vicini al piano vanno verso il centro.

    Serve perché il taglio dei lobi da solo lascia due facce a filo: in tinta
    studio la scissura sparisce. Una valle comune resta visibile anche se
    frontale e temporale hanno lo stesso beige.
    """
    p, n = Vector(punto), Vector(normale).normalized()
    c = Vector(EMISFERO["centro"])
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    for v in bm.verts:
        if v.co.x < x_min:
            continue
        d = (v.co - p).dot(n)
        if abs(d) > larghezza:
            continue
        k = (1.0 - abs(d) / larghezza)
        k = k * k
        k *= min(1.0, (v.co.x - x_min) / 0.28)
        inward = c - v.co
        if inward.length < 1e-5:
            continue
        v.co += inward.normalized() * (profondita * k)
    bm.to_mesh(me)
    bm.free()
    me.update()
    return ob


def guscio(ob, spessore=0.048):
    """Corteccia a spessore: l'emisfero diventa un guscio, non una palla piena.

    Senza questo, il taglio sagittale mostra una faccia piatta beige che
    nasconde ventricoli, nuclei e tronco. Con il guscio la sezione è un
    anello di corteccia e l'interno resta visibile.
    """
    m = ob.modifiers.new("Guscio", "SOLIDIFY")
    m.thickness = spessore
    m.offset = -1.0
    if hasattr(m, "use_even_offset"):
        m.use_even_offset = True
    applica_modificatori(ob)
    return ob


def ripulisci(ob, centro=(0.40, 0.02, 0.10), raggio=1.85):
    """Toglie i vertici sparati lontano da SOLIDIFY su mesh aperte.

    Un solo vertice a x=10 fa una spina che copre tutta la vista mediale
    e gonfia la scatola del modello.
    """
    c = Vector(centro)
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    troppi = [v for v in bm.verts
              if (v.co - c).length > raggio
              or v.co.z > 1.02 or v.co.z < -1.20 or abs(v.co.x) > 1.15]
    if troppi:
        bmesh.ops.delete(bm, geom=troppi, context="VERTS")
    if bm.verts:
        bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0008)
    bm.to_mesh(me)
    bm.free()
    me.update()
    return taglia_spine(ob)


def taglia_spine(ob, soglia=0.09):
    """Toglie i coni isolati del displace: un vertice con un lato molto
    più lungo dei vicini è una spina, non un giro."""
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.verts.ensure_lookup_table()
    cattivi = []
    for v in bm.verts:
        if not v.link_edges:
            cattivi.append(v)
            continue
        lunghi = [e.calc_length() for e in v.link_edges]
        media = sum(lunghi) / len(lunghi)
        if max(lunghi) > soglia and max(lunghi) > 2.3 * media:
            cattivi.append(v)
    if cattivi:
        bmesh.ops.delete(bm, geom=cattivi, context="VERTS")
        if bm.verts:
            bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0012)
    bm.to_mesh(me)
    bm.free()
    me.update()
    return ob


def ritira_verso(ob, centro, k=0.84):
    """Accosta i vertici a un centro: serve al guscio di sostanza bianca,
    che deve stare dentro la corteccia e lasciare la cavità dei ventricoli.
    """
    c = Vector(centro)
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    for v in bm.verts:
        v.co = c + (v.co - c) * k
    bm.to_mesh(me)
    bm.free()
    me.update()
    return ob


def rughe(ob, scala_rumore=0.20, forza=0.055, seme=1, lisciature=2):
    """Le circonvoluzioni: solchi larghi (Voronoi) e poi un rumore fine.

    «Un grosso quantitativo di tessuto in una scatola cranica di volume
    relativamente piccolo»: la corteccia è tutta ripiegata su se stessa.
    """
    try:
        tex_g = bpy.data.textures.new(ob.name + "_Giri", type="VORONOI")
        tex_g.noise_intensity = 1.0
        if hasattr(tex_g, "noise_scale"):
            tex_g.noise_scale = 0.17
        if hasattr(tex_g, "distance_metric"):
            tex_g.distance_metric = "DISTANCE"
        m = ob.modifiers.new("Giri", "DISPLACE")
        m.texture = tex_g
        m.strength = 0.040
        m.mid_level = 0.42
        m.texture_coords = "GLOBAL"
    except Exception:
        pass
    tex = bpy.data.textures.new(ob.name + "_Rughe", type="CLOUDS")
    tex.noise_scale = scala_rumore
    tex.noise_depth = 3
    tex.nabla = 0.02
    m = ob.modifiers.new("Rughe", "DISPLACE")
    m.texture = tex
    m.strength = forza
    m.mid_level = 0.42
    m.texture_coords = "GLOBAL"
    s = ob.modifiers.new("Liscia", "SMOOTH")
    s.factor = 0.5
    s.iterations = lisciature
    applica_modificatori(ob)
    return ob


def giri_diretti(ob, ampiezza=0.024):
    """Pieghe con una direzione, come i giri veri: non un rumore a macchie.

    Frontale e parietale corrono quasi in verticale (i giri pre e
    postcentrali). Il temporale corre in orizzontale, parallelo a Silvio.
    L'occipite ha pieghe più fitte.
    """
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.normal_update()
    for v in bm.verts:
        x, y, z = v.co.x, v.co.y, v.co.z
        n = v.normal
        if n.x < 0.08 and n.z < 0.40:
            continue
        d_s = (y + 0.07) * 0.50 + (z + 0.13) * (-0.87)
        if abs(d_s) < 0.08 and x > 0.22:
            continue
        w_lat = min(1.0, max(0.0, (x - 0.16) / 0.28))
        w_f = max(0.0, 1.0 - max(0.0, y + 0.02) / 0.90) * max(0.0, (z + 0.02) / 0.50)
        w_t = max(0.0, 1.0 - abs(z + 0.30) / 0.40) * max(0.0, min(1.0, (0.50 - y) / 0.75))
        w_o = max(0.0, min(1.0, (y - 0.52) / 0.38))
        w_p = max(0.0, min(1.0, (y + 0.02) / 0.50)) * max(0.0, z / 0.32) * (1.0 - w_o)
        f_vert = (y * 0.45 + z) * 12.0
        f_oriz = y * 14.0
        f_occ = (y * 1.3 - z * 0.5) * 15.0
        h = (math.sin(f_vert) + 0.40 * math.sin(f_vert * 2.1 + 0.6)) * w_f
        h += math.sin(f_oriz) * w_t
        h += math.sin(f_vert * 0.9 + 0.3) * w_p
        h += math.sin(f_occ) * w_o
        if abs(h) < 1e-4:
            continue
        v.co += n * (ampiezza * max(-1.2, min(1.2, h)) * w_lat)
    bm.to_mesh(me)
    bm.free()
    me.update()
    return ob


def solchi_paralleli(ob, spaziatura=0.055, forza=0.02, asse="z"):
    """Le folia del cervelletto: bande regolari, non rumore."""
    tex = bpy.data.textures.new(ob.name + "_Folia", type="WOOD")
    tex.noise_basis_2 = "SAW"
    tex.wood_type = "BANDS"
    tex.noise_scale = spaziatura
    tex.turbulence = 0.0
    vuoto = bpy.data.objects.new(ob.name + "_Bande", None)
    bpy.context.scene.collection.objects.link(vuoto)
    vuoto.rotation_euler = (math.radians(90), 0, 0) if asse == "z" else (0, 0, 0)
    m = ob.modifiers.new("Folia", "DISPLACE")
    m.texture = tex
    m.strength = forza
    m.mid_level = 0.5
    m.texture_coords = "OBJECT"
    m.texture_coords_object = vuoto
    applica_modificatori(ob)
    bpy.data.objects.remove(vuoto, do_unlink=True)
    return ob


def ritaglia_area(nome, sorgente, centro, raggi, coll, rialzo=0.0025):
    """Stacca dalla superficie di un lobo la placca di un'area funzionale.

    Tiene le facce il cui centro cade dentro l'ellissoide (centro, raggi)
    e le solleva di un pelo lungo la normale: quanto basta a non sfarfallare
    contro il lobo, non tanto da sembrare una piastra appiccicata sopra.
    L'area resta così una REGIONE DI COLORE sulla corteccia, con le sue
    circonvoluzioni, e il lobo sotto resta intero se la si nasconde.
    """
    copia = sorgente.copy()
    copia.data = sorgente.data.copy()
    copia.name = nome
    bpy.context.scene.collection.objects.link(copia)

    # suddivisione SEMPLICE: infittisce senza addolcire, così la placca
    # conserva le circonvoluzioni del lobo e il bordo non esce a scalini
    sub = copia.modifiers.new("Infittisci", "SUBSURF")
    sub.subdivision_type = "SIMPLE"
    sub.levels = sub.render_levels = 2
    applica_modificatori(copia)

    c, r = Vector(centro), Vector(raggi)
    me = copia.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.faces.ensure_lookup_table()
    fuori = []
    for f in bm.faces:
        d = f.calc_center_median() - c
        if (d.x / r.x) ** 2 + (d.y / r.y) ** 2 + (d.z / r.z) ** 2 > 1.0:
            fuori.append(f)
        elif f.normal.x < 0.12 and f.calc_center_median().x < 0.32:
            fuori.append(f)
    bmesh.ops.delete(bm, geom=fuori, context="FACES")
    if not bm.faces:
        bm.free()
        bpy.data.objects.remove(copia, do_unlink=True)
        print("  ! area vuota, riposizionare: %s" % nome)
        return None
    for v in bm.verts:
        v.co += v.normal * rialzo
    bm.to_mesh(me)
    bm.free()
    me.update()

    liscia(copia)
    return metti_in(copia, coll)


# =====================================================================
# 4 — L'ENCEFALO
# =====================================================================

# Le tre scissure, come piani. La normale punta verso il lato conservato
# per primo. Vengono dalla L10: «quattro fenditure principali che ci
# servono per orientarci».
ROLANDO = ((0, -0.15, 0.14), (0, -1.0, 0.52))        # normale verso il frontale
SILVIO = ((0, -0.07, -0.13), (0, 0.50, -0.87))       # normale verso il temporale
PARIETO_OCC = ((0, 0.62, 0.14), (0, 1.0, 0.16))      # normale verso l'occipitale
POLO_TEMP = ((0, -0.46, -0.20), (0, 1.0, -0.30))     # normale verso il polo temporale

EMISFERO = dict(centro=(0.50, -0.02, 0.10), scala=(0.50, 1.22, 0.54))
FONDO = -0.82                                        # lascia spazio al pollice temporale
MEDIALE = 0.020                                      # scissura longitudinale

# Le aree funzionali: (nome, lobo, centro, raggi, solo_a_sinistra).
# I centri stanno dentro la corteccia e i raggi sono generosi lungo x,
# perché la placca deve intercettare la superficie laterale, che è curva.
AREE = [
    ("Enc_Area_Motoria",     "Enc_Lobo_Frontale",   (0.70, -0.13, 0.36), (0.40, 0.15, 0.40), False),
    ("Enc_Area_Somato",      "Enc_Lobo_Parietale",  (0.70,  0.10, 0.36), (0.40, 0.17, 0.40), False),
    ("Enc_Area_Visiva",      "Enc_Lobo_Occipitale", (0.52,  0.86, 0.06), (0.38, 0.24, 0.30), False),
    ("Enc_Area_Uditiva",     "Enc_Lobo_Temporale",  (0.86,  0.04, -0.14), (0.30, 0.32, 0.18), False),
    ("Enc_Area_PTO",         "Enc_Lobo_Parietale",  (0.78,  0.42, 0.10), (0.30, 0.20, 0.28), False),
    ("Enc_Area_Prefrontale", "Enc_Lobo_Frontale",   (0.62, -0.82, 0.16), (0.26, 0.16, 0.22), False),
    ("Enc_Area_Broca",       "Enc_Lobo_Frontale",   (0.78, -0.50, -0.16), (0.28, 0.24, 0.18), True),
    ("Enc_Area_Wernicke",    "Enc_Lobo_Temporale",  (0.80,  0.40, -0.16), (0.26, 0.26, 0.20), True),
    ("Enc_Area_Limbica",     "Enc_Lobo_Insula",     (0.30, -0.06, -0.06), (0.16, 0.20, 0.16), False),
]


def costruisci_encefalo():
    coll = collezione("Encefalo")
    fatti = {}

    def salva(ob):
        if ob is not None:
            fatti[ob.name] = ob
        return ob

    # --- emisfero destro: la forma di partenza -----------------------
    base = ellissoide("Enc_Emisfero", EMISFERO["centro"], EMISFERO["scala"], coll, seg=160, anelli=80)
    # mediale APERTA: niente tappo, altrimenti la sezione è un muro beige
    taglia(base, (MEDIALE, 0, 0), (1, 0, 0), tieni="positivo", tappa=False)
    taglia(base, (0, 0, FONDO), (0, 0, 1), tieni="positivo", tappa=False)
    forma_emisfero(base)
    scava_solco(base, SILVIO[0], SILVIO[1], larghezza=0.20, profondita=0.24)
    scava_solco(base, SILVIO[0], SILVIO[1], larghezza=0.085, profondita=0.10, x_min=0.24)
    scava_solco(base, ROLANDO[0], ROLANDO[1], larghezza=0.10, profondita=0.078)
    scava_solco(base, PARIETO_OCC[0], PARIETO_OCC[1], larghezza=0.068, profondita=0.042)
    scava_solco(base, (0, -0.42, 0.34), (0, 0.18, 1.0), larghezza=0.058, profondita=0.036)
    scava_solco(base, (0, -0.58, 0.08), (0, 0.22, 0.97), larghezza=0.052, profondita=0.030)
    scava_solco(base, (0, 0.08, -0.30), (0, 0.25, -0.97), larghezza=0.056, profondita=0.034)
    scava_solco(base, (0, 0.28, 0.38), (0, -0.15, 1.0), larghezza=0.050, profondita=0.032)
    scava_solco(base, (0, -0.22, -0.38), (0, 0.12, -0.99), larghezza=0.048, profondita=0.028)
    scava_solco(base, (0, -0.72, 0.22), (0, 0.08, 1.0), larghezza=0.046, profondita=0.026)
    scava_solco(base, (0, 0.18, -0.42), (0, 0.20, -0.98), larghezza=0.050, profondita=0.030)
    scava_solco(base, (0, 0.48, 0.22), (0, -0.35, 0.94), larghezza=0.048, profondita=0.028)
    rughe(base, scala_rumore=0.12, forza=0.020, lisciature=1)
    giri_diretti(base, ampiezza=0.022)
    taglia_spine(base, soglia=0.07)
    liscia(base)

    # sostanza bianca liscia (non copia delle circonvoluzioni): il guscio
    # pieghettato lasciava spine bianche che coprivano la sezione.
    wm = unisci([
        ellissoide("Enc_WM_Corpo", (0.28, 0.04, 0.12), (0.18, 0.58, 0.30), coll, 36, 18),
        tubo("Enc_WM_Temp", [
            (0.30, -0.08, -0.06), (0.36, 0.06, -0.18), (0.34, 0.22, -0.16),
        ], 0.10, coll, raggio_fine=0.06),
    ], "Enc_SostanzaBianca")
    taglia(wm, (0.12, 0, 0), (1, 0, 0), tieni="positivo", tappa=False)
    liscia(wm)
    pari = {"Enc_SostanzaBianca": wm}

    guscio(base, 0.040)
    ripulisci(base)

    # --- i quattro lobi, tagliati lungo le scissure ------------------
    def pezzo(nome, tagli):
        ob = base.copy()
        ob.data = base.data.copy()
        ob.name = nome
        coll.objects.link(ob)
        for punto, normale, tieni in tagli:
            taglia(ob, punto, normale, tieni=tieni, tappa=False)
        if not ob.data.vertices:
            # catena di tagli che non racchiude nulla: succede quando un
            # piano scende sotto la faccia ventrale. Non è un errore.
            bpy.data.objects.remove(ob, do_unlink=True)
            return None
        return ob

    def lobo(nome, *catene):
        """Un lobo è l'unione di uno o più ritagli.

        Il frontale ne vuole due: la convessità sopra la scissura di
        Silvio, e il cuneo orbitario che sta sotto di essa davanti al
        polo temporale — che anatomicamente è frontale, non temporale.
        """
        pezzi = [pezzo("%s_p%d" % (nome, i), c) for i, c in enumerate(catene)]
        pezzi = [p for p in pezzi if p is not None]
        ob = unisci(pezzi, nome)
        ripulisci(ob)
        liscia(ob)
        return metti_in(ob, coll)

    R, S, P, T = ROLANDO, SILVIO, PARIETO_OCC, POLO_TEMP
    lobi = {
        "Enc_Lobo_Frontale": lobo("Enc_Lobo_Frontale",
            [(R[0], R[1], "positivo"), (S[0], S[1], "negativo")],
            [(R[0], R[1], "positivo"), (S[0], S[1], "positivo"), (T[0], T[1], "negativo")]),
        "Enc_Lobo_Parietale": lobo("Enc_Lobo_Parietale",
            [(R[0], R[1], "negativo"), (S[0], S[1], "negativo"), (P[0], P[1], "negativo")]),
        "Enc_Lobo_Temporale": lobo("Enc_Lobo_Temporale",
            [(S[0], S[1], "positivo"), (P[0], P[1], "negativo"), (T[0], T[1], "positivo")]),
        "Enc_Lobo_Occipitale": lobo("Enc_Lobo_Occipitale",
            [(P[0], P[1], "positivo")]),
    }

    # --- l'insula: sepolta nella scissura di Silvio ------------------
    insula = ellissoide("Enc_Lobo_Insula", (0.30, -0.06, -0.06), (0.05, 0.19, 0.15), coll, seg=36, anelli=18)
    liscia(insula)
    lobi["Enc_Lobo_Insula"] = insula

    # --- le aree funzionali, ritagliate dal lobo che le contiene -----
    aree = {}
    for nome, padre, centro, raggi, solo_sx in AREE:
        a = ritaglia_area(nome, lobi[padre], centro, raggi, coll)
        if a:
            aree[nome] = (a, solo_sx)
        elif nome == "Enc_Area_Limbica":
            a = ellissoide(nome, (0.22, -0.10, 0.00), (0.055, 0.09, 0.07), coll, 24, 12)
            liscia(a)
            aree[nome] = (a, solo_sx)

    # --- sottocorticali, pari ----------------------------------------
    pari["Enc_Dienc_Talamo"] = ellissoide("Enc_Dienc_Talamo", (0.13, 0.06, 0.12), (0.11, 0.22, 0.13), coll, 36, 18)
    pari["Enc_Gangli_Putamen"] = ellissoide("Enc_Gangli_Putamen", (0.30, -0.06, 0.06), (0.052, 0.22, 0.14), coll, 36, 18)
    pari["Enc_Gangli_Pallido"] = ellissoide("Enc_Gangli_Pallido", (0.220, -0.04, 0.04), (0.040, 0.16, 0.11), coll, 32, 16)
    pari["Enc_Limbico_Amigdala"] = ellissoide("Enc_Limbico_Amigdala", (0.36, -0.28, -0.22), (0.070, 0.10, 0.065), coll, 32, 16)

    pari["Enc_Gangli_Caudato"] = tubo("Enc_Gangli_Caudato", [
        (0.18, -0.36, 0.14), (0.22, -0.10, 0.22), (0.25, 0.20, 0.16), (0.24, 0.40, -0.02),
    ], 0.078, coll, raggio_fine=0.024)

    pari["Enc_Limbico_Ippocampo"] = tubo("Enc_Limbico_Ippocampo", [
        (0.36, -0.16, -0.22), (0.46, 0.08, -0.26), (0.42, 0.34, -0.14), (0.30, 0.48, -0.02),
    ], 0.054, coll, raggio_fine=0.028)

    # ventricolo laterale a C: corno frontale, corpo, atrio, corno occipitale, corno temporale
    pari["Enc_Ventricoli"] = unisci([
        tubo("Enc_Vent_Corpo", [
            (0.10, -0.50, 0.16), (0.14, -0.14, 0.28), (0.18, 0.14, 0.28),
            (0.20, 0.38, 0.12), (0.18, 0.58, -0.02),
        ], 0.088, coll, raggio_fine=0.048),
        tubo("Enc_Vent_Occ", [
            (0.18, 0.52, 0.02), (0.16, 0.68, -0.06), (0.13, 0.80, -0.10),
        ], 0.044, coll, raggio_fine=0.026),
        tubo("Enc_Vent_Temp", [
            (0.20, 0.36, 0.08), (0.28, 0.16, -0.08), (0.34, -0.04, -0.20),
            (0.36, -0.24, -0.24),
        ], 0.058, coll, raggio_fine=0.038),
    ], "Enc_Ventricoli")

    # --- impari: linea mediana, liquor mediale, tronco, midollo ------
    salva(nastro("Enc_CorpoCalloso", [
        (0, -0.48, 0.20), (0, -0.32, 0.34), (0, 0.00, 0.39), (0, 0.34, 0.32), (0, 0.50, 0.16),
    ], 0.36, 0.050, coll))

    salva(ellissoide("Enc_Dienc_Ipotalamo", (0, -0.06, -0.04), (0.12, 0.12, 0.065), coll, 32, 16))
    salva(tubo("Enc_Ipofisi", [(0, -0.08, -0.10), (0, -0.09, -0.17), (0, -0.09, -0.23)],
               0.024, coll, raggio_fine=0.052))

    salva(ellissoide("Enc_Ventricolo_Terzo", (0, 0.00, 0.06), (0.026, 0.16, 0.11), coll, 28, 16))
    salva(unisci([
        ellissoide("Enc_V4", (0, 0.12, -0.50), (0.09, 0.12, 0.068), coll, 28, 16),
        tubo("Enc_Acq", [(0, 0.02, -0.06), (0, 0.06, -0.28), (0, 0.10, -0.46)],
             0.016, coll, raggio_fine=0.020),
        tubo("Enc_Canale", [(0, 0.08, -0.56), (0, 0.09, -0.95), (0, 0.12, -1.85),
                            (0, 0.14, -2.55)], 0.011, coll, raggio_fine=0.008),
        ellissoide("Enc_Cisterna", (0, 0.30, -0.58), (0.14, 0.16, 0.09), coll, 24, 14),
    ], "Enc_Ventricolo_Quarto"))

    salva(tubo("Enc_Tronco_Mesencefalo", [
        (0, 0.00, -0.22), (0, 0.02, -0.34), (0, 0.02, -0.44),
    ], 0.108, coll, raggio_fine=0.098))
    salva(ellissoide("Enc_Tronco_Ponte", (0, -0.08, -0.54), (0.195, 0.175, 0.128), coll, 40, 20))
    salva(tubo("Enc_Tronco_Bulbo", [(0, 0.00, -0.64), (0, 0.05, -0.78), (0, 0.10, -0.92)],
               0.102, coll, raggio_fine=0.070))

    midollo = [tubo("Enc_Midollo", [
        (0, 0.10, -0.90), (0, 0.16, -1.40), (0, 0.20, -2.00), (0, 0.22, -2.60),
    ], 0.068, coll, raggio_fine=0.044)]
    midollo.append(tubo("Enc_Midollo_Cerv", [
        (0, 0.10, -0.92), (0, 0.13, -1.18), (0, 0.16, -1.38),
    ], 0.078, coll, raggio_fine=0.062))
    midollo.append(tubo("Enc_Midollo_Lomb", [
        (0, 0.20, -2.05), (0, 0.21, -2.28), (0, 0.22, -2.48),
    ], 0.056, coll, raggio_fine=0.038))
    for i, dx in enumerate((-0.040, 0.0, 0.040)):
        midollo.append(tubo("Enc_Cauda%d" % i, [
            (dx, 0.22, -2.52), (dx * 2.4, 0.26, -2.95), (dx * 3.1, 0.30, -3.28),
        ], 0.014, coll, raggio_fine=0.008))
    radici = []
    for i in range(12):
        z = -0.98 - 0.13 * i
        radici.append(tubo("Enc_Rad%d" % i, [
            (0.045, 0.12, z), (0.11, 0.08, z + 0.01), (0.17, 0.04, z + 0.02),
        ], 0.010, coll, raggio_fine=0.008))
    radici_s = [specchia_x(r, r.name + "_L") for r in radici]
    for r in radici_s:
        metti_in(r, coll)
    salva(unisci(midollo + radici + radici_s, "Enc_Midollo"))

    # nervi cranici: escono dal tronco e restano corti, fuori dal guscio
    nervi = [
        tubo("Enc_N_I", [(0.06, -0.42, -0.16), (0.10, -0.52, -0.14), (0.12, -0.60, -0.12)],
             0.012, coll, raggio_fine=0.009),
        tubo("Enc_N_II", [(0.04, -0.24, -0.12), (0.10, -0.34, -0.08), (0.14, -0.42, -0.04)],
             0.018, coll, raggio_fine=0.014),
        tubo("Enc_N_III", [(0.05, 0.00, -0.36), (0.10, -0.06, -0.40), (0.13, -0.10, -0.43)],
             0.011, coll),
        tubo("Enc_N_V", [(0.10, -0.02, -0.50), (0.18, -0.04, -0.46), (0.24, -0.06, -0.42)],
             0.016, coll, raggio_fine=0.012),
        tubo("Enc_N_VII", [(0.08, 0.02, -0.60), (0.14, 0.04, -0.62), (0.19, 0.05, -0.65)],
             0.011, coll),
        tubo("Enc_N_VIII", [(0.09, 0.06, -0.58), (0.15, 0.10, -0.60), (0.20, 0.12, -0.62)],
             0.012, coll),
        tubo("Enc_N_X", [(0.06, 0.08, -0.74), (0.09, 0.10, -0.84), (0.10, 0.11, -0.94)],
             0.012, coll, raggio_fine=0.009),
        tubo("Enc_N_XII", [(0.04, 0.04, -0.80), (0.07, 0.02, -0.88), (0.08, 0.00, -0.96)],
             0.010, coll),
    ]
    pari["Enc_Nervi_Cranici"] = unisci(nervi, "Enc_Nervi_Cranici")

    cerv_r = ellissoide("Enc_Cerv_R", (0.22, 0.86, -0.66), (0.32, 0.32, 0.20), coll, 72, 40)
    cerv_l = ellissoide("Enc_Cerv_L", (-0.22, 0.86, -0.66), (0.32, 0.32, 0.20), coll, 72, 40)
    vermis = ellissoide("Enc_Cerv_V", (0, 0.78, -0.60), (0.10, 0.24, 0.16), coll, 32, 18)
    cerv = unisci([cerv_r, cerv_l, vermis], "Enc_Cervelletto")
    solchi_paralleli(cerv, spaziatura=0.010, forza=0.036)
    liscia(cerv, 36)
    salva(cerv)

    salva(tubo("Enc_Reticolare", [
        (0, 0.02, -0.32), (0, 0.00, -0.54), (0, 0.08, -0.82),
    ], 0.048, coll, raggio_fine=0.034))

    men = ellissoide("Enc_Meningi", (0, -0.02, 0.06), (0.94, 1.30, 0.64), coll, 40, 20)
    taglia(men, (0, 0, -0.62), (0, 0, 1), tieni="positivo", tappa=False)
    guscio(men, 0.010)
    liscia(men)
    salva(men)

    # --- specchiatura: tutto ciò che è pari diventa _L e _R ----------
    for nome, ob in list(lobi.items()) + list(pari.items()):
        sinistro = specchia_x(ob, nome + "_L")
        metti_in(sinistro, coll)
        ob.name = nome + "_R"
        salva(ob)
        salva(sinistro)

    for nome, (ob, solo_sx) in aree.items():
        if solo_sx:
            # Broca e Wernicke stanno nell'emisfero sinistro «nella grande
            # maggioranza delle persone»: un mesh solo, e a sinistra.
            # Il nome va liberato prima, o Blender appende .001 alla copia.
            ob.name = nome + "_Destro_Scartato"
            sinistro = specchia_x(ob, nome)
            metti_in(sinistro, coll)
            bpy.data.objects.remove(ob, do_unlink=True)
            salva(sinistro)
        else:
            sinistro = specchia_x(ob, nome + "_L")
            metti_in(sinistro, coll)
            ob.name = nome + "_R"
            salva(ob)
            salva(sinistro)

    bpy.data.objects.remove(base, do_unlink=True)
    return coll, fatti


# =====================================================================
# 5 — IL NEURONE
# =====================================================================

def _rng(seme):
    a = (int(seme) + 0x6D2B79F5) & 0x7FFFFFFF

    def f():
        nonlocal a
        a = (1103515245 * a + 12345) & 0x7FFFFFFF
        return a / 0x7FFFFFFF
    return f


def albero_tubi(prefisso, origine, direzione, lung, r, livelli, nrami, apertura, seme, coll, dec=0.62):
    """Albero dendritico / terminali: stessi parametri del sito, in Blender."""
    rnd = _rng(seme)
    pezzi = []
    n = [0]

    def ramo(o, d, lungh, raggio, liv):
        d = Vector(d).normalized()
        o = Vector(o)
        fine = o + d * lungh
        n[0] += 1
        pezzi.append(tubo("%s_%02d" % (prefisso, n[0]),
                          [tuple(o), tuple(fine)], raggio, coll,
                          raggio_fine=max(raggio * dec, 0.012)))
        if liv <= 1:
            return
        up = Vector((0, 0, 1))
        if abs(d.dot(up)) > 0.9:
            up = Vector((0, 1, 0))
        e1 = d.cross(up).normalized()
        e2 = d.cross(e1).normalized()
        for i in range(nrami):
            ap = math.radians(apertura * (0.55 + rnd() * 0.9))
            az = (i / nrami) * math.pi * 2 + rnd() * 1.1
            nd = (d * math.cos(ap)
                  + e1 * (math.cos(az) * math.sin(ap))
                  + e2 * (math.sin(az) * math.sin(ap))).normalized()
            ramo(fine, nd, lungh * dec * (0.8 + rnd() * 0.4), raggio * dec, liv - 1)

    ramo(origine, direzione, lung, r, livelli)
    return pezzi


def costruisci_neurone():
    """Stessa geometria che il sito genera a runtime. Serve a chi voglia
    scolpirla a mano in Blender e riesportarla come modelli/neurone.glb:
    basta poi mettere `modello:"modelli/neurone.glb"` nella sezione."""
    coll = collezione("Neurone")
    fatti = {}

    def salva(ob):
        if ob is not None:
            fatti[ob.name] = ob
        return ob

    salva(ellissoide("Neu_Membrana", (0, 0, 0), (1.07, 1.07, 1.07), coll, 72, 36))
    salva(ellissoide("Neu_Soma", (0, 0, 0), (1.0, 1.0, 1.0), coll, 72, 36))
    salva(ellissoide("Neu_Nucleo", (0, 0, 0), (0.44, 0.44, 0.44), coll, 48, 24))

    # DNA: due eliche e i pioli fra di esse
    passi = 64
    for fase, etichetta in ((0.0, "A"), (math.pi, "B")):
        punti = [(0.17 * math.cos(2.4 * 2 * math.pi * i / passi + fase),
                  0.17 * math.sin(2.4 * 2 * math.pi * i / passi + fase),
                  -0.31 + 0.62 * i / passi) for i in range(0, passi + 1, 4)]
        salva(tubo("Neu_DNA_Elica" + etichetta, punti, 0.022, coll))
    for i in range(11):
        z = -0.30 + 0.061 * i
        a = 2.4 * 2 * math.pi * (z + 0.31) / 0.62
        salva(tubo("Neu_DNA_Piolo%02d" % i,
                   [(0.17 * math.cos(a), 0.17 * math.sin(a), z),
                    (-0.17 * math.cos(a), -0.17 * math.sin(a), z)], 0.011, coll))

    for i, (r, t, rot, pos) in enumerate([
            (0.63, 0.045, (12, 0, 0), (0, 0.06, 0)),
            (0.70, 0.045, (-14, 40, 0), (0, -0.05, 0)),
            (0.58, 0.040, (70, 20, 0), (0.05, 0, 0))]):
        bpy.ops.mesh.primitive_torus_add(major_radius=r, minor_radius=t, location=pos,
                                         rotation=[math.radians(x) for x in rot],
                                         major_segments=44, minor_segments=12)
        ob = bpy.context.active_object
        ob.name = "Neu_Reticolo%d" % i
        salva(metti_in(congela(ob), coll))

    for i in range(4):
        bpy.ops.mesh.primitive_torus_add(major_radius=0.26 + 0.03 * i, minor_radius=0.028,
                                         location=(0.35, 0.30, -0.42 - 0.08 * i),
                                         rotation=(math.radians(10), 0, math.radians(-20)),
                                         major_segments=36, minor_segments=10)
        ob = bpy.context.active_object
        ob.name = "Neu_Golgi%d" % i
        salva(metti_in(congela(ob), coll))

    # assone, guaina e nodi: lungo +x
    salva(tubo("Neu_Assone", [(1.3, 0, 0), (5.0, 0, 0), (8.7, 0, 0)], 0.115, coll))
    salva(ellissoide("Neu_Cono", (1.05, 0, 0), (0.28, 0.30, 0.30), coll, 32, 16))
    mieline = []
    for i in range(6):
        x = 2.05 + 1.18 * i
        bpy.ops.mesh.primitive_cylinder_add(radius=0.235, depth=0.74, location=(x, 0, 0),
                                            rotation=(0, math.radians(90), 0), vertices=32)
        ob = bpy.context.active_object
        ob.name = "Neu_Mielina%d" % i
        mieline.append(metti_in(congela(ob), coll))
    salva(unisci(mieline, "Neu_Mielina"))
    nodi = []
    for i in range(5):
        bpy.ops.mesh.primitive_torus_add(major_radius=0.135, minor_radius=0.055,
                                         location=(2.64 + 1.18 * i, 0, 0),
                                         rotation=(0, math.radians(90), 0),
                                         major_segments=28, minor_segments=10)
        ob = bpy.context.active_object
        ob.name = "Neu_Ranvier%d" % i
        nodi.append(metti_in(congela(ob), coll))
    salva(unisci(nodi, "Neu_Ranvier"))

    salva(unisci(albero_tubi("Neu_D", (-0.85, 0, 0), (-1, 0.12, 0), 1.5, 0.105,
                             4, 3, 42, 11, coll), "Neu_Dendriti"))
    salva(unisci(albero_tubi("Neu_T", (8.72, 0, 0), (1, 0, 0), 0.70, 0.075,
                             3, 3, 46, 5, coll), "Neu_Terminali"))

    rnd = _rng(23)
    miti = []
    for i in range(7):
        u = rnd() * 2 - 1
        f = rnd() * math.pi * 2
        rad = 0.50 + 0.30 * (rnd() ** (1 / 3))
        sr = math.sqrt(max(0.0, 1 - u * u))
        p = (rad * sr * math.cos(f), rad * u, rad * sr * math.sin(f))
        miti.append(ellissoide("Neu_Mit%d" % i, p, (0.065, 0.065, 0.16), coll, 16, 10))
    salva(unisci(miti, "Neu_Mitocondri"))

    rnd = _rng(7)
    ribo = []
    for i in range(28):
        u = rnd() * 2 - 1
        f = rnd() * math.pi * 2
        rad = 0.56 + 0.18 * (rnd() ** (1 / 3))
        sr = math.sqrt(max(0.0, 1 - u * u))
        p = (rad * sr * math.cos(f), rad * u, rad * sr * math.sin(f))
        ribo.append(ellissoide("Neu_Rib%d" % i, p, (0.033, 0.033, 0.033), coll, 10, 6))
    salva(unisci(ribo, "Neu_Ribosomi"))

    return coll, fatti


def unisci(oggetti, nome=None):
    oggetti = [o for o in oggetti if o is not None]
    if not oggetti:
        return None
    if len(oggetti) == 1:
        if nome:
            oggetti[0].name = nome
        return oggetti[0]
    bpy.ops.object.select_all(action="DESELECT")
    for o in oggetti:
        o.select_set(True)
    bpy.context.view_layer.objects.active = oggetti[0]
    bpy.ops.object.join()
    ob = bpy.context.active_object
    if nome:
        ob.name = nome
    return ob


# =====================================================================
# 6 — IL SISTEMA NERVOSO PERIFERICO
# =====================================================================

def costruisci_snp():
    coll = collezione("SNP")
    fatti = {}
    # nel sito la sagoma è alta 10 e guarda +z; qui è in piedi lungo +z
    # e guarda -y, come il resto della scena
    corpo = [
        ellissoide("Snp_Testa", (0, 0, 4.32), (0.53, 0.57, 0.62), coll, 36, 18),
        tubo("Snp_Collo", [(0, 0, 3.40), (0, 0, 3.84)], 0.26, coll),
        ellissoide("Snp_Torace", (0, 0, 2.30), (0.78, 0.48, 1.05), coll, 36, 18),
        ellissoide("Snp_Bacino", (0, 0, 0.90), (0.62, 0.41, 0.72), coll, 32, 16),
        tubo("Snp_BraccioD", [(0.72, 0, 2.85), (1.30, -0.14, 1.15), (1.30, -0.16, 0.42)], 0.20, coll),
        tubo("Snp_BraccioS", [(-0.72, 0, 2.85), (-1.30, -0.14, 1.15), (-1.30, -0.16, 0.42)], 0.20, coll),
        tubo("Snp_GambaD", [(0.34, 0, 0.45), (0.40, -0.04, -1.9), (0.38, -0.18, -2.9)], 0.26, coll),
        tubo("Snp_GambaS", [(-0.34, 0, 0.45), (-0.40, -0.04, -1.9), (-0.38, -0.18, -2.9)], 0.26, coll),
    ]
    fatti["Snp_Sagoma"] = unisci(corpo, "Snp_Sagoma")

    fatti["Snp_Midollo"] = unisci([
        tubo("Snp_M0", [(0, 0.14, 3.62), (0, 0.18, 1.60), (0, 0.10, -0.30), (0, 0.08, -1.40), (0, 0.06, -2.20)], 0.108, coll, raggio_fine=0.055),
        tubo("Snp_M1", [(0.05, 0.10, -0.28), (0.07, 0.02, -1.20), (0.06, -0.04, -2.10)], 0.030, coll),
        tubo("Snp_M2", [(-0.05, 0.10, -0.28), (-0.07, 0.02, -1.20), (-0.06, -0.04, -2.10)], 0.030, coll),
    ], "Snp_Midollo")

    def coppia(nome, costruisci_destra):
        d = unisci(costruisci_destra(), nome + "_R")
        s = specchia_x(d, nome + "_L")
        metti_in(s, coll)
        fatti[nome + "_R"] = d
        fatti[nome + "_L"] = s

    coppia("Snp_Radici", lambda: [
        tubo("r0", [(0.07, 0.18, 1.68), (0.34, 0.42, 1.76), (0.86, 0.24, 1.66)], 0.034, coll),
        tubo("r1", [(0.07, 0.14, 1.50), (0.34, -0.06, 1.44), (0.86, 0.18, 1.58)], 0.034, coll)])

    coppia("Snp_Ganglio", lambda: [
        ellissoide("g0", (0.60, 0.44, 1.755), (0.082, 0.082, 0.082), coll, 24, 12),
        tubo("g1", [(0.60, 0.44, 1.755), (0.72, 0.78, 1.94)], 0.022, coll)])

    coppia("Snp_NerviSpinali", lambda: [
        tubo("n%d" % i, p, 0.027, coll) for i, p in enumerate([
            [(0.08, 0.14, 3.30), (0.45, 0.06, 3.22), (0.80, -0.02, 3.02)],
            [(0.08, 0.15, 2.94), (0.95, -0.04, 2.76), (1.20, -0.10, 2.30)],
            [(0.08, 0.16, 2.58), (1.05, -0.08, 2.20), (1.32, -0.14, 1.55)],
            [(0.08, 0.17, 2.22), (1.12, -0.10, 1.62), (1.32, -0.16, 0.85)],
            [(0.08, 0.18, 1.86), (0.55, -0.06, 1.78), (0.92, -0.22, 1.42)],
            [(0.08, 0.18, 1.24), (0.52, -0.10, 1.14), (0.80, -0.26, 0.80)],
            [(0.06, 0.14, 0.30), (0.44, -0.06, -1.00), (0.42, -0.10, -1.95)],
            [(0.05, 0.12, 0.02), (0.42, -0.08, -1.60), (0.40, -0.20, -2.75)]])])

    coppia("Snp_NerviCranici", lambda: [
        tubo("c%d" % i, p, 0.021, coll) for i, p in enumerate([
            [(0.06, 0.12, 3.72), (0.22, -0.10, 4.05), (0.30, -0.42, 4.30)],
            [(0.06, 0.12, 3.72), (0.30, 0.05, 4.00), (0.48, -0.16, 4.22)],
            [(0.05, 0.13, 3.66), (0.34, 0.22, 3.70), (0.52, 0.30, 3.86)]])])

    def catena(nome, lato):
        x = 0.36 * lato
        pezzi = [tubo(nome + "_t", [(x, 0.30, 3.05), (x, 0.32, 1.70), (x * 0.9, 0.26, 0.25)], 0.028, coll)]
        for i in range(8):
            pezzi.append(ellissoide(nome + "_g%d" % i, (x, 0.31, 2.90 - 0.375 * i),
                                    (0.05, 0.05, 0.068), coll, 20, 10))
        for j, p in enumerate([
                [(x, 0.31, 2.90), (x * 0.9, -0.05, 3.60), (x * 0.8, -0.44, 4.24)],
                [(x, 0.31, 2.53), (x * 0.8, -0.05, 2.45), (x * 0.6, -0.26, 2.32)],
                [(x, 0.31, 2.15), (x * 0.3, -0.02, 2.10), (-x * 0.4, -0.28, 2.02)],
                [(x, 0.31, 1.40), (x * 0.8, 0.02, 1.05), (x * 0.45, -0.26, 0.68)],
                [(x, 0.31, 1.78), (x * 1.9, 0.05, 1.70), (x * 3.1, -0.10, 1.35)]]):
            pezzi.append(tubo(nome + "_r%d" % j, p, 0.018, coll))
        return pezzi

    fatti["Snp_Simpatico"] = unisci(catena("Snp_Sim", +1), "Snp_Simpatico")
    fatti["Snp_Parasimpatico"] = unisci(catena("Snp_Par", -1), "Snp_Parasimpatico")

    fatti["Snp_Enterico"] = unisci(
        [tubo("e0", [(0, -0.18, 2.35), (0, -0.22, 1.60)], 0.035, coll),
         tubo("e1", [(0, -0.22, 1.58), (0.30, -0.26, 1.32), (-0.34, -0.26, 0.92),
                     (0.18, -0.30, 0.52), (0.30, -0.22, 0.98)], 0.048, coll)],
        "Snp_Enterico")

    fatti["Snp_Bersagli"] = unisci([
        ellissoide("b0", (0.30, -0.46, 4.28), (0.075, 0.052, 0.060), coll, 20, 10),
        ellissoide("b1", (-0.30, -0.46, 4.28), (0.075, 0.052, 0.060), coll, 20, 10),
        tubo("b2", [(0, -0.20, 2.70), (0, -0.24, 2.30), (0.30, -0.20, 1.94)], 0.032, coll),
        tubo("b3", [(0, -0.24, 2.30), (-0.30, -0.20, 1.94)], 0.032, coll),
        ellissoide("b4", (-0.14, -0.30, 2.06), (0.155, 0.132, 0.178), coll, 24, 12),
        ellissoide("b5", (0.02, -0.28, 0.78), (0.30, 0.17, 0.23), coll, 28, 14),
        tubo("b6", [(0.80, -0.12, 2.70), (1.32, -0.18, 1.20)], 0.022, coll),
        tubo("b7", [(-0.80, -0.12, 2.70), (-1.32, -0.18, 1.20)], 0.022, coll),
    ], "Snp_Bersagli")

    fatti["Snp_Arco"] = unisci([
        tubo("a0", [(1.30, -0.20, 0.46), (0.95, 0.40, 1.45), (0.62, 0.44, 1.74)], 0.028, coll),
        tubo("a1", [(0.62, 0.44, 1.74), (0.14, 0.20, 1.66)], 0.024, coll),
        ellissoide("a2", (0.05, 0.16, 1.62), (0.048, 0.048, 0.048), coll, 18, 9),
        ellissoide("a3", (0.05, 0.13, 1.46), (0.056, 0.056, 0.056), coll, 18, 9),
        tubo("a4", [(0.05, 0.13, 1.46), (0.95, -0.14, 1.10), (1.26, -0.22, 0.56)], 0.028, coll),
        ellissoide("a5", (1.31, -0.20, 0.44), (0.075, 0.060, 0.112), coll, 20, 10),
    ], "Snp_Arco")

    return coll, fatti


# =====================================================================
# 7 — materiali (viewport live) e inquadratura
# =====================================================================

def hex_rgb(esa):
    esa = esa.lstrip("#")
    return tuple(int(esa[i:i + 2], 16) / 255.0 for i in (0, 2, 4))


def leggi_tinte():
    with open(DATI, encoding="utf-8") as f:
        testo = f.read()
    blocco = re.search(r"tinte:\s*\{(.*?)\n\}", testo, re.S)
    tinte = dict(re.findall(r'(\w+):"([#A-Fa-f0-9]+)"', blocco.group(1))) if blocco else {}
    mesh_tinta, mesh_op = {}, {}
    for m in re.finditer(r'mesh:"([A-Za-z0-9_]+)"(.*?)(?=\n\{ id:|\Z)', testo, re.S):
        tm = re.search(r'tinta:"(\w+)"', m.group(2))
        om = re.search(r"opacita:([0-9.]+)", m.group(2))
        if tm:
            mesh_tinta[m.group(1)] = tm.group(1)
        if om:
            mesh_op[m.group(1)] = float(om.group(1))
    return tinte, mesh_tinta, mesh_op


def materiale(nome, esa, opacita=1.0):
    chiave = "%s_%.2f" % (nome, opacita)
    if chiave in bpy.data.materials:
        return bpy.data.materials[chiave]
    mat = bpy.data.materials.new(chiave)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    rgb = hex_rgb(esa)
    if bsdf:
        bsdf.inputs["Base Color"].default_value = (*rgb, 1)
        bsdf.inputs["Roughness"].default_value = 0.68
        if "Specular IOR Level" in bsdf.inputs:
            bsdf.inputs["Specular IOR Level"].default_value = 0.22
        if opacita < 1:
            bsdf.inputs["Alpha"].default_value = opacita
            mat.blend_method = "BLEND"
    mat.diffuse_color = (*rgb, opacita)
    return mat


def tinta_di(nome, mesh_tinta):
    base = re.sub(r"_(L|R)$", "", nome)
    if base in mesh_tinta:
        return mesh_tinta[base]
    candidati = [m for m in mesh_tinta if nome.startswith(m)]
    return mesh_tinta[max(candidati, key=len)] if candidati else None


def colora(fatti):
    tinte, mesh_tinta, mesh_op = leggi_tinte()
    for nome, ob in fatti.items():
        if ob is None or ob.type != "MESH":
            continue
        chiave = tinta_di(nome, mesh_tinta)
        esa = tinte.get(chiave, "#B0A090")
        op = mesh_op.get(re.sub(r"_(L|R)$", "", nome), 1.0)
        if chiave:
            op = mesh_op.get(max((m for m in mesh_op if nome.startswith(m)),
                                 key=len, default=re.sub(r"_(L|R)$", "", nome)), op)
        mat = materiale(chiave or "neutro", esa, op)
        ob.data.materials.clear()
        ob.data.materials.append(mat)


def colora_studio(fatti):
    """Corteccia beige; liquor, nuclei e tronco restano leggibili in sezione."""
    for nome, ob in fatti.items():
        if ob is None or ob.type != "MESH":
            continue
        op = 1.0
        if "Ventricol" in nome:
            esa, op = "#2EB0C4", 0.55
        elif "SostanzaBianca" in nome:
            esa = "#E8DFD0"
        elif "Meningi" in nome:
            esa, op = "#EDE6D6", 0.12
        elif "Reticolare" in nome:
            esa = "#A88870"
        elif "Nervi" in nome:
            esa = "#E2D08A"
        elif "Area" in nome:
            esa = "#C9865A"
        elif any(s in nome for s in ("Tronco", "Cervelletto", "Midollo", "Ipofisi")):
            esa = "#A88870"
        elif "Ipotalamo" in nome:
            esa = "#B06A8F"
        elif "Talamo" in nome:
            esa = "#8D7BB0"
        elif any(s in nome for s in ("Caudato", "Putamen", "Pallido")):
            esa = "#7EA05F"
        elif any(s in nome for s in ("Amigdala", "Ippocampo")):
            esa = "#5F8FA8"
        elif "CorpoCalloso" in nome:
            esa = "#EDE6D6"
        else:
            esa = "#C4B49A"
        mat = materiale(nome + "_studio", esa, op)
        ob.data.materials.clear()
        ob.data.materials.append(mat)


def luci_studio():
    if "Atl_Key" not in bpy.data.objects:
        bpy.ops.object.light_add(type="SUN", location=(4, -6, 7))
        k = bpy.context.active_object
        k.name = "Atl_Key"
        k.data.energy = 2.4
        k.rotation_euler = (math.radians(42), math.radians(12), math.radians(18))
    if "Atl_Fill" not in bpy.data.objects:
        bpy.ops.object.light_add(type="AREA", location=(-5, 2, 3))
        f = bpy.context.active_object
        f.name = "Atl_Fill"
        f.data.energy = 80
        f.data.size = 4
        f.rotation_euler = (math.radians(70), 0, math.radians(-50))
    world = bpy.context.scene.world or bpy.data.worlds.new("Atl_World")
    bpy.context.scene.world = world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    if bg:
        bg.inputs[0].default_value = (0.86, 0.87, 0.84, 1)
        bg.inputs[1].default_value = 0.55


def _matrice_sguardo(centro, direzione, dist, su=Vector((0, 0, 1))):
    """Matrice mondo di una camera che guarda il centro da `direzione`."""
    direzione = Vector(direzione).normalized()
    verso = -direzione
    destra = verso.cross(su)
    if destra.length < 1e-6:
        destra = Vector((0, 1, 0))
    destra.normalize()
    su2 = destra.cross(verso).normalized()
    mat = Matrix((destra, su2, -verso)).transposed().to_4x4()
    mat.translation = centro + direzione * dist
    return mat


def inquadra(coll_nome, vista="laterale"):
    """Mette viewport e Camera di scena su una vista didattica.

    Blender: +x destra, -y rostrale, +z dorsale. La laterale è la RIGHT
    di Blender (da +X); la frontale è la BACK (da -Y, il polo del naso).
    """
    da = {
        "laterale":  (1.0,  0.18, 0.12),
        "dorsale":   (0.04, 0.02, 1.0),
        "ventrale":  (0.04, 0.08, -1.0),
        "frontale":  (0.06, -1.0, 0.14),
        "mediale":   (-1.0, 0.18, 0.12),
    }[vista]
    asse = {
        "laterale": "RIGHT", "dorsale": "TOP", "ventrale": "BOTTOM",
        "frontale": "BACK", "mediale": "LEFT",
    }[vista]
    loc = Vector((0, 0, 0))
    dist = 4.2
    if coll_nome in bpy.data.collections:
        pts = [ob.matrix_world @ Vector(p)
               for ob in bpy.data.collections[coll_nome].objects
               if ob.type == "MESH" and not ob.hide_get()
               for p in ob.bound_box]
        if pts:
            mn = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
            mx = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
            loc = (mn + mx) * 0.5
            dist = max((mx - mn).length * 1.08, 2.4)

    cam = bpy.data.objects.get("Camera")
    if cam is None:
        bpy.ops.object.camera_add()
        cam = bpy.context.active_object
        cam.name = "Camera"
    cam.matrix_world = _matrice_sguardo(loc, da, dist)
    bpy.context.scene.camera = cam

    for win in bpy.context.window_manager.windows:
        for area in win.screen.areas:
            if area.type != "VIEW_3D":
                continue
            space = area.spaces.active
            space.shading.type = "MATERIAL"
            space.clip_start = 0.02
            space.clip_end = 200
            r3d = space.region_3d
            r3d.view_perspective = "PERSP"
            r3d.view_location = loc
            r3d.view_distance = dist
            r3d.view_rotation = cam.matrix_world.to_quaternion()
            for region in area.regions:
                if region.type != "WINDOW":
                    continue
                try:
                    with bpy.context.temp_override(window=win, area=area, region=region):
                        bpy.ops.view3d.view_axis(type=asse, align_active=False)
                        if r3d.view_perspective != "PERSP":
                            bpy.ops.view3d.view_persportho()
                        r3d.view_location = loc
                        r3d.view_distance = dist
                except Exception:
                    pass
    return {"collezione": coll_nome, "vista": vista, "centro": list(loc), "distanza": dist}


def mostra(coll_nome):
    for c in bpy.context.scene.collection.children:
        nascondi = c.name in ("Encefalo", "Neurone", "SNP") and c.name != coll_nome
        c.hide_viewport = nascondi
        c.hide_render = nascondi
    return inquadra(coll_nome)


# =====================================================================
# 8 — esportazione
# =====================================================================

def esporta(coll, percorso):
    for c in bpy.context.scene.collection.children:
        c.hide_viewport = c.hide_render = (c is not coll)
    bpy.ops.object.select_all(action="DESELECT")
    for ob in coll.objects:
        ob.select_set(True)
    os.makedirs(os.path.dirname(percorso), exist_ok=True)
    for ob in coll.objects:
        if ob.data:
            ob.data.name = ob.name
    opzioni = dict(filepath=percorso, export_format="GLB", use_selection=True,
                   export_apply=True, export_yup=True, export_materials="NONE",
                   export_normals=True, export_texcoords=False, export_cameras=False,
                   export_lights=False, export_extras=False)
    try:
        bpy.ops.export_scene.gltf(**opzioni)
    except TypeError:
        for chiave in ("export_extras", "export_texcoords", "export_materials",
                       "export_cameras", "export_lights", "export_normals"):
            opzioni.pop(chiave, None)
        bpy.ops.export_scene.gltf(**opzioni)
    for c in bpy.context.scene.collection.children:
        c.hide_viewport = c.hide_render = False
    return os.path.getsize(percorso)


def costruisci_live(tutto=True, esporta_glb=True):
    """Costruisce la scena, la colora e la inquadra nel viewport aperto."""
    pulisci()
    ok = True

    print("Encefalo")
    coll, fatti = costruisci_encefalo()
    colora_studio(fatti)
    ok &= verifica("encefalo", set(fatti))
    if esporta_glb:
        peso = esporta(coll, os.path.join(USCITA, "encefalo.glb"))
        print("  · modelli/encefalo.glb — %d KB" % (peso // 1024))
    for ob in coll.objects:
        if "Area" in ob.name:
            ob.hide_set(True)
            ob.hide_render = True

    if tutto:
        print("Neurone")
        coll, fatti = costruisci_neurone()
        colora(fatti)
        if esporta_glb:
            peso = esporta(coll, os.path.join(USCITA, "neurone.glb"))
            print("  · modelli/neurone.glb — %d KB" % (peso // 1024))

        print("SNP")
        coll, fatti = costruisci_snp()
        colora(fatti)
        ok &= verifica("snp", set(fatti))
        if esporta_glb:
            peso = esporta(coll, os.path.join(USCITA, "snp.glb"))
            print("  · modelli/snp.glb — %d KB" % (peso // 1024))

    luci_studio()
    info = mostra("Encefalo")
    print("  · viewport: %s %s" % (info["collezione"], info["vista"]))
    print("fatto." if ok else "fatto, con avvisi.")
    return ok


def main():
    argomenti = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    tutto = "--tutto" in argomenti or "--live" in argomenti
    salva_blend = "--salva-blend" in argomenti
    live = "--live" in argomenti or not argomenti

    ok = costruisci_live(tutto=tutto or live, esporta_glb="--no-export" not in argomenti)

    if salva_blend:
        b = os.path.join(USCITA, "atlante.blend")
        bpy.ops.wm.save_as_mainfile(filepath=b)
        print("  · %s" % b)

    if not ok:
        sys.exit(1)


if __name__ == "__main__":
    main()
