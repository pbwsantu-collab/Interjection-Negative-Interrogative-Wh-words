/* ========== DATA: 100 QUESTIONS ========== */
const allQuestions = [
  {q:"‘Alas!’ কোন আবেগ প্রকাশ করে?", opts:["আনন্দ","দুঃখ","অনুমোদন","মনোযোগ"], ans:1},
  {q:"‘Hurrah!’ কোন আবেগ প্রকাশ করে?", opts:["দুঃখ","আনন্দ","ঘৃণা","সতর্কতা"], ans:1},
  {q:"‘Fie!’ কোন আবেগ প্রকাশ করে?", opts:["আনন্দ","দুঃখ","তিরস্কার/ঘৃণা","ডাক"], ans:2},
  {q:"‘Hark!’ ও ‘Hush!’ কী প্রকাশ করে?", opts:["আনন্দ","মনোযোগ","দুঃখ","অনুমোদন"], ans:1},
  {q:"‘Bravo!’ কী প্রকাশ করে?", opts:["দুঃখ","অনুমোদন","ঘৃণা","ডাক"], ans:1},
  {q:"‘How awful!’ কি Interjection?", opts:["হ্যাঁ, বিশুদ্ধ Interjection","না, এটি elliptical sentence","হ্যাঁ, phrase","না, এটি verb"], ans:1},
  {q:"‘Well done!’ এর পূর্ণ রূপ কী?", opts:["It is done well!","Well it is done!","Done well it is!","It well done!"], ans:0},
  {q:"‘For shame!’ কোন ধরনের?", opts:["Interjection","Interjectional Phrase","Elliptical sentence","None"], ans:1},
  {q:"‘Good heavens!’ কোন ধরনের?", opts:["Verb","Interjectional Phrase","Noun","Adjective"], ans:1},
  {q:"Interjection বাক্যের construction-এ প্রবেশ করে কি?", opts:["হ্যাঁ","না","কখনো কখনো","সবসময়"], ans:1},
  {q:"‘I am a student.’-এর negative কী?", opts:["I am no student.","I am not a student.","I do not am a student.","I not am a student."], ans:1},
  {q:"‘He is happy.’-এর negative?", opts:["He is not happy.","He does not happy.","He not is happy.","He is no happy."], ans:0},
  {q:"‘I have a car.’-এর দুটি সঠিক negative কোনগুলো?", opts:["I have no car / I do not have a car","I have not car / I no have car","I not have car / I have not a car","I does not have car"], ans:0},
  {q:"‘He has a sister.’-এর negative (do-form)?", opts:["He does not has a sister.","He does not have a sister.","He do not have a sister.","He not has a sister."], ans:1},
  {q:"‘They played football.’-এর negative?", opts:["They did not played football.","They did not play football.","They do not played football.","They not played football."], ans:1},
  {q:"‘She writes letters.’-এর negative?", opts:["She does not writes letters.","She do not write letters.","She does not write letters.","She not writes letters."], ans:2},
  {q:"‘You will be happy.’-এর negative?", opts:["You will not be happy.","You not will be happy.","You will be not happy.","You do not will be happy."], ans:0},
  {q:"‘He can sing.’-এর negative?", opts:["He can not sing. / He cannot sing.","He does not can sing.","He not can sing.","He can does not sing."], ans:0},
  {q:"একাধিক auxiliary থাকলে ‘not’ কোথায় বসে?", opts:["শেষ auxiliary-এর পরে","প্রথম auxiliary-এর পরে","মূল verb-এর পরে","Subject-এর পরে"], ans:1},
  {q:"‘You should have done this.’-এর negative?", opts:["You should not have done this.","You should have not done this.","You not should have done this.","You should have done not this."], ans:0},
  {q:"Negative Imperative কীভাবে হয়?", opts:["Not + verb","Do not + verb","Does not + verb","No + verb"], ans:1},
  {q:"‘Run in the sun.’-এর negative imperative?", opts:["Not run in the sun.","Do not run in the sun.","Does not run in the sun.","No run in the sun."], ans:1},
  {q:"‘He never tells a lie.’ — এটি negative কিভাবে?", opts:["no ব্যবহার করে","not ব্যবহার করে","never ব্যবহার করে","none ব্যবহার করে"], ans:2},
  {q:"‘There is a school.’-এর negative?", opts:["There is not a school.","There is no school.","There does not is a school.","Both A and B possible"], ans:3},
  {q:"‘I had money.’-এর do-form negative?", opts:["I did not had money.","I did not have money.","I do not had money.","I not had money."], ans:1},
  {q:"‘She is reading.’-এর negative?", opts:["She is not reading.","She does not reading.","She not is reading.","She is reading not."], ans:0},
  {q:"‘They have done the work.’-এর negative?", opts:["They have not done the work.","They do not have done the work.","They not have done the work.","They have done not the work."], ans:0},
  {q:"‘He may come.’-এর negative?", opts:["He may not come.","He does not may come.","He not may come.","He may does not come."], ans:0},
  {q:"‘Open the door.’-এর negative?", opts:["Not open the door.","Do not open the door.","Does not open the door.","No open the door."], ans:1},
  {q:"‘I know something.’-এর negative (nothing দিয়ে)?", opts:["I know not something.","I know nothing.","I do not know something.","I nothing know."], ans:1},
  {q:"‘None of them was present.’ — এটি কী?", opts:["Affirmative","Negative (no/not ছাড়া)","Interrogative","Imperative"], ans:1},
  {q:"‘You will have a holiday.’-এর ‘no’ দিয়ে negative?", opts:["You will have not holiday.","You will have no holiday.","You will no have holiday.","You not will have holiday."], ans:1},
  {q:"‘He has been coming.’-এর negative?", opts:["He has not been coming.","He has been not coming.","He not has been coming.","He does not has been coming."], ans:0},
  {q:"‘I was present.’-এর negative?", opts:["I was not present.","I did not was present.","I not was present.","I was present not."], ans:0},
  {q:"‘They are students.’-এর negative?", opts:["They are not students.","They do not are students.","They not are students.","They are no students."], ans:0},
  {q:"‘He is well.’-এর interrogative?", opts:["Is he well?","Does he is well?","He is well?","Is well he?"], ans:0},
  {q:"‘You have a car.’-এর interrogative (have-form)?", opts:["Have you a car?","Do you have a car?","Both A and B","Has you a car?"], ans:2},
  {q:"‘They play cricket.’-এর interrogative?", opts:["Do they play cricket?","Does they play cricket?","Play they cricket?","Are they play cricket?"], ans:0},
  {q:"‘She goes to school.’-এর interrogative?", opts:["Does she goes to school?","Does she go to school?","Do she go to school?","Goes she to school?"], ans:1},
  {q:"‘He called you.’-এর interrogative?", opts:["Did he called you?","Did he call you?","Does he call you?","Called he you?"], ans:1},
  {q:"‘You were present.’-এর interrogative?", opts:["Were you present?","Did you were present?","Are you present?","Was you present?"], ans:0},
  {q:"‘He can swim.’-এর interrogative?", opts:["Can he swim?","Does he can swim?","Is he can swim?","He can swim?"], ans:0},
  {q:"‘They have finished.’-এর interrogative?", opts:["Have they finished?","Do they have finished?","Did they finished?","Are they finished?"], ans:0},
  {q:"‘You should have gone.’-এর interrogative?", opts:["Should you have gone?","Have you should gone?","Did you should have gone?","Should have you gone?"], ans:0},
  {q:"‘He has been living here.’-এর interrogative?", opts:["Has he been living here?","Has been he living here?","Does he has been living here?","Is he has been living here?"], ans:0},
  {q:"‘Prafulla is not strong.’-এর negative interrogative (noun)?", opts:["Is not Prafulla strong?","Is Prafulla not strong?","Does not Prafulla strong?","Isn't Prafulla is strong?"], ans:0},
  {q:"‘He is not strong.’-এর negative interrogative (pronoun)?", opts:["Is not he strong?","Is he not strong?","Does he not strong?","Isn't he is strong?"], ans:1},
  {q:"Contracted negative interrogative কোথায় বসে?", opts:["Subject-এর পরে","Subject-এর আগে","Verb-এর পরে","কোনো নিয়ম নেই"], ans:1},
  {q:"‘The boys were not present.’-এর negative interrogative?", opts:["Were not the boys present?","Were the boys not present?","Both possible","Did not the boys present?"], ans:0},
  {q:"‘You did not eat.’-এর negative interrogative?", opts:["Did not you eat?","Did you not eat?","Both acceptable","Do you not eat?"], ans:1},
  {q:"‘I am taller than you.’-এর interrogative?", opts:["Am I taller than you?","Do I am taller than you?","Is I taller than you?","Are I taller than you?"], ans:0},
  {q:"‘She has a pen.’-এর do-form interrogative?", opts:["Does she has a pen?","Does she have a pen?","Do she have a pen?","Has she a pen? only"], ans:1},
  {q:"‘They left the place.’-এর interrogative?", opts:["Did they left the place?","Did they leave the place?","Do they leave the place?","Left they the place?"], ans:1},
  {q:"‘He will come tomorrow.’-এর interrogative?", opts:["Will he come tomorrow?","Does he will come tomorrow?","Is he will come tomorrow?","He will come tomorrow?"], ans:0},
  {q:"‘The child was crying.’-এর interrogative?", opts:["Was the child crying?","Did the child was crying?","Is the child crying?","Was crying the child?"], ans:0},
  {q:"Who শুধুমাত্র কীসের জন্য ব্যবহৃত হয়?", opts:["বস্তু","ব্যক্তি (person)","স্থান","সময়"], ans:1},
  {q:"Whom কোন form?", opts:["Subject form of who","Object form of who","Possessive of who","Adjective form"], ans:1},
  {q:"‘Whom did you see?’-এর কথ্য রূপ?", opts:["Who did you see?","What did you see?","Which did you see?","Whose did you see?"], ans:0},
  {q:"Whose কীসের form?", opts:["Object of who","Possessive of who","Subject of who","Adverb of who"], ans:1},
  {q:"‘What is he?’ সাধারণত কী জানতে চায়?", opts:["নাম","পেশা/সামাজিক অবস্থান","দলের মধ্যে কোন জন","স্থান"], ans:1},
  {q:"‘Who is he?’ কী জানতে চায়?", opts:["পেশা","নাম বা পরিচয়","রঙ","সময়"], ans:1},
  {q:"‘Which is he?’ কী জানতে চায়?", opts:["নাম","পেশা","নির্দিষ্ট দলের মধ্যে কোন জন","স্থান"], ans:2},
  {q:"Which কখন ব্যবহার হয়?", opts:["সাধারণ জিজ্ঞাসায়","সীমিত বিকল্প থেকে বেছে নিতে","শুধু ব্যক্তির জন্য","শুধু বস্তুর জন্য"], ans:1},
  {q:"Why-এর অর্থ কী?", opts:["কখন","কোথায়","কেন / কি কারণে","কিভাবে"], ans:2},
  {q:"When কী জানতে চায়?", opts:["স্থান","সময়","কারণ","উপায়"], ans:1},
  {q:"Where কী জানতে চায়?", opts:["সময়","স্থান/দিক","কারণ","পরিমাণ"], ans:1},
  {q:"How-এর একটি অর্থ নয় কোনটি?", opts:["উপায়","মাত্রা","স্বাস্থ্য","নাম"], ans:3},
  {q:"‘How tall is the building?’ — How এখানে কী বোঝায়?", opts:["উপায়","মাত্রা/পরিমাণ","স্বাস্থ্য","মতামত"], ans:1},
  {q:"Who subject হলে auxiliary লাগে কি?", opts:["হ্যাঁ, সবসময়","না","কখনো কখনো","শুধু past-এ"], ans:1},
  {q:"‘Who goes there?’ সঠিক কি?", opts:["হ্যাঁ","না, Who does go there? হতে হবে","না, Who go there?","না, Does who go?"], ans:0},
  {q:"‘When you went there?’ সঠিক কি?", opts:["হ্যাঁ","না, When did you go there? হতে হবে","হ্যাঁ, past-এ","না, When you did go?"], ans:1},
  {q:"Preposition + whom-এর কথ্য রূপ?", opts:["Whom … preposition","Who … preposition","What … preposition","Which … preposition"], ans:1},
  {q:"‘With whom did you go?’-এর কথ্য রূপ?", opts:["Who did you go with?","Whom did you go?","With who did you go?","Who with did you go?"], ans:0},
  {q:"‘What delayed you?’ — What এখানে কী?", opts:["Object","Subject","Adjective","Adverb"], ans:1},
  {q:"‘Which boy did it?’ — Which এখানে কী?", opts:["Pronoun only","Adjective","Adverb","Verb"], ans:1},
  {q:"‘Whose books are these?’ — Whose এখানে কী?", opts:["Pronoun","Adjective","Adverb","Conjunction"], ans:1},
  {q:"‘Whose are these?’ — Whose এখানে কী?", opts:["Adjective","Pronoun","Adverb","Preposition"], ans:1},
  {q:"‘How are you?’ — How এখানে কী বোঝায়?", opts:["উপায়","স্বাস্থ্য/অবস্থা","পরিমাণ","সময়"], ans:1},
  {q:"‘How about going for a walk?’ — এটি কী?", opts:["প্রস্তাব/মতামত চাওয়া","সময় জিজ্ঞাসা","স্থান জিজ্ঞাসা","কারণ জিজ্ঞাসা"], ans:0},
  {q:"‘What for did you go there?’ = ?", opts:["When did you go?","Why did you go?","Where did you go?","How did you go?"], ans:1},
  {q:"‘He is a doctor.’ — সঠিক প্রশ্ন?", opts:["Who is he?","What is he?","Which is he?","Whose is he?"], ans:1},
  {q:"‘The man on the extreme right.’ — কোন প্রশ্নের উত্তর?", opts:["Who is he?","What is he?","Which is he?","Whose is he?"], ans:2},
  {q:"‘I live in Delhi.’ — সঠিক প্রশ্ন?", opts:["When do you live?","Where do you live?","Why do you live?","How do you live?"], ans:1},
  {q:"‘He was absent because he was ill.’ — সঠিক প্রশ্ন?", opts:["When was he absent?","Where was he absent?","Why was he absent?","How was he absent?"], ans:2},
  {q:"‘She reached at night.’ — সঠিক প্রশ্ন?", opts:["Where did she reach?","When did she reach?","Why did she reach?","How did she reach?"], ans:1},
  {q:"‘I crossed the river in a ferry.’ — সঠিক প্রশ্ন?", opts:["When did you cross?","How did you cross the river?","Why did you cross?","Where did you cross?"], ans:1},
  {q:"‘Sandip has painted the drawing.’ — সঠিক প্রশ্ন?", opts:["What has painted?","Who has painted the drawing?","Which has painted?","Whose has painted?"], ans:1},
  {q:"‘It is Mr Sen’s house.’ — সঠিক প্রশ্ন?", opts:["Who house is it?","Whose house is it?","Which house is it?","What house is it?"], ans:1},
  {q:"‘He drives 40 km per hour.’ — সঠিক প্রশ্ন?", opts:["How long does he drive?","How fast does he drive?","How often does he drive?","How much does he drive?"], ans:1},
  {q:"‘She took five mangoes.’ — সঠিক প্রশ্ন?", opts:["How much mangoes?","How many mangoes did she take?","How long mangoes?","How far mangoes?"], ans:1},
  {q:"‘The author is W.W. Jacobs.’ — সঠিক প্রশ্ন?", opts:["What wrote the story?","Who wrote ‘The Monkey’s Paw’?","Which wrote?","Whose wrote?"], ans:1},
  {q:"‘He arrived late due to traffic jam.’ — সঠিক প্রশ্ন?", opts:["When did he arrive late?","Why did he arrive late?","Where did he arrive late?","How did he arrive late?"], ans:1},
  {q:"‘I want the red pen.’ (three pens) — সঠিক প্রশ্ন?", opts:["What pen do you want?","Which of the three pens do you want?","Who pen do you want?","Whose pen?"], ans:1},
  {q:"‘He has been working for three hours.’ — সঠিক প্রশ্ন?", opts:["How long has he been working?","How often has he been working?","How much has he been working?","How far has he been working?"], ans:0},
  {q:"‘This book was written by Rabindranath.’ — সঠিক প্রশ্ন?", opts:["Who was this book written?","By whom was this book written?","What was this book written?","Which was this book written?"], ans:1},
  {q:"‘Everybody loves his country.’ — সঠিক প্রশ্ন (negative sense)?", opts:["Who loves his country?","Who does not love his country?","What loves his country?","Which loves?"], ans:1},
  {q:"‘The train runs at 80 miles per hour.’ — সঠিক প্রশ্ন?", opts:["How long does the train run?","How fast does the train run?","How often does the train run?","How much does the train run?"], ans:1},
  {q:"‘I am going to Patna tomorrow.’ — সঠিক প্রশ্ন?", opts:["When are you going?","Where are you going tomorrow?","Why are you going?","How are you going?"], ans:1},
  {q:"‘It is now 5 o’clock.’ — সঠিক প্রশ্ন?", opts:["When is the time?","What is the time now?","Where is the time?","How is the time?"], ans:1},
  {q:"‘He stayed home because it was raining.’ — সঠিক প্রশ্ন?", opts:["When did he stay?","Why did he stay at home?","Where did he stay?","How did he stay?"], ans:1},
  {q:"Nominative Wh-word (who/what/which as subject) এর সাথে কোনটি সত্য?", opts:["Auxiliary অবশ্যই লাগে","Auxiliary লাগে না","শুধু do লাগে","শুধু did লাগে"], ans:1}
];

/* ========== APP STATE ========== */
let speaking = false;
let examQuestions = [];
let examTimerInterval = null;
let examSecondsLeft = 0;
let currentTheme = localStorage.getItem('grammar-theme') || 'light';

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeBtn();
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.section));
  });
  document.getElementById('menuBtn')?.addEventListener('click', toggleSidebar);
  document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
  if (location.hash) {
    const sec = location.hash.replace('#', '');
    if (document.getElementById(sec)) navigateTo(sec);
  }
  renderPractice();
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hide');
  }, 600);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
  setTimeout(() => showToast('স্বাগতম! Grammar Master-এ 🎓'), 900);
});

function navigateTo(secId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(secId);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nav = document.querySelector(`.nav-item[data-section="${secId}"]`);
  if (nav) nav.classList.add('active');
  const title = nav ? nav.textContent.trim() : 'মূল পাতা';
  document.getElementById('pageTitle').textContent = title.replace(/[^\u0980-\u09FFa-zA-Z0-9]+/, '').trim() || title;
  history.replaceState(null, '', `#${secId}`);
  if (window.innerWidth < 860) {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('main')?.classList.add('full');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  sidebar.classList.toggle('open');
  sidebar.classList.toggle('collapsed');
  main.classList.toggle('full');
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('grammar-theme', currentTheme);
  updateThemeBtn();
  showToast(currentTheme === 'dark' ? '🌙 ডার্ক মোড চালু' : '☀️ লাইট মোড চালু');
}

function updateThemeBtn() {
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

function speakText(text, lang = 'bn-IN') {
  if (!window.speechSynthesis) {
    showToast('Speech Synthesis সাপোর্ট নেই');
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.92;
  u.pitch = 1;
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v => v.lang.startsWith('bn') || v.lang.includes('IN') || v.name.toLowerCase().includes('bengali') || v.name.toLowerCase().includes('india'));
  if (preferred) u.voice = preferred;
  speaking = true;
  u.onend = () => { speaking = false; updateVoiceBtns(); };
  u.onerror = () => { speaking = false; updateVoiceBtns(); };
  speechSynthesis.speak(u);
  updateVoiceBtns();
}

function speakSection(id) {
  const sec = document.getElementById(id);
  if (!sec) return;
  let text = sec.innerText.replace(/🔊[^\n]*/g, '').replace(/\s+/g, ' ').trim();
  if (text.length > 1800) text = text.substring(0, 1800) + ' …';
  speakText(text, 'bn-IN');
}

function toggleGlobalVoice() {
  if (speaking) {
    speechSynthesis.cancel();
    speaking = false;
    updateVoiceBtns();
    showToast('কণ্ঠস্বর বন্ধ');
  } else {
    const active = document.querySelector('.section.active');
    if (active) speakSection(active.id);
  }
}

function updateVoiceBtns() {
  document.querySelectorAll('.voice-btn, #globalVoiceBtn').forEach(btn => {
    if (speaking) {
      btn.classList.add('speaking');
      if (btn.id === 'globalVoiceBtn') btn.innerHTML = '⏹️ বন্ধ';
    } else {
      btn.classList.remove('speaking');
      if (btn.id === 'globalVoiceBtn') btn.innerHTML = '🔊 কণ্ঠস্বর';
    }
  });
}

speechSynthesis.onvoiceschanged = () => {};

function renderPractice() {
  const container = document.getElementById('practiceContainer');
  if (!container) return;
  container.innerHTML = '';
  allQuestions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-card';
    div.innerHTML = `
      <div class="q-num">প্রশ্ন ${i + 1} / ${allQuestions.length}</div>
      <p><strong>${q.q}</strong></p>
      <div class="options" data-qid="${i}">
        ${q.opts.map((o, j) => `
          <label>
            <input type="radio" name="pq${i}" value="${j}">
            <span>${o}</span>
          </label>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });
}

function checkPractice() {
  let correct = 0;
  allQuestions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="pq${i}"]:checked`);
    const labels = document.querySelectorAll(`.options[data-qid="${i}"] label`);
    labels.forEach(l => l.classList.remove('correct', 'wrong'));
    if (selected) {
      const val = parseInt(selected.value);
      if (val === q.ans) {
        correct++;
        labels[val].classList.add('correct');
      } else {
        labels[val].classList.add('wrong');
        labels[q.ans].classList.add('correct');
      }
    } else {
      labels[q.ans].classList.add('correct');
    }
  });
  const res = document.getElementById('practiceResult');
  res.style.display = 'block';
  const pct = Math.round(correct / allQuestions.length * 100);
  let grade = pct >= 90 ? '🌟 অসাধারণ!' : pct >= 75 ? '👍 খুব ভালো' : pct >= 50 ? '😊 ভালো' : '💪 আরো চেষ্টা করুন';
  res.innerHTML = `
    <h3>ফলাফল</h3>
    <p style="font-size:2rem;margin:0.4rem 0;font-weight:700">${correct} / ${allQuestions.length}</p>
    <p>সঠিকতা: ${pct}% — ${grade}</p>
  `;
  res.scrollIntoView({ behavior: 'smooth' });
  showToast(`স্কোর: ${correct}/${allQuestions.length}`);
}

function resetPractice() {
  document.querySelectorAll('#practiceContainer input').forEach(i => i.checked = false);
  document.querySelectorAll('#practiceContainer label').forEach(l => l.classList.remove('correct', 'wrong'));
  document.getElementById('practiceResult').style.display = 'none';
  showToast('রিসেট সম্পন্ন');
}

function startExam() {
  const count = parseInt(document.getElementById('examQCount').value);
  const minutes = parseInt(document.getElementById('examTime').value);
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  examQuestions = shuffled.slice(0, count);
  examSecondsLeft = minutes * 60;
  document.getElementById('startExamBtn').style.display = 'none';
  document.getElementById('submitExamBtn').style.display = 'inline-flex';
  document.getElementById('examTimer').style.display = 'inline-block';
  document.getElementById('examProgress').style.display = 'block';
  document.getElementById('examResult').style.display = 'none';
  document.getElementById('examContainer').innerHTML = '';
  renderExam();
  updateTimer();
  examTimerInterval = setInterval(() => {
    examSecondsLeft--;
    updateTimer();
    if (examSecondsLeft <= 0) {
      clearInterval(examTimerInterval);
      submitExam();
    }
  }, 1000);
  showToast('পরীক্ষা শুরু! ⏱️');
}

function updateTimer() {
  const m = Math.floor(examSecondsLeft / 60);
  const s = examSecondsLeft % 60;
  const el = document.getElementById('examTimer');
  if (el) el.textContent = `⏱️ ${m}:${s.toString().padStart(2, '0')}`;
  const total = parseInt(document.getElementById('examTime').value) * 60;
  const pct = ((total - examSecondsLeft) / total) * 100;
  document.getElementById('examProgressFill').style.width = Math.min(pct, 100) + '%';
}

function renderExam() {
  const container = document.getElementById('examContainer');
  examQuestions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-card';
    div.innerHTML = `
      <div class="q-num">প্রশ্ন ${i + 1} / ${examQuestions.length}</div>
      <p><strong>${q.q}</strong></p>
      <div class="options" data-eqid="${i}">
        ${q.opts.map((o, j) => `
          <label>
            <input type="radio" name="eq${i}" value="${j}">
            <span>${o}</span>
          </label>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });
}

function submitExam() {
  clearInterval(examTimerInterval);
  let correct = 0;
  examQuestions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="eq${i}"]:checked`);
    const labels = document.querySelectorAll(`.options[data-eqid="${i}"] label`);
    labels.forEach(l => l.classList.remove('correct', 'wrong'));
    if (selected) {
      const val = parseInt(selected.value);
      if (val === q.ans) {
        correct++;
        labels[val].classList.add('correct');
      } else {
        labels[val].classList.add('wrong');
        labels[q.ans].classList.add('correct');
      }
    } else {
      labels[q.ans]?.classList.add('correct');
    }
  });
  const res = document.getElementById('examResult');
  res.style.display = 'block';
  const pct = Math.round(correct / examQuestions.length * 100);
  let grade = pct >= 90 ? '🌟 Excellent!' : pct >= 75 ? '👍 Very Good' : pct >= 50 ? '😊 Good' : '💪 Keep Practicing';
  res.innerHTML = `
    <h3>পরীক্ষার ফলাফল</h3>
    <p style="font-size:2.2rem;margin:0.5rem 0;font-weight:700">${correct} / ${examQuestions.length}</p>
    <p>সঠিকতা: ${pct}% — ${grade}</p>
  `;
  document.getElementById('submitExamBtn').style.display = 'none';
  document.getElementById('startExamBtn').style.display = 'inline-flex';
  document.getElementById('startExamBtn').textContent = 'আবার পরীক্ষা দিন';
  res.scrollIntoView({ behavior: 'smooth' });
  showToast(`পরীক্ষা শেষ! স্কোর ${correct}/${examQuestions.length}`);
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

window.navigateTo = navigateTo;
window.speakSection = speakSection;
window.toggleGlobalVoice = toggleGlobalVoice;
window.checkPractice = checkPractice;
window.resetPractice = resetPractice;
window.startExam = startExam;
window.submitExam = submitExam;
window.toggleTheme = toggleTheme;
