
				import createSSRHandler from './entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = { name: "Astro SSR", generator: "@astrojs/netlify@5.0.1", path: "/*", preferStatic: true };
			