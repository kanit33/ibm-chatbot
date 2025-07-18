const chatbox = document.getElementById("chatbox");
const input = document.getElementById("user-input");
const tipBox = document.getElementById("eco-tip");

const ecoTips = [
  "Carry a reusable shopping bag.",
  "Compost your food scraps.",
  "Switch to biodegradable packaging.",
  "Recycle old electronics responsibly.",
  "Buy only what you need — avoid overconsumption.",
  "Support brands that are eco-certified.",
  "Reduce single-use plastic products.",
  "Use cloth towels instead of paper ones."
];

function showRandomTip() {
  const randomTip = ecoTips[Math.floor(Math.random() * ecoTips.length)];
  tipBox.innerHTML = `🌱 Eco Tip: ${randomTip}`;
}

window.addEventListener("DOMContentLoaded", () => {
  appendMessage("bot", "Hi! 👋 I’m EcoBot. Ask me anything about reducing waste, sustainability, or responsible consumption!");
  showRandomTip();
});

function appendMessage(sender, message) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", sender);

  const avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = sender === "user"
    ? "https://api.dicebear.com/9.x/adventurer/svg?seed=Aneka"
    : "https://api.dicebear.com/9.x/glass/svg?seed=Aneka";

  const content = document.createElement("div");
  content.classList.add("bubble-content");
  content.innerText = message;

  bubble.appendChild(avatar);
  bubble.appendChild(content);
  chatbox.appendChild(bubble);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function quickAsk(msg) {
  input.value = msg;
  sendMessage();
}

async function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  appendMessage("bot", "⏳ Thinking...");
  const placeholderIndex = chatbox.children.length - 1;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    chatbox.children[placeholderIndex].remove(); // remove typing

    if (data.reply) {
      appendMessage("bot", data.reply);
    } else {
      appendMessage("bot", "Sorry, I didn’t get a response.");
    }
  } catch (error) {
    console.error(error);
    chatbox.children[placeholderIndex].remove();
    appendMessage("bot", "⚠️ Error reaching the server.");
  }
}

function startQuiz() {
  const quiz = [
    {
      q: "Which of the following is biodegradable?",
      a: ["Plastic bottle", "Aluminum can", "Banana peel", "Styrofoam"],
      c: 2
    },
    {
      q: "What does the 3 R’s stand for?",
      a: ["Recycle, React, Refuse", "Reduce, Reuse, Recycle", "Refill, Reuse, Rewire", "Reboot, Reload, Refresh"],
      c: 1
    }
  ];

  let score = 0;
  quiz.forEach((qObj, i) => {
    const userAnswer = prompt(`${i + 1}. ${qObj.q}\n${qObj.a.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}`);
    if (parseInt(userAnswer) - 1 === qObj.c) score++;
  });

  alert(`🌿 You scored ${score}/${quiz.length} on the Eco Quiz!`);
}
