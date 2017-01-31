import s from "./styles.css";

export default function Header() {
  return `<div class="${s.root}">
      <h1 class="${s.title}">CompanyName</h1>
      <form class="${s.search}">
          <label class="${s.label}">Type to search:
              <input class="${s.field}" type="text">
          </label>
          <button class="${s.button}" type="submit">Search</button>
      </form>
  </div>`;
}
