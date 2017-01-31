import s from "./styles.css";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

export default function App() {
  const el = document.createElement("div");
  el.className = s.wrapper;
  el.innerHTML = [ Header(), Main(), Footer() ].join("\n");
  return el;
}
