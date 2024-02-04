import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { s as supabase } from './add-meds_BfO1--Bu.mjs';
import { $ as $$Meds } from './meds_RcLDM3sM.mjs';

const $$Astro = createAstro();
const partial = true;
const $$PostMeds = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostMeds;
  const reader = Astro2.request.body?.getReader();
  let result = "";
  const decoder = new TextDecoder("utf-8");
  const read = async () => reader?.read().then(({ done, value }) => {
    if (done)
      return;
    result += decoder.decode(value, { stream: true });
    read();
  });
  await read();
  const [id, breakfast, lunch, dinner, carbs] = result.split("&").map((i) => i.split("=")[1]);
  await supabase.from("medicineTracker").upsert({
    id,
    breakfast: breakfast === "on",
    lunch: lunch === "on",
    dinner: dinner === "on",
    carbs: Number(carbs)
  });
  return renderTemplate`${renderComponent($$result, "Meds", $$Meds, {})}`;
}, "/Users/joe/dev/aha-site/src/pages/api/post-meds.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/api/post-meds.astro";
const $$url = "/api/post-meds";

export { $$PostMeds as default, $$file as file, partial, $$url as url };
