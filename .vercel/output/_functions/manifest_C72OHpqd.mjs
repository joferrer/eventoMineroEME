import { q as decodeKey } from './chunks/astro/server_DzxmLj2l.mjs';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_fDaceE4c.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/","cacheDir":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/node_modules/.astro/","outDir":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/dist/","srcDir":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/","publicDir":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/public/","buildClientDir":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/dist/client/","buildServerDir":"file:///C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.13.8_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/registrar","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/registrar\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"registrar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/registrar.ts","pathname":"/api/registrar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.6eOqeIuv.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.8_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/registrar@_@ts":"pages/api/registrar.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C72OHpqd.mjs","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/node_modules/.pnpm/@astrojs+vercel@8.2.8_astro@5.13.8/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_BeVIss40.mjs","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/Contador.astro?astro&type=script&index=0&lang.ts":"_astro/Contador.astro_astro_type_script_index_0_lang.CNgPPT3K.js","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/MainSlice.astro?astro&type=script&index=0&lang.ts":"_astro/MainSlice.astro_astro_type_script_index_0_lang.wbiVnO0b.js","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/Patrocinadores.astro?astro&type=script&index=0&lang.ts":"_astro/Patrocinadores.astro_astro_type_script_index_0_lang.DxWe1C_I.js","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/Inscripcion.astro?astro&type=script&index=0&lang.ts":"_astro/Inscripcion.astro_astro_type_script_index_0_lang.BRXsB00S.js","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/Inscripcion.astro?astro&type=script&index=1&lang.ts":"_astro/Inscripcion.astro_astro_type_script_index_1_lang.BY3vZQMV.js","C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.9Dan3Ozx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/MainSlice.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"btnInscribete\"),o=document.getElementById(\"inscripcion\");function r(d,l=1e3){const a=d.getBoundingClientRect().top+window.scrollY,s=window.scrollY,u=a-s;let t=null;function m(n){return n<.5?2*n*n:-1+(4-2*n)*n}function i(n){t===null&&(t=n);const f=n-t,c=Math.min(f/l,1),g=m(c);window.scrollTo(0,s+u*g),c<1&&requestAnimationFrame(i)}requestAnimationFrame(i)}e&&o&&e.addEventListener(\"click\",()=>{r(o,2e3)})});"],["C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/Patrocinadores.astro?astro&type=script&index=0&lang.ts","function d(){return typeof window<\"u\"?document.documentElement.classList.contains(\"dark\")||window.matchMedia&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches:!1}function t(){const n=d(),e=document.querySelector(\".patrocinadores\");e&&(n?e.classList.add(\"dark-theme\"):e.classList.remove(\"dark-theme\"))}document.addEventListener(\"DOMContentLoaded\",t);typeof window<\"u\"&&window.matchMedia&&window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",t);typeof window<\"u\"&&new MutationObserver(t).observe(document.documentElement,{attributes:!0,attributeFilter:[\"class\"]});"],["C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/Inscripcion.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const n=document.getElementById(\"tipoEntidad\"),a=document.getElementById(\"otroDiv\"),s=document.getElementById(\"otroInput\"),r=document.getElementById(\"registroForm\"),e=document.getElementById(\"toast\"),t=document.getElementById(\"toastSuccessSound\"),o=document.getElementById(\"toastErrorSound\");n&&a&&s&&n.addEventListener(\"change\",()=>{n.value===\"otro\"?(a.style.display=\"block\",s.required=!0):(a.style.display=\"none\",s.required=!1,s.value=\"\")});function i(d,c=\"success\"){e&&(e.textContent=d,t&&(t.volume=.3),o&&(o.volume=.3),c===\"success\"?(e.className=\"fixed top-5 right-5 px-6 py-3 rounded-xl shadow-lg text-white font-semibold bg-green-600 z-50 transform translate-x-0 opacity-100 scale-105 transition-all duration-500 ease-out\",t&&(t.currentTime=0,t.play())):(e.className=\"fixed top-5 right-5 px-6 py-3 rounded-xl shadow-lg text-white font-semibold bg-red-600 z-50 transform translate-x-0 opacity-100 scale-105 transition-all duration-500 ease-out\",o&&(o.currentTime=0,o.play())),e.style.display=\"block\",setTimeout(()=>{e.classList.remove(\"scale-105\")},300),setTimeout(()=>{e.classList.add(\"translate-x-full\",\"opacity-0\"),setTimeout(()=>{e.style.display=\"none\"},500)},3500))}r&&r.addEventListener(\"submit\",async d=>{d.preventDefault();const c=new FormData(r),u=Object.fromEntries(c.entries());try{(await(await fetch(\"/api/registrar\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(u)})).json()).ok?(i(\"✅ Registro guardado correctamente\",\"success\"),r.reset()):i(\"❌ Error al guardar, intente de nuevo\",\"error\")}catch(l){console.error(l),i(\"❌ Error de conexión con el servidor\",\"error\")}})});"],["C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/slice/Inscripcion.astro?astro&type=script&index=1&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.getElementById(\"tipoEntidad\"),n=document.getElementById(\"otroTipoEntidad\"),e=document.getElementById(\"otroTipo\");t&&n&&e&&t.addEventListener(\"change\",function(){t.value===\"otro\"?(n.style.display=\"block\",e.required=!0):(n.style.display=\"none\",e.required=!1,e.value=\"\")})});"],["C:/Users/GUILLERMO/Desktop/REACT/eventoMineroEME/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"header\"),t=document.getElementById(\"logo-header\"),a=window.matchMedia(\"(prefers-color-scheme: dark)\");console.log(a);let d=a.matches;window.addEventListener(\"scroll\",()=>{if(!d)if(window.scrollY>300){e.classList.remove(\"bg-transparent\"),e.classList.add(\"bg-white/90\",\"backdrop-blur-md\",\"shadow-md\");const s=t.getAttribute(\"data-light\");t.src=s}else{const s=t.getAttribute(\"data-dark\");t.src=s,e.classList.add(\"bg-transparent\"),e.classList.remove(\"bg-white/90\",\"backdrop-blur-md\",\"shadow-md\")}});"]],"assets":["/_astro/carbon.DEKtKlCx.png","/_astro/LogoVerticalDark.D_fhgDxw.png","/_astro/CamaraComercio.DXZTr6Kb.webp","/_astro/CamaraComercioDark.DGOUSNn9.webp","/_astro/AsocarbonorDark.BUchxemO.webp","/_astro/Asocarbonor.Dt_NdxhI.webp","/_astro/networking.wPTKlFLT.jpeg","/_astro/conference.CV60ZOk9.jpg","/_astro/logoGoberna.HJ1gSvXg.webp","/_astro/interactive.DvrChInT.jpg","/_astro/logoGobernaDark.BANbZhcv.webp","/_astro/Sound.Cr60_Ixq.mp3","/_astro/LogoHorizontalDark.B8E9sH6G.png","/_astro/LogoHorizontalLight.D-WgdqmH.png","/_astro/index.6eOqeIuv.css","/favicon.svg","/Logo.svg","/LogoDark.svg","/_astro/Contador.astro_astro_type_script_index_0_lang.CNgPPT3K.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"sBDjFoghsO2KHGx7XF6hQkFiwHlz/7YdSb3VOCSZnco="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
