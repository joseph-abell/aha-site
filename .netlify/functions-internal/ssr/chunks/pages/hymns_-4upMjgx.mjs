import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { a as $$A, $ as $$Main } from './add-hymn_BluiqCWE.mjs';
import { s as supabase } from './add-meds_BfO1--Bu.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const partial = true;
const $$Hymns$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hymns$1;
  const { data, error } = await supabase.from("hymns").select();
  if (error) {
    console.error("Error fetching medicine intake:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-igvkecvr> <title>Hymns - Joseph Abell</title> <h1 data-astro-cid-igvkecvr>Hymns</h1> <p data-astro-cid-igvkecvr>
I'm learning how to play the church organ, so I can give the congregation some live music.
</p> <table data-astro-cid-igvkecvr> <thead data-astro-cid-igvkecvr> <tr data-astro-cid-igvkecvr> <th data-astro-cid-igvkecvr>Title</th> <th data-astro-cid-igvkecvr>First Line</th> <th data-astro-cid-igvkecvr>Melody</th> <th data-astro-cid-igvkecvr>Bass</th> <th data-astro-cid-igvkecvr>Both Hands</th> <th data-astro-cid-igvkecvr>Confident to play</th> </tr> </thead> <tbody data-astro-cid-igvkecvr> ${data?.map((i) => renderTemplate`<tr data-astro-cid-igvkecvr> <td data-astro-cid-igvkecvr>${i.title}</td> <td data-astro-cid-igvkecvr>${i.first_line}</td> <td data-astro-cid-igvkecvr> ${i.melody === "not_started" && renderTemplate`<div class="red_circle" data-astro-cid-igvkecvr></div>`} ${i.melody === "learning" && renderTemplate`<div class="yellow_circle" data-astro-cid-igvkecvr></div>`} ${i.melody === "learned" && renderTemplate`<div class="green_circle" data-astro-cid-igvkecvr></div>`} </td> <td data-astro-cid-igvkecvr> ${i.bass === "not_started" && renderTemplate`<div class="red_circle" data-astro-cid-igvkecvr></div>`} ${i.bass === "learning" && renderTemplate`<div class="yellow_circle" data-astro-cid-igvkecvr></div>`} ${i.bass === "learned" && renderTemplate`<div class="green_circle" data-astro-cid-igvkecvr></div>`}</td> <td data-astro-cid-igvkecvr> ${i.both_hands === "not_started" && renderTemplate`<div class="red_circle" data-astro-cid-igvkecvr></div>`} ${i.both_hands === "learning" && renderTemplate`<div class="yellow_circle" data-astro-cid-igvkecvr></div>`} ${i.both_hands === "learned" && renderTemplate`<div class="green_circle" data-astro-cid-igvkecvr></div>`} </td> <td data-astro-cid-igvkecvr> ${i.confident === false && renderTemplate`<div class="red_circle" data-astro-cid-igvkecvr></div>`} ${i.confident === true && renderTemplate`<div class="green_circle" data-astro-cid-igvkecvr></div>`} </td> </tr>`)} </tbody> </table> ${renderComponent($$result, "A", $$A, { "href": "/add-hymn", "apiHref": "/api/add-hymn", "data-astro-cid-igvkecvr": true }, { "default": ($$result2) => renderTemplate`Add Hymn` })} </div> `;
}, "/Users/joe/dev/aha-site/src/pages/api/hymns.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/hymns.astro";
const $$url$1 = "/api/hymns";

const hymns$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Hymns$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Hymns = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hymns;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Hymns - Joseph Abell", "description": "Hymns - Joseph Abell" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Hymns$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/hymns.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/hymns.astro";
const $$url = "/hymns";

const hymns = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Hymns,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hymns$1 as $, hymns as a, hymns$1 as h };
