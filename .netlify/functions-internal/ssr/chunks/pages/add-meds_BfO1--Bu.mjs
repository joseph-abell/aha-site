import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main } from './add-hymn_BluiqCWE.mjs';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();
const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_KEY || "");

const $$Astro$1 = createAstro();
const partial = true;
const $$AddMeds$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AddMeds$1;
  const id = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  let breakfast = "";
  let lunch = "";
  let dinner = "";
  let carbs = "";
  const { data, error } = await supabase.from("medicineTracker").select().eq("id", id).maybeSingle();
  if (error) {
    console.error("Error fetching medicine intake:", error);
  } else {
    if (data) {
      breakfast = data.breakfast;
      lunch = data.lunch;
      dinner = data.dinner;
      carbs = data.carbs;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="container"> <title>Add Medicine - Joseph Abell</title> <h1>Add Medicine</h1> <noscript> <p>The form I use to fill in my medication uses JS while sending the data to the database. As your browser does not support JS, I've hidden the form.</p> <style>
            .scriptDependant {
                display: none;
            }
        </style> </noscript> <form hx-post="/api/post-meds" hx-push-url="/doodles/meds" hx-target="#main" class="scriptDependant"> <input type="hidden" name="'id"${addAttribute(id, "value")}> <p> <label> <input type="checkbox"${addAttribute(breakfast, "checked")} name="breakfast">
Breakfast
</label> </p> <p> <label> <input type="checkbox"${addAttribute(lunch, "checked")} name="lunch">
Lunch
</label> </p> <p> <label> <input type="checkbox"${addAttribute(dinner, "checked")} name="dinner">
Dinner
</label> </p> <input type="hidden"${addAttribute(carbs, "value")} name="carbs"> <p> <button type="submit">Submit</button> </p> </form> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/add-meds.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/add-meds.astro";
const $$url$1 = "/api/add-meds";

const addMeds$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddMeds$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$AddMeds = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddMeds;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Add Meds - Joseph Abell", "description": "Add medicine my medicine tracker" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$AddMeds$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/add-meds.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/add-meds.astro";
const $$url = "/add-meds";

const addMeds = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddMeds,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { addMeds$1 as a, addMeds as b, supabase as s };
