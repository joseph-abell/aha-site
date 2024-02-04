import { renderers } from './renderers.mjs';
import { manifest } from './manifest_EL-w2ct2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_pHC1TnN1.mjs');
const _page1 = () => import('./chunks/add-hymn_qa-3dAUW.mjs');
const _page2 = () => import('./chunks/add-meds_p7vfkHNT.mjs');
const _page3 = () => import('./chunks/index_CXSexPlA.mjs');
const _page4 = () => import('./chunks/add-hymn_8MJ58jHz.mjs');
const _page5 = () => import('./chunks/add-meds_bKZKzSsA.mjs');
const _page6 = () => import('./chunks/cv_M9hTSknD.mjs');
const _page7 = () => import('./chunks/index_bJGkB5A8.mjs');
const _page8 = () => import('./chunks/meds_VbJd6bKF.mjs');
const _page9 = () => import('./chunks/sketches_u-BEB-fI.mjs');
const _page10 = () => import('./chunks/themes__p1ijOEM.mjs');
const _page11 = () => import('./chunks/hymns_XV_d6LOC.mjs');
const _page12 = () => import('./chunks/post-hymn_VYlCBxqI.mjs');
const _page13 = () => import('./chunks/post-meds_fxAvgUXZ.mjs');
const _page14 = () => import('./chunks/index_Bo8pP0GS.mjs');
const _page15 = () => import('./chunks/cv_JBrYXgDO.mjs');
const _page16 = () => import('./chunks/index_FWJUjWsq.mjs');
const _page17 = () => import('./chunks/meds_dT_U7gza.mjs');
const _page18 = () => import('./chunks/sketches_OHLUvIQh.mjs');
const _page19 = () => import('./chunks/themes_ryxFvRDt.mjs');
const _page20 = () => import('./chunks/hymns_phmZtlGc.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/add-hymn.astro", _page1],
    ["src/pages/add-meds.astro", _page2],
    ["src/pages/api/index.astro", _page3],
    ["src/pages/api/add-hymn.astro", _page4],
    ["src/pages/api/add-meds.astro", _page5],
    ["src/pages/api/cv.astro", _page6],
    ["src/pages/api/doodles/index.astro", _page7],
    ["src/pages/api/doodles/meds.astro", _page8],
    ["src/pages/api/doodles/sketches.astro", _page9],
    ["src/pages/api/doodles/themes.astro", _page10],
    ["src/pages/api/hymns.astro", _page11],
    ["src/pages/api/post-hymn.astro", _page12],
    ["src/pages/api/post-meds.astro", _page13],
    ["src/pages/index.astro", _page14],
    ["src/pages/cv.astro", _page15],
    ["src/pages/doodles/index.astro", _page16],
    ["src/pages/doodles/meds.astro", _page17],
    ["src/pages/doodles/sketches.astro", _page18],
    ["src/pages/doodles/themes.astro", _page19],
    ["src/pages/hymns.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
