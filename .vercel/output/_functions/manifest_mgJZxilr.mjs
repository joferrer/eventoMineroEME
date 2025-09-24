import { q as decodeKey } from './chunks/astro/server_D97RRWjt.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CldVKr7Q.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/","cacheDir":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/node_modules/.astro/","outDir":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/dist/","srcDir":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/src/","publicDir":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/public/","buildClientDir":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/dist/client/","buildServerDir":"file:///C:/Users/jeiso/Documents/eventominero/eventominero/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.13.7_@types+node@24_5d50aeafde6607f9ff0bce75d6079036/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/registrar","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/registrar\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"registrar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/registrar.ts","pathname":"/api/registrar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.BcX3zh_-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jeiso/Documents/eventominero/eventominero/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.7_@types+node@24_5d50aeafde6607f9ff0bce75d6079036/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/registrar@_@ts":"pages/api/registrar.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_mgJZxilr.mjs","C:/Users/jeiso/Documents/eventominero/eventominero/node_modules/.pnpm/astro@5.13.7_@types+node@24_5d50aeafde6607f9ff0bce75d6079036/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BHh6XQWC.mjs","C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Contador.astro?astro&type=script&index=0&lang.ts":"_astro/Contador.astro_astro_type_script_index_0_lang.CNgPPT3K.js","C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Patrocinadores.astro?astro&type=script&index=0&lang.ts":"_astro/Patrocinadores.astro_astro_type_script_index_0_lang.DxWe1C_I.js","C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro?astro&type=script&index=0&lang.ts":"_astro/Inscripcion.astro_astro_type_script_index_0_lang.CvNwnkVr.js","C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro?astro&type=script&index=1&lang.ts":"_astro/Inscripcion.astro_astro_type_script_index_1_lang.BY3vZQMV.js","C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.9Dan3Ozx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Patrocinadores.astro?astro&type=script&index=0&lang.ts","function d(){return typeof window<\"u\"?document.documentElement.classList.contains(\"dark\")||window.matchMedia&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches:!1}function t(){const n=d(),e=document.querySelector(\".patrocinadores\");e&&(n?e.classList.add(\"dark-theme\"):e.classList.remove(\"dark-theme\"))}document.addEventListener(\"DOMContentLoaded\",t);typeof window<\"u\"&&window.matchMedia&&window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",t);typeof window<\"u\"&&new MutationObserver(t).observe(document.documentElement,{attributes:!0,attributeFilter:[\"class\"]});"],["C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const o=document.getElementById(\"tipoEntidad\"),r=document.getElementById(\"otroDiv\"),e=document.getElementById(\"otroInput\");o&&r&&e&&o.addEventListener(\"change\",function(){o.value===\"otro\"?(r.style.display=\"block\",e.required=!0):(r.style.display=\"none\",e.required=!1,e.value=\"\")});const t=document.getElementById(\"registroForm\");t?t.addEventListener(\"submit\",async a=>{a.preventDefault();const s=new FormData(t),i=Object.fromEntries(s.entries());try{(await(await fetch(\"/api/registrar\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(i)})).json()).ok?(alert(\"✅ Registro guardado correctamente\"),t.reset()):alert(\"❌ Error al guardar, intente de nuevo\")}catch(n){console.error(n),alert(\"❌ Error de conexión con el servidor\")}}):console.warn(\"⚠️ No se encontró el formulario con id 'registroForm'\")});"],["C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro?astro&type=script&index=1&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.getElementById(\"tipoEntidad\"),n=document.getElementById(\"otroTipoEntidad\"),e=document.getElementById(\"otroTipo\");t&&n&&e&&t.addEventListener(\"change\",function(){t.value===\"otro\"?(n.style.display=\"block\",e.required=!0):(n.style.display=\"none\",e.required=!1,e.value=\"\")})});"],["C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"header\"),t=document.getElementById(\"logo-header\"),a=window.matchMedia(\"(prefers-color-scheme: dark)\");console.log(a);let d=a.matches;window.addEventListener(\"scroll\",()=>{if(!d)if(window.scrollY>300){e.classList.remove(\"bg-transparent\"),e.classList.add(\"bg-white/90\",\"backdrop-blur-md\",\"shadow-md\");const s=t.getAttribute(\"data-light\");t.src=s}else{const s=t.getAttribute(\"data-dark\");t.src=s,e.classList.add(\"bg-transparent\"),e.classList.remove(\"bg-white/90\",\"backdrop-blur-md\",\"shadow-md\")}});"]],"assets":["/_astro/carbon.DEKtKlCx.png","/_astro/networking.wPTKlFLT.jpeg","/_astro/LogoVerticalDark.D_fhgDxw.png","/_astro/conference.CV60ZOk9.jpg","/_astro/interactive.DvrChInT.jpg","/_astro/LogoHorizontalDark.B8E9sH6G.png","/_astro/LogoHorizontalLight.D-WgdqmH.png","/_astro/index.BcX3zh_-.css","/favicon.svg","/Logo.svg","/LogoDark.svg","/_astro/Contador.astro_astro_type_script_index_0_lang.CNgPPT3K.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"A5R/krjkDtFs9gOoqLcH6FNcG4fHe78facUuBCWTNUw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
