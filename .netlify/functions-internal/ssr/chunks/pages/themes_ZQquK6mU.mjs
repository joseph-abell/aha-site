import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main } from './add-hymn_BluiqCWE.mjs';

const $$Astro$1 = createAstro();
const partial = true;
const $$Themes$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Themes$1;
  return renderTemplate`<title>Themes - Joseph Abell</title>${maybeRenderHead()}<div class="container"> <h1>Themes</h1> <noscript> <p>Sorry, we use JavaScript to change the website's themes. Your browser does not support Javascript.</p> <style>
            .themebutton {
                display: none;
            }
        </style> </noscript> <button class="themebutton" @click="theme = 'blue'">Blue</button> <button class="themebutton" @click="theme = 'bluedark'">Blue Dark</button> <button class="themebutton" @click="theme = 'magenta'">Magenta</button> <button class="themebutton" @click="theme = 'magentadark'">Magenta Dark</button> <button class="themebutton" @click="theme = 'cabaret'">Cabaret</button> <button class="themebutton" @click="theme = 'firefly'">Firefly</button> <button class="themebutton" @click="theme = 'eucalyptus'">Eucalyptus</button> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/doodles/themes.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/doodles/themes.astro";
const $$url$1 = "/api/doodles/themes";

const themes$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Themes$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Themes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Themes;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "Themes - Joseph Abell", "description": "A test to see whether I could build up theming for my website using limited client side js" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Themes$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/doodles/themes.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/doodles/themes.astro";
const $$url = "/doodles/themes";

const themes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Themes,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { themes as a, themes$1 as t };
