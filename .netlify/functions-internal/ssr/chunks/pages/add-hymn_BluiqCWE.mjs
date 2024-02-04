import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                             */

const $$Astro$5 = createAstro();
const $$A = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$A;
  const { href, theme = "main" } = Astro2.props;
  const { apiHref = `/api${href}` } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(apiHref, "hx-get")}${addAttribute(href, "href")}${addAttribute(href, "hx-push-url")} hx-target="#main"${addAttribute(theme, "class")}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/joe/dev/aha-site/src/components/A.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <div class="container"> <nav class="primary"> <ul> <li> ${renderComponent($$result, "A", $$A, { "href": "/", "apiHref": "/api" }, { "default": ($$result2) => renderTemplate`JA
` })}</li> </ul> <ul> <li> ${renderComponent($$result, "A", $$A, { "href": "/cv" }, { "default": ($$result2) => renderTemplate`CV` })} </li> <li> ${renderComponent($$result, "A", $$A, { "href": "/doodles" }, { "default": ($$result2) => renderTemplate`Doodles` })} </li> </ul> </nav> </div> </header>`;
}, "/Users/joe/dev/aha-site/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="container"> <p>Made with Astro, HTMX and Alpine JS</p> </div> </footer>`;
}, "/Users/joe/dev/aha-site/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Main;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', '</title><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description"', '><link rel="stylesheet" href="/stylesheet.css"><script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"><\/script><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script><script defer src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"><\/script><script defer src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0"><\/script>', `</head> <body x-data="{ theme: $persist('firefly') }"`, "> ", " ", " ", " </body></html>"])), title, addAttribute(`${Astro2.generator}, HTMX and Alpine`, "content"), addAttribute(description, "content"), renderHead(), addAttribute(`{
			firefly: theme === 'firefly',
			blue: theme === 'blue',
			bluedark: theme === 'bluedark',
			magenta: theme === 'magenta',
			magentadark: theme === 'magentadark',
			eucalyptus: theme === 'eucalyptus',
			cabaret: theme === 'cabaret',
		}`, ":class"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/joe/dev/aha-site/src/layout/main.astro", void 0);

const $$Astro$1 = createAstro();
const partial = true;
const $$AddHymn$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AddHymn$1;
  let id = "";
  let title = "";
  let first_line = "";
  let melody = "not_learned";
  let bass = "not_learned";
  let both_hands = "not_learned";
  let confident = false;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <title>Add Hymn - Joseph Abell</title> <h1>Add Hymn</h1> <noscript> <p>The form I use to fill in hymns uses JS while sending the data to the database. As your browser does not support JS, I've hidden the form.</p> <style>
            .scriptDependant {
                display: none;
            }
        </style> </noscript> <form hx-post="/api/post-hymn" hx-push-url="/hymns" hx-target="#main" class="scriptDependant"> <p> <label> <input type="number"${addAttribute(id, "value")} name="id">
Hymn No.
</label> </p> <p> <label> <input type="text"${addAttribute(title, "value")} name="title">
Title
</label> </p> <p> <label> <input type="text"${addAttribute(first_line, "value")} name="first_line">
First Line
</label> </p> <p> <label> <input type="text"${addAttribute(melody, "value")} name="melody">
Melody
</label> </p> <p> <label> <input type="text"${addAttribute(bass, "value")} name="bass">
Bass
</label> </p> <p> <label> <input type="text"${addAttribute(both_hands, "value")} name="both_hands">
Both Hands
</label> </p> <p> <label> <input type="checkbox"${addAttribute(confident, "checked")} name="confident">
Confident
</label> </p> <p> <button type="submit">Submit</button> </p> </form> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/add-hymn.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/add-hymn.astro";
const $$url$1 = "/api/add-hymn";

const addHymn$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddHymn$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$AddHymn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddHymn;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Add Hymn - Joseph Abell", "description": "Add hymn" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$AddHymn$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/add-hymn.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/add-hymn.astro";
const $$url = "/add-hymn";

const addHymn = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddHymn,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Main as $, $$A as a, addHymn$1 as b, addHymn as c };
