import s from "./styles.css";

const articles = [
  {
    date: "01.01.16",
    hasMore: false,
    content: `Vestibulum semper convallis mauris vitae lobortis.
      Pellentesque lobortis sem a cursus varius.
      Phasellus dignissim diam eget lectus cursus finibus.
    `
  },
  {
    date: "03.01.16",
    hasMore: true,
    content: `Nam placerat tellus vitae rhoncus
      ornare. Suspendisse scelerisque lorem id turpis efficitur
      facilisis. Vivamus enim magna, hendrerit id rutrum at, euismod
      ac orci.
    `
  },
  {
    date: "08.01.16",
    hasMore: true,
    content: `Maecenas sed orci turpis. Donec pretium lorem in purus porta
      hendrerit. Praesent at placerat lacus, ac ultrices ligula. Cras
      at consequat velit. Vivamus dapibus metus at nisl imperdiet
      imperdiet.
    `
  }
];

function Article(article) {
  return `<div class="${s.article}">
    <h3 class="${s.date}">${article.date}</h3>
    <div class="${s.text}">
      <p>${article.content}</p>
    </div>
    ${article.hasMore ? `<a class="${s.link}" href="#">Read more...</a>` : ""}
  </div>`;
}

export default function News() {
  return `<div class="${s.news}">
      <div class="${s.title}">News</div>
      ${articles.map(article => Article(article)).join("\n")}
  </div>`;
}
