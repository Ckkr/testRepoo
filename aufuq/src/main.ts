import "./style.css";
import { content, type Language } from "./content";

const app = document.querySelector<HTMLDivElement>("#app")!;
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const diagonal =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const asterisk =
  '<svg viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M30 3v54M3 30h54M11 11l38 38M11 49l38-38" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>';
const mark =
  '<svg viewBox="0 0 46 38" fill="none" aria-hidden="true"><path d="M7 25a16 16 0 0 1 32 0" stroke="currentColor" stroke-width="4"/><path d="M2 32h42" stroke="currentColor" stroke-width="3"/></svg>';
let language: Language = "en";
try {
  if (localStorage.getItem("aufuq-language") === "ar") language = "ar";
} catch {
  /* The site works without storage. */
}
let lastTrigger: HTMLElement | null = null;

function landscape() {
  return `<svg class="landscape" viewBox="0 0 600 620" fill="none" aria-hidden="true">
    <defs><clipPath id="landscape-clip"><rect width="600" height="620" rx="4"/></clipPath><pattern id="grain" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".55" fill="#183b42" opacity=".06"/></pattern></defs>
    <g clip-path="url(#landscape-clip)"><path fill="#dce4e4" d="M0 0h600v620H0z"/><circle cx="335" cy="226" r="115" fill="#ef8065"/>
    <path d="M0 354h600" stroke="#183b42" opacity=".25"/><path d="M0 402c107-123 180-157 282-60 97 92 220 71 318-3v281H0Z" fill="#b6c8be"/>
    <path d="M-61 704c-28-182 65-318 197-334 130-15 192 180 316 180 73 0 123-50 198-37v169Z" fill="#315b5c"/>
    <path d="M-45 713c-17-123 28-238 147-255 132-20 152 164 284 174 85 6 128-26 239-6" stroke="#ebeee0" stroke-opacity=".32"/>
    <path d="M-45 683c-17-123 28-238 147-255 132-20 152 164 284 174 85 6 128-26 239-6M-45 653c-17-123 28-238 147-255 132-20 152 164 284 174 85 6 128-26 239-6" stroke="#ebeee0" stroke-opacity=".32"/>
    <path d="M279 620c68-161 180-227 321-207v207Z" fill="#173b42"/>
    <path d="M336 620c62-123 151-170 264-155M367 620c55-100 134-139 233-127M399 620c49-77 114-108 201-99" stroke="#edf0df" stroke-opacity=".28"/>
    <path d="M60 92h28m-14-14v28" stroke="#183b42" stroke-width="1.2"/><circle cx="74" cy="92" r="25" stroke="#183b42" stroke-opacity=".25"/>
    <path d="M506 87h38M525 68v38" stroke="#183b42" stroke-opacity=".35"/><path fill="url(#grain)" d="M0 0h600v620H0z"/></g></svg>`;
}

function serviceArt(index: number) {
  const shapes = [
    '<circle cx="55" cy="55" r="36"/><circle cx="55" cy="55" r="23"/><circle cx="55" cy="55" r="10"/><path d="M55 6v17m0 64v17M6 55h17m64 0h17"/>',
    '<path d="M19 88V23h65v65H19Zm14-14V9h65v65H33Z"/><path d="m19 23 65 65M33 9l65 65"/>',
    '<path d="M10 82c0-37 21-63 47-63s47 26 47 63M25 82c0-28 14-48 32-48s32 20 32 48M41 82c0-19 7-33 16-33s16 14 16 33M10 90h94"/>',
  ];
  return `<svg class="service-art" viewBox="0 0 114 114" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">${shapes[index]}</svg>`;
}

function render() {
  const t = content[language];
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.title = isArabic ? "أفق — رؤية أوسع" : "Aufuq — A wider perspective";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t.heroText);
  app.innerHTML = `
    <a class="skip-link" href="#main">${t.skip}</a>
    <header class="header container" id="top">
      <a class="brand" href="#top" aria-label="Aufuq / أفق">${mark}<span>aufuq<span class="brand-dot">.</span></span></a>
      <nav class="desktop-nav" aria-label="${isArabic ? "القائمة الرئيسية" : "Main navigation"}">
        <a href="#about">${t.nav.about}</a><a href="#services">${t.nav.services}</a><a href="#approach">${t.nav.approach}</a>
      </nav>
      <div class="header-actions"><button class="language-button" type="button" data-language lang="${isArabic ? "en" : "ar"}">${t.language}<span aria-hidden="true">◎</span></button><a class="header-cta" href="#contact">${t.nav.contact}${diagonal}</a><button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${isArabic ? "فتح القائمة" : "Open menu"}"><span></span><span></span></button></div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="${isArabic ? "قائمة الجوال" : "Mobile navigation"}" hidden><a href="#about">${t.nav.about}</a><a href="#services">${t.nav.services}</a><a href="#approach">${t.nav.approach}</a><a href="#contact">${t.nav.contact}</a></nav>
    </header>
    <main id="main">
      <section class="hero container" aria-labelledby="hero-title">
        <div class="hero-content"><p class="eyebrow"><span class="status-dot"></span>${t.eyebrow}</p><h1 id="hero-title">${t.heroLine1}<br><span>${t.heroLine2}</span></h1><p class="hero-description">${t.heroText}</p><div class="hero-actions"><a class="button button-dark" href="#services">${t.explore}${arrow}</a><a class="text-link" href="#contact">${t.start}${diagonal}</a></div><div class="hero-footnote"><span class="small-star">${asterisk}</span><span>${t.bottomNote}</span></div></div>
        <div class="hero-art">${landscape()}<div class="art-caption"><span>${t.orbitTop}</span><span>01 — ∞</span></div><div class="art-wordmark" aria-hidden="true">أفق</div><div class="art-bottom"><span>${t.orbitBottom}</span>${diagonal}</div></div>
      </section>
      <div class="principles container">${t.principles.map((principle, i) => `<span>${i > 0 ? '<i aria-hidden="true">✦</i>' : ""}${principle}</span>`).join("")}</div>
      <section class="about container section-space" id="about"><div class="section-label"><span>01 /</span> ${t.aboutLabel}</div><div class="about-main"><h2>${t.aboutTitle}</h2><div class="about-columns"><p>${t.aboutText}</p><p class="muted">${t.aboutAside}</p></div></div></section>
      <section class="services section-space" id="services"><div class="container"><div class="section-heading"><div><p class="section-label"><span>02 /</span> ${t.servicesLabel}</p><h2>${t.servicesTitle}</h2></div><p>${t.servicesIntro}</p></div><div class="service-grid">${t.services.map((service, i) => `<article class="service-card"><div class="card-top"><span>0${i + 1}</span>${serviceArt(i)}</div><h3>${service.title}</h3><p>${service.text}</p><div class="tags">${service.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><a class="service-link" href="#contact" data-service="${i}"><span>${t.start}</span>${diagonal}</a></article>`).join("")}</div></div></section>
      <section class="approach container section-space" id="approach"><div class="approach-heading"><p class="section-label"><span>03 /</span> ${t.approachLabel}</p><h2>${t.approachTitle}</h2><p>${t.approachText}</p><div class="approach-symbol" aria-hidden="true">${mark}<span>∞</span></div></div><div class="steps">${t.steps.map((step, i) => `<details ${i === 0 ? "open" : ""}><summary><span class="step-number">0${i + 1}</span><h3>${step.title}</h3><span class="step-plus" aria-hidden="true">+</span></summary><p>${step.text}</p></details>`).join("")}</div></section>
      <section class="contact-wrap" id="contact"><div class="contact container"><div class="contact-copy"><p class="section-label"><span>04 /</span> ${t.contactLabel}</p><h2>${t.contactTitle}</h2><p>${t.contactText}</p><span class="contact-asterisk">${asterisk}</span></div><form id="brief-form"><div class="form-row"><label>${t.form.name}<input name="name" autocomplete="name" maxlength="100" placeholder="${t.form.namePlaceholder}" required></label><label>${t.form.email}<input name="email" type="email" autocomplete="email" maxlength="254" placeholder="${t.form.emailPlaceholder}" required></label></div><label>${t.form.service}<select name="service" required><option value="" disabled selected>${t.form.servicePlaceholder}</option>${t.services.map((service, i) => `<option value="${i}">${service.title}</option>`).join("")}</select></label><label>${t.form.idea}<textarea name="idea" rows="3" maxlength="3000" placeholder="${t.form.ideaPlaceholder}" required></textarea></label><button type="submit" class="button button-coral">${t.form.submit}${arrow}</button><p class="form-hint">${t.form.hint}</p></form></div></section>
    </main>
    <footer class="footer container"><a class="brand" href="#top" aria-label="Aufuq / أفق">${mark}<span>aufuq<span class="brand-dot">.</span></span></a><p>${t.footerLine}</p><a class="back-top" href="#top">${t.backTop}<span aria-hidden="true">↑</span></a></footer>
    <dialog id="brief-dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description"><button type="button" class="dialog-close" aria-label="${t.dialog.close}">×</button><p class="eyebrow">${t.dialog.eyebrow}</p><h2 id="dialog-title">${t.dialog.title}</h2><p id="dialog-description">${t.dialog.description}</p><pre id="brief-preview"></pre><div class="dialog-actions"><button type="button" class="button button-dark" id="copy-brief">${t.dialog.copy}${arrow}</button><button type="button" class="button button-outline" id="download-brief">${t.dialog.download}</button></div><p class="copy-status" role="status" aria-live="polite"></p></dialog>`;
  bindEvents();
}

function bindEvents() {
  const t = content[language];
  document
    .querySelector<HTMLButtonElement>("[data-language]")!
    .addEventListener("click", () => {
      const values = new FormData(
        document.querySelector<HTMLFormElement>("#brief-form")!,
      );
      language = language === "en" ? "ar" : "en";
      try {
        localStorage.setItem("aufuq-language", language);
      } catch {
        /* Optional preference persistence. */
      }
      render();
      for (const name of ["name", "email", "service", "idea"]) {
        const element = document.querySelector<
          HTMLInputElement | HTMLSelectElement
        >(`[name="${name}"]`)!;
        element.value = String(values.get(name) || "");
      }
      document
        .querySelector<HTMLButtonElement>("[data-language]")!
        .focus({ preventScroll: true });
    });
  const menuButton = document.querySelector<HTMLButtonElement>(".menu-button")!;
  const mobileNav = document.querySelector<HTMLElement>("#mobile-nav")!;
  const closeMenu = () => {
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  };
  menuButton.addEventListener("click", () => {
    mobileNav.hidden = !mobileNav.hidden;
    menuButton.setAttribute("aria-expanded", String(!mobileNav.hidden));
  });
  mobileNav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document
    .querySelectorAll<HTMLAnchorElement>("[data-service]")
    .forEach((link) =>
      link.addEventListener("click", () => {
        document.querySelector<HTMLSelectElement>('[name="service"]')!.value =
          link.dataset.service!;
      }),
    );
  document
    .querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >("#brief-form input, #brief-form select, #brief-form textarea")
    .forEach((field) => {
      field.addEventListener("input", () => field.setCustomValidity(""));
      field.addEventListener("invalid", () =>
        field.setCustomValidity(
          field.validity.typeMismatch ? t.form.emailInvalid : t.form.required,
        ),
      );
    });
  const dialog = document.querySelector<HTMLDialogElement>("#brief-dialog")!;
  let brief = "";
  document
    .querySelector<HTMLFormElement>("#brief-form")!
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      for (const name of ["name", "email", "idea"]) {
        const field = form.elements.namedItem(name) as HTMLInputElement;
        field.value = field.value.trim();
      }
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const service = t.services[Number(data.get("service"))].title;
      brief = `${t.brief.heading}\n${"—".repeat(28)}\n\n${t.brief.name}: ${data.get("name")}\n${t.brief.email}: ${data.get("email")}\n${t.brief.service}: ${service}\n\n${t.brief.idea}\n${data.get("idea")}\n`;
      document.querySelector("#brief-preview")!.textContent = brief;
      document.querySelector(".copy-status")!.textContent = "";
      lastTrigger = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      dialog.showModal();
    });
  document
    .querySelector(".dialog-close")!
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        dialog.close();
    }
  });
  dialog.addEventListener("close", () =>
    lastTrigger?.focus({ preventScroll: true }),
  );
  document.querySelector("#copy-brief")!.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(brief);
      document.querySelector(".copy-status")!.textContent = t.dialog.copied;
    } catch {
      document.querySelector(".copy-status")!.textContent = t.dialog.copyFailed;
    }
  });
  document.querySelector("#download-brief")!.addEventListener("click", () => {
    const blob = new Blob(["\ufeff", brief], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `aufuq-project-brief-${language}.txt`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  document.onkeydown = (event) => {
    if (event.key === "Escape" && !mobileNav.hidden) {
      closeMenu();
      menuButton.focus();
    }
  };
}

render();
