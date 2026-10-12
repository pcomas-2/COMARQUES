// DADES DE LES 42 COMARQUES DE CATALUNYA EN ORDRE ALFABÈTIC
const comarquesData = [
  { id: "alt_camp", name: "Alt Camp", capital: "Valls", alts: ["valls"], d: "M 380,510 L 470,510 L 490,570 L 410,570 Z", cx: 435, cy: 540 },
  { id: "alt_emporda", name: "Alt Empordà", capital: "Figueres", alts: ["figueres"], d: "M 710,140 L 810,120 L 870,180 L 820,240 L 730,220 Z", cx: 788, cy: 180 },
  { id: "alt_penedes", name: "Alt Penedès", capital: "Vilafranca del Penedès", alts: ["vilafranca del penedes", "vilafranca"], d: "M 470,510 L 530,490 L 570,540 L 510,560 Z", cx: 520, cy: 525 },
  { id: "alt_urgell", name: "Alt Urgell", capital: "La Seu d'Urgell", alts: ["la seu d'urgell", "seu d'urgell", "seu d urgell"], d: "M 350,110 L 410,100 L 440,160 L 400,230 L 330,190 Z", cx: 385, cy: 158 },
  { id: "alta_ribagorca", name: "Alta Ribagorça", capital: "El Pont de Suert", alts: ["el pont de suert", "pont de suert"], d: "M 190,130 L 210,80 L 240,110 L 230,170 L 180,180 L 150,140 Z", cx: 200, cy: 135 },
  { id: "anoia", name: "Anoia", capital: "Igualada", alts: ["igualada"], d: "M 450,450 L 520,430 L 530,490 L 470,510 Z", cx: 492, cy: 470 },
  { id: "bages", name: "Bages", capital: "Manresa", alts: ["manresa"], d: "M 450,260 L 510,290 L 560,310 L 550,410 L 480,410 L 460,340 Z", cx: 501, cy: 336 },
  { id: "baix_camp", name: "Baix Camp", capital: "Reus", alts: ["reus"], d: "M 310,630 L 390,590 L 430,640 L 360,660 Z", cx: 372, cy: 630 },
  { id: "baix_ebre", name: "Baix Ebre", capital: "Tortosa", alts: ["tortosa"], d: "M 250,620 L 310,630 L 300,720 L 210,700 Z", cx: 267, cy: 667 },
  { id: "baix_emporda", name: "Baix Empordà", capital: "La Bisbal d'Empordà", alts: ["la bisbal d'emporda", "bisbal", "la bisbal"], d: "M 820,240 L 870,180 L 910,240 L 870,310 L 780,280 Z", cx: 850, cy: 250 },
  { id: "baix_llobregat", name: "Baix Llobregat", capital: "Sant Feliu de Llobregat", alts: ["sant feliu de llobregat", "sant feliu"], d: "M 540,480 L 610,460 L 630,530 L 570,540 Z", cx: 587, cy: 502 },
  { id: "baix_penedes", name: "Baix Penedès", capital: "El Vendrell", alts: ["el vendrell", "vendrell"], d: "M 490,570 L 510,560 L 540,600 L 480,610 Z", cx: 505, cy: 585 },
  { id: "barcelones", name: "Barcelonès", capital: "Barcelona", alts: ["barcelona"], d: "M 610,460 L 670,460 L 670,530 L 630,530 Z", cx: 645, cy: 495 },
  { id: "bergueda", name: "Berguedà", capital: "Berga", alts: ["berga"], d: "M 440,160 L 520,150 L 530,210 L 510,290 L 450,260 Z", cx: 490, cy: 214 },
  { id: "cerdanya", name: "Cerdanya", capital: "Puigcerdà", alts: ["puigcerda"], d: "M 410,100 L 490,90 L 520,150 L 440,160 Z", cx: 465, cy: 125 },
  { id: "conca_barbera", name: "Conca de Barberà", capital: "Montblanc", alts: ["montblanc"], d: "M 390,440 L 450,450 L 470,510 L 380,510 Z", cx: 422, cy: 477 },
  { id: "garraf", name: "Garraf", capital: "Vilanova i la Geltrú", alts: ["vilanova i la geltru", "vilanova"], d: "M 510,560 L 570,540 L 590,580 L 540,600 Z", cx: 552, cy: 570 },
  { id: "garrigues", name: "Garrigues", capital: "Les Borges Blanques", alts: ["les borges blanques", "borges blanques"], d: "M 270,440 L 330,440 L 350,520 L 280,520 Z", cx: 307, cy: 480 },
  { id: "garrotxa", name: "Garrotxa", capital: "Olot", alts: ["olot"], d: "M 640,150 L 710,140 L 730,220 L 660,240 L 620,220 Z", cx: 672, cy: 194 },
  { id: "girones", name: "Gironès", capital: "Girona", alts: ["girona"], d: "M 720,260 L 780,280 L 770,330 L 700,320 Z", cx: 742, cy: 297 },
  { id: "maresme", name: "Maresme", capital: "Mataró", alts: ["mataro"], d: "M 680,390 L 760,400 L 730,490 L 670,460 Z", cx: 710, cy: 435 },
  { id: "moianes", name: "Moianès", capital: "Moià", alts: ["moia"], d: "M 560,310 L 600,320 L 590,390 L 550,410 Z", cx: 575, cy: 357 },
  { id: "montsia", name: "Montsià", capital: "Amposta", alts: ["amposta"], d: "M 210,700 L 300,720 L 280,780 L 190,760 Z", cx: 245, cy: 740 },
  { id: "noguera", name: "Noguera", capital: "Balaguer", alts: ["balaguer"], d: "M 220,270 L 300,260 L 350,310 L 310,390 L 210,370 Z", cx: 278, cy: 320 },
  { id: "osona", name: "Osona", capital: "Vic", alts: ["vic"], d: "M 530,210 L 620,220 L 660,240 L 640,330 L 560,310 L 510,290 Z", cx: 586, cy: 266 },
  { id: "pallars_jussa", name: "Pallars Jussà", capital: "Tremp", alts: ["tremp"], d: "M 180,180 L 270,180 L 300,260 L 220,270 Z", cx: 242, cy: 222 },
  { id: "pallars_sobira", name: "Pallars Sobirà", capital: "Sort", alts: ["sort"], d: "M 240,110 L 290,70 L 350,110 L 330,190 L 270,180 L 230,170 Z", cx: 285, cy: 138 },
  { id: "pla_urgell", name: "Pla d'Urgell", capital: "Mollerussa", alts: ["mollerussa"], d: "M 270,390 L 330,380 L 330,440 L 270,440 Z", cx: 300, cy: 412 },
  { id: "pla_estany", name: "Pla de l'Estany", capital: "Banyoles", alts: ["banyoles"], d: "M 730,220 L 820,240 L 780,280 L 720,260 Z", cx: 762, cy: 250 },
  { id: "priorat", name: "Priorat", capital: "Falset", alts: ["falset"], d: "M 320,530 L 380,510 L 390,590 L 310,630 Z", cx: 350, cy: 565 },
  { id: "ribera_ebre", name: "Ribera d'Ebre", capital: "Móra d'Ebre", alts: ["mora d'ebre", "mora d ebre", "mora"], d: "M 240,530 L 320,530 L 310,630 L 250,620 Z", cx: 280, cy: 577 },
  { id: "ripolles", name: "Ripollès", capital: "Ripoll", alts: ["ripoll"], d: "M 520,150 L 580,100 L 640,150 L 620,220 L 530,210 Z", cx: 578, cy: 166 },
  { id: "segarra", name: "Segarra", capital: "Cervera", alts: ["cervera"], d: "M 400,330 L 460,340 L 450,450 L 390,440 Z", cx: 425, cy: 390 },
  { id: "segria", name: "Segrià", capital: "Lleida", alts: ["lleida"], d: "M 210,370 L 270,390 L 270,440 L 280,520 L 160,500 L 160,420 Z", cx: 225, cy: 453 },
  { id: "selva", name: "Selva", capital: "Santa Coloma de Farners", alts: ["santa coloma de farners", "santa coloma"], d: "M 660,240 L 720,260 L 770,330 L 760,400 L 680,390 L 640,330 Z", cx: 705, cy: 325 },
  { id: "solsones", name: "Solsonès", capital: "Solsona", alts: ["solsona"], d: "M 330,190 L 400,230 L 450,260 L 420,330 L 350,310 Z", cx: 390, cy: 264 },
  { id: "tarragones", name: "Tarragonès", capital: "Tarragona", alts: ["tarragona"], d: "M 410,570 L 490,570 L 500,640 L 430,640 Z", cx: 457, cy: 605 },
  { id: "terra_alta", name: "Terra Alta", capital: "Gandesa", alts: ["gandesa"], d: "M 160,500 L 240,530 L 250,620 L 170,640 Z", cx: 205, cy: 572 },
  { id: "urgell", name: "Urgell", capital: "Tàrrega", alts: ["tarrega"], d: "M 350,310 L 400,330 L 390,440 L 330,440 L 330,380 L 350,310 Z", cx: 360, cy: 380 },
  { id: "val_d_aran", name: "Val d'Aran", capital: "Vielha e Mijaran", alts: ["vielha e mijaran", "vielha"], d: "M 130,80 L 170,60 L 210,80 L 190,130 L 150,140 L 120,110 Z", cx: 161, cy: 100 },
  { id: "valles_occidental", name: "Vallès Occidental", capital: "Sabadell", alts: ["sabadell", "terrassa"], d: "M 520,430 L 590,390 L 610,460 L 540,480 Z", cx: 565, cy: 440 },
  { id: "valles_oriental", name: "Vallès Oriental", capital: "Granollers", alts: ["granollers"], d: "M 590,390 L 680,390 L 690,460 L 610,460 Z", cx: 642, cy: 425 }
];

// ESTAT DE LA APLICACIÓ
let selectedGameMode = '30';
let studentName = '';
let activeQuestions = [];
let currentQuestionIdx = 0;
let score = 0;
let totalQuestions = 30;
let timerInterval = null;
let secondsElapsed = 0;
let currentQuestionObj = null;

// SINTETITZADOR DE SO AUDIO
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } else if (type === 'incorrect') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, audioCtx.currentTime);
    osc.frequency.setValueAtTime(174.61, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  }
}

// NORMALITZACIÓ DE TEXT (Ignora majúscules, accents i articles)
function normalizeText(text) {
  if (!text) return '';
  let s = text.toLowerCase().trim();
  s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  s = s.replace(/ç/g, "c");
  s = s.replace(/^(l'|d'|el\s+|la\s+|els\s+|les\s+|del\s+|dels\s+|de\s+la\s+|de\s+)/i, '');
  s = s.replace(/['’'`\-]/g, ' ');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

// SELECCIONAR MODE DE JOC
function selectMode(mode) {
  selectedGameMode = mode;
  document.getElementById('btn-mode-30').classList.toggle('selected', mode === '30');
  document.getElementById('btn-mode-all').classList.toggle('selected', mode === 'all');
}

// RENDERRITZAR EL MAPA SVG
function renderMap() {
  const svg = document.getElementById('catalonia-svg');
  svg.innerHTML = '';

  comarquesData.forEach(c => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", c.d);
    path.setAttribute("id", `map-path-${c.id}`);
    path.setAttribute("class", "comarca-path");
    path.setAttribute("data-id", c.id);
    path.setAttribute("data-name", c.name);

    path.addEventListener('click', () => onComarcaClick(c));

    path.addEventListener('mousemove', (e) => {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.display = 'block';
      tooltip.innerText = c.name;
      const rect = document.getElementById('map-container').getBoundingClientRect();
      tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
      tooltip.style.top = (e.clientY - rect.top - 25) + 'px';
    });

    path.addEventListener('mouseleave', () => {
      document.getElementById('tooltip').style.display = 'none';
    });

    svg.appendChild(path);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", c.cx);
    text.setAttribute("y", c.cy);
    text.setAttribute("font-size", "10");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("fill", "#475569");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("pointer-events", "none");
    text.textContent = c.name;
    svg.appendChild(text);
  });
}

// INICIAR EL QUIZZ
function startQuiz() {
  const nameInput = document.getElementById('student-name').value.trim();
  if (!nameInput) {
    alert("Si us plau, escriu el teu nom per començar!");
    return;
  }
  studentName = nameInput;

  let pool = selectedGameMode === '30' ? comarquesData.slice(0, 30) : [...comarquesData];

  activeQuestions = [];
  totalQuestions = 30;

  for (let i = 0; i < totalQuestions; i++) {
    const targetComarca = pool[Math.floor(Math.random() * pool.length)];
    const qType = Math.floor(Math.random() * 3);
    activeQuestions.push({ comarca: targetComarca, type: qType });
  }

  currentQuestionIdx = 0;
  score = 0;
  secondsElapsed = 0;

  document.getElementById('screen-start').classList.remove('active');
  document.getElementById('screen-quiz').classList.add('active');

  renderMap();
  startTimer();
  showQuestion();
}

// TEMPS
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${mins}:${secs}`;
  }, 1000);
}

// MOSTRAR PREGUNTA
function showQuestion() {
  document.querySelectorAll('.comarca-path').forEach(el => el.classList.remove('highlighted', 'correct'));
  document.getElementById('feedback-box').className = 'feedback-message';
  document.getElementById('feedback-box').style.display = 'none';
  document.getElementById('user-answer').value = '';

  currentQuestionObj = activeQuestions[currentQuestionIdx];
  const c = currentQuestionObj.comarca;

  document.getElementById('q-counter').innerText = `${currentQuestionIdx + 1}/${totalQuestions}`;
  const currentAcc = currentQuestionIdx === 0 ? 0 : Math.round((score / currentQuestionIdx) * 100);
  document.getElementById('accuracy-display').innerText = `${currentAcc}%`;

  const titleEl = document.getElementById('question-type-title');
  const promptEl = document.getElementById('question-text');
  const inputForm = document.getElementById('input-container');
  const mapInstruction = document.getElementById('map-instruction');

  if (currentQuestionObj.type === 0) {
    titleEl.innerText = "🏷️ Nom de la Comarca";
    promptEl.innerText = "Quina és la comarca il·luminada en vermell al mapa?";
    highlightComarcaOnMap(c.id);
    inputForm.style.display = 'flex';
    mapInstruction.style.display = 'none';
    document.getElementById('user-answer').focus();
  } else if (currentQuestionObj.type === 1) {
    titleEl.innerText = "🏛️ Capital de Comarca";
    promptEl.innerText = `Quina és la capital de la comarca ${c.name}?`;
    highlightComarcaOnMap(c.id);
    inputForm.style.display = 'flex';
    mapInstruction.style.display = 'none';
    document.getElementById('user-answer').focus();
  } else {
    titleEl.innerText = "🎯 Localització al Mapa";
    promptEl.innerText = `On està ubicada la comarca de: ${c.name}?`;
    inputForm.style.display = 'none';
    mapInstruction.style.display = 'block';
  }
}

function highlightComarcaOnMap(id) {
  const el = document.getElementById(`map-path-${id}`);
  if (el) el.classList.add('highlighted');
}

// COMPROVAR RESPOSTA DE TEXT
function checkAnswer() {
  const rawUserAns = document.getElementById('user-answer').value;
  const userNorm = normalizeText(rawUserAns);
  const c = currentQuestionObj.comarca;
  let isCorrect = false;
  let expectedText = "";

  if (currentQuestionObj.type === 0) {
    expectedText = c.name;
    const validAnswers = [c.name, ...(c.alts || [])].map(normalizeText);
    isCorrect = validAnswers.includes(userNorm);
  } else if (currentQuestionObj.type === 1) {
    expectedText = c.capital;
    const validAnswers = [c.capital, ...(c.alts || [])].map(normalizeText);
    isCorrect = validAnswers.includes(userNorm);
  }

  processResult(isCorrect, expectedText);
}

// CLICK AL MAPA
function onComarcaClick(clickedComarca) {
  if (!currentQuestionObj || currentQuestionObj.type !== 2) return;
  const target = currentQuestionObj.comarca;
  const isCorrect = clickedComarca.id === target.id;
  processResult(isCorrect, target.name);
}

// RESULTAT
function processResult(isCorrect, expectedAnswer) {
  const feedbackBox = document.getElementById('feedback-box');

  if (isCorrect) {
    score++;
    playSound('correct');
    feedbackBox.innerText = "✨ Molt bé! Resposta Correcta!";
    feedbackBox.className = "feedback-message correct";
  } else {
    playSound('incorrect');
    feedbackBox.innerText = `❌ Incorrecte. La resposta correcta era: ${expectedAnswer}`;
    feedbackBox.className = "feedback-message incorrect";
  }

  feedbackBox.style.display = 'block';

  setTimeout(() => {
    currentQuestionIdx++;
    if (currentQuestionIdx < totalQuestions) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }, 1500);
}

// FINAL DEL JOC
function finishQuiz() {
  clearInterval(timerInterval);

  document.getElementById('screen-quiz').classList.remove('active');
  document.getElementById('screen-results').classList.add('active');

  const accuracy = Math.round((score / totalQuestions) * 100);
  const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
  const secs = (secondsElapsed % 60).toString().padStart(2, '0');
  const timeFormatted = `${mins}:${secs}`;

  document.getElementById('res-score').innerText = `${score} / ${totalQuestions}`;
  document.getElementById('res-accuracy').innerText = `${accuracy}%`;
  document.getElementById('res-time').innerText = timeFormatted;

  saveScoreToLeaderboard(studentName, selectedGameMode, score, timeFormatted, accuracy);
}

// RÀNKING
function saveScoreToLeaderboard(name, mode, scoreVal, timeVal, accuracyVal) {
  let leaderboard = JSON.parse(localStorage.getItem('comarques_leaderboard') || '[]');
  leaderboard.push({
    name: name,
    mode: mode === '30' ? '30 Comarques' : 'Totes (+30)',
    score: scoreVal,
    time: timeVal,
    accuracy: accuracyVal,
    timestamp: Date.now()
  });

  leaderboard.sort((a, b) => b.score - a.score || a.time.localeCompare(b.time));
  leaderboard = leaderboard.slice(0, 10);

  localStorage.setItem('comarques_leaderboard', JSON.stringify(leaderboard));
  renderLeaderboard();
}

function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  let leaderboard = JSON.parse(localStorage.getItem('comarques_leaderboard') || '[]');

  if (leaderboard.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="color:#94A3B8;">Encara no hi ha registres. Sigues el primer! 🚀</td></tr>`;
    return;
  }

  tbody.innerHTML = leaderboard.map((entry, idx) => `
    <tr>
      <td><span class="badge-top">#${idx + 1}</span></td>
      <td><strong>${escapeHtml(entry.name)}</strong></td>
      <td><small>${entry.mode}</small></td>
      <td><strong style="color:var(--primary);">${entry.score}/30</strong></td>
      <td>${entry.time}</td>
      <td><span style="color:var(--success); font-weight:700;">${entry.accuracy}%</span></td>
    </tr>
  `).join('');
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

function resetToStart() {
  document.getElementById('screen-results').classList.remove('active');
  document.getElementById('screen-start').classList.add('active');
  renderLeaderboard();
}

document.getElementById('user-answer').addEventListener('keyup', function(e) {
  if (e.key === 'Enter') checkAnswer();
});

window.addEventListener('DOMContentLoaded', () => {
  renderLeaderboard();
});
