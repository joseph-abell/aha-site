import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { a as $$A, $ as $$Main } from './add-hymn_BluiqCWE.mjs';

const $$Astro$3 = createAstro();
const partial$1 = true;
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <title>Joseph Abell</title> <p>
I'm Joseph Abell, an Engineering Lead for Tesco Bank. I'm originally from York, England,
        but I now live in Newcastle. I spend my time learning the pipe organ, singing, and
        playing with my three kids.
</p> <p>Life is full. just the way I like it.</p> <nav> <ul class="ctas"> <li> ${renderComponent($$result, "A", $$A, { "href": "/cv", "theme": "cta" }, { "default": ($$result2) => renderTemplate`CV` })} </li> <li> ${renderComponent($$result, "A", $$A, { "href": "/doodles/themes", "theme": "cta" }, { "default": ($$result2) => renderTemplate`Themes` })} </li> <li> ${renderComponent($$result, "A", $$A, { "href": "/doodles", "theme": "cta" }, { "default": ($$result2) => renderTemplate`Doodles` })} </li> </ul> </nav> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/index.astro", void 0);

const $$file$3 = "/Users/joe/dev/aha-site/src/pages/api/index.astro";
const $$url$3 = "/api";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    partial: partial$1,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const partial = true;
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<title>Doodles - Joseph Abell</title>${maybeRenderHead()}<div class="container"> <p>One of the things I really loved about the internet I grew up with with the whimsy of it all. Nowadays, everything is polished, edges sanded off, and a little bit boring. So here's a few fun experiments.</p> <nav> <ul> <li> ${renderComponent($$result, "A", $$A, { "href": "/doodles/themes" }, { "default": ($$result2) => renderTemplate`Themes` })} </li> <li> <a href="/doodles/sketches">Sketches</a> </li> <li> ${renderComponent($$result, "A", $$A, { "href": "/doodles/meds" }, { "default": ($$result2) => renderTemplate`Medicine Tracker` })} </li> <ul></ul></ul></nav> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/doodles/index.astro", void 0);

const $$file$2 = "/Users/joe/dev/aha-site/src/pages/api/doodles/index.astro";
const $$url$2 = "/api/doodles";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    partial,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Joseph Abell", "description": "CV and Code Doodles from Joseph Abell" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Index$3, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/index.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Doodles - Joseph Abell" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Index$2, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/doodles/index.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/doodles/index.astro";
const $$url = "/doodles";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
