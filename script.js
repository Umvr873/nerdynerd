/*
  PERSONALIZE HERE
  Change the names, final message, poems, reasons, quiz, coupons, letters, and memories.
  Then open index.html in your browser.
*/
const CONFIG = {
  herName: "HAYATYY❤️",
  yourName: "Nerdy Nerd",
  secretWords: ["nerdy nerd", "nerdynerd", "my nerdy nerd"],
  introLines: [
    "I made this tiny universe because ordinary messages were starting to feel too small for you.",
    "So your Nerdy Nerd gathered poems, stars, little letters, secret rooms, and a very serious smile algorithm.",
    "No pressure, no big speech — just a soft place to remind you that you are deeply cared for, beautifully appreciated, and never ordinary to me."
  ],
  poems: [
    "You are not just beautiful in the way people notice; you are beautiful in the way people remember.",
    "If smiles were stars, yours would teach the sky how to glow.",
    "Some people feel like noise, but you feel like peace wrapped in a smile.",
    "I asked my code for a perfect variable; it returned your name every time.",
    "You make distance feel smaller, silence feel softer, and ordinary days feel less ordinary.",
    "You are the kind of person a heart thanks God for quietly.",
    "If comfort had a face, I think it would look a little like yours.",
    "You are proof that softness can be powerful, and kindness can be unforgettable.",
    "The world feels a little more gentle wherever your presence reaches.",
    "If my heart had a favorite notification, it would be anything with your name on it.",
    "You are the calm in a noisy day, the soft light after a long one.",
    "This tiny website may be made of pixels, but every pixel is carrying care.",
    "If I could save one feeling forever, it would be the way I feel when you make me smile.",
    "You make ordinary moments feel like little celebrations.",
    "Some people arrive like sunrise: gently, beautifully, and impossible to ignore."
  ],
  reasons: [
    "You make people feel seen, and that is a rare kind of beauty.",
    "Your smile has a way of making the day feel lighter.",
    "You are kind in a way that people remember.",
    "You make simple conversations feel special.",
    "You have a peaceful kind of presence that stays even after you leave.",
    "You are not just pretty; you are thoughtful, warm, and genuinely special.",
    "You make little moments feel meaningful.",
    "Your kindness is one of your most beautiful features.",
    "You are easy to admire and difficult to forget.",
    "You make my heart smile in ways I cannot always explain.",
    "You bring warmth without even trying.",
    "You are the kind of person someone feels lucky to know."
  ],
  openWhenLetters: [
    {
      title: "Open when you miss me",
      message: "Hayatyy, whenever the day feels quiet, read this and remember that your Nerdy Nerd is still somewhere smiling because of you. Distance may make things silent for a while, but it does not make you less remembered. You are always carried softly in my thoughts."
    },
    {
      title: "Open when you feel tired",
      message: "You do not always have to be strong. Some days are for resting, breathing, and letting the world slow down a little. I hope this reminds you that you are doing better than you think, and I am proud of the gentle strength you carry."
    },
    {
      title: "Open when you need to smile",
      message: "Breaking news from Nerdy Nerd headquarters: your smile is still undefeated. It has passed every test, broken every serious mood, and remains the most powerful feature in this entire app. Please smile small small for me."
    },
    {
      title: "Open when you doubt yourself",
      message: "You are more than the thoughts that make you question yourself. You are capable, soft-hearted, bright, and worthy of good things. Never let one hard moment make you forget the beautiful person you have always been."
    },
    {
      title: "Open when your day is going well",
      message: "I hope the good moments stay with you longer. I hope your smile feels easy today. And I hope this tiny note adds one extra sparkle to a day that is already treating you kindly."
    }
  ],
  moods: [
    { label: "I want to smile", message: "Then here is your smile prescription: one deep breath, one tiny grin, and one reminder that Nerdy Nerd thinks you are wonderfully special." },
    { label: "I feel tired", message: "Rest, Hayatyy. The world can wait for a moment. You deserve softness too, not only strength." },
    { label: "I miss you", message: "I miss you too in the quiet little ways — in random thoughts, small smiles, and moments where I wish I could send my heart as a notification." },
    { label: "Motivate me", message: "You have made it through every difficult day before this one. That means there is strength in you, even when it feels hidden. Keep going, gently." },
    { label: "Give me a poem", message: "You are a soft chapter in a loud world, a warm light in a long day, and the kind of person a heart remembers carefully." }
  ],
  quiz: [
    {
      question: "What is the most accurate Nerdy Nerd equation?",
      options: ["You + smile = better day", "Me + code = stress", "Stars + sky = night", "Food + sleep = peace"],
      answer: 0,
      response: "Correct. This equation has been peer-reviewed by my heart."
    },
    {
      question: "What do I like most about you?",
      options: ["Your smile", "Your kindness", "Your peaceful energy", "All of the above"],
      answer: 3,
      response: "Exactly. It is impossible to pick just one thing."
    },
    {
      question: "Who built this little universe for you?",
      options: ["A random developer", "Your Nerdy Nerd", "A sleepy robot", "The stars"],
      answer: 1,
      response: "Yes. Your very own Nerdy Nerd, reporting for sweet duties."
    },
    {
      question: "What happens when you smile?",
      options: ["The app becomes brighter", "My day improves", "The smile meter celebrates", "All of these"],
      answer: 3,
      response: "Correct. Your smile has full admin access here."
    },
    {
      question: "What should you remember after opening this app?",
      options: ["You are ordinary", "You are deeply appreciated", "The app is just code", "Stars are buttons"],
      answer: 1,
      response: "Always. You are appreciated more than this little app can fully explain."
    }
  ],
  coupons: [
    "Coupon 001: Redeem this for one long sweet message from Nerdy Nerd.",
    "Coupon 002: Redeem this for one random compliment on an ordinary day.",
    "Coupon 003: Redeem this for one gentle reminder that you are doing well.",
    "Coupon 004: Redeem this for one silly joke when the day feels too serious.",
    "Coupon 005: Redeem this for one soft paragraph about why you are special.",
    "Coupon 006: Redeem this for one surprise date idea, planned with care.",
    "Coupon 007: Redeem this for one proud-of-you reminder whenever you need it."
  ],
  memories: [
    { title: "First thought", body: "I wanted this to feel like opening a tiny gift made with patience, care, and a lot of happy nerves." },
    { title: "Dearly beloved", body: "You are always there for me, my cheerer, my soft place, and the person whose little things can make me smile for no reason." },
    { title: "Favorite thing", body: "Your presence has a calm, bright way of making moments better, even when nothing big is happening." },
    { title: "Nerd note", body: "This app runs on HTML, CSS, JavaScript, and a very serious smile algorithm named after you." },
    { title: "Tiny truth", body: "You are not only admired for how you look, but for how gently and beautifully you make people feel." },
    { title: "Soft promise", body: "I hope I keep finding little ways to make you smile, because your happiness matters to me." }
  ],
  secretMessage: "You found the secret room, Hayatyy. Of course you did. This part is only for you, because you are not just inside this app — you are the reason it exists. From your Nerdy Nerd, with all the softest code in my heart.",
  finalMessage: "I made this little universe for you because normal words did not feel enough. I wanted you to open something and feel cared for, smiled at, appreciated, and remembered. You are not just someone I enjoy talking to; you are someone whose presence makes things feel softer and better. I hope every poem, every star, every letter, and every tiny message here reminds you that you are deeply valued, beautifully appreciated, and truly special to me. — Your Nerdy Nerd"
};

const herNameTitle = document.getElementById("herNameTitle");
const typewriter = document.getElementById("typewriter");
const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");
const home = document.getElementById("home");
const dashboard = document.getElementById("dashboard");
const dashboardTitle = document.getElementById("dashboardTitle");
const poemBox = document.getElementById("poemBox");
const reasonBox = document.getElementById("reasonBox");
const newPoemBtn = document.getElementById("newPoemBtn");
const narrateBtn = document.getElementById("narrateBtn");
const reasonBtn = document.getElementById("reasonBtn");
const letterButtons = document.getElementById("letterButtons");
const letterBox = document.getElementById("letterBox");
const moodButtons = document.getElementById("moodButtons");
const moodBox = document.getElementById("moodBox");
const quizCount = document.getElementById("quizCount");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuizBtn = document.getElementById("nextQuizBtn");
const couponDisplay = document.getElementById("couponDisplay");
const couponBtn = document.getElementById("couponBtn");
const redeemCouponBtn = document.getElementById("redeemCouponBtn");
const secretInput = document.getElementById("secretInput");
const unlockSecretBtn = document.getElementById("unlockSecretBtn");
const secretMessage = document.getElementById("secretMessage");
const starGame = document.getElementById("starGame");
const resetGameBtn = document.getElementById("resetGameBtn");
const meterFill = document.getElementById("meterFill");
const meterText = document.getElementById("meterText");
const timeline = document.getElementById("timeline");
const finalCard = document.getElementById("finalCard");
const finalTitle = document.getElementById("finalTitle");
const finalMessage = document.getElementById("finalMessage");
const replayBtn = document.getElementById("replayBtn");
const floatingLayer = document.getElementById("floatingLayer");

let poemIndex = -1;
let quizIndex = 0;
let currentCouponIndex = -1;
let score = 0;
let caughtStars = 0;
let quizAnswered = false;
let secretUnlocked = false;
const totalStars = 12;

herNameTitle.textContent = CONFIG.herName;
dashboardTitle.textContent = `${CONFIG.herName}'s tiny love quest`;

function typeText(lines, element) {
  const text = lines.join(" ");
  let index = 0;
  element.textContent = "";
  const timer = setInterval(() => {
    element.textContent += text.charAt(index);
    index += 1;
    if (index >= text.length) clearInterval(timer);
  }, 34);
}

typeText(CONFIG.introLines, typewriter);

function sparkle(amount = 18) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");
    item.className = "float-heart";
    item.textContent = ["♡", "✦", "❀", "☆", "˚₊‧"][Math.floor(Math.random() * 5)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.animationDuration = `${6 + Math.random() * 7}s`;
    item.style.animationDelay = `${Math.random() * 2}s`;
    floatingLayer.appendChild(item);
    setTimeout(() => item.remove(), 14000);
  }
}

setInterval(() => sparkle(3), 1800);
sparkle(12);

startBtn.addEventListener("click", () => {
  home.classList.add("hidden");
  dashboard.classList.remove("hidden");
  sparkle(30);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

musicBtn.addEventListener("click", () => {
  const isOn = musicBtn.getAttribute("aria-pressed") === "true";
  musicBtn.setAttribute("aria-pressed", String(!isOn));
  musicBtn.textContent = !isOn ? "Soft chime: on" : "Soft chime: off";
  if (!isOn) playChime();
});

function playChime() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.15);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + i * 0.15 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.15 + 0.5);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + i * 0.15);
    osc.stop(ctx.currentTime + i * 0.15 + 0.55);
  });
}

newPoemBtn.addEventListener("click", () => {
  poemIndex = (poemIndex + 1) % CONFIG.poems.length;
  poemBox.textContent = CONFIG.poems[poemIndex];
  addScore(7);
  sparkle(10);
});

narrateBtn.addEventListener("click", () => {
  const text = poemBox.textContent.trim();
  if (!text || text.includes("Click")) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
});

reasonBtn.addEventListener("click", () => {
  const reason = CONFIG.reasons[Math.floor(Math.random() * CONFIG.reasons.length)];
  reasonBox.textContent = reason;
  addScore(7);
  sparkle(8);
});

function renderLetters() {
  letterButtons.innerHTML = "";
  CONFIG.openWhenLetters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "chip-btn";
    btn.type = "button";
    btn.textContent = letter.title;
    btn.addEventListener("click", () => {
      letterBox.innerHTML = `<strong>${letter.title}</strong><br><br>${letter.message}`;
      addScore(8);
      sparkle(12);
    });
    letterButtons.appendChild(btn);
  });
}

function renderMoods() {
  moodButtons.innerHTML = "";
  CONFIG.moods.forEach((mood) => {
    const btn = document.createElement("button");
    btn.className = "chip-btn";
    btn.type = "button";
    btn.textContent = mood.label;
    btn.addEventListener("click", () => {
      moodBox.textContent = mood.message;
      addScore(7);
      sparkle(10);
    });
    moodButtons.appendChild(btn);
  });
}

function renderQuiz() {
  const item = CONFIG.quiz[quizIndex];
  quizAnswered = false;
  quizCount.textContent = `Question ${quizIndex + 1} of ${CONFIG.quiz.length}`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "Choose an answer to begin.";
  quizOptions.innerHTML = "";

  item.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => handleQuizAnswer(btn, index));
    quizOptions.appendChild(btn);
  });
}

function handleQuizAnswer(button, selectedIndex) {
  if (quizAnswered) return;
  quizAnswered = true;
  const item = CONFIG.quiz[quizIndex];
  const optionButtons = [...quizOptions.querySelectorAll("button")];

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === item.answer) btn.classList.add("correct");
  });

  if (selectedIndex === item.answer) {
    button.classList.add("correct");
    quizFeedback.textContent = item.response;
    addScore(10);
    sparkle(14);
  } else {
    button.classList.add("wrong");
    quizFeedback.textContent = "Almost, but Nerdy Nerd's heart says the golden answer is the right one.";
    addScore(4);
  }
}

nextQuizBtn.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % CONFIG.quiz.length;
  renderQuiz();
});

couponBtn.addEventListener("click", () => {
  currentCouponIndex = (currentCouponIndex + 1) % CONFIG.coupons.length;
  couponDisplay.textContent = CONFIG.coupons[currentCouponIndex];
  addScore(7);
  sparkle(10);
});

redeemCouponBtn.addEventListener("click", () => {
  if (currentCouponIndex === -1) {
    couponDisplay.textContent = "Reveal a coupon first, then save it in your tiny heart pocket.";
    return;
  }
  couponDisplay.textContent = `${CONFIG.coupons[currentCouponIndex]} Saved successfully by the smile algorithm.`;
  addScore(5);
  sparkle(9);
});

unlockSecretBtn.addEventListener("click", unlockSecretRoom);
secretInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockSecretRoom();
});

function unlockSecretRoom() {
  const value = secretInput.value.trim().toLowerCase();
  if (CONFIG.secretWords.includes(value)) {
    secretMessage.textContent = CONFIG.secretMessage;
    if (!secretUnlocked) addScore(15);
    secretUnlocked = true;
    sparkle(25);
  } else {
    secretMessage.textContent = "Not yet, Hayatyy. Hint: it is the cute name you call me.";
    sparkle(4);
  }
}

function renderTimeline() {
  timeline.innerHTML = "";
  CONFIG.memories.forEach((memory) => {
    const card = document.createElement("div");
    card.className = "memory";
    card.innerHTML = `<strong>${memory.title}</strong><p>${memory.body}</p>`;
    timeline.appendChild(card);
  });
}

function renderStars() {
  starGame.innerHTML = "";
  caughtStars = 0;
  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("button");
    star.className = "star-button";
    star.type = "button";
    star.textContent = "⭐";
    star.style.left = `${8 + Math.random() * 78}%`;
    star.style.top = `${8 + Math.random() * 72}%`;
    star.style.animationDelay = `${Math.random() * 1.5}s`;
    star.setAttribute("aria-label", "Catch star");
    star.addEventListener("click", () => {
      star.classList.add("caught");
      star.textContent = "✨";
      caughtStars += 1;
      addScore(5);
      sparkle(7);
      if (caughtStars === totalStars) addScore(10);
    }, { once: true });
    starGame.appendChild(star);
  }
}

resetGameBtn.addEventListener("click", () => {
  renderStars();
});

function addScore(points) {
  score = Math.min(100, score + points);
  meterFill.style.width = `${score}%`;
  meterText.textContent = `${score}%`;
  if (score >= 100) unlockFinal();
}

function unlockFinal() {
  finalCard.classList.remove("locked");
  finalCard.classList.add("unlocked");
  finalTitle.textContent = "Unlocked: one honest little note 💖";
  finalMessage.textContent = CONFIG.finalMessage;
  replayBtn.classList.remove("hidden");
  sparkle(36);
}

replayBtn.addEventListener("click", () => {
  score = 0;
  poemIndex = -1;
  quizIndex = 0;
  currentCouponIndex = -1;
  secretUnlocked = false;
  poemBox.textContent = "Click “New poem” to open the first one.";
  reasonBox.textContent = "Ready when you are.";
  letterBox.textContent = "Choose one little envelope above.";
  moodBox.textContent = "Waiting for your mood, Hayatyy.";
  couponDisplay.textContent = "Click below to reveal a coupon.";
  secretInput.value = "";
  secretMessage.textContent = "The secret room is waiting.";
  meterFill.style.width = "0%";
  meterText.textContent = "0%";
  finalCard.classList.add("locked");
  finalCard.classList.remove("unlocked");
  finalTitle.textContent = "Locked for now 🔐";
  finalMessage.textContent = "Reach 100% on the smile meter to unlock the final message.";
  replayBtn.classList.add("hidden");
  renderQuiz();
  renderStars();
  sparkle(14);
});

renderLetters();
renderMoods();
renderQuiz();
renderTimeline();
renderStars();
