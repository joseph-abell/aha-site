import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main } from './add-hymn_BluiqCWE.mjs';

const $$Astro$7 = createAstro();
const $$Sketch001 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Sketch001;
  return renderTemplate`${maybeRenderHead()}<div id="sketch001"></div> `;
}, "/Users/joe/dev/aha-site/src/components/Sketch001.astro", void 0);

const $$Astro$6 = createAstro();
const $$Sketch002 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sketch002;
  return renderTemplate`${maybeRenderHead()}<div id="sketch002"></div> `;
}, "/Users/joe/dev/aha-site/src/components/Sketch002.astro", void 0);

const $$Astro$5 = createAstro();
const $$Sketch003 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sketch003;
  return renderTemplate`${maybeRenderHead()}<div id="sketch003"></div> `;
}, "/Users/joe/dev/aha-site/src/components/Sketch003.astro", void 0);

const $$Astro$4 = createAstro();
const $$Sketch004 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sketch004;
  return renderTemplate`${maybeRenderHead()}<div id="sketch004"></div> `;
}, "/Users/joe/dev/aha-site/src/components/Sketch004.astro", void 0);

const $$Astro$3 = createAstro();
const $$Sketch005 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sketch005;
  return renderTemplate`${maybeRenderHead()}<div id="sketch005"></div> `;
}, "/Users/joe/dev/aha-site/src/components/Sketch005.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sketch006 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sketch006;
  return renderTemplate`${maybeRenderHead()}<div id="sketch006"></div> `;
}, "/Users/joe/dev/aha-site/src/components/Sketch006.astro", void 0);

const $$Astro$1 = createAstro();
const partial = true;
const $$Sketches$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sketches$1;
  return renderTemplate`<title>Code Sketches - Joseph Abell</title>${maybeRenderHead()}<div class="container"> <h1>P5.js Sketches</h1> <noscript> <p>
I've been following along with Daniel Shiffman's Nature of Code, where you use basic
                code to replicate nature. It's a lovely little computer science book.
</p> <p>Unfortunately we rely on JavaScript to show these Sketches, and your browser does not support JS, so this page will look pretty empty.</p> <style>
                .scriptDependant { display: none; }
              </style> </noscript> <div class="scriptDependant"> <p>
I've been following along with Daniel Shiffman's Nature of Code, where you use basic
            code to replicate nature. It's a lovely little computer science book. Here are my
            P5.js sketches I've made while following along with the book.
</p> <h2>Random Walks</h2> <div${addAttribute({ display: "flex", "gap": "10px" }, "style")}> <div${addAttribute({ width: "200px" }, "style")}> ${renderComponent($$result, "Sketch001", $$Sketch001, {})} <p>Orthagonal Random Walk</p> </div> <div${addAttribute({ width: "200px" }, "style")}> ${renderComponent($$result, "Sketch002", $$Sketch002, {})} <p>8 way random walk with vectors</p> </div> <div${addAttribute({ width: "200px" }, "style")}> ${renderComponent($$result, "Sketch003", $$Sketch003, {})} <p>Perlin noise</p> </div> </div> <h2>Vectors</h2> <div${addAttribute({ display: "flex", "gap": "10px" }, "style")}> <div${addAttribute({ width: "200px" }, "style")}> ${renderComponent($$result, "Sketch004", $$Sketch004, {})} <p>Gravity</p> </div> <div${addAttribute({ width: "200px" }, "style")}> ${renderComponent($$result, "Sketch005", $$Sketch005, {})} <p>Ball follows mouse</p> </div> <div${addAttribute({ width: "200px" }, "style")}> ${renderComponent($$result, "Sketch006", $$Sketch006, {})} <p>Click sketch, then use WASD to control ball</p> </div> </div> </div> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/doodles/sketches.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/doodles/sketches.astro";
const $$url$1 = "/api/doodles/sketches";

const sketches$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Sketches$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Sketches = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sketches;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Code Sketches - Joseph Abell" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Sketches$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/doodles/sketches.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/doodles/sketches.astro";
const $$url = "/doodles/sketches";

const sketches = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Sketches,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { sketches as a, sketches$1 as s };
