import s from "./styles.css";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

export default function App() {
  return `<!DOCTYPE html>
    <html>
    <head>
        <title>Holy Grail Markup</title>
        <link rel="stylesheet" href="build/style.css">
    </head>
    <body>
      <div class=${s.wrapper}>
        ${Header()}
        ${Main()}
        ${Footer()}
      </div>
    </body>
    </html>`;
}
