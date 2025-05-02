
// Чат LiveGood загружается после загрузки страницы
window.onload = () => {
  const script = document.createElement('script');
  script.src = "https://centurion25.github.io/livegood-assistant/script.js";
  document.body.appendChild(script);
};
