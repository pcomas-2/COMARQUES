// DADES DE LES 42 COMARQUES EN ORDRE ALFABÈTIC
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

// ESTAT DEL JOC
let selectedGameMode = '30';
let studentName = '';
let activeQuestions = [];
let currentQuestionIdx = 0;
let score = 0;
let totalQuestions = 30;
let timerInterval = null;
let secondsElapsed = 0;
let currentQuestionObj = null;
let audioCtx = null;

// GESTIÓ SEGURA DE PANTALLES
window.showScreen = function(screenId) {
  const screens = ['screen-start', 'screen-quiz', 'screen-results'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === screenId) {
        el.classList.add('active');
        el.style.display = 'flex';
      } else {
        el.classList.remove('active');
        el.style.display = 'none';
      }
    }
  });
};

// SO ÀUDIO ROBUST
function playSound(type) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

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
  } catch(e) {
    console.log("Audio no suportat o bloquejat:", e);
  }
}

// NORMALITZACIÓ DE TEXT
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

window.selectMode = function(mode) {
  selectedGameMode = mode;
  const btn30 = document.getElementById('btn-mode-30');
  const btnAll = document.getElementById('btn-mode-all');
  if (btn30) btn30.classList.toggle('selected', mode === '30');
  if (btnAll) btnAll.classList.toggle('selected', mode === 'all');
};

window.onMapError = function() {
  alert("⚠️ Atenció: No s'ha pogut carregar la imatge 'mapa2.png'. Assegura't que l'arxiu estigui guardat a la mateixa carpeta!");
};

function renderPins(pool) {
  const container = document.getElementById('pins-container');
  if (!container) return;
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

window.startQuiz = function() {
  const nameEl = document.getElementById('student-name');
  const nameInput = nameEl ? nameEl.value.trim() : '';

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

  window.showScreen('screen-quiz');
  renderPins(pool);
  startTimer();
  showQuestion();
};

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    const timerEl = document.getElementById('timer-display');
    if (timerEl) timerEl.innerText = `${mins}:${secs}`;
  }, 1000);
}

function showQuestion() {
  document.querySelectorAll('.comarca-pin').forEach(el => {
    el.classList.remove('highlighted', 'correct');
  });

  const feedbackBox = document.getElementById('feedback-box');
  if (feedbackBox) {
    feedbackBox.className = 'feedback-message';
    feedbackBox.style.display = 'none';
  }

  const ansInput = document.getElementById('user-answer');
  if (ansInput) ansInput.value = '';

  currentQuestionObj = activeQuestions[currentQuestionIdx];
  const c = currentQuestionObj.comarca;

  const qCounterEl = document.getElementById('q-counter');
  if (qCounterEl) qCounterEl.innerText = `${currentQuestionIdx + 1}/${totalQuestions}`;

  const currentAcc = currentQuestionIdx === 0 ? 0 : Math.round((score / currentQuestionIdx) * 100);
  const accEl = document.getElementById('accuracy-display');
  if (accEl) accEl.innerText = `${currentAcc}%`;

  const titleEl = document.getElementById('question-type-title');
  const promptEl = document.getElementById('question-text');
  const inputForm = document.getElementById('input-container');
  const mapInstruction = document.getElementById('map-instruction');

  if (currentQuestionObj.type === 0) {
    if (titleEl) titleEl.innerText = "🏷️ Nom de la Comarca";
    if (promptEl) promptEl.innerText = "Quina és la comarca del punt vermell destacat al mapa?";
    highlightPinOnMap(c.id);
    if (inputForm) inputForm.style.display = 'flex';
    if (mapInstruction) mapInstruction.style.display = 'none';
    if (ansInput) ansInput.focus();
  } else if (currentQuestionObj.type === 1) {
    if (titleEl) titleEl.innerText = "🏛️ Capital de Comarca";
    if (promptEl) promptEl.innerText = `Quina és la capital de la comarca del punt destacat al mapa?`;
    highlightPinOnMap(c.id);
    if (inputForm) inputForm.style.display = 'flex';
    if (mapInstruction) mapInstruction.style.display = 'none';
    if (ansInput) ansInput.focus();
  } else {
    if (titleEl) titleEl.innerText = "🎯 Localització al Mapa";
    if (promptEl) promptEl.innerText = `On està ubicada la comarca de: ${c.name}?`;
    if (inputForm) inputForm.style.display = 'none';
    if (mapInstruction) mapInstruction.style.display = 'block';
  }
}

function highlightPinOnMap(id) {
  const pin = document.getElementById(`pin-${id}`);
  if (pin) pin.classList.add('highlighted');
}

window.checkAnswer = function() {
  const ansInput = document.getElementById('user-answer');
  const rawUserAns = ansInput ? ansInput.value : '';
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
};

function onPinClick(clickedComarca) {
  if (!currentQuestionObj || currentQuestionObj.type !== 2) return;
  const target = currentQuestionObj.comarca;
  const isCorrect = clickedComarca.id === target.id;
  processResult(isCorrect, target.name);
}

function processResult(isCorrect, expectedAnswer) {
  const feedbackBox = document.getElementById('feedback-box');

  if (isCorrect) {
    score++;
    playSound('correct');
    if (feedbackBox) {
      feedbackBox.innerText = "✨ Molt bé! Resposta Correcta!";
      feedbackBox.className = "feedback-message correct";
    }
    const targetPin = document.getElementById(`pin-${currentQuestionObj.comarca.id}`);
    if (targetPin) targetPin.classList.add('correct');
  } else {
    playSound('incorrect');
    if (feedbackBox) {
      feedbackBox.innerText = `❌ Incorrecte. La resposta correcta era: ${expectedAnswer}`;
      feedbackBox.className = "feedback-message incorrect";
    }
  }

  if (feedbackBox) feedbackBox.style.display = 'block';

  setTimeout(() => {
    currentQuestionIdx++;
    if (currentQuestionIdx < totalQuestions) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }, 1500);
}

function finishQuiz() {
  clearInterval(timerInterval);

  window.showScreen('screen-results');

  const accuracy = Math.round((score / totalQuestions) * 100);
  const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
  const secs = (secondsElapsed % 60).toString().padStart(2, '0');
  const timeFormatted = `${mins}:${secs}`;

  const resScoreEl = document.getElementById('res-score');
  if (resScoreEl) resScoreEl.innerText = `${score} / ${totalQuestions}`;

  const resAccEl = document.getElementById('res-accuracy');
  if (resAccEl) resAccEl.innerText = `${accuracy}%`;

  const resTimeEl = document.getElementById('res-time');
  if (resTimeEl) resTimeEl.innerText = timeFormatted;

  saveScoreToLeaderboard(studentName, selectedGameMode, score, timeFormatted, accuracy);
}

function saveScoreToLeaderboard(name, mode, scoreVal, timeVal, accuracyVal) {
  let leaderboard = JSON.parse(localStorage.getItem('comarques_leaderboard') || '[]');
  leaderboard.push({
    name: name,
    mode: mode === '30' ? '30 Comarques' : 'Totes (+30)',
    score: scoreVal,
    time: timeVal,
    accuracy: accuracyVal
  });

  leaderboard.sort((a, b) => b.score - a.score || a.time.localeCompare(b.time));
  leaderboard = leaderboard.slice(0, 10);

  localStorage.setItem('comarques_leaderboard', JSON.stringify(leaderboard));
  renderLeaderboard();
}

function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;
  let leaderboard = JSON.parse(localStorage.getItem('comarques_leaderboard') || '[]');

  if (leaderboard.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="color:#94A3B8;">Sense registres encara. Sigues el primer! 🚀</td></tr>`;
    return;
  }

  tbody.innerHTML = leaderboard.map((entry, idx) => `
    <tr>
      <td><strong>#${idx + 1}</strong></td>
      <td><strong>${escapeHtml(entry.name)}</strong></td>
      <td><small>${entry.mode}</small></td>
      <td><strong style="color:#4F46E5;">${entry.score}/30</strong></td>
      <td>${entry.time}</td>
      <td><span style="color:#10B981; font-weight:700;">${entry.accuracy}%</span></td>
    </tr>
  `).join('');
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

window.resetToStart = function() {
  window.showScreen('screen-start');
  renderLeaderboard();
};

document.addEventListener('DOMContentLoaded', () => {
  renderLeaderboard();
  const inputEl = document.getElementById('user-answer');
  if (inputEl) {
    inputEl.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') window.checkAnswer();
    });
  }
});
