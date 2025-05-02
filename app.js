
const root = document.getElementById("root");

root.innerHTML = \`
  <div style="position: fixed; bottom: 20px; right: 20px; width: 350px; background: white; border: 2px solid #22c55e; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); overflow: hidden; display: flex; flex-direction: column;">
    <div style="background: #16a34a; color: white; padding: 10px 15px; font-weight: bold;">LiveGood Ассистент</div>
    <div id="chat" style="padding: 10px; flex: 1; max-height: 300px; overflow-y: auto;"></div>
    <form id="form" style="display: flex; border-top: 1px solid #ccc;">
      <input type="text" id="input" placeholder="Напиши свой вопрос..." style="flex: 1; padding: 10px; border: none;" />
      <button type="submit" style="background: #16a34a; color: white; padding: 0 15px; border: none;">Отпр.</button>
    </form>
  </div>
\`;

const form = document.getElementById("form");
const input = document.getElementById("input");
const chat = document.getElementById("chat");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const question = input.value.trim();
  if (!question) return;

  chat.innerHTML += \`<div style="text-align: right; margin: 5px 0;">🧑 \${question}</div>\`;
  input.value = "";

  chat.innerHTML += \`<div style="color: #666; margin: 5px 0;">🤖 Думаю...</div>\`;

  const res = await fetch("https://livegood-assistant.vercel.app/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  const answer = data.answer || "Упс! Что-то пошло не так.";
  chat.innerHTML += \`<div style="color: #000; margin: 5px 0;">🤖 \${answer}</div>\`;
  chat.scrollTop = chat.scrollHeight;
});
