import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_HulZOjYu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Main } from './add-hymn_BluiqCWE.mjs';

const $$Astro$1 = createAstro();
const partial = true;
const $$Cv$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cv$1;
  return renderTemplate`<title>CV - Joseph Abell</title>${maybeRenderHead()}<div class="container"> <h1>CV - Joseph Abell</h1> <p>I'm Joseph Abell, a Lead Software Engineer with 11 years experience. I'm currently working at Tesco Bank in a remote role. I also develop websites for my wife's company, Abell Design, when time allows.</p><p>I've been learning both SolidJS and Rust, and they are becoming my favourite tools to work with.</p> <h2>Contact</h2> <p>Joseph Abell - jobs@josephabell.co.uk</p> <h2>Places I've worked</h2> <h3>Tesco Bank - Engineering Lead</h3> <p>Sep 2023 - Current</p> <p>My current role at Tesco Bank is to be Engineering Lead for the Savings and Debit Card teams. As a relatively new member of this team, I'm learning how to do the job my way. My main focus is to help grow the team in size and knowledge of agile methodologies, to be the main spokesperson for the technology we use, and do make sure that people within the team find working at Tesco Bank to be fulfilling and worthwhile. If I write code at all, it is to unblock thorny problems for others, and let them take over when the work becomes manageable.</p> <h3>Tesco Bank - Senior Software Engineer</h3> <p>Feb 2022 - Sep 2023</p> <p>My role at Tesco Bank changed rapidly from a full stack developer into leading my own team, code shepherding, mentoring and organising work for 8 devs and 6 QA. We are rewriting the Motor Insurance onboarding form using internal tools built on Node and React as the primary technologies. My favourite parts of this role are less on the code, more on mentoring, organising the team so we don't trip over each other's work, and managing team members.</p> <h3>Isotoma - Full Stack Typescript Developer</h3> <p>Feb 2020 - Feb 2022</p> <p>I spent my time at Isotoma as a full stack developer working on complex web applications. As the teams at Isotoma are small, I was trusted to deliver all aspects of web apps. My tech stack was React, Typescript, AWS lambda, and dynamodb, amongst others.</p> <h3>Netsells - Senior Javascript Developer</h3> <p>September 2019 - Feb 2020</p> <p>My role at Netsells was to write the frontend for Vue apps.</p> <h3>Piksel - Senior Javascript Developer</h3> <p>March 2015 - September 2019</p> <p>My job at Piksel changed over time, I was there a while, but at the end I helped a large, multi-national team of 20+ developers to create a custom CMS for media companies. I helped take an old Angular 1.5 app and rewrote it into a react app. I thoroughly enjoyed working with a team of developers from Spain and Vietnam.</p> <p>Also at Piksel I helped write a white label Video on Demand application for web, android, ios and televisions.</p> <h3>Purenet, and their sister company Agency51 - Frontend Developer</h3> <p>December 2012 - March 2015</p> <p>My role was to deliver whitelabel ecommerce sites, with a focus on accessibility.</p> <h2>Education</h2> <p>BA (Hons) English. University of Cumbria, Lancaster. 2011 - 2013</p> <h2>References</h2> <p>Available on request.</p> </div>`;
}, "/Users/joe/dev/aha-site/src/pages/api/cv.astro", void 0);

const $$file$1 = "/Users/joe/dev/aha-site/src/pages/api/cv.astro";
const $$url$1 = "/api/cv";

const cv$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cv$1,
    file: $$file$1,
    partial,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "title": "CV - Joseph Abell", "description": "CV for Joseph Abell, a Lead Software Engineer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main"> ${renderComponent($$result2, "Content", $$Cv$1, {})} </main> ` })}`;
}, "/Users/joe/dev/aha-site/src/pages/cv.astro", void 0);

const $$file = "/Users/joe/dev/aha-site/src/pages/cv.astro";
const $$url = "/cv";

const cv = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cv,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { cv as a, cv$1 as c };
