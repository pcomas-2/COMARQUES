// DADES DE LES 42 COMARQUES EN ORDRE ALFABÈTIC I COORDENADES DE PERCENTATGE SOBRE MAPA2.PNG
const comarquesData = [
  { id: "alt_camp", name: "Alt Camp", capital: "Valls", alts: ["valls"], x: 49, y: 67 },
  { id: "alt_emporda", name: "Alt Empordà", capital: "Figueres", alts: ["figueres"], x: 85, y: 23 },
  { id: "alt_penedes", name: "Alt Penedès", capital: "Vilafranca del Penedès", alts: ["vilafranca del penedes", "vilafranca"], x: 56, y: 64 },
  { id: "alt_urgell", name: "Alt Urgell", capital: "La Seu d'Urgell", alts: ["la seu d'urgell", "seu d'urgell", "seu d urgell"], x: 41, y: 22 },
  { id: "alta_ribagorca", name: "Alta Ribagorça", capital: "El Pont de Suert", alts: ["el pont de suert", "pont de suert"], x: 22, y: 18 },
  { id: "anoia", name: "Anoia", capital: "Igualada", alts: ["igualada"], x: 52, y: 55 },
  { id: "bages", name: "Bages", capital: "Manresa", alts: ["manresa"], x: 56, y: 45 },
  { id: "baix_camp", name: "Baix Camp", capital: "Reus", alts: ["reus"], x: 41, y: 72 },
  { id: "baix_ebre", name: "Baix Ebre", capital: "Tortosa", alts: ["tortosa"], x: 29, y: 83 },
  { id: "baix_emporda", name: "Baix Empordà", capital: "La Bisbal d'Empordà", alts: ["la bisbal d'emporda", "bisbal", "la bisbal"], x: 90, y: 35 },
  { id: "baix_llobregat", name: "Baix Llobregat", capital: "Sant Feliu de Llobregat", alts: ["sant feliu de llobregat", "sant feliu"], x: 62, y: 65 },
  { id: "baix_penedes", name: "Baix Penedès", capital: "El Vendrell", alts: ["el vendrell", "vendrell"], x: 53, y: 71 },
  { id: "barcelones", name: "Barcelonès", capital: "Barcelona", alts: ["barcelona"], x: 68, y: 64 },
  { id: "bergueda", name: "Berguedà", capital: "Berga", alts: ["berga"], x: 52, y: 31 },
  { id: "cerdanya", name: "Cerdanya", capital: "Puigcerdà", alts: ["puigcerda"], x: 51, y: 18 },
  { id: "conca_barbera", name: "Conca de Barberà", capital: "Montblanc", alts: ["montblanc"], x: 46, y: 60 },
  { id: "garraf", name: "Garraf", capital: "Vilanova i la Geltrú", alts: ["vilanova i la geltru", "vilanova"], x: 59, y: 71 },
  { id: "garrigues", name: "Garrigues", capital: "Les Borges Blanques", alts: ["les borges blanques", "borges blanques"], x: 34, y: 60 },
  { id: "garrotxa", name: "Garrotxa", capital: "Olot", alts: ["olot"], x: 73, y: 26 },
  { id: "girones", name: "Gironès", capital: "Girona", alts: ["girona"], x: 80, y: 38 },
  { id: "maresme", name: "Maresme", capital: "Mataró", alts: ["mataro"], x: 75, y: 58 },
  { id: "moianes", name: "Moianès", capital: "Moià", alts: ["moia"], x: 62, y: 44 },
  { id: "montsia", name: "Montsià", capital: "Amposta", alts: ["amposta"], x: 27, y: 91 },
  { id: "noguera", name: "Noguera", capital: "Balaguer", alts: ["balaguer"], x: 30, y: 41 },
  { id: "osona", name: "Osona", capital: "Vic", alts: ["vic"], x: 64, y: 37 },
  { id: "pallars_jussa", name: "Pallars Jussà", capital: "Tremp", alts: ["tremp"], x: 27, y: 28 },
  { id: "pallars_sobira", name: "Pallars Sobirà", capital: "Sort", alts: ["sort"], x: 31, y: 17 },
  { id: "pla_urgell", name: "Pla d'Urgell", capital: "Mollerussa", alts: ["mollerussa"], x: 33, y: 51 },
  { id: "pla_estany", name: "Pla de l'Estany", capital: "Banyoles", alts: ["banyoles"], x: 80, y: 31 },
  { id: "priorat", name: "Priorat", capital: "Falset", alts: ["falset"], x: 38, y: 68 },
  { id: "ribera_ebre", name: "Ribera d'Ebre", capital: "Móra d'Ebre", alts: ["mora d'ebre", "mora d ebre", "mora"], x: 32, y: 72 },
  { id: "ripolles", name: "Ripollès", capital: "Ripoll", alts: ["ripoll"], x: 63, y: 22 },
  { id: "segarra", name: "Segarra", capital: "Cervera", alts: ["cervera"], x: 46, y: 47 },
  { id: "segria", name: "Segrià", capital: "Lleida", alts: ["lleida"], x: 24, y: 57 },
  { id: "selva", name: "Selva", capital: "Santa Coloma de Farners", alts: ["santa coloma de farners", "santa coloma"], x: 75, y: 46 },
  { id: "solsones", name: "Solsonès", capital: "Solsona", alts: ["solsona"], x: 43, y: 34 },
  { id: "tarragones", name: "Tarragonès", capital: "Tarragona", alts: ["tarragona"], x: 50, y: 75 },
  { id: "terra_alta", name: "Terra Alta", capital: "Gandesa", alts: ["gandesa"], x: 23, y: 74 },
  { id: "urgell", name: "Urgell", capital: "Tàrrega", alts: ["tarrega"], x: 40, y: 48 },
  { id: "val_d_aran", name: "Val d'Aran", capital: "Vielha e Mijaran", alts: ["vielha e mijaran", "vielha"], x: 18, y: 11 },
  { id: "valles_occidental", name: "Vallès Occidental", capital: "Sabadell", alts: ["sabadell", "terrassa"], x: 63, y: 57 },
  { id: "valles_oriental", name: "Vallès Oriental", capital: "Granollers", alts: ["granollers"], x: 70, y: 53 }
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

// AVIS SI LA IMATGE NO CARREGA
function onMapError() {
  alert("⚠️ Atenció: No s'ha pogut trobar la imatge 'mapa2.png'. Comprova que l'arxiu estigui guardat a la mateixa carpeta que index.html!");
}

// RENDERRITZAR PINS A SOBRE DE MAPA2.PNG
function renderPins(pool) {
  const container = document.getElementById('pins-container');
  container.innerHTML = '';

  pool.forEach(c => {
    const pin = document.createElement('div');
    pin.className = 'comarca-pin';
    pin.id = `pin-${c.id}`;
    pin.style.left = `${c.x}%`;
    pin.style.top = `${c.y}%`;
    pin.title = c.name;

    pin.addEventListener('click', () => onPinClick(c));
    container.appendChild(pin);
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

  renderPins(pool);
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
  document.querySelectorAll('.comarca-pin').forEach(el => {
    el.classList.remove('highlighted', 'correct');
  });

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
    promptEl.innerText = "Quina és la comarca amb el punt vermell il·luminat al mapa?";
    highlightPinOnMap(c.id);
    inputForm.style.display = 'flex';
    mapInstruction.style.display = 'none';
    document.getElementById('user-answer').focus();
  } else if (currentQuestionObj.type === 1) {
    titleEl.innerText = "🏛️ Capital de Comarca";
    promptEl.innerText = `Quina és la capital de la comarca del punt destacat al mapa?`;
    highlightPinOnMap(c.id);
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

function highlightPinOnMap(id) {
  const pin = document.getElementById(`pin-${id}`);
  if (pin) pin.classList.add('highlighted');
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

// CLICK AL PIN
function onPinClick(clickedComarca) {
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
    const targetPin = document.getElementById(`pin-${currentQuestionObj.comarca.id}`);
    if (targetPin) targetPin.classList.add('correct');
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
