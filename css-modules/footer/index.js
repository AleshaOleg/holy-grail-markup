import s from "./styles.css";

export default function Footer() {
  return `<div class="${s.footer}">
      <span class="${s.text}">&copy; 2016 CompanyName, Inc. All Rights Reserved.</span>
      <span class="${s.text}">Site support: <a href="mailto:design@megacorp.kk" class="${s.link}">design@megacorp.kk</a></span>
  </div>`;
}
