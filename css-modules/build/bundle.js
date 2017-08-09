/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = App;





function App() {
  return `<!DOCTYPE html>
    <html>
    <head>
        <title>Holy Grail Markup</title>
        <link rel="stylesheet" href="build/style.css">
    </head>
    <body>
      <div class=${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.wrapper}>
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */])()}
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* default */])()}
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__footer__["a" /* default */])()}
      </div>
    </body>
    </html>`;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgpsh_fullsize_jpg__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgpsh_fullsize_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__imgpsh_fullsize_jpg__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Content;



function Content() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.content}">
      <h2 class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.title}">About Company</h2>
      <div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.article}">
          <img src="${__WEBPACK_IMPORTED_MODULE_1__imgpsh_fullsize_jpg___default.a}" class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.image}" alt="Image">
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;


function Footer() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.footer}">
      <span class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.text}">&copy; 2016 CompanyName, Inc. All Rights Reserved.</span>
      <span class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.text}">Site support: <a href="mailto:design@megacorp.kk" class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.link}">design@megacorp.kk</a></span>
  </div>`;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;


function Header() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.root}">
      <h1 class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.title}">CompanyName</h1>
      <form class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.search}">
          <label class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.label}">Type to search:
              <input class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.field}" type="text">
          </label>
          <button class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.button}" type="submit">Search</button>
      </form>
  </div>`;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = Main;





function Main() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.main}">
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nav__["a" /* default */])()}
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__content__["a" /* default */])()}
      ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__news__["a" /* default */])()}
  </div>`;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Nav;


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
  { id: "bem-bootstrap-4", name: "BEM Bootstrap 4" },
  { id: "bem-platform/pages/index", name: "BEM Platform" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "raw", name: "Raw" }
];

function Link(link) {
  const activeCls = link.id === active ? __WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.linkActive : "";
  const separateCls = link.id === separate ? __WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.linkSeparate : "";
  return `<li>
    <a href="${root}${link.id}" class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.link} ${separateCls} ${activeCls}">
      ${link.name}
    </a>
  </li>`;
}

function Nav() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.nav}">
      <ul class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.list}">
          ${items.map(item => Link(item)).join("\n")}
      </ul>
  </div>`;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);
/* harmony export (immutable) */ __webpack_exports__["a"] = News;


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
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.article}">
    <h3 class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.date}">${article.date}</h3>
    <div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.text}">
      <p>${article.content}</p>
    </div>
    ${article.hasMore ? `<a class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.link}" href="#">Read more...</a>` : ""}
  </div>`;
}

function News() {
  return `<div class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.news}">
      <h2 class="${__WEBPACK_IMPORTED_MODULE_0__styles_css___default.a.title}">News</h2>
      ${articles.map(article => Article(article)).join("\n")}
  </div>`;
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"wrapper__27cZE"};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"content__cn9jY","title":"title__RNXoc","article":"article__26caC","image":"image__3Db0t"};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"footer__1KzCG","text":"text__iv5CJ","link":"link__1QgRB"};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"root__35MYT","title":"title__2TVbb","search":"search__zpMpE","label":"label__3rwWT","field":"field__1htn2","button":"button__1Nt1V"};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"main__1ySw1"};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"nav__1T5wH","list":"list__9uEF0","link":"link__3oare","linkActive":"linkActive__2wMx1","linkSeparate":"linkSeparate__2VooR"};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"news":"news__2Tn9S","title":"title__myeSf","article":"article__1CapX","date":"date__25CE2","text":"text__35dVP","link":"link__1V2Ln"};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "530378c6893813d24e86629d754e5b1a.jpg";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);



__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync('./index.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* default */])());


/***/ })
/******/ ]);