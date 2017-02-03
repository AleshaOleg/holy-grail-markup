import s from "./styles.css";
import image from "./imgpsh_fullsize.jpg";

export default function Content() {
  return `<div class="${s.content}">
      <h2 class="${s.title}">About Company</h2>
      <div class="${s.article}">
          <img src="${image}" class="${s.image}" alt="Image">
          <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed erat diam, posuere rhoncus
          justo tempus, ornare vehicula lorem. Donec egestas et nisl
          non dapibus. Morbi congue, purus ac lobortis feugiat, nunc
          nulla facilisis lacus, ac laoreet urna dui a lorem. Quisque
          ligula nisi, tristique in ligula vitae, dapibus tempus lectus.</p>
          <p>Cras eget ipsum mattis, pharetra
          nulla vitae, laoreet dui.</p>
          <p>Duis in erat a lectus consequat
          auctor quis vel ligula. Quisque rhoncus sapien sit amet augue
          mollis convallis. Curabitur pharetra nunc a massa dictum, eu
          iaculis dolor egestas. Suspendisse potenti. Nam id lorem risus.
          Suspendisse potenti.</p>
      </div>
  </div>`;
}
