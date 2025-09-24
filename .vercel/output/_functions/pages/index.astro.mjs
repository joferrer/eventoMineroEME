import { c as createComponent, r as renderTemplate, d as defineScriptVars, a as renderScript, m as maybeRenderHead, b as renderComponent, e as createAstro, f as addAttribute, g as renderHead, h as renderSlot } from '../chunks/astro/server_D97RRWjt.mjs';
import '../chunks/index_DPYU2bcR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_qob4-aT_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const LogoVerticalDark = new Proxy({"src":"/_astro/LogoVerticalDark.D_fhgDxw.png","width":1364,"height":1323,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/icons/verticales/LogoVerticalDark.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contador = createComponent(($$result, $$props, $$slots) => {
  const target = "2025-11-18T08:00:00";
  const targetDateObj = new Date(target);
  const targetFormatted = targetDateObj.toLocaleString("es-ES", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return renderTemplate(_a || (_a = __template(["", '<div data-astro-cid-gjzsgptf> <div class="countdown" id="countdown" data-astro-cid-gjzsgptf> <div class="time" data-astro-cid-gjzsgptf> <div class="box" data-astro-cid-gjzsgptf> <div id="days" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>D\xEDas</div> </div> <div class="box" data-astro-cid-gjzsgptf> <div id="hours" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>Horas</div> </div> <div class="box" data-astro-cid-gjzsgptf> <div id="minutes" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>Minutos</div> </div> <div class="box" data-astro-cid-gjzsgptf> <div id="seconds" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>Segundos</div> </div> </div> <div class="target-date mb-6" data-astro-cid-gjzsgptf>\u{1F3AF} Fecha objetivo: ', "</div> </div> </div> ", " <script>(function(){", `
  const targetDate = new Date(target).getTime();

  function launchConfetti() {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      window.addEventListener("load", () => {
        launchConfetti();
      });
      document.querySelector(".countdown").innerHTML = document.querySelector(
        ".countdown"
      ).innerHTML = \`
      <div class='final-bg mb-5'>
        <p class='text-center text-4xl font-extrabold mt-2 mb-4'
          style='animation: popIn 0.8s ease-out; font-size: 3rem;'>
          <span class="emoji">\u{1F389}</span>
          <span class="text-center text-4xl font-extrabold mt-2 mb-5 bg-gradient-to-r from-red-400 via-pink-500 to-red-500 bg-clip-text text-transparent" style="animation: popIn 0.8s ease-out; font-size: 3rem;">
          \xA1Lleg\xF3 el D\xEDa!
          </span>
        </p>
      </div>
      \`;
      launchConfetti();
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setNumber("days", days);
    setNumber("hours", hours);
    setNumber("minutes", minutes);
    setNumber("seconds", seconds);
  }

  function setNumber(id, value) {
    const el = document.getElementById(id);
    if (el.textContent !== String(value)) {
      el.textContent = value;
      el.classList.remove("pulse");
      void el.offsetWidth;
      el.classList.add("pulse");
    }
  }

  // Intersection Observer para animar cuando aparece en pantalla
  const countdownElement = document.getElementById("countdown");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countdownElement.classList.add("visible");
        } else {
          countdownElement.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(countdownElement);

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
})();<\/script> `], ["", '<div data-astro-cid-gjzsgptf> <div class="countdown" id="countdown" data-astro-cid-gjzsgptf> <div class="time" data-astro-cid-gjzsgptf> <div class="box" data-astro-cid-gjzsgptf> <div id="days" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>D\xEDas</div> </div> <div class="box" data-astro-cid-gjzsgptf> <div id="hours" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>Horas</div> </div> <div class="box" data-astro-cid-gjzsgptf> <div id="minutes" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>Minutos</div> </div> <div class="box" data-astro-cid-gjzsgptf> <div id="seconds" class="number" data-astro-cid-gjzsgptf>0</div> <div class="label" data-astro-cid-gjzsgptf>Segundos</div> </div> </div> <div class="target-date mb-6" data-astro-cid-gjzsgptf>\u{1F3AF} Fecha objetivo: ', "</div> </div> </div> ", " <script>(function(){", `
  const targetDate = new Date(target).getTime();

  function launchConfetti() {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      window.addEventListener("load", () => {
        launchConfetti();
      });
      document.querySelector(".countdown").innerHTML = document.querySelector(
        ".countdown"
      ).innerHTML = \\\`
      <div class='final-bg mb-5'>
        <p class='text-center text-4xl font-extrabold mt-2 mb-4'
          style='animation: popIn 0.8s ease-out; font-size: 3rem;'>
          <span class="emoji">\u{1F389}</span>
          <span class="text-center text-4xl font-extrabold mt-2 mb-5 bg-gradient-to-r from-red-400 via-pink-500 to-red-500 bg-clip-text text-transparent" style="animation: popIn 0.8s ease-out; font-size: 3rem;">
          \xA1Lleg\xF3 el D\xEDa!
          </span>
        </p>
      </div>
      \\\`;
      launchConfetti();
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setNumber("days", days);
    setNumber("hours", hours);
    setNumber("minutes", minutes);
    setNumber("seconds", seconds);
  }

  function setNumber(id, value) {
    const el = document.getElementById(id);
    if (el.textContent !== String(value)) {
      el.textContent = value;
      el.classList.remove("pulse");
      void el.offsetWidth;
      el.classList.add("pulse");
    }
  }

  // Intersection Observer para animar cuando aparece en pantalla
  const countdownElement = document.getElementById("countdown");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countdownElement.classList.add("visible");
        } else {
          countdownElement.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(countdownElement);

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
})();<\/script> `])), maybeRenderHead(), targetFormatted, renderScript($$result, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Contador.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ target }));
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Contador.astro", void 0);

const $$MainSlice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col text-white mt-16" data-astro-cid-pyobwupz> ${renderComponent($$result, "Image", $$Image, { "src": LogoVerticalDark, "alt": "Logo del evento minero EME 2025", "class": "w-1/2 mx-auto my-8 md:w-1/4 lg:w-1/6 transition-transform  duration-500 ease-out hover:scale-105 hover:drop-shadow-md", "data-astro-cid-pyobwupz": true })} <button class="animate-border border-2 rounded-md border-[#034561] px-6 py-3 mx-auto text-xl font-semibold transition-colors duration-1000" data-astro-cid-pyobwupz>
Inscríbete
</button> <p class="text-center mt-4 mb-2 text-xl text-white font-medium" data-astro-cid-pyobwupz>
El evento que conecta a <span class="font-bold text-white" data-astro-cid-pyobwupz>líderes</span>,
<span class="font-bold text-white" data-astro-cid-pyobwupz>empresas</span> y
<span class="font-bold text-white" data-astro-cid-pyobwupz>oportunidades mineras</span>.
</p> <p class="text-center text-2xl font-extrabold text-amber-300 mt-1 mb-3" data-astro-cid-pyobwupz>
¡NO TE LO PIERDAS!
</p> ${renderComponent($$result, "Contador", $$Contador, { "data-astro-cid-pyobwupz": true })} </section> `;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/MainSlice.astro", void 0);

const $$Astro$2 = createAstro();
const $$SliceTitulo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SliceTitulo;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center w-full max-w-3xl mx-auto" data-astro-cid-mdibqexy> <!-- Línea izquierda --> <div class="line-left" data-astro-cid-mdibqexy></div> <!-- Texto centrado --> <h2 class="px-4 text-2xl font-bold title" data-astro-cid-mdibqexy>${title}</h2> <!-- Línea derecha --> <div class="line-right" data-astro-cid-mdibqexy></div> </div> ${subtitle && renderTemplate`<p class="subtitle" data-astro-cid-mdibqexy>${subtitle}</p>`} `;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/SliceTitulo.astro", void 0);

const $$Patrocinadores = createComponent(($$result, $$props, $$slots) => {
  const logos = Array(6).fill(LogoVerticalDark);
  return renderTemplate`<!-- Script para detectar el tema -->${renderScript($$result, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Patrocinadores.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<section class="patrocinadores" data-astro-cid-z6x3xfwk> ${renderComponent($$result, "SliceTitulo", $$SliceTitulo, { "title": "Patrocinadores", "subtitle": "El Evento EME puede llevarse a cabo gracias a la colaboraci\xF3n de\u2026", "data-astro-cid-z6x3xfwk": true })} <div class="grid" data-astro-cid-z6x3xfwk> ${logos.map((logo, index) => renderTemplate`<div class="card" data-astro-cid-z6x3xfwk> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": `Patrocinador ${index + 1}`, "width": 80, "height": 80, "fit": "contain", "loading": "lazy", "data-astro-cid-z6x3xfwk": true })} </div>`)} </div> </section> `;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Patrocinadores.astro", void 0);

const logoHorizontalDark = new Proxy({"src":"/_astro/LogoHorizontalDark.B8E9sH6G.png","width":2126,"height":580,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/icons/horizontales/LogoHorizontalDark.png";
							}
							
							return target[name];
						}
					});

const logoHorizontalLight = new Proxy({"src":"/_astro/LogoHorizontalLight.D-WgdqmH.png","width":2126,"height":580,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/icons/horizontales/LogoHorizontalLight.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const { src } = logoHorizontalLight;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out bg-transparent flex justify-between"> <img id="logo-header"${addAttribute(src, "data-light")}${addAttribute(logoHorizontalDark.src, "data-dark")}${addAttribute(logoHorizontalDark.src, "src")} alt=" Logo del evento minero EME 2025" class="w-1/2 ml-3 my-4 md:w-1/6"> <a href="">MENU</a> </header> ${renderScript($$result, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/Logo.svg" media="(prefers-color-scheme: light)"><link rel="icon" type="image/svg+xml" href="/LogoDark.svg" media="(prefers-color-scheme: dark)"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description ?? "El evento minero m\xE1s importante de Norte de Santander", "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Press+Start+2P&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/layouts/Layout.astro", void 0);

const CarborBg = new Proxy({"src":"/_astro/carbon.DEKtKlCx.png","width":300,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/images/carbon.png";
							}
							
							return target[name];
						}
					});

const $$Inscripcion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen relative overflow-hidden bg-white dark:bg-[#0f0f1a] transition-colors duration-300" data-astro-cid-r2zm6yd2> <div class="relative z-10 container mx-auto px-4 py-12" data-astro-cid-r2zm6yd2> <!-- Formulario --> <div class="max-w-4xl mx-auto" data-astro-cid-r2zm6yd2> <form class="backdrop-blur-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-3xl p-6 md:p-12 shadow-xl hover:shadow-blue-500/20transition-all duration-500" id="registroForm" data-astro-cid-r2zm6yd2> ${renderComponent($$result, "SliceTitulo", $$SliceTitulo, { "title": "Registro de Asistentes", "data-astro-cid-r2zm6yd2": true })} <div class="grid md:grid-cols-2 gap-8" data-astro-cid-r2zm6yd2> <!-- Nombre completo --> <div class="md:col-span-2 group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="text" id="nombre" name="nombre_coompleto" required class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Nombre completo" data-astro-cid-r2zm6yd2> <label for="nombre" class="absolute left-0 -top-3 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Nombre completo *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Para acreditación y certificados de asistencia
</p> </div> <!-- Tipo de identidad --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <select id="tipoIdentidad" name="tipo_doc" required class="w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" data-astro-cid-r2zm6yd2> <option value="" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Seleccionar tipo</option> <option value="cedula" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Cédula de Ciudadanía</option> <option value="pasaporte" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Pasaporte</option> <option value="pasaporte" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>otro</option> </select> <label class="absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2" data-astro-cid-r2zm6yd2>
Tipo de identidad *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Para control de ingreso y certificación
</p> </div> <!-- Documento de identidad --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="text" id="documento" name="documento" required class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Documento de identidad" data-astro-cid-r2zm6yd2> <label for="documento" class="absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Documento de identidad *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Número del documento seleccionado
</p> </div> <!-- Correo electrónico --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="email" id="correo" name="correo" required class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Correo electrónico" data-astro-cid-r2zm6yd2> <label for="correo" class="absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Correo electrónico *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Donde desea recibir memorias y presentaciones del evento
</p> </div> <!-- Número de celular --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="tel" id="celular" name="celular" required class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Número de celular" data-astro-cid-r2zm6yd2> <label for="celular" class="absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Número de celular *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Para contacto antes o durante el evento si es necesario
</p> </div> <!-- Empresa o entidad --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="text" id="empresa" name="empresa_representa" required class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Empresa o entidad" data-astro-cid-r2zm6yd2> <label for="empresa" class="absolute w-[340px] left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Empresa o entidad que representa *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Nombre completo de la organización
</p> </div> <!-- Cargo o rol --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="text" id="cargo" name="cargo" required class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Cargo o rol" data-astro-cid-r2zm6yd2> <label for="cargo" class="absolute w-[340px] left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Cargo o rol dentro de la organización *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Su posición o función actual
</p> </div> <!-- Tipo de entidad --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <select id="tipoEntidad" name="tipo_entidad" required class="w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" data-astro-cid-r2zm6yd2> <option value="" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Seleccionar tipo de entidad</option> <option value="empresa_privada" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Empresa privada</option> <option value="entidad_publica" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Entidad pública</option> <option value="academia_universidad" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Academia / Universidad</option> <option value="medio_comunicacion" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Medio de comunicación</option> <option value="estudiante" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Estudiante</option> <option value="independiente_consultor" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Independiente / Consultor</option> <option value="otro" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Otro</option> </select> <label class="absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2" data-astro-cid-r2zm6yd2>
Tipo de entidad *
</label> </div> <p class="text-black/70 dark:text-white/70 text-sm mt-2 ml-2" data-astro-cid-r2zm6yd2>
Categoría que mejor describe su organización
</p> </div> <!-- Campo "Otro" (se muestra solo si selecciona "Otro") --> <div class="group" id="otroTipoEntidad" style="display: none;" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <input type="text" id="otroTipo" name="otro_tipo_entidad" class="peer w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white placeholder-transparent focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" placeholder="Especifique otro tipo" data-astro-cid-r2zm6yd2> <label for="otroTipo" class="absolute left-0 -top-3 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2 peer-placeholder-shown:text-black/50 dark:peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold transition-all duration-300" data-astro-cid-r2zm6yd2>
Especifique el tipo de entidad
</label> </div> </div> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative content" data-astro-cid-r2zm6yd2> <select id="asociada" name="asociada_asocarbonor" required class="w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" data-astro-cid-r2zm6yd2> <option value="" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Seleccionar tipo de entidad</option> <option value="si" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Si</option> <option value="no" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>No</option> <option value="no_aplica_No_se" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>No aplica / No sé</option> </select> <label class="absolute etiqueta left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2" data-astro-cid-r2zm6yd2>
¿Su organización está asociada a ASOCARBONOR? *
</label> </div> </div> <!-- Pregunta 2: Días de asistencia --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative" data-astro-cid-r2zm6yd2> <select id="asistira" name="asistira_todo" required class="w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" data-astro-cid-r2zm6yd2> <option value="" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Seleccionar tipo de entidad</option> <option value="si" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Si</option> <option value="solo_el_19_de_noviembre" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Solo el 19 de noviembre</option> <option value="solo_el_20_de_noviembre" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>
Solo el 20 de noviembre</option> </select> <label class="absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2" data-astro-cid-r2zm6yd2>
¿Asistirá los dos días del evento? *
</label> </div> </div> <!-- Pregunta 3: Boletín electrónico --> <div class="group" data-astro-cid-r2zm6yd2> <div class="relative content" data-astro-cid-r2zm6yd2> <select id="boletin" name="enviar_info" required class="w-full bg-black/5 dark:bg-white/10 border-2 border-black/20 dark:border-white/30 rounded-xl px-6 py-4 text-black dark:text-white focus:border-blue-500 focus:bg-black/10 dark:focus:bg-white/20 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/30" data-astro-cid-r2zm6yd2> <option value="" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Seleccionar tipo de entidad</option> <option value="si_quiero_mantenerme_informado" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>Sí, quiero mantenerme informado(a)</option> <option value="no_gracias" class="text-gray-800 bg-gray-100" data-astro-cid-r2zm6yd2>No, gracias</option> </select> <label class="etiqueta absolute left-0 -top-5 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent text-sm font-semibold px-2" data-astro-cid-r2zm6yd2>
¿Desea recibir el boletín electrónico de Asocarbonor? *
</label> </div> </div> </div> <!-- Botón --> <div class="mt-16 text-center" data-astro-cid-r2zm6yd2> <button type="submit" class="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-6 px-16 rounded-full text-lg shadow-2xl hover:shadow-blue-600/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group" data-astro-cid-r2zm6yd2> <span class="relative z-10 flex items-center justify-center" data-astro-cid-r2zm6yd2> <svg class="w-6 h-6 mr-3 group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-r2zm6yd2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m0 14v1m8-8h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" data-astro-cid-r2zm6yd2></path> </svg>
Registrar Asistencia
</span> <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-r2zm6yd2></div> </button> <p class="text-black/60 dark:text-white/60 text-sm mt-6 max-w-md mx-auto leading-relaxed" data-astro-cid-r2zm6yd2>
Todos los campos marcados con <span class="text-blue-500 font-semibold" data-astro-cid-r2zm6yd2>*</span> son obligatorios.
</p> </div> </form> </div> </div> ${renderScript($$result, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro?astro&type=script&index=1&lang.ts")}  </div>`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/Inscripcion.astro", void 0);

const $$EventoInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="p-2 flex flex-col items-center text-center py-8 bg-slate-100 dark:bg-[#0f0f1a] dark:text-white"> ${renderComponent($$result, "SliceTitulo", $$SliceTitulo, { "title": "Sobre EME 2025" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mt-6"> <div> <p>
El evento que reúne al sector minero–energético de la región.
                Disfruta de una <strong class="dark:text-[#2CA4BF]">experiencia única</strong> con ponentes nacionales e
                internacionales, <strong class="dark:text-[#2CA4BF]">espacios de aprendizaje y oportunidades</strong> para
                impulsar el futuro de la minería y la energía.
</p> </div> <div> <p> <strong class="dark:text-[#2CA4BF]">📅 19 y 20 de noviembre de 2025</strong> – Dos días de conferencias,
                networking y conocimiento especializado en el corazón de Norte
                de Santander, donde se darán cita los líderes que marcan
<strong class="dark:text-[#2CA4BF]">tendencia en la industria</strong>.
</p> </div> </div> <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6"> <div class="flex flex-col items-center justify-center w-36 h-32 border border-gray-300 rounded-2xl shadow-md p-4 text-center bg-white dark:bg-gray-900"> <span class="font-bold text-4xl text-[#2CA4BF] dark:text-amber-300">19 <span class="text-2xl">y</span> 20</span> <span class="font-light text-lg mt-2">
de Noviembre
</span></div> <div class="flex flex-col items-center justify-center w-36 h-32 border border-gray-300 rounded-2xl shadow-md p-4 text-center bg-white dark:bg-gray-900"> <span class="font-bold text-4xl text-[#2CA4BF] dark:text-amber-300">+25</span> <span class="font-light text-sm md:text-base leading-5 mt-2">
Ponentes nacionales e internacionales
</span> </div> <div class="flex flex-col items-center justify-center w-36 h-32 border border-gray-300 rounded-2xl shadow-md p-4 text-center bg-white dark:bg-gray-900"> <span class="font-bold text-4xl text-[#2CA4BF] dark:text-amber-300">+200</span> <span class="font-light text-lg mt-2">
Asistentes
</span> </div> <div class="flex flex-col items-center justify-center w-36 h-32 border border-gray-300 rounded-2xl shadow-md p-4 text-center bg-white dark:bg-gray-900"> <span class="font-bold text-4xl text-[#2CA4BF] dark:text-amber-300">+20</span> <span class="font-light text-lg mt-2 leading-5">
Horas de contenido
</span> </div> </div> </section>`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/EventoInfo.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="bg-[#034561] text-white text-center py-4"> <p class="text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Evento Minero EME 2025. Todos los derechos reservados.
</p> </div> </footer>`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$AgendaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AgendaCard;
  const { titulo, descripcion, imagen } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col border border-gray-300 dark:border-gray-500 rounded-lg m-2 dark:bg-[#0f0f1a] dark:text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative"> <div class="w-full top-0 rounded-t-lg overflow-hidden h-48"> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imagen, "alt": titulo, "class": "w-full h-full object-cover" })}`} </div> <div class="flex flex-col p-3 w-full"> <span class="text-2xl font-bold  text-[#034561] dark:text-[#2CA4BF]">${titulo}</span> <p class="mt-2 text-sm font-medium md:text-base leading-relaxed"> ${descripcion} </p> </div> </div>`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/AgendaCard.astro", void 0);

const NetworingImage = new Proxy({"src":"/_astro/networking.wPTKlFLT.jpeg","width":750,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/images/networking.jpeg";
							}
							
							return target[name];
						}
					});

const AcademicaImage = new Proxy({"src":"/_astro/conference.CV60ZOk9.jpg","width":600,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/images/conference.jpg";
							}
							
							return target[name];
						}
					});

const InteractiveImage = new Proxy({"src":"/_astro/interactive.DvrChInT.jpg","width":780,"height":520,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeiso/Documents/eventominero/eventominero/src/assets/images/interactive.jpg";
							}
							
							return target[name];
						}
					});

const $$AgendaInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="dark:bg-[#0f0f1a]"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-4 p-4"> ${renderComponent($$result, "AgendaCard", $$AgendaCard, { "titulo": "Escenario Acad\xE9mico \u{1F913}", "descripcion": "Un espacio \xFAnico de di\xE1logo t\xE9cnico y estrat\xE9gico que impulsa la miner\xEDa y la energ\xEDa en Norte de Santander, con foco en sostenibilidad, competitividad y transici\xF3n energ\xE9tica.", "imagen": AcademicaImage })} ${renderComponent($$result, "AgendaCard", $$AgendaCard, { "titulo": "Networking \u{1F91D}", "descripcion": "Conecta con empresarios, proveedores, inversionistas y aliados estrat\xE9gicos, relacionate y encuentra nuevas oportunidades de negocio en el sector.", "imagen": NetworingImage })} ${renderComponent($$result, "AgendaCard", $$AgendaCard, { "titulo": "Experiencias interactivas \u{1F3AF}", "descripcion": "Espacios interactivos que te invitan a descubrir el mundo minero y energ\xE9tico de forma sensorial y din\xE1mica, con experiencias, exhibiciones y tecnolog\xEDa aplicada que generan cercan\xEDa y recordaci\xF3n.", "imagen": InteractiveImage })} </div> </section>`;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/components/slice/AgendaInfo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Evento Minero EME 2025", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative min-h-fit overflow-hidden" data-astro-cid-j7pv25f6> <div class="absolute w-full h-full bg-center bg-no-repeat bg-cover -z-10 bg-zoom"${addAttribute(`background-image: url(${CarborBg.src});`, "style")} data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "MainSlice", $$MainSlice, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "EventoInfo", $$EventoInfo, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "AgendaInfo", $$AgendaInfo, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "Patrocinadores", $$Patrocinadores, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Inscripcion", $$Inscripcion, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/jeiso/Documents/eventominero/eventominero/src/pages/index.astro", void 0);

const $$file = "C:/Users/jeiso/Documents/eventominero/eventominero/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
