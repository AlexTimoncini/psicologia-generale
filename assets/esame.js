/* Domande d'esame ricorrenti: le domande trovate negli appelli passati
   e la risposta modello per ciascuna. Dati in data/esame.js. */

function vistaEsame(vai) {
  const E = PGE.esame;
  const n = E.moduli.reduce((a, m) => a + m.domande.length, 0);
  const trovate = E.moduli.reduce((a, m) => a + m.domande.filter(d => d.trovata).length, 0);
  main.innerHTML = `
    <p class="occhiello">Allenamento</p>
    <h1>Domande d'esame</h1>
    <p class="sommario">${E.intro}</p>
    <div class="griglia tre" style="margin-bottom:1.6rem">
      <div class="dato"><span class="dato-cifra">${n}</span><span class="dato-eti">domande, ${trovate} uscite negli anni passati</span></div>
      <div class="dato"><span class="dato-cifra">3</span><span class="dato-eti">domande aperte allo scritto, in 90 minuti</span></div>
      <div class="dato"><span class="dato-cifra">20'</span><span class="dato-eti">il colloquio orale</span></div>
    </div>
    <div class="azioni" style="margin-bottom:1.5rem">
      <button class="bottone vuoto" id="esApri">Apri tutte le risposte</button>
      <button class="bottone vuoto" id="esChiudi">Chiudi tutte</button>
    </div>
    ${E.moduli.map(m => `
      <h2>${m.titolo}</h2>
      ${m.domande.map(d => `
        <details class="es-domanda" id="es-${d.id}">
          <summary>
            <span class="es-eti">${d.trovata ? 'uscita' : 'attesa'}</span>
            <span class="es-titolo">${d.titolo}</span>
          </summary>
          <p class="es-testo">${d.domanda}</p>
          <div class="prosa es-risposta">${md(d.risposta)}</div>
        </details>`).join('')}`).join('')}
    <h2>Da dove vengono</h2>
    <p style="color:var(--grafite);max-width:62ch">Le domande segnate <em>uscita</em> ricorrono, con questa formulazione, nelle raccolte degli studenti Unimarconi; quelle segnate <em>attesa</em> seguono lo stesso stile sulle parti del programma attuale che le raccolte non coprono. La modalità (tre domande aperte in 90 minuti, sintesi e pertinenza premiate) è quella della scheda dell'insegnamento.</p>
    <ul style="color:var(--grafite);font-size:.9rem">${E.fonti.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ul>`;
  $('#esApri').onclick = () => $$('.es-domanda').forEach(d => d.open = true);
  $('#esChiudi').onclick = () => $$('.es-domanda').forEach(d => d.open = false);
  if (vai) { const el = $('#es-' + vai); if (el) { el.open = true; setTimeout(() => el.scrollIntoView({ block: 'start' }), 0); } }
}
