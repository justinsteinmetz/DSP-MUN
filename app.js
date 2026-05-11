// ══════════════════════════════════════════
// DSP MUN — app.js
// Application logic only. All data lives in data.js.
// FIX #1: Removed duplicate const declarations that caused
//         SyntaxError when both files were loaded together.
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// STATE
// FIX #4: Removed dead `glossUnit` variable (was never read).
// ══════════════════════════════════════════
let selectedPreamVerb = null, selectedOperVerb = null;
const paperChecks = {};

// Resolution builder per-panel state — kept outside renderResBuilder
// so selectVerb doesn't reset category on re-render (FIX #10)
let preamCurrentCat = null;
let operCurrentCat = null;

// Flashcard state
let fcDeck = [], fcIndex = 0, fcCorrect = 0, fcWrong = 0, fcUnit = 'all';
let fcFlipped = false;
const fcResults = {};

// Quiz state — options stored in a map keyed by index so onclick
// never injects raw text into attribute strings (FIX #2)
let quizDeck = [], quizIndex = 0, quizScore = 0, quizAnswered = false;
let _quizOptions = []; // parallel array of option strings for current question

// ══════════════════════════════════════════
// localStorage PERSISTENCE
// ══════════════════════════════════════════
const STORAGE_KEY = 'dsp-mun-v1';

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ paperChecks, fcResults, ts: Date.now() }));
    const banner = document.getElementById('saveBanner');
    if (banner) { banner.classList.add('show'); setTimeout(() => banner.classList.remove('show'), 2000); }
    updateProgressSummary();
  } catch(e) {}
}

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (data.paperChecks) Object.assign(paperChecks, data.paperChecks);
    if (data.fcResults) Object.assign(fcResults, data.fcResults);
  } catch(e) {}
}

// ══════════════════════════════════════════
// RENDER LESSON MAPS
// ══════════════════════════════════════════
const TYPE_COLOURS = { Teach:'var(--u1)', Research:'var(--u2)', Draft:'var(--u2)', Practice:'var(--u3)', Assess:'#c86e8e', Flex:'var(--text-3)' };

function renderLessonMap(unit) {
  const el = document.getElementById('lm' + unit);
  if (!el) return;
  const uc = unit === 1 ? 'var(--u1)' : unit === 2 ? 'var(--u2)' : 'var(--u3)';
  el.innerHTML = LESSONS[unit].map((l, i) => `
    <div class="lesson-row" id="lr${unit}-${i}" role="listitem"
      onclick="toggleLesson(${unit},${i})"
      onkeydown="if(event.key==='Enter'||event.key===' ')toggleLesson(${unit},${i})"
      tabindex="0"
      aria-expanded="false"
      style="--ac:${uc}">
      <div class="lesson-num" aria-hidden="true">${String(i+1).padStart(2,'0')}</div>
      <div class="lesson-main">
        <div class="lesson-title">${l.title}</div>
        <div class="lesson-target">${l.targets[0]}</div>
        ${l.vocab.length || l.targets.length > 1 ? `<div class="lesson-detail">
          ${l.targets.length > 1 ? l.targets.slice(1).map(t=>`<div style="font-size:0.75rem;color:var(--text-2);margin-bottom:0.3rem">→ ${t}</div>`).join('') : ''}
          ${l.vocab.length ? `<div class="lesson-vocab">${l.vocab.map(v=>`<span class="vocab-chip">${v}</span>`).join('')}</div>` : ''}
        </div>` : ''}
      </div>
      <div class="lesson-expand-icon" style="color:${TYPE_COLOURS[l.type]||'var(--text-3)'}" aria-hidden="true">▾</div>
    </div>`).join('');
}

function toggleLesson(unit, idx) {
  const row = document.getElementById(`lr${unit}-${idx}`);
  if (!row) return;
  const expanded = row.classList.toggle('expanded');
  // FIX #11: aria-expanded is always kept in sync with DOM state
  row.setAttribute('aria-expanded', expanded);
}

// ══════════════════════════════════════════
// TIMELINE
// ══════════════════════════════════════════
function renderTimeline() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = TIMELINE_DATA.map(t => `
    <div class="tl-item" role="listitem">
      <div class="tl-year">${t.year}</div>
      <div class="tl-line" aria-hidden="true"><div class="tl-dot"></div></div>
      <div class="tl-content">
        <div class="tl-event">${t.event}</div>
        <div class="tl-desc">${t.desc}</div>
      </div>
    </div>`).join('');
}

// ══════════════════════════════════════════
// ORGANS & PRINCIPLES
// ══════════════════════════════════════════
function renderOrgans() {
  const el = document.getElementById('organsGrid');
  if (!el) return;
  el.innerHTML = UN_ORGANS.map(o => `
    <div class="organ-card">
      <div class="organ-abbr">${o.abbr}</div>
      <div class="organ-name">${o.name}</div>
      <div class="organ-desc">${o.desc}</div>
      <div class="organ-role"><strong>Role &amp; function</strong>${o.role}</div>
      <span class="organ-note">${o.note}</span>
    </div>`).join('');
}

function renderPrinciples() {
  const el = document.getElementById('principlesGrid');
  if (!el) return;
  el.innerHTML = UN_PRINCIPLES.map(p => `
    <div class="organ-card">
      <div class="organ-abbr">${p.abbr}</div>
      <div class="organ-name">${p.name}</div>
      <div class="organ-desc">${p.desc}</div>
      <div class="organ-role"><strong>In practice</strong>${p.role}</div>
      <span class="organ-note">${p.note}</span>
    </div>`).join('');
}

// ══════════════════════════════════════════
// COMMITTEES
// ══════════════════════════════════════════
function renderCommittees() {
  const el = document.getElementById('committeeGrid');
  if (!el) return;
  el.innerHTML = COMMITTEES.map(c => `
    <div class="committee-card">
      <div class="comm-abbr">${c.abbr}</div>
      <div class="comm-name">${c.name}</div>
      <div class="comm-desc">${c.desc}</div>
      <div class="comm-focus">${c.focus}</div>
    </div>`).join('');
}

// ══════════════════════════════════════════
// PAPER BUILDER
// ══════════════════════════════════════════
function renderPaperBuilder() {
  const nav = document.getElementById('paperNav');
  const sections = document.getElementById('paperSections');
  if (!nav || !sections) return;
  nav.innerHTML = PAPER_SECTIONS.map((s, i) => `
    <button class="paper-nav-btn${i===0?' active':''}" role="tab" aria-selected="${i===0}" onclick="switchPaperSection(${i},this)">
      <span class="pn-num">Section ${s.num}</span>
      <span class="pn-title">${s.title}</span>
    </button>`).join('');
  sections.innerHTML = PAPER_SECTIONS.map((s, i) => `
    <div class="paper-section${i===0?' active':''}" id="ps${i}" role="tabpanel">
      <div class="paper-card">
        <div class="paper-section-title">${s.num}. ${s.title}</div>
        <div class="paper-section-sub">${s.subtitle}</div>
        <div class="paper-guidance">
          ${s.guidance.map(g=>`<div class="guidance-item"><div class="guidance-icon" aria-hidden="true">${g.icon}</div><div class="guidance-text">${g.text}</div></div>`).join('')}
        </div>
        <div class="paper-example">
          <div class="paper-example-label">Example opening</div>
          <div class="paper-example-text">${s.example}</div>
        </div>
        <div style="font-family:var(--mono);font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-3);margin-bottom:0.5rem">Self-check</div>
        <div class="paper-checklist" id="pcl${i}">
          ${s.checklist.map((c,j) => {
            const key = `ps${i}-${j}`;
            const done = paperChecks[key] ? ' done' : '';
            return `<div class="paper-check${done}" onclick="toggleCheck(${i},${j})" role="checkbox" aria-checked="${!!paperChecks[key]}" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')toggleCheck(${i},${j})">
              <div class="pcheck-box">${paperChecks[key]?'✓':''}</div>
              <div class="pcheck-text">${c}</div>
            </div>`;
          }).join('')}
        </div>
        <div class="paper-mistake">
          <div class="paper-mistake-label">Common mistake</div>
          ${s.mistake}
        </div>
      </div>
    </div>`).join('');
}

function switchPaperSection(i, btn) {
  document.querySelectorAll('.paper-section').forEach((s,idx) => s.classList.toggle('active', idx === i));
  document.querySelectorAll('.paper-nav-btn').forEach((b,idx) => { b.classList.toggle('active', idx === i); b.setAttribute('aria-selected', idx === i); });
}

function toggleCheck(si, ci) {
  const key = `ps${si}-${ci}`;
  paperChecks[key] = !paperChecks[key];
  const list = document.getElementById(`pcl${si}`);
  if (!list) return;
  const item = list.querySelectorAll('.paper-check')[ci];
  if (!item) return;
  item.classList.toggle('done', paperChecks[key]);
  item.setAttribute('aria-checked', paperChecks[key]);
  item.querySelector('.pcheck-box').textContent = paperChecks[key] ? '✓' : '';
  saveProgress();
}

// ══════════════════════════════════════════
// ASSESSMENT RUBRICS
// ══════════════════════════════════════════
function renderRubrics() {
  const el = document.getElementById('rubricPanels');
  if (!el) return;
  el.innerHTML = Object.entries(RUBRICS).map(([key, r]) => `
    <div class="rubric-panel${key==='paper'?' active':''}" id="rubric-${key}" role="tabpanel">
      <div class="rubric-table-wrap">
        <table class="rubric-table" aria-label="${r.title} rubric">
          <thead>
            <tr>
              <th>Criterion</th>
              <th class="level-4">Level 4 — Excellent</th>
              <th class="level-3">Level 3 — Proficient</th>
              <th class="level-2">Level 2 — Developing</th>
              <th class="level-1">Level 1 — Beginning</th>
            </tr>
          </thead>
          <tbody>
            ${r.criteria.map(c=>`<tr>
              <td>${c.criterion}</td>
              <td>${c.l4}</td>
              <td>${c.l3}</td>
              <td>${c.l2}</td>
              <td>${c.l1}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="rubric-total">Assessment: <strong>${r.title}</strong> · ${r.weight} · ${r.criteria.length} criteria</div>
    </div>`).join('');
}

function switchRubric(key, btn) {
  document.querySelectorAll('.rubric-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('rubric-' + key);
  if (panel) panel.classList.add('active');
  document.querySelectorAll('.rubric-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
}

// ══════════════════════════════════════════
// PROCEDURE
// FIX #9: Guard against null btn on init call.
// ══════════════════════════════════════════
function switchProc(key, btn) {
  document.querySelectorAll('.proc-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  const p = PROC_PANELS[key];
  if (!p) return;
  const procPanels = document.getElementById('procPanels');
  if (!procPanels) return;
  procPanels.innerHTML = `
    <div class="proc-panel active">
      <div class="proc-overflow">
        <table class="proc-table" aria-label="${key} reference">
          <thead><tr><th>${key==='caucus'?'Type':'Action'}</th><th>Purpose</th><th>Requirements</th><th>Tactical note</th></tr></thead>
          <tbody>${p.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
      <div class="proc-note"><strong>Reminder</strong>${p.note}</div>
    </div>`;
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
}

// ══════════════════════════════════════════
// RESOLUTION BUILDER
// FIX #7: selectVerb no longer calls renderResBuilder() on every click.
//         Only the selected state of verb items is toggled in-place.
// FIX #10: preamCurrentCat / operCurrentCat are module-level so the
//          category is preserved across verb selections.
// ══════════════════════════════════════════
function renderResBuilder() {
  _renderVerbPanel(PREAM_VERBS, 'p', 'preamVerbs', 'preamTabs');
  _renderVerbPanel(OPER_VERBS, 'o', 'operVerbs', 'operTabs');
}

function _renderVerbPanel(data, type, containerId, tabsId) {
  const categories = [...new Set(data.map(d => d.category))];
  const tabsEl = document.getElementById(tabsId);
  const verbsEl = document.getElementById(containerId);
  if (!tabsEl || !verbsEl) return;

  // Initialise current category if not yet set (first render)
  if (type === 'p' && !preamCurrentCat) preamCurrentCat = categories[0];
  if (type === 'o' && !operCurrentCat) operCurrentCat = categories[0];

  const currentCat = type === 'p' ? preamCurrentCat : operCurrentCat;

  // Render category tabs
  tabsEl.innerHTML = categories.map(c => `
    <button class="ct-tab ${type}${c === currentCat ? ' active' : ''}" data-cat="${c}"
      onclick="_switchVerbCat('${type}','${c}',this)">
      ${c}
    </button>`).join('');

  // Render verb list for current category
  _renderVerbList(data, type, containerId, currentCat);
}

function _renderVerbList(data, type, containerId, cat) {
  const verbsEl = document.getElementById(containerId);
  if (!verbsEl) return;
  const catData = data.find(d => d.category === cat);
  if (!catData) return;
  verbsEl.innerHTML = catData.verbs.map(v => `
    <div class="verb-item${selectedPreamVerb === v.word && type === 'p' ? ' selected-p' : selectedOperVerb === v.word && type === 'o' ? ' selected-o' : ''}"
      role="listitem"
      data-word="${v.word.replace(/"/g,'&quot;')}"
      data-type="${type}"
      onclick="selectVerb(this.dataset.word, this.dataset.type)"
      tabindex="0"
      onkeydown="if(event.key==='Enter')selectVerb(this.dataset.word,this.dataset.type)">
      <div class="verb-word">${v.word}</div>
      <div class="verb-desc">${v.desc}</div>
    </div>`).join('');
}

function _switchVerbCat(type, cat, btn) {
  // Update module-level current category — survives selectVerb calls (FIX #10)
  if (type === 'p') preamCurrentCat = cat;
  else operCurrentCat = cat;

  // Update tab active state
  btn.closest('[role="tablist"], .clause-type-tabs, .res-panel').querySelectorAll('.ct-tab')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Re-render only the verb list, not the whole builder
  const data = type === 'p' ? PREAM_VERBS : OPER_VERBS;
  const containerId = type === 'p' ? 'preamVerbs' : 'operVerbs';
  _renderVerbList(data, type, containerId, cat);
}

function selectVerb(word, type) {
  if (type === 'p') selectedPreamVerb = word;
  else selectedOperVerb = word;

  // FIX #7: Update selected state in-place instead of full re-render.
  // This preserves scroll position and category tab state (FIX #10).
  const containerId = type === 'p' ? 'preamVerbs' : 'operVerbs';
  const selectedClass = type === 'p' ? 'selected-p' : 'selected-o';
  document.getElementById(containerId).querySelectorAll('.verb-item').forEach(el => {
    el.classList.toggle(selectedClass, el.dataset.word === word);
  });

  updateClausePreview();
}

function updateClausePreview() {
  const disp = document.getElementById('resClauseDisplay');
  const note = document.getElementById('resFormatNote');
  if (!disp || !note) return;
  if (selectedPreamVerb && !selectedOperVerb) {
    disp.innerHTML = `<span class="res-clause-verb p">${selectedPreamVerb}</span> that [the committee / member states] [describe the situation or context],`;
    note.textContent = 'Preambulatory clause — ends with a comma. Begins with a gerund. Sets context for operative clauses.';
  } else if (selectedOperVerb && !selectedPreamVerb) {
    disp.innerHTML = `<span class="res-clause-verb o">${selectedOperVerb}</span> [member states / the Secretary-General / relevant bodies] to [specific action];`;
    note.textContent = 'Operative clause — ends with a semicolon (or full stop if final clause). State specific, actionable decisions.';
  } else if (selectedPreamVerb && selectedOperVerb) {
    disp.innerHTML = `<em>Preambulatory:</em><br><span class="res-clause-verb p">${selectedPreamVerb}</span> that [situation / context],<br><br><em>Operative:</em><br>1. <span class="res-clause-verb o">${selectedOperVerb}</span> [actors] to [specific action];`;
    note.textContent = 'Both clause types selected. Preamble provides context; operative clause states the decision.';
  } else {
    disp.textContent = 'Select a verb above to preview a clause.';
    note.textContent = '';
  }
}

// FIX #8: copyClause now serialises innerHTML → plain text correctly,
// preserving line breaks from <br> elements before stripping tags.
function copyClause() {
  const disp = document.getElementById('resClauseDisplay');
  if (!disp) return;
  // Replace <br> with newlines before extracting text
  const clone = disp.cloneNode(true);
  clone.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
  const text = clone.textContent;
  // FIX #13: Added .catch() so clipboard failures surface to the user
  navigator.clipboard.writeText(text)
    .then(() => showToast('Copied to clipboard'))
    .catch(() => showToast('Copy failed — please copy manually'));
}

function renderResFormat() {
  const el = document.getElementById('resFormatGrid');
  if (!el) return;
  el.innerHTML = RES_FORMAT.map(r => `
    <div class="organ-card">
      <div class="organ-abbr">${r.abbr}</div>
      <div class="organ-name">${r.name}</div>
      <div class="organ-desc">${r.desc}</div>
      <div class="organ-role"><strong>Formatting rule</strong>${r.role}</div>
      <span class="organ-note">${r.note}</span>
    </div>`).join('');
}

// ══════════════════════════════════════════
// GLOSSARY — BROWSE
// FIX #3: oninput calls filterGlossary() with no args; unit is
//         undefined so glossFilter is preserved. aria-pressed state
//         is now only updated when a filter button is explicitly clicked.
// ══════════════════════════════════════════
let glossFilter = 'all';

function filterGlossary(unit, btn) {
  if (unit !== undefined) {
    glossFilter = unit;
    // Only update aria-pressed when called from a button click
    document.querySelectorAll('#browseMode .gloss-filter').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  }
  const searchEl = document.getElementById('glossSearch');
  const q = searchEl ? searchEl.value.toLowerCase() : '';
  const filtered = GLOSSARY_TERMS.filter(t => {
    const matchUnit = glossFilter === 'all' || String(t.unit) === String(glossFilter);
    const matchQ = !q || t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q);
    return matchUnit && matchQ;
  });
  const gcols = { 1:'var(--u1)', 2:'var(--u2)', 3:'var(--u3)' };
  const grid = document.getElementById('glossaryGrid');
  if (!grid) return;
  grid.innerHTML = filtered.length
    ? filtered.map(t => `
      <div class="gloss-card" style="--gc:${gcols[t.unit]}">
        <div class="gloss-term">${t.term}</div>
        <div class="gloss-def">${t.def}</div>
        <div class="gloss-unit">Unit ${t.unit}</div>
      </div>`).join('')
    : `<div class="gloss-empty">No terms match your search.</div>`;
}

// ══════════════════════════════════════════
// GLOSSARY — MODE SWITCHER
// ══════════════════════════════════════════
function switchGlossMode(mode, btn) {
  const browseEl = document.getElementById('browseMode');
  const flashEl  = document.getElementById('flashcardMode');
  const quizEl   = document.getElementById('quizMode');
  if (browseEl) browseEl.style.display = mode === 'browse' ? '' : 'none';
  if (flashEl)  flashEl.style.display  = mode === 'flashcard' ? '' : 'none';
  if (quizEl)   quizEl.style.display   = mode === 'quiz' ? '' : 'none';
  document.querySelectorAll('.gmode-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
  if (mode === 'flashcard') initFlashcards();
  if (mode === 'quiz') initQuiz();
}

// ══════════════════════════════════════════
// FLASHCARDS
// ══════════════════════════════════════════
function buildFCDeck() {
  const terms = fcUnit === 'all' ? GLOSSARY_TERMS : GLOSSARY_TERMS.filter(t => String(t.unit) === String(fcUnit));
  fcDeck = [...terms].sort(() => Math.random() - 0.5);
  fcIndex = 0; fcFlipped = false; fcCorrect = 0; fcWrong = 0;
}

function initFlashcards() {
  buildFCDeck();
  renderCard();
}

function renderCard() {
  if (!fcDeck.length) return;
  const card = fcDeck[fcIndex];
  const termEl    = document.getElementById('fcTerm');
  const defEl     = document.getElementById('fcDef');
  const unitTagEl = document.getElementById('fcUnitTag');
  const idxEl     = document.getElementById('fcIndex');
  const totalEl   = document.getElementById('fcTotal');
  const corrEl    = document.getElementById('fcCorrect');
  const wrongEl   = document.getElementById('fcWrong');
  const cardEl    = document.getElementById('flashcard');
  const barEl     = document.getElementById('fcProgressBar');
  if (termEl)    termEl.textContent = card.term;
  if (defEl)     defEl.textContent  = card.def;
  if (unitTagEl) unitTagEl.textContent = 'Unit ' + card.unit;
  if (idxEl)     idxEl.textContent  = fcIndex + 1;
  if (totalEl)   totalEl.textContent = fcDeck.length;
  if (corrEl)    corrEl.textContent  = fcCorrect;
  if (wrongEl)   wrongEl.textContent = fcWrong;
  if (cardEl)    cardEl.classList.remove('flipped');
  fcFlipped = false;
  if (barEl) barEl.style.width = (fcIndex / fcDeck.length * 100).toFixed(1) + '%';
}

function flipCard() {
  const cardEl = document.getElementById('flashcard');
  if (cardEl) { cardEl.classList.toggle('flipped'); fcFlipped = !fcFlipped; }
}

function nextCard() { if (fcIndex < fcDeck.length - 1) { fcIndex++; renderCard(); } }
function prevCard() { if (fcIndex > 0) { fcIndex--; renderCard(); } }

function markCard(known) {
  const card = fcDeck[fcIndex];
  if (known) { fcCorrect++; fcResults[card.term] = 'known'; }
  else       { fcWrong++;   fcResults[card.term] = 'studying'; }
  saveProgress();
  if (fcIndex < fcDeck.length - 1) {
    fcIndex++; renderCard();
  } else {
    const corrEl  = document.getElementById('fcCorrect');
    const wrongEl = document.getElementById('fcWrong');
    if (corrEl)  corrEl.textContent  = fcCorrect;
    if (wrongEl) wrongEl.textContent = fcWrong;
    showToast('Deck complete! ' + fcCorrect + ' known, ' + fcWrong + ' to review.');
  }
}

function shuffleCards() { fcDeck.sort(() => Math.random() - 0.5); fcIndex = 0; renderCard(); }
function resetCards()   { Object.keys(fcResults).forEach(k => delete fcResults[k]); buildFCDeck(); renderCard(); saveProgress(); }

function setFCUnit(unit, btn) {
  fcUnit = unit;
  document.querySelectorAll('#flashcardMode .gloss-filter').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  buildFCDeck(); renderCard();
}

// ══════════════════════════════════════════
// QUICK QUIZ
// FIX #2: Options are stored in the module-level _quizOptions array.
//         answerQuiz receives a numeric index, never raw text in an
//         onclick string, so apostrophes and special characters are safe.
// FIX #5: If the pool has fewer than 4 terms, pad options gracefully
//         so the quiz always renders 4 buttons (or as many as possible).
// ══════════════════════════════════════════
function initQuiz() {
  const shuffled = [...GLOSSARY_TERMS].sort(() => Math.random() - 0.5);
  quizDeck = shuffled.slice(0, 10);
  quizIndex = 0; quizScore = 0; quizAnswered = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const content = document.getElementById('quizContent');
  const bar     = document.getElementById('quizProgressBar');
  if (!content) return;

  if (quizIndex >= quizDeck.length) {
    content.innerHTML = `
      <div style="text-align:center;padding:2rem 0">
        <div style="font-family:var(--serif);font-size:2rem;font-weight:700;margin-bottom:0.5rem">${quizScore} / ${quizDeck.length}</div>
        <div style="font-family:var(--mono);font-size:0.72rem;color:var(--text-2);margin-bottom:1.5rem">Quiz complete</div>
        <button class="btn btn-ghost" onclick="initQuiz()">Try again →</button>
      </div>`;
    if (bar) bar.style.width = '100%';
    return;
  }

  const q = quizDeck[quizIndex];

  // FIX #5: Collect wrong answers; if pool is small, use whatever is available
  const wrongPool = GLOSSARY_TERMS.filter(t => t.term !== q.term).sort(() => Math.random() - 0.5);
  const needed = Math.min(3, wrongPool.length);
  const wrong = wrongPool.slice(0, needed);

  // Build options array — store in module-level var so onclick can reference by index
  _quizOptions = [...wrong.map(t => t.def), q.def].sort(() => Math.random() - 0.5);
  const correctIndex = _quizOptions.indexOf(q.def);

  if (bar) bar.style.width = (quizIndex / quizDeck.length * 100) + '%';

  // FIX #2: onclick passes numeric index, never raw definition text
  content.innerHTML = `
    <div class="quiz-q">What is the definition of: <em style="color:var(--text)">${q.term}</em>?</div>
    <div class="quiz-options">
      ${_quizOptions.map((opt, i) => `
        <button class="quiz-option" onclick="answerQuiz(this,${i},${correctIndex})">
          ${opt}
        </button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="quiz-nav">
      <span class="quiz-counter">Question ${quizIndex + 1} of ${quizDeck.length}</span>
      <span class="quiz-score">Score: ${quizScore}</span>
    </div>`;
}

// FIX #2: answerQuiz now receives numeric indices, looks up text from _quizOptions.
// Apostrophes and any special characters in definitions are completely safe.
function answerQuiz(btn, chosenIndex, correctIndex) {
  if (quizAnswered) return;
  quizAnswered = true;
  const isCorrect = chosenIndex === correctIndex;
  if (isCorrect) quizScore++;
  const correctText = _quizOptions[correctIndex];
  document.querySelectorAll('.quiz-option').forEach((b, i) => {
    b.disabled = true;
    if (i === correctIndex) b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });
  const fb = document.getElementById('quizFeedback');
  if (fb) {
    fb.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect. The correct answer is highlighted.';
    fb.classList.add('show');
  }
  setTimeout(() => { quizIndex++; quizAnswered = false; renderQuizQuestion(); }, 1800);
}

// ══════════════════════════════════════════
// TIPS
// ══════════════════════════════════════════
function renderTips() {
  const el = document.getElementById('tipsGrid');
  if (!el) return;
  el.innerHTML = DELEGATE_TIPS.map(t => `
    <div class="tip-card">
      <div class="tip-category">${t.category}</div>
      <div class="tip-title">${t.title}</div>
      <div class="tip-body">${t.body}</div>
    </div>`).join('');
}

// ══════════════════════════════════════════
// UNIT SWITCHER
// ══════════════════════════════════════════
function jumpUnit(n) {
  const el = document.getElementById('unit' + n);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function updateUnitButton() {
  const u1 = document.getElementById('unit1');
  const u2 = document.getElementById('unit2');
  const u3 = document.getElementById('unit3');
  if (!u1 || !u2 || !u3) return;
  const t1 = u1.getBoundingClientRect().top;
  const t2 = u2.getBoundingClientRect().top;
  const t3 = u3.getBoundingClientRect().top;
  let active = 1;
  if (t2 <= 120) active = 2;
  if (t3 <= 120) active = 3;
  document.querySelectorAll('.unit-btn').forEach(b => b.classList.toggle('active', +b.dataset.u === active));
}

// ══════════════════════════════════════════
// SCROLL PROGRESS BAR
// ══════════════════════════════════════════
function updateScrollProgress() {
  const doc = document.documentElement;
  const scrolled = doc.scrollTop;
  const total = doc.scrollHeight - doc.clientHeight;
  const pct = total > 0 ? (scrolled / total * 100).toFixed(1) : 0;
  const bar = document.getElementById('navProgress');
  if (bar) bar.style.width = pct + '%';
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ══════════════════════════════════════════
// CANVAS BACKGROUND
// FIX #6: Animation is paused when the tab is hidden via
//         visibilitychange, saving CPU/GPU/battery.
//         cancelAnimationFrame is used to cleanly stop the loop.
// ══════════════════════════════════════════
(function () {
  const c = document.getElementById('canvas-bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  let stars = [];
  let rafId = null;
  let running = true;

  function resize() {
    c.width  = innerWidth;
    c.height = innerHeight;
    stars = Array.from({ length: Math.floor(c.width * c.height / 7000) }, () => ({
      x:  Math.random() * c.width,
      y:  Math.random() * c.height,
      r:  Math.random() * 0.9 + 0.1,
      a:  Math.random(),
      sp: 0.002 + Math.random() * 0.003,
      ph: Math.random() * Math.PI * 2
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, c.width, c.height);
    stars.forEach(s => {
      const a = s.a * (0.4 + 0.6 * Math.sin(t * 0.001 * (s.sp * 500) + s.ph));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,210,230,${a})`;
      ctx.fill();
    });
    if (running) rafId = requestAnimationFrame(draw);
  }

  function start() {
    if (running && rafId === null) rafId = requestAnimationFrame(draw);
  }

  function stop() {
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  }

  // FIX #6: Pause when tab is hidden, resume when visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { running = false; stop(); }
    else { running = true; start(); }
  });

  window.addEventListener('resize', resize);
  resize();
  start();
})();

// ══════════════════════════════════════════
// INTERSECTION OBSERVER
// ══════════════════════════════════════════
const ro = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  }),
  { threshold: 0.05 }
);
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
window.addEventListener('scroll', () => { updateUnitButton(); updateScrollProgress(); }, { passive: true });

// ══════════════════════════════════════════
// MOBILE NAV TOGGLE
// FIX #12: Inline onclick removed from HTML. All toggle logic lives
//          here so the class change and aria-expanded stay in sync
//          atomically — no race between inline handler and listener.
// ══════════════════════════════════════════
const _navToggleBtn = document.getElementById('navToggle');
const _navLinks     = document.getElementById('navLinks');
if (_navToggleBtn && _navLinks) {
  _navToggleBtn.addEventListener('click', function () {
    const willOpen = !_navLinks.classList.contains('open');
    _navLinks.classList.toggle('open', willOpen);
    this.setAttribute('aria-expanded', willOpen);
  });
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
loadProgress();
renderLessonMap(1);
renderLessonMap(2);
renderLessonMap(3);
renderTimeline();
renderOrgans();
renderPrinciples();
renderCommittees();
renderPaperBuilder();
renderTips();
renderResBuilder();
renderResFormat();
renderRubrics();
renderPathways();
filterGlossary();
// FIX #9: querySelector is safe here — HTML has the button — but guarded inside switchProc
switchProc('points', document.querySelector('.proc-tab'));

// ══════════════════════════════════════════
// PROGRESS: EXPORT / IMPORT / RESET
// ══════════════════════════════════════════
function updateProgressSummary() {
  const el = document.getElementById('progressSummary');
  if (!el) return;
  const checks = Object.values(paperChecks).filter(Boolean).length;
  const totalChecks = 20; // 5+4+4+5+checklist items
  const known = Object.values(fcResults).filter(v => v === 'known').length;
  const studying = Object.values(fcResults).filter(v => v === 'studying').length;
  el.innerHTML = `Paper checklist: <strong>${checks}</strong> items done · Flashcards: <strong>${known}</strong> known, <strong>${studying}</strong> studying`;
}

function exportProgress() {
  const data = { paperChecks, fcResults, exportedAt: new Date().toISOString(), version: 'dsp-mun-v1' };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'dsp-mun-progress.json'; a.click();
  URL.revokeObjectURL(url);
  showToast('Progress exported');
}

function importProgressClick() {
  document.getElementById('importFileInput').click();
}

function importProgress(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.version !== 'dsp-mun-v1') { showToast('Unrecognised file format'); return; }
      if (data.paperChecks) Object.assign(paperChecks, data.paperChecks);
      if (data.fcResults) Object.assign(fcResults, data.fcResults);
      saveProgress();
      renderPaperBuilder();
      updateProgressSummary();
      showToast('Progress imported ✓');
    } catch(err) { showToast('Import failed — invalid file'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function openResetModal() {
  const m = document.getElementById('resetModal');
  if (m) m.classList.add('open');
}
function closeResetModal() {
  const m = document.getElementById('resetModal');
  if (m) m.classList.remove('open');
}
function confirmReset() {
  // Clear everything
  Object.keys(paperChecks).forEach(k => delete paperChecks[k]);
  Object.keys(fcResults).forEach(k => delete fcResults[k]);
  try { localStorage.removeItem('dsp-mun-v1'); } catch(e) {}
  renderPaperBuilder();
  updateProgressSummary();
  closeResetModal();
  showToast('Progress reset');
}
// Close modal on overlay click
document.getElementById('resetModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeResetModal();
});
// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeResetModal();
});

// ══════════════════════════════════════════
// COUNTRY PROFILE GENERATOR (Claude API)
// ══════════════════════════════════════════
async function generateCountryProfile() {
  const country = document.getElementById('cpCountry').value.trim();
  const topic   = document.getElementById('cpTopic').value.trim();
  const btn     = document.getElementById('cpBtn');
  const output  = document.getElementById('cpOutput');

  if (!country || !topic) { showToast('Enter a country and topic first'); return; }

  btn.disabled = true;
  btn.textContent = 'Generating…';
  output.classList.add('visible');
  output.innerHTML = `<div class="cp-loading"><div class="cp-spinner"></div>Researching ${country} — this takes a few seconds…</div>`;

  const prompt = `You are a Model United Nations research assistant. Generate a structured country profile for a student who has been assigned to represent ${country} in a committee discussing: "${topic}".

Respond ONLY with a valid JSON object (no markdown, no extra text) with this exact structure:
{
  "overview": "2-3 sentences on the country's general approach to international relations and its standing in the UN",
  "position": "2-3 sentences on the country's likely or known position on the specific topic. Be specific about whether this is an actual known position or a reasonable inference.",
  "keyInterests": ["interest 1", "interest 2", "interest 3", "interest 4"],
  "likelyBlocs": ["bloc/group 1", "bloc/group 2", "bloc/group 3"],
  "pastActions": "1-2 sentences on relevant past UN votes, treaties signed, or initiatives the country has supported on this topic or closely related ones",
  "researchTips": ["specific source or document type to look for", "specific UN body or resolution to search", "relevant angle or context to investigate"],
  "watchOut": "One sentence on a nuance, tension, or common misconception about this country's position that students should be careful about"
}`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error?.message || 'API error');

    const raw = data.content.map(b => b.text || '').join('');
    const clean = raw.replace(/```json|```/g, '').trim();
    const profile = JSON.parse(clean);
    renderCountryProfile(profile, country, topic);
  } catch(err) {
    output.innerHTML = `<div class="cp-error"><strong>Generation failed.</strong> ${err.message || 'Please try again.'}<br><span style="font-size:0.75rem;opacity:0.7">This feature requires an active internet connection and API access.</span></div>`;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Generate profile →';
  }
}

function renderCountryProfile(p, country, topic) {
  const output = document.getElementById('cpOutput');
  output.innerHTML = `
    <div class="cp-profile-card">
      <div class="cp-profile-header">
        <div>
          <div style="font-family:var(--mono);font-size:0.6rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:0.3rem">Country profile</div>
          <div class="cp-country-name">${country}</div>
          <div style="font-family:var(--mono);font-size:0.72rem;color:var(--text-3);margin-top:0.3rem">Topic: ${topic}</div>
        </div>
        <span class="cp-committee-badge">AI-assisted research brief</span>
      </div>

      <div class="cp-sections">
        <div class="cp-section">
          <div class="cp-section-title">🌐 Overview</div>
          <div class="cp-section-body">${p.overview}</div>
        </div>
        <div class="cp-section">
          <div class="cp-section-title">📋 Position on this topic</div>
          <div class="cp-section-body">${p.position}</div>
        </div>
        <div class="cp-section">
          <div class="cp-section-title">🎯 Key national interests</div>
          <div class="cp-section-body"><ul>${p.keyInterests.map(i=>`<li>${i}</li>`).join('')}</ul></div>
        </div>
        <div class="cp-section">
          <div class="cp-section-title">🤝 Likely blocs & alliances</div>
          <div class="cp-section-body"><ul>${p.likelyBlocs.map(b=>`<li>${b}</li>`).join('')}</ul></div>
        </div>
        <div class="cp-section">
          <div class="cp-section-title">📜 Past UN actions</div>
          <div class="cp-section-body">${p.pastActions}</div>
        </div>
        <div class="cp-section">
          <div class="cp-section-title">🔍 Research tips</div>
          <div class="cp-section-body"><ul>${p.researchTips.map(r=>`<li>${r}</li>`).join('')}</ul></div>
        </div>
      </div>

      <div style="margin-top:1.25rem;background:rgba(200,168,90,0.08);border:1px solid rgba(200,168,90,0.25);border-radius:4px;padding:0.85rem 1.1rem;">
        <div style="font-family:var(--mono);font-size:0.58rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--u2);margin-bottom:0.35rem;">⚠ Watch out for</div>
        <div style="font-size:0.82rem;color:var(--text-2);line-height:1.6;">${p.watchOut}</div>
      </div>

      <div style="margin-top:1rem;font-family:var(--mono);font-size:0.6rem;color:var(--text-3);line-height:1.5;padding:0.65rem;background:var(--surface);border-radius:3px;border:1px solid var(--border);">
        ⚠ This is AI-generated research guidance. Verify all positions against primary sources — official government websites, UN voting records, and the UN ODS — before writing your position paper.
      </div>

      <div class="cp-actions">
        <button class="cp-action-btn" onclick="copyProfileText()">Copy as text</button>
        <button class="cp-action-btn" onclick="document.getElementById('cpOutput').innerHTML='';document.getElementById('cpOutput').classList.remove('visible')">Clear</button>
      </div>
    </div>`;
}

function copyProfileText() {
  const el = document.getElementById('cpOutput');
  if (!el) return;
  const clone = el.cloneNode(true);
  clone.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
  navigator.clipboard.writeText(clone.textContent.replace(/\n{3,}/g, '\n\n').trim())
    .then(() => showToast('Profile copied'))
    .catch(() => showToast('Copy failed'));
}

// ══════════════════════════════════════════
// INIT ADDITIONS
// ══════════════════════════════════════════
updateProgressSummary();

// ══════════════════════════════════════════
// PATHWAYS
// ══════════════════════════════════════════
function renderPathways() {
  const el = document.getElementById('pathwayGrid');
  if (!el) return;
  el.innerHTML = PATHWAYS.map(p => `
    <div class="pathway-card" style="--pwc:${p.colour}">
      <span class="pathway-icon" aria-hidden="true">${p.icon}</span>
      <div class="pathway-title">${p.title}</div>
      <div class="pathway-goal">${p.goal}</div>
      <div class="pathway-steps">
        ${p.steps.map((s, i) => `
          <div class="pathway-step">
            <span class="pathway-step-num">${String(i + 1).padStart(2, '0')}</span>
            <a href="${s.href}">${s.label}</a>
          </div>`).join('')}
      </div>
    </div>`).join('');
}
