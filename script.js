/*
  PERSONALIZE HERE
  Change the names, final message, poems, reasons, and memories.
  Then open index.html in your browser.
*/
const CONFIG = {
  herName: "HAYATYY❤️",
  yourName: "Nerdy nerd",
  introLines: [
    "I made this little corner of the internet just to make you smile.",
    "No big speech. Just tiny poems, stars, and a few honest words.",
    "Because some people make the world feel softer — and you are one of them."
  ],
  poems: [
    "If smiles were stars, yours would teach the sky how to glow.",
    "Some people arrive like sunrise: gently, beautifully, and impossible to ignore.",
    "I asked my code for a perfect variable; it returned your name every time.",
    "You are the calm in a noisy day, the soft light after a long one.",
    "If kindness had a melody, I think it would sound a lot like you.",
    "This tiny website may be made of pixels, but every pixel is carrying care.",
    "You make ordinary moments feel like little celebrations."
  ],
  reasons: [
    "Your smile has a way of making the day feel lighter.",
    "You are kind in a way that people remember.",
    "You make simple conversations feel special.",
    "You have a beautiful energy that is hard not to notice.",
    "You are the kind of person someone feels lucky to know.",
    "You bring warmth without even trying.",
    "You are thoughtful, and that is rare."
  ],
  memories: [
    { title: "First thought", body: "I wanted this to feel like opening a tiny gift made with care." },
    { title: "Dearly beloved", body: "You are always there for me, my cheerer, and the cute Tamadi nose i just wanna grab and kiss it. I LOVE YOU DARL❤️." },
    { title: "Favorite thing", body: "Your presence has a calm, bright way of making moments better." },
    { title: "Nerd note", body: "This app runs on HTML, CSS, JavaScript, and a very serious smile algorithm." }
  ],
  finalMessage: "I built this because I wanted to give you something different: not just a message, but a little experience. I hope it makes you smile today, and reminds you that you are deeply appreciated."
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
let score = 0;
let caughtStars = 0;
const totalStars = 10;

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
  }, 35);
}

typeText(CONFIG.introLines, typewriter);

function sparkle(amount = 18) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");
    item.className = "float-heart";
    item.textContent = ["♡", "✦", "❀", "☆"][Math.floor(Math.random() * 4)];
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
  sparkle(28);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

musicBtn.addEventListener("click", () => {
  const isOn = musicBtn.getAttribute("aria-pressed") === "true";
  musicBtn.setAttribute("aria-pressed", String(!isOn));
  musicBtn.textContent = !isOn ? "Soft music: on" : "Soft music: off";
  // Browser-only gentle chime. No downloaded audio needed.
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
  addScore(10);
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
  addScore(8);
  sparkle(8);
});

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
      addScore(7);
      sparkle(7);
      if (caughtStars === totalStars) addScore(12);
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
  poemBox.textContent = "Click “New poem” to open the first one.";
  reasonBox.textContent = "Ready when you are.";
  meterFill.style.width = "0%";
  meterText.textContent = "0%";
  finalCard.classList.add("locked");
  finalCard.classList.remove("unlocked");
  finalTitle.textContent = "Locked for now 🔐";
  finalMessage.textContent = "Reach 100% on the smile meter to unlock the final message.";
  replayBtn.classList.add("hidden");
  renderStars();
  sparkle(14);
});

renderTimeline();
renderStars();
