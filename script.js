
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const windowEl = document.getElementById("chat-window");

  const addMessage = (text, from) => {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.background = from === "bot" ? "#dcfce7" : "#e5e7eb";
    msg.style.margin = "4px 0";
    msg.style.padding = "6px 8px";
    msg.style.borderRadius = "8px";
    msg.style.alignSelf = from === "bot" ? "flex-start" : "flex-end";
    windowEl.appendChild(msg);
    windowEl.scrollTop = windowEl.scrollHeight;
  };

  addMessage("Привет! Я — помощник LiveGood. Задай свой вопрос, и я постараюсь помочь 💬", "bot");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, "user");
    input.value = "";

    addMessage("Думаю...", "bot");

    // Подключение к API (заглушка)
    setTimeout(() => {
      windowEl.lastChild.textContent = "Извините, сервер временно недоступен.";
    }, 1500);
  });
});
