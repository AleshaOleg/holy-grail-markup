import s from "./styles.css";

const root = "https://aleshaoleg.github.io/holy-grail-markup/";
const active = "css-modules";
const separate = "raw"
const items = [
  { id: "oocss", name: "OOCSS" },
  { id: "smacss", name: "SMACSS" },
  { id: "atomic", name: "Atomic" },
  { id: "organic", name: "Organic" },
  { id: "bem-css", name: "BEM CSS" },
  { id: "bem-flexboxgrid", name: "BEM Flexbox Grid" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "raw", name: "Raw" }
];

function Link(link) {
  const activeCls = link.id === active ? s.linkActive : "";
  const separateCls = link.id === separate ? s.linkSeparate : "";
  return `<li>
    <a href="${root}${link.id}" class="${s.link} ${separateCls} ${activeCls}">
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
