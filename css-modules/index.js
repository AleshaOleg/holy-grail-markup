import App from "./app";

function render(container) {
  container.appendChild(App());
}

document.addEventListener("DOMContentLoaded", () => {
  render(document.body);
});
