/* Tutor vocale: una conversazione d'esame a voce, pensata per il telefono.
   Il tutor fa una domanda dell'albero, ascolta (riconoscimento vocale del
   browser), segue i punti della traccia `deve`, interrompe se sente un errore
   (i distrattori del quiz), suggerisce ciò che manca, rispiega e fa ripetere.
   Due «cervelli»:
   - locale, gratuito e offline: regole sui punti della traccia;
   - Claude, con la chiave API dell'utente salvata solo sul telefono, per
     una conversazione vera, sempre vincolata al materiale della lezione.
   Voce: la sintesi vocale del dispositivo (voci italiane installate). */

const TU_STOP = new Set('il lo la i gli le un uno una di a da in con su per tra fra e o ma che chi cui non si è sono era del della dei delle dello degli al alla ai alle allo agli dal dalla nel nella nei nelle sul sulla come anche più molto quindi cioè poi ecco allora questo questa questi queste quello quella quelli quelle suo sua suoi sue loro nostro vostro mio tuo ha hanno essere avere viene vengono fa fanno può possono cosa dove quando perché quale quali tutto tutti ogni ne ci vi se anzi già ancora sempre mai solo cioe'.split(' '));
function tuNorm(t) { return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !TU_STOP.has(w)); }
function tuRadice(w) { return w.length > 5 ? w.slice(0, w.length - 2) : w.length > 4 ? w.slice(0, 4) : w; }
function tuCopertura(testo, frase) {
  const detti = new Set(tuNorm(testo).map(tuRadice));
  const attesi = [...new Set(tuNorm(frase).map(tuRadice))];
  if (!attesi.length) return 0;
  return attesi.filter(a => detti.has(a)).length / attesi.length;
}

function tuFoglie(g) {
  const V = alVoti();
  return alAlbero().foglie.filter(f => f.deve && f.deve.length && (g === 'tutti' || plGruppoId(f.id) === g))
    .map(f => ({ f, p: V[f.id] ? V[f.id].p : -1 }));
}
function tuProssima(g) {
  const pool = tuFoglie(g); if (!pool.length) return null;
  const fatte = new Set(MEM.get('tutor.fatte', []));
  const cand = pool.filter(x => !fatte.has(x.f.id));
  const lista = (cand.length ? cand : pool).sort((a, b) => a.p - b.p);
  return plCaso(lista.slice(0, Math.max(3, Math.ceil(lista.length / 4)))).f;
}
function tuDistrattori(f) {
  const lez = f.fonte && f.fonte.cap;
  const chiavi = new Set(tuNorm(f.domanda + ' ' + f.titolo).map(tuRadice));
  return PGE.quiz.filter(q => (!lez || q.c === lez) && tuNorm(q.q).map(tuRadice).some(w => chiavi.has(w)))
    .flatMap(q => q.o.slice(1).map(o => ({ testo: o, giusta: q.o[0], sp: q.sp })));
}

/* ---- voce ---- */
const TU_VOCE = {
  voci() { return ('speechSynthesis' in window) ? speechSynthesis.getVoices().filter(v => /^it/i.test(v.lang)) : []; },
  parla(testo, fine) {
    if (!('speechSynthesis' in window)) { fine && fine(); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(testo.replace(/<[^>]+>/g, ''));
    const nome = MEM.get('tutor.voce', ''), v = this.voci().find(x => x.name === nome) || this.voci()[0];
    if (v) u.voice = v; u.lang = 'it-IT'; u.rate = MEM.get('tutor.velocita', 1);
    u.onend = () => fine && fine(); u.onerror = () => fine && fine();
    speechSynthesis.speak(u);
  },
  zitto() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
};

/* ---- cervello locale ---- */
function tuCervelloLocale(f) {
  const stato = { coperti: new Set(), suggeriti: {}, fase: 'prima', distrattori: tuDistrattori(f), errori: 0 };
  const mancanti = () => f.deve.map((d, i) => i).filter(i => !stato.coperti.has(i));
  return {
    inizio() { return { parla: `${f.domanda}`, attendi: true }; },
    /* dopo ogni frase finale detta dall'utente */
    ascolta(testo, tutto) {
      /* errore: un distrattore detto quasi per intero */
      for (const d of stato.distrattori) {
        if (tuCopertura(testo, d.testo) >= 0.6 && tuNorm(d.testo).length >= 3 && tuCopertura(testo, d.giusta) < 0.6) {
          stato.errori++;
          return { parla: `Fermo, non è così. ${d.sp.replace(/<[^>]+>/g, '')} Vai avanti.`, attendi: true, errore: true };
        }
      }
      f.deve.forEach((d, i) => { if (tuCopertura(tutto, d) >= 0.5) stato.coperti.add(i); });
      return { attendi: true, coperti: [...stato.coperti] };
    },
    /* dopo una pausa lunga */
    pausa(tutto) {
      const m = mancanti();
      if (!m.length) {
        if (stato.fase === 'prima') { stato.fase = 'ripeti'; stato.coperti.clear(); stato.tuttoPrima = tutto; return { parla: 'Bene, c\'è tutto. Ora ripetimi la risposta da capo, in ordine, senza aiuti.', attendi: true, azzera: true }; }
        return this.fine(tutto);
      }
      if (stato.fase === 'ripeti') return this.fine(tutto);
      const i = m[0], liv = stato.suggeriti[i] = (stato.suggeriti[i] || 0) + 1;
      const spunto = tuNorm(f.deve[i])[0] || f.deve[i].split(/\s+/)[0];
      if (liv === 1) return { parla: `Manca ancora un punto: c'entra «${spunto}». Prova.`, attendi: true };
      stato.coperti.add(i);
      return { parla: `Avresti dovuto dire: ${f.deve[i]}. Ripetilo e poi continua.`, attendi: true, rivelato: i };
    },
    spiega() { return { parla: `${f.titolo}. ${f.deve.join('. ')}.`, attendi: true }; },
    fine(tutto) {
      const c = f.deve.filter(d => tuCopertura(tutto, d) >= 0.5).length;
      const voto = Math.max(10, Math.round(100 * c / f.deve.length) - stato.errori * 10);
      return { parla: `${c} punti su ${f.deve.length}${stato.errori ? `, con ${stato.errori} error${stato.errori === 1 ? 'e' : 'i'}` : ''}. ${voto >= 70 ? 'Buono.' : 'Da rivedere.'} Prossima domanda?`, fine: true, voto };
    }
  };
}

/* ---- cervello Claude (chiave dell'utente, salvata solo sul dispositivo) ---- */
function tuCervelloClaude(f, capitolo) {
  const chiave = MEM.get('tutor.chiave', ''), modello = MEM.get('tutor.modello', 'claude-haiku-4-5-20251001');
  const sistema = `Sei il tutor personale di uno studente di Psicologia Generale (Unimarconi) che si prepara all'esame orale. Parlate in italiano, a voce: frasi brevi, niente elenchi, niente markdown, tono diretto e cordiale.
Argomento di oggi: «${f.titolo}». Domanda: «${f.domanda}».
Punti che la risposta DEVE contenere (presi dalla lezione, sono l'unica fonte ammessa):
${f.deve.map(d => '- ' + d).join('\n')}
${capitolo ? 'Testo del capitolo di riferimento:\n' + capitolo.slice(0, 6000) : ''}
Regole: 1) Se lo studente dice una cosa sbagliata, interrompilo subito, digli che cosa avrebbe dovuto dire e perché, poi fallo continuare. 2) Se gli manca un punto, prima dai un indizio, poi se serve la risposta, e fagliela ripetere. 3) Quando ha coperto tutto, fagli ripetere l'intera risposta da capo, poi dai un voto da 1 a 100 e passa alla domanda seguente dicendo "PROSSIMA". 4) Se chiede una spiegazione, rispiega con parole tue ma solo con i contenuti dei punti e del capitolo. 5) Non aggiungere nozioni che non siano nei punti o nel capitolo. 6) Ogni tua battuta deve stare in due o tre frasi.
Rispondi SOLO con un JSON: {"parla": "ciò che dici a voce, o stringa vuota se preferisci restare in ascolto", "voto": numero o null, "fine": true/false}. Quando lo studente fa una pausa ricevi il messaggio [pausa]: decidi se intervenire.`;
  const storia = [];
  const chiama = async (utente) => {
    storia.push({ role: 'user', content: utente });
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': chiave, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: modello, max_tokens: 400, system: sistema, messages: storia })
    });
    if (!r.ok) throw new Error('API ' + r.status + ': ' + (await r.text()).slice(0, 200));
    const j = await r.json(), testo = (j.content || []).map(c => c.text || '').join('');
    storia.push({ role: 'assistant', content: testo });
    try { return JSON.parse(testo.match(/\{[\s\S]*\}/)[0]); } catch (e) { return { parla: testo, fine: false }; }
  };
  const esito = (j) => ({ parla: j.parla || '', attendi: !j.fine, fine: !!j.fine, voto: j.voto });
  return {
    async inizio() { return esito(await chiama('[inizio] Fai la domanda allo studente.')); },
    async ascolta(testo) { return esito(await chiama(testo)); },
    async pausa() { return esito(await chiama('[pausa]')); },
    async spiega() { return esito(await chiama('[lo studente chiede: spiegamelo tu]')); },
    async fine() { return esito(await chiama('[lo studente vuole chiudere: dai il voto finale]')); }
  };
}

/* ---- vista ---- */
function vistaTutor() {
  const g = MEM.get('tutor.gruppo', 'tutti');
  const modo = MEM.get('tutor.modo', 'locale');
  const Ric = window.SpeechRecognition || window.webkitSpeechRecognition;
  main.classList.add('pl-piena');
  main.innerHTML = `
    <div class="pl-barra">
      <div class="filtri">${PL_GRUPPI.map(([k, e]) => `<button class="chip${g === k ? ' attivo' : ''}" data-g="${k}">${e}</button>`).join('')}</div>
      <button class="chip tu-imp" id="tuImp" title="Impostazioni">⚙︎</button>
    </div>
    <div class="tu-chat" id="tuChat">
      <div class="tu-msg tutor"><p>Sono il tuo tutor. Ti faccio una domanda, tu rispondi a voce come all'orale: ti fermo se sbagli, ti suggerisco ciò che manca e ti faccio ripetere. Di' <em>«spiegamelo»</em> per farmi rispiegare, <em>«prossima»</em> per cambiare domanda, <em>«basta»</em> per il voto.</p>
      ${!Ric ? '<p class="tu-avviso">Questo browser non ha il riconoscimento vocale: usa Chrome su Android o Safari su iPhone. Puoi comunque scrivere le risposte.</p>' : ''}
      <p class="tu-nota">Cervello: <b>${modo === 'claude' ? 'Claude (la tua chiave)' : 'locale, gratuito'}</b> · ${TU_VOCE.voci().length} voci italiane sul dispositivo</p></div>
    </div>
    <div class="tu-punti" id="tuPunti"></div>
    <form class="tu-comandi" id="tuForm">
      <button type="button" class="tu-mic" id="tuMic" ${Ric ? '' : 'disabled'} aria-label="Parla"><span></span></button>
      <input id="tuTesto" type="text" placeholder="…oppure scrivi qui" autocomplete="off">
      <button type="submit" class="pl-btn" id="tuInvia">Invia</button>
      <button type="button" class="pl-btn vuoto" id="tuAvvia">Nuova domanda</button>
    </form>
    <div class="tu-pannello" id="tuPannello" hidden>
      <h3>Impostazioni</h3>
      <label>Voce <select id="tuVoce">${TU_VOCE.voci().map(v => `<option${v.name === MEM.get('tutor.voce', '') ? ' selected' : ''}>${v.name}</option>`).join('') || '<option>predefinita</option>'}</select></label>
      <label>Velocità <input id="tuVel" type="range" min="0.7" max="1.3" step="0.05" value="${MEM.get('tutor.velocita', 1)}"></label>
      <label>Cervello <select id="tuModo"><option value="locale"${modo === 'locale' ? ' selected' : ''}>Locale (gratis, offline)</option><option value="claude"${modo === 'claude' ? ' selected' : ''}>Claude con la mia chiave API</option></select></label>
      <label>Chiave API Anthropic <input id="tuChiave" type="password" value="${esc(MEM.get('tutor.chiave', ''))}" placeholder="sk-ant-…"></label>
      <label>Modello <select id="tuModello">${[['claude-haiku-4-5-20251001', 'Haiku 4.5 (veloce, economico)'], ['claude-sonnet-5', 'Sonnet 5'], ['claude-opus-5', 'Opus 5']].map(([v, e]) => `<option value="${v}"${MEM.get('tutor.modello', 'claude-haiku-4-5-20251001') === v ? ' selected' : ''}>${e}</option>`).join('')}</select></label>
      <p class="tu-nota">La chiave resta in questo browser (localStorage) e va direttamente ad Anthropic: il sito non ha un server. Ogni battuta costa frazioni di centesimo con Haiku.</p>
      <button type="button" class="pl-btn" id="tuProva">Prova la voce</button>
    </div>`;

  const chat = $('#tuChat'), punti = $('#tuPunti'), mic = $('#tuMic'), campo = $('#tuTesto');
  const bolla = (chi, testo) => { chat.insertAdjacentHTML('beforeend', `<div class="tu-msg ${chi}"><p>${esc(testo)}</p></div>`); chat.scrollTop = chat.scrollHeight; return chat.lastElementChild; };

  let foglia = null, cervello = null, ric = null, ascolto = false, tutto = '', timer = null, occupato = false, bollaUtente = null, capitoloTesto = '', micNegato = false;
  const armaPausa = (ms) => { clearTimeout(timer); timer = setTimeout(() => { if (foglia && !occupato && !speechSynthesis.speaking) conCervello(() => cervello.pausa(tutto)); }, ms); };
  const mostraPunti = (coperti = []) => { if (!foglia) { punti.innerHTML = ''; return; } punti.innerHTML = foglia.deve.map((d, i) => `<span class="tu-punto${coperti.includes(i) ? ' ok' : ''}">${i + 1}</span>`).join('') + `<a class="pl-link" href="#/albero/${encodeURIComponent(foglia.id)}">albero →</a>`; };

  const parla = (t, poi) => { clearTimeout(timer); fermaAscolto(); bolla('tutor', t); TU_VOCE.parla(t, () => { poi && poi(); }); };
  const applica = (r, dopo) => {
    if (!r) return;
    if (r.coperti) mostraPunti(r.coperti);
    if (r.azzera) { tutto = ''; }
    if (r.fine) {
      parla(r.parla || 'Fine.', null);
      if (r.voto != null) { const st = MEM.get('tutor.storico', []); st.push({ id: foglia.id, voto: r.voto, d: new Date().toISOString().slice(0, 10) }); MEM.set('tutor.storico', st); const f = MEM.get('tutor.fatte', []); f.push(foglia.id); MEM.set('tutor.fatte', f); }
      foglia = null; cervello = null; return;
    }
    if (r.parla) parla(r.parla, () => { if (r.attendi) { avviaAscolto(); armaPausa(9000); } });
    else if (r.attendi) { avviaAscolto(); armaPausa(6000); }
    dopo && dopo();
  };
  const conCervello = async (fn) => { if (occupato || !cervello) return; occupato = true; try { applica(await fn()); } catch (e) { bolla('tutor', 'Errore: ' + e.message); } occupato = false; };

  const nuova = async () => {
    TU_VOCE.zitto(); fermaAscolto(); tutto = '';
    foglia = tuProssima(MEM.get('tutor.gruppo', 'tutti'));
    if (!foglia) { bolla('tutor', 'Nessuna domanda in questo gruppo.'); return; }
    chat.insertAdjacentHTML('beforeend', `<p class="tu-sep">${esc(foglia.titolo)}</p>`);
    if (MEM.get('tutor.modo', 'locale') === 'claude' && MEM.get('tutor.chiave', '')) {
      capitoloTesto = '';
      try { capitoloTesto = await leggiContenuto(`contenuti/manuale/${foglia.fonte.cap}.md`, 'manuale/' + foglia.fonte.cap); } catch (e) {}
      cervello = tuCervelloClaude(foglia, capitoloTesto);
    } else cervello = tuCervelloLocale(foglia);
    mostraPunti([]);
    conCervello(() => cervello.inizio());
  };

  const comando = (t) => {
    const n = t.toLowerCase();
    if (/\b(prossim|avanti|cambia domanda|salta)/.test(n)) { nuova(); return true; }
    if (/\b(spiegam|rispiegam|spiegal)/.test(n)) { conCervello(() => cervello.spiega()); return true; }
    if (/\b(basta|ho finito|fine|dammi il voto|chiudi)/.test(n)) { conCervello(() => cervello.fine(tutto)); return true; }
    if (/\b(ripeti la domanda|qual era la domanda)/.test(n)) { parla(foglia.domanda, avviaAscolto); return true; }
    return false;
  };
  const detto = (t) => {
    t = t.trim(); if (!t) return;
    if (!foglia) { if (!comando(t)) { bolla('tu', t); nuova(); } return; }
    bolla('tu', t); bollaUtente = null;
    if (comando(t)) return;
    tutto += ' ' + t;
    conCervello(() => cervello.ascolta(t, tutto));
    armaPausa(3500);
  };

  function avviaAscolto() {
    if (!Ric || ascolto || !foglia || micNegato) return;
    ric = new Ric(); ric.lang = 'it-IT'; ric.continuous = true; ric.interimResults = true;
    ric.onresult = e => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) { const r = e.results[i]; if (r.isFinal) detto(r[0].transcript); else interim += r[0].transcript; }
      if (interim) { if (!bollaUtente) bollaUtente = bolla('tu interim', interim); else bollaUtente.firstChild.textContent = interim; chat.scrollTop = chat.scrollHeight; clearTimeout(timer); }
    };
    ric.onend = () => { ascolto = false; mic.classList.remove('attivo'); if (foglia && !speechSynthesis.speaking && !occupato) setTimeout(() => { if (foglia && !ascolto) avviaAscolto(); }, 300); };
    ric.onerror = e => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { micNegato = true; fermaAscolto(); bolla('tutor', 'Il microfono non è disponibile qui: consenti l\'accesso dalle impostazioni del sito, oppure scrivi le risposte.'); } };
    try { ric.start(); ascolto = true; mic.classList.add('attivo'); } catch (e) {}
  }
  function fermaAscolto() { if (ric) { try { ric.onend = null; ric.stop(); } catch (e) {} } ascolto = false; mic.classList.remove('attivo'); if (bollaUtente) { bollaUtente.remove(); bollaUtente = null; } }

  mic.onclick = () => { micNegato = false; if (!foglia) { nuova(); return; } if (ascolto) fermaAscolto(); else { TU_VOCE.zitto(); avviaAscolto(); } };
  $('#tuForm').onsubmit = e => { e.preventDefault(); const t = campo.value; campo.value = ''; TU_VOCE.zitto(); detto(t); };
  $('#tuAvvia').onclick = nuova;
  $$('[data-g]', main).forEach(b => b.onclick = () => { MEM.set('tutor.gruppo', b.dataset.g); vistaTutor(); });
  $('#tuImp').onclick = () => { $('#tuPannello').hidden = !$('#tuPannello').hidden; };
  $('#tuVoce').onchange = e => MEM.set('tutor.voce', e.target.value);
  $('#tuVel').oninput = e => MEM.set('tutor.velocita', +e.target.value);
  $('#tuModo').onchange = e => { MEM.set('tutor.modo', e.target.value); };
  $('#tuChiave').onchange = e => MEM.set('tutor.chiave', e.target.value.trim());
  $('#tuModello').onchange = e => MEM.set('tutor.modello', e.target.value);
  $('#tuProva').onclick = () => TU_VOCE.parla('Ciao, sono il tuo tutor di Psicologia Generale. Quando vuoi, cominciamo.');
  if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = () => { const s = $('#tuVoce'); if (s && TU_VOCE.voci().length && s.options.length <= 1) s.innerHTML = TU_VOCE.voci().map(v => `<option>${v.name}</option>`).join(''); };
}
