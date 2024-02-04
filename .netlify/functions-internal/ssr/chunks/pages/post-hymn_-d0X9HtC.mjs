import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { s as supabase } from './add-meds_BfO1--Bu.mjs';
import { $ as $$Hymns } from './hymns_-4upMjgx.mjs';

const $$Astro = createAstro();
const partial = true;
const $$PostHymn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostHymn;
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
  const [id, title, first_line, melody, bass, both_hands, confident] = result.split("&").map((i) => i.split("=")[1]);
  await supabase.from("hymns").upsert({
    id,
    title: title.split("%20").join(" ").split("%25").join(","),
    first_line: first_line.split("%20").join(" ").split("%25").join(","),
    melody,
    bass,
    both_hands,
    confident: confident === "on"
  });
  return renderTemplate`${renderComponent($$result, "Hymns", $$Hymns, {})}`;
}, "/Users/joe/dev/aha-site/src/pages/api/post-hymn.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/api/post-hymn.astro";
const $$url = "/api/post-hymn";

export { $$PostHymn as default, $$file as file, partial, $$url as url };
