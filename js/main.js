/* HEISS Data Business Solutions — i18n (ES/EN), menu, projects, reveal on scroll. Vanilla JS, no build. */
(function () {
  'use strict';

  // Enlaces pendientes (TODO). Mientras estén vacíos, los enlaces con data-todo se ocultan.
  var LINKS = {
    linkedin: '', // TODO: URL de LinkedIn
    upwork: ''    // TODO: URL de Upwork
  };

  var WA = 'https://wa.me/524771804057';
  var STORAGE_KEY = 'heiss-lang';

  // English strings. Spanish is the source text already in the HTML.
  var EN = {
    'meta.title': 'HEISS Data Business Solutions — Data and AI for small businesses',
    'meta.description': 'Mexican software and artificial intelligence startup. We build HEISS CRM, a tailored CRM with a virtual sales assistant, plus automations for micro and small businesses.',
    'a11y.skip': 'Skip to content',
    'a11y.nav': 'Main',
    'a11y.home': 'HEISS Data Business Solutions, home',
    'a11y.lang': 'Language',
    'a11y.menu': 'Open menu',
    'a11y.menuClose': 'Close menu',
    'a11y.benefits': 'Benefits',
    'a11y.footer': 'Footer links',
    'top.email': 'Email:',
    'top.coverage': 'Serving all of Mexico',
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Free assessment',
    'hero.pill': 'Digital solutions for micro and small businesses',
    'hero.title': 'Grow your business with <span class="accent">data and artificial intelligence.</span>',
    'hero.lead': 'The technology big companies use, now tailored and affordable for your business. No hassle and no IT team required.',
    'hero.cta': 'Get your free assessment',
    'hero.crm': 'Discover HEISS CRM',
    'hero.dashAlt': 'Sample business dashboard with growing sales and automated tasks',
    'dash.title': 'Your business sales',
    'dash.badge': 'Growing',
    'dash.d1': 'Mon', 'dash.d2': 'Tue', 'dash.d3': 'Wed', 'dash.d4': 'Thu', 'dash.d5': 'Fri', 'dash.d6': 'Sat',
    'dash.c1': 'Inventory updated automatically',
    'dash.c2': 'New customers saved to your CRM',
    'dash.c3': 'Report sent to your WhatsApp',
    'dash.float': 'All done by 8:00 am, without lifting a finger',
    'tiles.t1': 'Get your time back',
    'tiles.p1': 'Repetitive work runs on its own: reports, data entry and customer follow-up.',
    'tiles.t2': 'Sell more with data',
    'tiles.p2': 'Know what sells, to whom and when, on one clear dashboard.',
    'tiles.t3': 'Start risk-free',
    'tiles.p3': 'Free first assessment. We tell you what to automate first and what it would cost.',
    'tiles.link': 'Book via WhatsApp',
    'product.tag': 'OUR PLATFORM · EARLY ACCESS',
    'product.title': 'HEISS CRM: your AI-powered sales team',
    'product.lead': 'A cloud platform that builds a CRM tailored to each business, with a virtual sales assistant that answers, quotes and follows up over chat.',
    'product.early': 'Join early access',
    'product.earlyHref': WA + '?text=' + encodeURIComponent("I'd like to join the HEISS CRM early access"),
    'product.demo': 'Watch demo',
    'product.demoHref': WA + '?text=' + encodeURIComponent("I'd like to see a HEISS CRM demo"),
    'product.mockAlt': 'Sample HEISS CRM view with sales stages and a chat handled by the virtual sales assistant',
    'product.how': '<strong>How it works:</strong> 1. Set up your business → 2. Connect your channels → 3. AI answers and records',
    'product.stack': 'Cloud · Python · PostgreSQL · Large language models (AI)',
    'crm.funnel': 'Sales pipeline',
    'crm.new': 'New', 'crm.quoted': 'Quoted', 'crm.won': 'Won',
    'crm.c1': 'Customer · WhatsApp', 'crm.c2': 'Customer · Web', 'crm.c3': 'Customer · Telegram', 'crm.c4': 'Deal closed',
    'crm.m1': 'Hi, do you have the blue model in stock?',
    'crm.m2': 'Hi! Yes, we have 3 options. Shall I share prices and set one aside for you?',
    'crm.meta': 'Virtual sales assistant · replied instantly',
    'feat.t1': 'Tailored CRM, no coding', 'feat.p1': 'Fields, stages and reports for your industry.',
    'feat.t2': '24/7 virtual sales assistant', 'feat.p2': 'Answers, recommends and records every customer.',
    'feat.t3': 'Automatic reports', 'feat.p3': "Today's sales on your phone.",
    'feat.t4': 'Isolated, secure data', 'feat.p4': 'Each business in its own private space.',
    'sol.eyebrow': 'Solutions',
    'sol.title': 'Picture your business like this',
    'sol.lead': 'New solutions a small business can already use today.',
    'sol.t1': 'Your WhatsApp answers on its own', 'sol.p1': 'An AI assistant answers, quotes and takes orders at any hour.', 'sol.k1': 'AI assistants',
    'sol.t2': 'Your sales on your phone', 'sol.p2': 'Every morning you get a clear summary of how your business is doing.', 'sol.k2': 'Reports and dashboards',
    'sol.t3': 'Zero manual data entry', 'sol.p3': 'Inventory, orders and invoices stay in sync, no copy and paste.', 'sol.k3': 'Automation',
    'sol.t4': 'New customers every week', 'sol.p4': 'We find businesses and people looking for what you sell.', 'sol.k4': 'Prospecting and CRM',
    'band.title': 'Big companies already decide with data. <span class="accent">Now your business can too.</span>',
    'band.lead': 'You don’t need servers, developers or technical know-how. We take care of everything.',
    'band.q1': '“I’m not sure how much I sell or what I actually make”', 'band.a1': '→ Clear reports that build themselves',
    'band.q2': '“I have no one to handle the technical side”', 'band.a2': '→ We set it up and maintain it',
    'band.q3': '“I think it’s too expensive for me”', 'band.a3': '→ We start small and grow with you',
    'proj.eyebrow': 'Portfolio',
    'proj.title': 'Projects already at work',
    'proj.before': 'Before:', 'proj.after': 'Now:',
    'steps.eyebrow': 'Process',
    'steps.title': 'Getting started is this easy',
    'steps.t1': 'A free conversation', 'steps.p1': 'You tell us how your business works.',
    'steps.t2': 'A clear proposal', 'steps.p2': 'What we’ll do, how long it takes and what it costs.',
    'steps.t3': 'We build it', 'steps.p3': 'And test it with you before handing it over.',
    'steps.t4': 'We stay with you', 'steps.p4': 'Support and improvements as you grow.',
    'about.eyebrow': 'About us',
    'about.title': 'A Mexican startup bringing AI to small businesses',
    'about.text': 'HEISS Data Business Solutions was born in León, Guanajuato, so that micro and small businesses can use data, automation and artificial intelligence without needing a technical team. We build HEISS CRM and custom cloud solutions.',
    'about.founded': '<strong>Founded:</strong> [YEAR]',
    'about.hq': '<strong>Headquarters:</strong> León, Gto., Mexico',
    'about.stage': '<strong>Stage:</strong> bootstrapped',
    'about.founder': 'Pablo Teja · Founder',
    'about.bio': 'Data analyst and automation developer. SQL instructor at a data analytics bootcamp.',
    'cta.title': 'Got a process that eats up your time?',
    'cta.lead': 'Tell us about it. The first assessment is free, with no commitment.',
    'cta.wa': 'Message us on WhatsApp',
    'footer.copy': '© 2026 HEISS Data Business Solutions · Software and AI startup · León, Gto., Mexico',
    'footer.privacy': 'Privacy notice',
    'legal.back': 'Back to home',
    'legal.home': 'Home'
  };
  // Page-specific meta for the privacy notice.
  if (/aviso-de-privacidad/.test(window.location.pathname)) {
    EN['meta.title'] = 'Privacy notice — HEISS Data Business Solutions';
    EN['meta.description'] = 'HEISS Data Business Solutions privacy notice under Mexico’s Federal Law on the Protection of Personal Data Held by Private Parties.';
  }
  var ES_EXTRA = {
    'a11y.menu': 'Abrir menú',
    'a11y.menuClose': 'Cerrar menú',
    'proj.before': 'Antes:', 'proj.after': 'Ahora:'
  };

  var esCache = {}; // original Spanish captured from the DOM
  var current = 'es';

  function safeGet(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, val) { try { window.localStorage.setItem(key, val); } catch (e) { /* ignore */ } }

  function detectLang() {
    var q = null;
    try { q = new URLSearchParams(window.location.search).get('lang'); } catch (e) { q = null; }
    if (q === 'en' || q === 'es') return { lang: q, forced: true };
    var saved = safeGet(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return { lang: saved, forced: false };
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return { lang: /^es\b/i.test(nav) ? 'es' : (/^en\b/i.test(nav) ? 'en' : 'es'), forced: false };
  }

  function t(key, lang) {
    if (lang === 'en' && Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
    if (Object.prototype.hasOwnProperty.call(esCache, key)) return esCache[key];
    return ES_EXTRA[key];
  }

  function captureSpanish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in esCache)) esCache[k] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (!(k in esCache)) esCache[k] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); var attr = p[0].trim(); var k = p.slice(1).join(':').trim();
        if (!(k in esCache)) esCache[k] = el.getAttribute(attr);
      });
    });
  }

  function applyLang(lang) {
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'), lang); if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'), lang); if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); var attr = p[0].trim(); var k = p.slice(1).join(':').trim();
        var v = t(k, lang); if (v != null) el.setAttribute(attr, v);
      });
    });
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== lang;
    });
    var og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute('content', lang === 'en' ? 'en_US' : 'es_MX');
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    var toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-label', t(open ? 'a11y.menuClose' : 'a11y.menu', lang));
    }
    renderProjects(lang);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderProjects(lang) {
    var list = document.getElementById('projects-list');
    var data = window.HEISS_PROJECTS;
    if (!list || !Array.isArray(data)) return;
    var L = function (o) { return o ? (o[lang] || o.es || '') : ''; };
    var html = data.map(function (p) {
      var body = p.before && p.after
        ? '<strong>' + escapeHtml(t('proj.before', lang)) + '</strong> ' + escapeHtml(L(p.before)) +
          ' <strong>' + escapeHtml(t('proj.after', lang)) + '</strong> ' + escapeHtml(L(p.after))
        : escapeHtml(L(p.description));
      var tags = (p.tags || []).map(function (tag) {
        var parts = String(tag).split('|');
        return '<li>' + escapeHtml(lang === 'en' && parts[1] ? parts[1] : parts[0]) + '</li>';
      }).join('');
      var foot = '';
      if (p.link && p.link.href) {
        var external = /^https?:/i.test(p.link.href);
        foot = '<a class="project-link" href="' + escapeHtml(p.link.href) + '"' + (external ? ' rel="noopener"' : '') + '>' + escapeHtml(L(p.link)) + '</a>';
      } else if (p.note) {
        foot = '<span class="project-note">' + escapeHtml(L(p.note)) + '</span>';
      }
      return '<article class="project reveal is-visible' + (p.accent === 'blue' ? ' accent-blue' : '') + '">' +
        '<div class="project-strip" aria-hidden="true"></div>' +
        '<div class="project-body">' +
        '<span class="project-cat">' + escapeHtml(L(p.category)) + '</span>' +
        '<h3>' + escapeHtml(L(p.title)) + '</h3>' +
        '<p>' + body + '</p>' +
        (tags ? '<ul class="chips" aria-label="' + (lang === 'en' ? 'Technologies' : 'Tecnologías') + '">' + tags + '</ul>' : '') +
        foot + '</div></article>';
    }).join('');
    list.innerHTML = html;
  }

  function setupTodoLinks() {
    document.querySelectorAll('[data-todo]').forEach(function (a) {
      var url = LINKS[a.getAttribute('data-todo')];
      if (url) { a.href = url; a.rel = 'noopener'; } else { a.hidden = true; a.style.display = 'none'; }
    });
  }

  function setupMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var links = document.getElementById('nav-links');
    if (!toggle || !links) return;
    function set(open) {
      toggle.setAttribute('aria-expanded', String(open));
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-label', t(open ? 'a11y.menuClose' : 'a11y.menu', current));
    }
    toggle.addEventListener('click', function () { set(toggle.getAttribute('aria-expanded') !== 'true'); });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { set(false); toggle.focus(); }
    });
  }

  function setupLangSwitch() {
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        var lang = b.getAttribute('data-lang');
        safeSet(STORAGE_KEY, lang);
        applyLang(lang);
        try {
          var url = new URL(window.location.href);
          if (url.searchParams.has('lang')) { url.searchParams.set('lang', lang); window.history.replaceState(null, '', url); }
        } catch (e) { /* ignore */ }
      });
    });
  }

  function setupReveal() {
    var els = document.querySelectorAll('.reveal:not(.is-visible)');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  captureSpanish();
  setupTodoLinks();
  setupMenu();
  setupLangSwitch();
  var d = detectLang();
  if (d.forced) safeSet(STORAGE_KEY, d.lang);
  applyLang(d.lang);
  setupReveal();
})();
