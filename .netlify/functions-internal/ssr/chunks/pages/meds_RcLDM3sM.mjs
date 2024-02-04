import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main } from './add-hymn_BluiqCWE.mjs';
import { s as supabase } from './add-meds_BfO1--Bu.mjs';

const $$Astro$1 = createAstro();
const partial = true;
const $$Meds$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Meds$1;
  let { data } = await supabase.from("medicineTracker").select().order("id", { ascending: false });
  const rowHeight = 7;
  return renderTemplate`<title>Medicine Tracker - Joseph Abell</title>${maybeRenderHead()}<div${addAttribute({
    width: "100%",
    height: "calc(100vh - 107px)",
    background: "#333",
    position: "relative",
    "margin-top": "-20px",
    "margin-bottom": "-20px"
  }, "style")}> ${data && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="100%"${addAttribute(data.length * 3 * 10, "height")}${addAttribute({ position: "absolute", "z-index": 0 }, "style")}> ${data.map((row, index) => {
    const breakfastHeight = index * 3 * rowHeight + rowHeight * 0.5;
    const lunchHeight = index * 3 * rowHeight + rowHeight * 0.5 + rowHeight;
    const dinnerHeight = index * 3 * rowHeight + rowHeight * 0.5 + rowHeight * 2;
    return renderTemplate`<g> <line x1="0"${addAttribute(breakfastHeight, "y1")} x2="100%"${addAttribute(breakfastHeight, "y2")}${addAttribute(row.breakfast ? "moccasin" : "black", "stroke")}${addAttribute(rowHeight, "stroke-width")}></line> <line x1="0"${addAttribute(lunchHeight, "y1")} x2="100%"${addAttribute(lunchHeight, "y2")}${addAttribute(row.lunch ? "deepskyblue" : "black", "stroke")}${addAttribute(rowHeight, "stroke-width")}></line> <line x1="0"${addAttribute(dinnerHeight, "y1")} x2="100%"${addAttribute(dinnerHeight, "y2")}${addAttribute(row.dinner ? "tomato" : "black", "stroke")}${addAttribute(rowHeight, "stroke-width")}></line> </g>`;
  })} </svg>`} <div class="container meds-container"${addAttribute({ position: "absolute", "z-index": 1, left: "50vw", "margin-left": "-40vw", "margin-top": "40px", "border": "2px solid #333", background: "white", padding: "20px" }, "style")}> <h1>Medicine Tracker</h1> <p>Each of these lines in the background show me successfully taking my diabetes medication. Yellow is for breakfast, blue is for lunch, and red is for dinner. If there are any black gaps, it shows a time where I forgot to take my meds. If the lines are in the first three lines, odds are it's because it's not time to take my meds yet.</p> </div> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/doodles/meds.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/doodles/meds.astro";
const $$url$1 = "/api/doodles/meds";

const meds$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Meds$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Meds = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Meds;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Medicine Tracker - Joseph Abell" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Meds$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/doodles/meds.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/doodles/meds.astro";
const $$url = "/doodles/meds";

const meds = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Meds,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Meds$1 as $, meds as a, meds$1 as m };
