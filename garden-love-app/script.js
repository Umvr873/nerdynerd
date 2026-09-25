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
    "I didn't want to send you another message that disappears into a chat thread, so I planted this instead.",
    "Somewhere behind that gate is a whole little garden — flowers that open into poems, postcards pinned on a line, fireflies at dusk, and a locked greenhouse.",
    "Take your time in here. There's no rush, no big speech. Just a quiet place that grew because I kept thinking about you."
  ],
  poems: [
    "You arrived in my life the way spring arrives — quietly at first, and then everything was blooming.",
    "I don't need a whole bouquet to think of you. One flower does it, every time.",
    "If I planted a garden for every reason I adore you, there wouldn't be enough land left for anything else.",
    "You are the kind of warmth that doesn't announce itself, it just settles into a room and stays.",
    "Some people water a garden. You water something in me I didn't know was thirsty.",
    "I keep this little patch of ground in my chest, and somehow it's always you growing there.",
    "You make ordinary Tuesdays smell like something blooming.",
    "If comfort had roots, I think they'd look a lot like your name.",
    "I planted this whole thing hoping one flower would make you smile the way you make everything around you softer.",
    "You are proof that some things don't need to be loud to be the most alive thing in the room.",
    "The garden gets quiet at dusk, and that's usually when I miss you the most.",
    "I'm not good with big declarations, so I built you a place instead of writing you a paragraph.",
    "If I could bottle one season and hand it to you, I'd pick the one where I met you.",
    "You make waiting for spring feel unnecessary — you're the warm weather all on your own.",
    "Every small thing I grew in here, I grew thinking it might make you smile for a second longer."
  ],
  reasons: [
    "You make people feel like they belong exactly where they are.",
    "Your laugh is the kind that convinces a whole room to lighten up.",
    "You notice small things about people, and that is a rarer gift than you realize.",
    "You are gentle with people even on days you didn't get much gentleness yourself.",
    "You make an ordinary conversation feel like it mattered.",
    "You are not just lovely to look at — you are lovely to be around.",
    "You have a way of making people feel less alone without even trying.",
    "Your kindness isn't performative, it's just who you are.",
    "You are easy to talk to and impossible to stop thinking about.",
    "You bring a kind of calm into rooms that badly need it.",
    "You make the people close to you feel chosen, on purpose.",
    "You are the kind of person someone is lucky to grow anything with."
  ],
  openWhenLetters: [
    {
      title: "Open when you miss me",
      message: "Hayatyy, if the day feels quiet and far away, come stand in this little garden for a minute. I planted it thinking of you specifically, so in a strange way, you're never really far from it — or from me. Distance can make things quiet, but it hasn't made you any less thought of."
    },
    {
      title: "Open when you're exhausted",
      message: "You don't have to keep proving how strong you are today. Some days are just for sitting still and letting things be slow. Rest, Hayatyy — you've more than earned it, and I'll still be proud of you whether today is productive or not."
    },
    {
      title: "Open when you need a smile",
      message: "Emergency garden bulletin: your smile has officially been declared the prettiest thing this place has ever grown, and no flower here is even a little bit jealous. Please smile small small for me, wherever you are right now."
    },
    {
      title: "Open when you doubt yourself",
      message: "Whatever that doubting voice is telling you today, it isn't the truth. You are capable, warm-hearted, and worth every good thing that's coming to you. One hard day doesn't undo everything wonderful you already are."
    },
    {
      title: "Open when today is a good day",
      message: "I hope this good day stretches a little longer than usual. I hope your smile feels easy and unforced. And I hope this tiny corner of the garden adds one more small, good thing to a day that's already treating you kindly."
    }
  ],
  moods: [
    { label: "I want to smile", message: "Prescription from the garden: one slow breath, one small grin, and the reminder that your Nerdy Nerd thinks about you more than is probably reasonable." },
    { label: "I feel worn out", message: "Then rest here for a second, Hayatyy. Nothing in this garden is going anywhere. You're allowed to be tired without also needing to explain it." },
    { label: "I miss you", message: "I miss you in the small, unglamorous ways — mid-sentence, mid-task, for no reason at all. If I could mail you an afternoon together, I would." },
    { label: "Motivate me", message: "You've made it through every hard day that came before today, and that's not luck — that's you. Keep going gently. I'm rooting for you, quietly and constantly." },
    { label: "Give me a poem", message: "You are a warm hour in a long week, a soft light left on for no particular reason, and someone whose name I don't get tired of thinking." }
  ],
  quiz: [
    {
      question: "What grows fastest in this garden?",
      options: ["Weeds", "My affection for you", "Tomatoes", "Confusion"],
      answer: 1,
      response: "Correct — and it's an invasive species at this point, honestly."
    },
    {
      question: "What do I like most about you?",
      options: ["Your smile", "Your kindness", "Your calm energy", "All of the above, obviously"],
      answer: 3,
      response: "Exactly right. Picking just one was never going to happen."
    },
    {
      question: "Who planted this whole garden?",
      options: ["A professional landscaper", "Your Nerdy Nerd", "A very determined squirrel", "Nobody, it grew itself"],
      answer: 1,
      response: "Correct — your very own Nerdy Nerd, reporting for gardening duty."
    },
    {
      question: "What happens when you smile?",
      options: ["The flowers open a little wider", "My whole day improves", "The bloom meter gets happier", "All of these, somehow"],
      answer: 3,
      response: "Right again. Your smile has full watering rights around here."
    },
    {
      question: "What should you remember after visiting this garden?",
      options: ["That it's just a website", "That you are genuinely cherished", "That fireflies are hard to click", "That gardens need weeding"],
      answer: 1,
      response: "Always. No amount of code can fully say it, but that's the whole point of this place."
    }
  ],
  coupons: [
    "Seed Packet 01: Redeem for one long, unhurried message from your Nerdy Nerd.",
    "Seed Packet 02: Redeem for one random compliment, delivered on a completely ordinary day.",
    "Seed Packet 03: Redeem for one gentle reminder that you're doing better than you think.",
    "Seed Packet 04: Redeem for one terrible joke, deployed exactly when the day gets too serious.",
    "Seed Packet 05: Redeem for one soft paragraph about all the reasons you're special.",
    "Seed Packet 06: Redeem for one surprise plan, thought through with actual care.",
    "Seed Packet 07: Redeem for one proud-of-you note, whenever you need to hear it."
  ],
  memories: [
    { title: "First seed", body: "I wanted this to feel less like a website and more like a small gift I'd planted just for you, with actual patience behind it." },
    { title: "Deep root", body: "You show up for me in quiet, steady ways, and you make ordinary days feel worth paying attention to." },
    { title: "Favorite bloom", body: "There's a calm, bright way you move through a room that makes everything nearby feel a little better." },
    { title: "Nerd's note", body: "This garden runs on HTML, CSS, JavaScript, and one very serious bloom algorithm quietly named after you." },
    { title: "Small truth", body: "You're not admired only for how you look — it's the way you make people feel that people actually remember." },
    { title: "Soft promise", body: "I want to keep finding small, unexpected ways to make you smile, because your happiness is not a small thing to me." }
  ],
  secretMessage: "You found the greenhouse, Hayatyy. Of course you did — you always find your way to the parts that matter. This little room only opens for you, because you're not just visiting this garden, you're the whole reason I planted it. From your Nerdy Nerd, with every quiet, careful thing I grew in here.",
  finalMessage: "I built this garden because a text message felt too small for everything I wanted to say. I wanted you to wander through something and feel cared for, thought about, and genuinely cherished — not because I said so once, but because I kept choosing to show it, one small planted thing at a time. You are not just someone I enjoy talking to; you're someone whose presence makes ordinary things feel worth noticing. I hope every poem, every postcard, every firefly, and every quiet little corner in here reminds you that you are deeply valued and completely, uniquely yours-to-me. — Your Nerdy Nerd"
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
const fireflyLayer = document.getElementById("fireflyLayer");

let poemIndex = -1;
let quizIndex = 0;
let currentCouponIndex = -1;
let score = 0;
let caughtFireflies = 0;
let quizAnswered = false;
let secretUnlocked = false;
const totalFireflies = 12;

herNameTitle.textContent = CONFIG.herName;
dashboardTitle.textContent = `${CONFIG.herName}'s little garden`;

function typeText(lines, element) {
  const text = lines.join(" ");
  let index = 0;
  element.textContent = "";
  const timer = setInterval(() => {
    element.textContent += text.charAt(index);
    index += 1;
    if (index >= text.length) clearInterval(timer);
  }, 30);
}

typeText(CONFIG.introLines, typewriter);

function sparkle(amount = 18) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");
    item.className = "firefly-particle";
    item.textContent = ["✿", "❀", "˚", "☘", "🌿", "・゚"][Math.floor(Math.random() * 6)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.animationDuration = `${6 + Math.random() * 7}s`;
    item.style.animationDelay = `${Math.random() * 2}s`;
    fireflyLayer.appendChild(item);
    setTimeout(() => item.remove(), 14000);
  }
}

setInterval(() => sparkle(3), 1900);
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
  musicBtn.textContent = !isOn ? "Garden hum: on" : "Garden hum: off";
  if (!isOn) playChime();
});

function playChime() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const notes = [493.88, 587.33, 698.46, 880.0];
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
  if (!text || text.includes("Pull a petal")) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1.0;
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
    quizFeedback.textContent = "Close, but the garden's heart says the golden answer is the right one.";
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
    couponDisplay.textContent = "Open a seed packet first, then tuck it away for later.";
    return;
  }
  couponDisplay.textContent = `${CONFIG.coupons[currentCouponIndex]} Tucked away safely by the bloom algorithm.`;
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
    secretMessage.textContent = "Not yet, Hayatyy. Hint: it's the cute name you call me.";
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
  caughtFireflies = 0;
  for (let i = 0; i < totalFireflies; i++) {
    const firefly = document.createElement("button");
    firefly.className = "star-button";
    firefly.type = "button";
    firefly.textContent = "🌟";
    firefly.style.left = `${8 + Math.random() * 78}%`;
    firefly.style.top = `${8 + Math.random() * 72}%`;
    firefly.style.animationDelay = `${Math.random() * 1.5}s`;
    firefly.setAttribute("aria-label", "Catch firefly");
    firefly.addEventListener("click", () => {
      firefly.classList.add("caught");
      firefly.textContent = "✨";
      caughtFireflies += 1;
      addScore(5);
      sparkle(7);
      if (caughtFireflies === totalFireflies) addScore(10);
    }, { once: true });
    starGame.appendChild(firefly);
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
  finalTitle.textContent = "Unlocked: one honest note from the garden 💛";
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
  poemBox.textContent = "Pull a petal to open the first one.";
  reasonBox.textContent = "Ready when you are.";
  letterBox.textContent = "Choose a postcard from the line above.";
  moodBox.textContent = "Waiting to hear how you're doing, Hayatyy.";
  couponDisplay.textContent = "Tap below to open a seed packet.";
  secretInput.value = "";
  secretMessage.textContent = "The greenhouse door is still closed.";
  meterFill.style.width = "0%";
  meterText.textContent = "0%";
  finalCard.classList.add("locked");
  finalCard.classList.remove("unlocked");
  finalTitle.textContent = "Still growing 🔐";
  finalMessage.textContent = "Reach full bloom (100%) to unlock the final note.";
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
