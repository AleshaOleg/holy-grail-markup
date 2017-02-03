import s from "./styles.css";

const root = "https://aleshaoleg.github.io/holy-grail-markup/";
const active = "css-modules";
const items = [
  { id: "atomic", name: "Atomic" },
  { id: "bem-css", name: "BEM CSS" },
  { id: "bem-flexboxgrid", name: "BEM Flexbox Grid" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "oocss", name: "OOCSS" },
  { id: "organic", name: "Organic" },
  { id: "raw", name: "Raw" },
  { id: "smacss", name: "SMACSS" }
];

function Link(link) {
  const activeCls = link.id === active ? s.linkActive : "";
  return `<li>
    <a href="${root}${link.id}" class="${s.link} ${activeCls}">
      ${link.name}
    </a>
  </li>`;
}

export default function Nav() {
  return `<div class="${s.nav}">
      <ul class="${s.list}">
          ${items.map(item => Link(item)).join("\n")}
      </ul>
  </div>`;
}
