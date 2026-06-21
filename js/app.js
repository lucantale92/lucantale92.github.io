// ===================================================
// LUCA CANTALE — Portfolio
// Two sections: Design + Development
// ===================================================

let currentLang = localStorage.getItem("portfolioLang") || "it";

// ===== SVG ICONS =====
const ICONS = {
  pen: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>',
  palette: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  box: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  image: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  printer: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  web: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  cart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  chart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  tool: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  chat: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  ebay: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
};

// ===== DESIGN SERVICES =====
const DESIGN_SERVICES = [
  { icon: ICONS.pen, page: "pages/design-logo.html", it: { name: "Logo Design", desc: "Loghi originali, professionali, versatili. Consegna in vettoriale con varianti e guidelines." }, en: { name: "Logo Design", desc: "Original, professional, versatile logos. Vector delivery with variations and guidelines." }, de: { name: "Logo Design", desc: "Originelle, professionelle und vielseitige Logos. Lieferung als Vektordatei mit Varianten und Guidelines." }, fr: { name: "Logo Design", desc: "Logos originaux, professionnels et polyvalents. Livraison en vectoriel avec variantes et charte graphique." } },
  { icon: ICONS.palette, page: "pages/design-brand.html", it: { name: "Brand Identity", desc: "Identità visiva completa: colori, tipografia, pattern, biglietti da visita, carta intestata." }, en: { name: "Brand Identity", desc: "Complete visual identity: colors, typography, patterns, business cards, letterhead." }, de: { name: "Brand Identity", desc: "Vollständige visuelle Identität: Farben, Typografie, Muster, Visitenkarten, Briefkopf." }, fr: { name: "Brand Identity", desc: "Identité visuelle complète : couleurs, typographie, motifs, cartes de visite, papier à en-tête." } },
  { icon: ICONS.box, page: "pages/design-gadget.html", it: { name: "Gadget Aziendali", desc: "Penne, tazze, shopper, t-shirt, agende e materiale promozionale brandizzato." }, en: { name: "Corporate Gadgets", desc: "Pens, mugs, bags, t-shirts, notebooks and branded promotional materials." }, de: { name: "Firmenwerbeartikel", desc: "Stifte, Tassen, Taschen, T-Shirts, Notizbücher und gebrandetes Werbematerial." }, fr: { name: "Goodies d'entreprise", desc: "Stylos, mugs, sacs, t-shirts, agendas et matériel promotionnel brandé." } },
  { icon: ICONS.image, page: "pages/design-pubblicitaria.html", it: { name: "Grafica Pubblicitaria", desc: "Flyer, banner, manifesti, grafiche social, campagne ADV per promuovere la tua attività." }, en: { name: "Advertising Graphics", desc: "Flyers, banners, posters, social graphics, ad campaigns to promote your business." }, de: { name: "Werbegrafik", desc: "Flyer, Banner, Plakate, Social-Media-Grafiken und Werbekampagnen für Ihr Unternehmen." }, fr: { name: "Graphisme publicitaire", desc: "Flyers, bannières, affiches, visuels réseaux sociaux et campagnes publicitaires." } },
  { icon: ICONS.printer, page: "pages/design-editoriale.html", it: { name: "Grafica Editoriale", desc: "Brochure, cataloghi, riviste, menu, lookbook. Impaginazione professionale pronta per la stampa." }, en: { name: "Editorial Design", desc: "Brochures, catalogs, magazines, menus, lookbooks. Professional layout ready for print." }, de: { name: "Editorial Design", desc: "Broschüren, Kataloge, Magazine, Speisekarten, Lookbooks. Professionelles Layout druckfertig." }, fr: { name: "Design éditorial", desc: "Brochures, catalogues, magazines, menus, lookbooks. Mise en page professionnelle prête à l'impression." } },
];

// ===== DEV PROJECTS =====
const DEV_PROJECTS = [
  { name: "Ferro & Lama", cat: "siti", year: "2025", gradient: "linear-gradient(135deg,#1a1a1a,#3a2a1a)", img: "img/projects/ferro-e-lama.jpg", url: "https://lucantale92.github.io/ferro-e-lama/", it: { desc: "Landing page barbiere · Milano" }, en: { desc: "Barber shop landing · Milan" }, de: { desc: "Landingpage Barbershop · Mailand" }, fr: { desc: "Landing page barbier · Milan" } },
  { name: "Francesca Ferlauto", cat: "siti", year: "2022", gradient: "linear-gradient(135deg,#4a90a4,#c4956a)", img: "img/projects/francesca-ferlauto.jpg", url: "https://lucantale92.github.io/portfolio-francesca-ferlauto/", it: { desc: "Sito wedding planner · 5 pagine" }, en: { desc: "Wedding planner site · 5 pages" }, de: { desc: "Website Hochzeitsplanerin · 5 Seiten" }, fr: { desc: "Site wedding planner · 5 pages" } },
  { name: "The Rusty Clover", cat: "siti", year: "2023", gradient: "linear-gradient(135deg,#1b3a2a,#c89b3c)", img: "img/projects/rusty-clover.jpg", url: "https://lucantale92.github.io/portfolio-pub-rusty-clover/", it: { desc: "Irish pub · 6 pagine" }, en: { desc: "Irish pub · 6 pages" }, de: { desc: "Irish Pub · 6 Seiten" }, fr: { desc: "Pub irlandais · 6 pages" } },
  { name: "Elena Voss", cat: "siti", year: "2023", gradient: "linear-gradient(135deg,#2a2a28,#c4a882)", img: "img/projects/elena-voss.jpg", url: "https://lucantale92.github.io/portfolio-elena-voss/", it: { desc: "Portfolio fotografa · Minimal" }, en: { desc: "Photographer portfolio · Minimal" }, de: { desc: "Portfolio Fotografin · Minimalistisch" }, fr: { desc: "Portfolio photographe · Minimaliste" } },
  { name: "FitPulse", cat: "siti", year: "2022", gradient: "linear-gradient(135deg,#0a0a0f,#00e676)", img: "img/projects/fitpulse.jpg", url: "https://lucantale92.github.io/portfolio-fit-pulse/", it: { desc: "Landing app fitness" }, en: { desc: "Fitness app landing" }, de: { desc: "Landingpage Fitness-App" }, fr: { desc: "Landing page application fitness" } },
  { name: "DRIP.", cat: "siti", year: "2023", gradient: "linear-gradient(135deg,#1a1a1a,#ff4d00)", img: "img/projects/drip.jpg", url: "https://lucantale92.github.io/portfolio-drip-store/", it: { desc: "Sito streetwear con e-commerce · 6 pagine" }, en: { desc: "Streetwear site with e-commerce · 6 pages" }, de: { desc: "Streetwear-Website mit E-Commerce · 6 Seiten" }, fr: { desc: "Site streetwear avec e-commerce · 6 pages" } },
  { name: "NEXWAVE Audio", cat: "ebay", year: "2022", gradient: "linear-gradient(135deg,#0a1628,#00d4ff)", img: "img/projects/nexwave.jpg", url: "https://lucantale92.github.io/portfolio-nexwave/", it: { desc: "Template scheda prodotto eBay" }, en: { desc: "eBay product listing template" }, de: { desc: "eBay-Vorlage für Produktanzeigen" }, fr: { desc: "Modèle de fiche produit eBay" } },
  { name: "IRONPARTS", cat: "ebay", year: "2022", gradient: "linear-gradient(135deg,#1a0a0a,#cc2936)", img: "img/projects/ironparts.jpg", url: "https://lucantale92.github.io/portfolio-iron-parts/", it: { desc: "Template store homepage eBay" }, en: { desc: "eBay store homepage template" }, de: { desc: "eBay-Vorlage für Shop-Startseite" }, fr: { desc: "Modèle de page d'accueil boutique eBay" } },
  { name: "Tavola", cat: "applicazioni", year: "2023", gradient: "linear-gradient(135deg,#1c1f2e,#7c3aed)", img: "img/projects/tavola.jpg", url: "https://lucantale92.github.io/portfolio-gestionale-cucina/", it: { desc: "Gestionale ristorante · 6 schermate" }, en: { desc: "Restaurant management · 6 screens" }, de: { desc: "Restaurant-Verwaltungssystem · 6 Bildschirme" }, fr: { desc: "Logiciel de gestion restaurant · 6 écrans" } },
  { name: "PostFlow", cat: "applicazioni", year: "2023", gradient: "linear-gradient(135deg,#eef2ff,#6366f1)", img: "img/projects/postflow.jpg", url: "https://lucantale92.github.io/portfolio-postplanner/", it: { desc: "Calendario editoriale social" }, en: { desc: "Social media planner" }, de: { desc: "Redaktionskalender für Social Media" }, fr: { desc: "Calendrier éditorial réseaux sociaux" } },
  { name: "HashBoost", cat: "applicazioni", year: "2023", gradient: "linear-gradient(135deg,#0f0f1a,#764ba2)", img: "img/projects/hashboost.jpg", url: "https://lucantale92.github.io/postfolio-hashtag-generator/", it: { desc: "Generatore hashtag" }, en: { desc: "Hashtag generator" }, de: { desc: "Hashtag-Generator" }, fr: { desc: "Générateur de hashtags" } },
  { name: "PreventivoFacile", cat: "applicazioni", year: "2023", gradient: "linear-gradient(135deg,#ccfbf1,#0d9488)", img: "img/projects/preventivofacile.jpg", url: "https://lucantale92.github.io/portfolio-preventivo-facile/", it: { desc: "Calcolatore preventivi" }, en: { desc: "Quote calculator app" }, de: { desc: "Angebotsrechner-App" }, fr: { desc: "Application de calcul de devis" } },
  { name: "MailCraft", cat: "applicazioni", year: "2024", gradient: "linear-gradient(135deg,#1e1b2e,#d97706)", img: "img/projects/mailcraft.jpg", url: "https://lucantale92.github.io/portfolio-template-mail/", it: { desc: "Email template builder" }, en: { desc: "Email template builder" }, de: { desc: "E-Mail-Vorlagen-Generator" }, fr: { desc: "Générateur de modèles d'e-mails" } },
  { name: "CVBuilder", cat: "applicazioni", year: "2025", gradient: "linear-gradient(135deg,#eef0f4,#4f46e5)", img: "img/projects/cvbuilder.jpg", url: "https://lucantale92.github.io/portfolio-cv-builder/", it: { desc: "Generatore curriculum online" }, en: { desc: "Online CV builder" }, de: { desc: "Online-Lebenslauf-Generator" }, fr: { desc: "Générateur de CV en ligne" } },
  { name: "CloudDesk", cat: "applicazioni", year: "2023", gradient: "linear-gradient(135deg,#dbeafe,#3b82f6)", img: "img/projects/clouddesk.jpg", url: "https://lucantale92.github.io/portfolio-chatbot-clouddesk/", it: { desc: "Chatbot customer support" }, en: { desc: "Customer support chatbot" }, de: { desc: "Chatbot für den Kundensupport" }, fr: { desc: "Chatbot de support client" } },
  { name: "GrowthLab", cat: "applicazioni", year: "2023", gradient: "linear-gradient(135deg,#0f0f14,#f97316)", img: "img/projects/growthlab.jpg", url: "https://lucantale92.github.io/portfolio-chatbot-growthlab/", it: { desc: "Chatbot lead generation" }, en: { desc: "Lead generation chatbot" }, de: { desc: "Chatbot für Leadgenerierung" }, fr: { desc: "Chatbot de génération de leads" } },
];

const DEV_FILTERS = {
  it: { tutti: "Tutti", siti: "Siti Web", applicazioni: "Applicazioni Web", ebay: "Template eBay" },
  en: { tutti: "All", siti: "Websites", applicazioni: "Web Applications", ebay: "eBay Templates" },
  de: { tutti: "Alle", siti: "Webseiten", applicazioni: "Web-Anwendungen", ebay: "eBay-Vorlagen" },
  fr: { tutti: "Tous", siti: "Sites web", applicazioni: "Applications web", ebay: "Modèles eBay" }
};

// ===== DEV SERVICES =====
const DEV_SERVICES = [
  { icon: ICONS.web, page: "pages/siti-web.html", it: { name: "Siti Web", desc: "Landing page, siti vetrina, multi-pagina e e-commerce. Design custom, responsive, SEO-friendly." }, en: { name: "Websites", desc: "Landing pages, brochure sites, multi-page sites and e-commerce. Custom design, responsive, SEO-friendly." }, de: { name: "Webseiten", desc: "Landing Pages, Visitenkarten-Sites, mehrseitige Websites und E-Commerce. Individuelles Design, responsiv, SEO-freundlich." }, fr: { name: "Sites web", desc: "Landing pages, sites vitrines, multi-pages et e-commerce. Design personnalisé, responsive, SEO-friendly." } },
  { icon: ICONS.tool, page: "pages/applicazioni-web.html", it: { name: "Applicazioni Web", desc: "Dashboard gestionali, tool interattivi, calcolatori, planner e chatbot. Tutto su misura del tuo flusso di lavoro." }, en: { name: "Web Applications", desc: "Management dashboards, interactive tools, calculators, planners and chatbots. All tailored to your workflow." }, de: { name: "Web-Anwendungen", desc: "Verwaltungs-Dashboards, interaktive Tools, Rechner, Planer und Chatbots. Alles auf deinen Workflow zugeschnitten." }, fr: { name: "Applications web", desc: "Tableaux de bord, outils interactifs, calculateurs, planners et chatbots. Tout adapté à votre flux de travail." } },
  { icon: ICONS.ebay, page: "pages/template-ebay.html", it: { name: "Template eBay", desc: "Template HTML professionali per inserzioni e store eBay." }, en: { name: "eBay Templates", desc: "Professional HTML templates for eBay listings and stores." }, de: { name: "eBay-Vorlagen", desc: "Professionelle HTML-Vorlagen für eBay-Angebote und Shops." }, fr: { name: "Modèles eBay", desc: "Modèles HTML professionnels pour les annonces et boutiques eBay." } },
];

let devFilter = "tutti";
let devExpanded = false;
const PROJECTS_VISIBLE = 6;

// ===== HELPERS =====
function $(id) { return document.getElementById(id); }
function toast(msg) {
  const t = $("toast");
  if (!t) return;
  t.textContent = "✓ " + msg; t.className = "toast show";
  clearTimeout(t._t); t._t = setTimeout(() => t.className = "toast", 3500);
}

// ===== LANGUAGE =====
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("portfolioLang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll("[data-it]").forEach(el => {
    const translated = el.getAttribute("data-" + lang) || el.getAttribute("data-en") || el.getAttribute("data-it");
    if (translated) el.innerHTML = translated;
  });
  document.querySelectorAll("[data-it-ph]").forEach(el => {
    const translated = el.getAttribute("data-" + lang + "-ph") || el.getAttribute("data-en-ph") || el.getAttribute("data-it-ph");
    if (translated) el.placeholder = translated;
  });
  renderAll();
}

function renderDesignServices() {
  if (!$("designServices")) return;
  $("designServices").innerHTML = DESIGN_SERVICES.map(s => `
    <a href="${s.page}" class="service-card" style="text-decoration:none;color:inherit;">
      <div class="service-icon">${s.icon}</div>
      <h3>${s[currentLang].name}</h3>
      <p>${s[currentLang].desc}</p>
      <div style="margin-top:14px;font-size:12px;font-weight:600;color:var(--accent);display:flex;align-items:center;gap:6px">${{ it: "Scopri di più", en: "Learn more", de: "Mehr erfahren", fr: "En savoir plus" }[currentLang] || "Learn more"} →</div>
    </a>
  `).join("");
}

// ===== RENDER DEV PORTFOLIO =====
function renderDev() {
  if (!$("devFilters") || !$("devGrid") || !$("devShowMore")) return;
  const F = DEV_FILTERS[currentLang] || DEV_FILTERS.en || DEV_FILTERS.it;
  $("devFilters").innerHTML = Object.keys(F).map(key =>
    `<button class="filter-btn filter-btn--dark ${devFilter === key ? "active" : ""}" onclick="devFilter='${key}';devExpanded=false;renderDev()">${F[key]}</button>`
  ).join("");

  const filtered = devFilter === "tutti" ? DEV_PROJECTS : DEV_PROJECTS.filter(p => p.cat === devFilter);
  const visible = devExpanded ? filtered : filtered.slice(0, PROJECTS_VISIBLE);

  $("devGrid").innerHTML = visible.map(p => {
    const bg = p.img ? `background-image:url('${p.img}');background-size:cover;background-position:center;background-color:${p.gradient.match(/#[a-f0-9]+/)?.[0] || '#1a1a1a'}` : `background:${p.gradient}`;
    const tag = p.url ? `onclick="window.open('${p.url}','_blank')" style="${bg};cursor:pointer"` : `style="${bg}"`;
    return `<div class="project-card" ${tag}><div class="project-overlay"></div><div class="project-link">↗</div><div style="position:relative;z-index:2"><span class="project-tag">${p.cat.toUpperCase()}</span><h3>${p.name}</h3><p>${(p[currentLang] || p.en || p.it).desc}</p></div></div>`;
  }).join("");

  const showMoreWrap = $("devShowMore");
  if (filtered.length > PROJECTS_VISIBLE) {
    const label = devExpanded
      ? { it: "Mostra meno ↑", en: "Show less ↑", de: "Weniger anzeigen ↑", fr: "Voir moins ↑" }[currentLang] || "Show less ↑"
      : ({ it: `Mostra tutti (${filtered.length}) →`, en: `Show all (${filtered.length}) →`, de: `Alle anzeigen (${filtered.length}) →`, fr: `Voir tout (${filtered.length}) →` }[currentLang] || `Show all (${filtered.length}) →`);
    showMoreWrap.innerHTML = `<button class="btn-show-more btn-show-more--light" onclick="devExpanded=!devExpanded;renderDev()">${label}</button>`;
  } else {
    showMoreWrap.innerHTML = "";
  }
}

function renderDevServices() {
  if (!$("devServices")) return;
  $("devServices").innerHTML = DEV_SERVICES.map(s => `
    <a href="${s.page}" class="service-card" style="text-decoration:none;color:inherit;background:rgba(255,248,240,.06);border-color:rgba(255,248,240,.1);">
      <div class="service-icon" style="background:rgba(255,248,240,.1)">${s.icon}</div>
      <h3 style="color:#f5f0eb">${s[currentLang].name}</h3>
      <p style="color:rgba(245,240,235,.5)">${s[currentLang].desc}</p>
      <div style="margin-top:14px;font-size:12px;font-weight:600;color:var(--accent);display:flex;align-items:center;gap:6px">${{ it: "Scopri di più", en: "Learn more", de: "Mehr erfahren", fr: "En savoir plus" }[currentLang] || "Learn more"} →</div>
    </a>
  `).join("");
}

// ===== RENDER ALL =====
function renderAll() {
  renderDesignServices();
  renderDev(); renderDevServices();
}

// ===== SERVICE PAGES LOAD MORE =====
function toggleSrvProjects(projectsId, buttonId) {
  const container = document.getElementById(projectsId);
  const button = document.getElementById(buttonId);
  if (!container) return false;

  const hiddenItems = container.querySelectorAll(".srv-project-hidden, .srv-card-hidden, [data-hidden-project='true']");
  hiddenItems.forEach((item) => {
    item.classList.remove("srv-project-hidden", "srv-card-hidden");
    item.classList.add("visible");
    item.removeAttribute("hidden");
    item.style.removeProperty("display");
    item.style.removeProperty("visibility");
    item.style.removeProperty("opacity");
  });

  if (button) {
    const wrap = button.closest(".srv-loadmore-wrap");
    button.style.display = "none";
    button.setAttribute("aria-hidden", "true");
    button.setAttribute("disabled", "disabled");
    if (wrap) wrap.style.display = "none";
  }

  return false;
}
window.toggleSrvProjects = toggleSrvProjects;

function initServiceLoadMoreButtons() {
  document.querySelectorAll(".srv-loadmore-wrap .btn-show-more").forEach((button) => {
    const inlineAction = button.getAttribute("onclick") || "";
    const match = inlineAction.match(/toggleSrvProjects\(['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\)/);
    const projectsId = button.dataset.projects || (match && match[1]);
    const buttonId = button.id || (match && match[2]);
    const container = projectsId ? document.getElementById(projectsId) : null;

    if (!container) {
      button.style.display = "none";
      button.setAttribute("aria-hidden", "true");
      return;
    }

    const hasHiddenItems = container.querySelector(".srv-project-hidden, .srv-card-hidden, [data-hidden-project='true']");
    if (!hasHiddenItems) {
      const wrap = button.closest(".srv-loadmore-wrap");
      button.style.display = "none";
      button.setAttribute("aria-hidden", "true");
      if (wrap) wrap.style.display = "none";
      return;
    }

    if (button.dataset.loadmoreReady === "true") return;
    button.dataset.loadmoreReady = "true";
    button.removeAttribute("onclick");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      toggleSrvProjects(projectsId, buttonId);
    });
  });
}

// ===== NAV =====
window.addEventListener("scroll", () => { $("nav").classList.toggle("scrolled", window.scrollY > 60); });

// ===== MOBILE MENU =====
function toggleMobile() {
  $("mobileMenu").classList.toggle("active");
  $("hamburger").classList.toggle("active");
  const isOpen = $("mobileMenu").classList.contains("active");
  $("hamburger").setAttribute("aria-expanded", isOpen ? "true" : "false");
  document.body.style.overflow = isOpen ? "hidden" : "";
}
function closeMobile() {
  $("mobileMenu").classList.remove("active");
  $("hamburger").classList.remove("active");
  $("hamburger").setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", function(e) {
    const t = document.querySelector(this.getAttribute("href"));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});

// ===== SCROLL REVEAL =====
let obs = null;
try {
  obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
} catch (e) {
  obs = null;
}
function initReveals() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (obs) {
      obs.observe(el);
    } else {
      // fallback se IntersectionObserver non è disponibile: mostra subito invece di lasciare l'elemento invisibile per sempre
      el.classList.add("visible");
    }
  });
}

// ===== IMAGE / PORTFOLIO PROTECTION =====
function protectPortfolioImages() {
  const protectedSelector = [
    "img",
    "canvas",
    ".project-card",
    ".portfolio-grid",
    ".design-gallery",
    ".design-gallery-item",
    ".srv-portfolio-rimando",
    ".pdf-viewer",
    ".pdf-modal",
    ".pdf-page",
    "#pdfViewer",
    "#pdfCanvas",
    "#pdfModal"
  ].join(",");

  const preventProtectedAction = (event) => {
    if (event.target && event.target.closest && event.target.closest(protectedSelector)) {
      event.preventDefault();
    }
  };

  document.addEventListener("contextmenu", preventProtectedAction, true);
  document.addEventListener("dragstart", preventProtectedAction, true);
  document.addEventListener("selectstart", preventProtectedAction, true);

  document.querySelectorAll("img, canvas").forEach((media) => {
    media.setAttribute("draggable", "false");
    media.setAttribute("oncontextmenu", "return false");
  });

  if (!document.getElementById("portfolio-media-protection-style")) {
    const style = document.createElement("style");
    style.id = "portfolio-media-protection-style";
    style.textContent = `
      img,
      canvas,
      .project-card,
      .portfolio-grid,
      .design-gallery,
      .design-gallery-item,
      .pdf-viewer,
      .pdf-modal,
      .pdf-page,
      #pdfViewer,
      #pdfCanvas,
      #pdfModal {
        -webkit-user-drag: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);
  }
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  setLang(currentLang);
  initReveals();
  initServiceLoadMoreButtons();
  protectPortfolioImages();
});
