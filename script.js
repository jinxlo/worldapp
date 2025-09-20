const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const currentYear = new Date().getFullYear().toString();
const languageButtons = document.querySelectorAll('.language-button');
const textElements = document.querySelectorAll('[data-i18n]');
const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
const ariaLabelElements = document.querySelectorAll('[data-i18n-aria-label]');
const metaDescriptionEl = document.querySelector('meta[name="description"]');

const translations = {
  es: {
    'meta.title': 'World App Technologies | Innovación de IA para cada empresa',
    'meta.description':
      'World App Technologies ofrece soluciones de IA a medida que aceleran la transformación de las empresas modernas.',
    'nav.primaryAria': 'Navegación principal',
    'nav.mobileAria': 'Navegación móvil',
    'nav.tickerAria': 'Casos destacados de clientes',
    'nav.solutions': 'Soluciones',
    'nav.platform': 'Plataforma',
    'nav.approach': 'Enfoque',
    'nav.insights': 'Ideas',
    'nav.contact': 'Contacto',
    'nav.portal': 'Portal de clientes',
    'nav.overview': 'Resumen',
    'nav.menuToggle': 'Mostrar u ocultar navegación',
    'language.selectorAria': 'Selector de idioma',
    'language.spanish': 'Español',
    'language.english': 'Inglés',
    'hero.eyebrow': 'Socio de IA de confianza para equipos ambiciosos',
    'hero.heading': 'Inteligencia diseñada para acelerar su próxima era de crecimiento.',
    'hero.paragraph':
      'World App Technologies diseña plataformas de IA responsable que van más allá de la experimentación. Desde inteligencia híper local hasta despliegues globales en la nube, diseñamos, construimos y escalamos soluciones que desbloquean valor medible.',
    'hero.ctaPrimary': 'Agendar una sesión estratégica',
    'hero.ctaSecondary': 'Explorar capacidades',
    'hero.stat1Label': 'Retención de clientes en compromisos empresariales',
    'hero.stat2Label': 'ROI promedio de automatización en el primer año',
    'hero.stat3Label': 'Expertos en IA especializados en producto, investigación y operaciones',
    'hero.mesh.title': 'Tejido de IA unificado',
    'hero.mesh.paragraph': 'Información convergente en dispositivos, nubes y ecosistemas.',
    'hero.mesh.item1': 'Grafo de conocimiento adaptable',
    'hero.mesh.item2': 'Barreras de cumplimiento en tiempo real',
    'hero.mesh.item3': 'SDK extensible para sus equipos',
    'ticker.item1': 'Retail Fortune 500',
    'ticker.item2': 'Unicornios digitales nativos',
    'ticker.item3': 'Iniciativas de ciudades inteligentes',
    'ticker.item4': 'Innovadores en salud',
    'ticker.item5': 'Redes logísticas',
    'ticker.item6': 'Líderes en servicios financieros',
    'ticker.item7': 'Manufactura de próxima generación',
    'solutions.eyebrow': 'Soluciones',
    'solutions.heading': 'Inteligencia de precisión para cada etapa de su viaje de IA',
    'solutions.paragraph':
      'Nuestros equipos acompañan desde el descubrimiento hasta el despliegue, alineando las inversiones en IA con resultados comerciales medibles y marcos éticos.',
    'solutions.card1.title': 'Estrategia y asesoría en IA',
    'solutions.card1.text':
      'Traduce la ambición en hojas de ruta accionables con talleres ejecutivos, análisis comparativos del sector y evaluación de oportunidades adaptada a su organización.',
    'solutions.card2.title': 'Plataformas de IA en la nube',
    'solutions.card2.text':
      'Arquitecturas nativas de la nube optimizadas para seguridad, escalabilidad e interoperabilidad. Integramos sin fricciones con AWS, Azure, GCP y nubes soberanas.',
    'solutions.card3.title': 'Inteligencia local y en el borde',
    'solutions.card3.text':
      'Despliegue IA en el borde con modelos resilientes y de baja latencia que impulsan operaciones locales, redes IoT y cargas de trabajo en sitio sin compromisos.',
    'platform.eyebrow': 'La plataforma World App',
    'platform.heading': 'Acelere la entrega con una base modular de IA',
    'platform.paragraph':
      'Aproveche una biblioteca de aceleradores reutilizables, canalizaciones de datos conformes y marcos de gobernanza diseñados para poner pilotos en marcha en semanas, no meses.',
    'platform.feature1':
      '<strong>Plano de control unificado.</strong> Un tablero para orquestar modelos, datos y barreras en infraestructuras híbridas.',
    'platform.feature2':
      '<strong>Responsable por diseño.</strong> Mitigación de sesgos, observabilidad y flujos con humanos en el circuito incorporados garantizan resultados responsables.',
    'platform.feature3':
      '<strong>Primero para desarrolladores.</strong> SDK, API y plantillas de flujo de trabajo empoderan a sus equipos para iterar con rapidez y seguridad.',
    'platform.cta': 'Reservar una sesión técnica →',
    'platform.panel.header': 'Resumen de sistemas en vivo',
    'platform.panel.signal1Label': 'Latencia de inferencia',
    'platform.panel.signal2Label': 'Confiabilidad del modelo',
    'platform.panel.signal2Trend': 'Estable',
    'platform.panel.signal3Label': 'Despliegues seguros',
    'platform.panel.sparklineAria': 'Visualización de la tendencia de rendimiento de la plataforma',
    'impact.eyebrow': 'Impacto',
    'impact.heading': 'Entregamos resultados que se multiplican en toda la empresa',
    'impact.paragraph':
      'Desde el primer piloto hasta la transformación a escala, anclamos cada compromiso en indicadores clave medibles que importan a sus equipos.',
    'impact.metric1': 'Reducción del tiempo de triaje manual para un asegurador nacional',
    'impact.metric2': 'Nuevas interacciones con clientes personalizadas mediante asistentes locales de IA',
    'impact.metric3': 'Mercados activados con agentes de IA multilingües en menos de 90 días',
    'impact.metric4': 'Aumento de la resiliencia de la cadena de suministro mediante inteligencia predictiva',
    'approach.eyebrow': 'Nuestro enfoque',
    'approach.heading': 'Guiados por el rigor, fundamentados en la colaboración',
    'approach.paragraph':
      'Incrustamos escuadrones multifuncionales que trabajan junto a sus equipos para cocrear, iterar y escalar con confianza.',
    'approach.step1.title': 'Descubrir y alinear',
    'approach.step1.text':
      'Mapeamos objetivos, fuentes de datos y requisitos de gobernanza para diseñar un plan maestro con consenso de las partes interesadas.',
    'approach.step2.title': 'Diseñar y validar',
    'approach.step2.text':
      'Prototipos rápidos con datos reales, evaluación rigurosa e informes transparentes para ajustar el desempeño.',
    'approach.step3.title': 'Desplegar y escalar',
    'approach.step3.text':
      'Implementaciones de grado de producción con observabilidad, gestión del ciclo de vida y habilitación para una adopción sostenida.',
    'testimonials.eyebrow': 'Lo que dicen nuestros socios',
    'testimonials.heading': 'Equipos orientados al futuro eligen World App Technologies',
    'testimonials.quote1':
      '“World App Technologies transformó nuestros datos fragmentados en un motor de decisiones que respalda cada punto de venta. Sus equipos se sintieron como una extensión del nuestro.”',
    'testimonials.role1': 'Directora digital',
    'testimonials.company1': 'Grupo minorista global',
    'testimonials.quote2':
      '“Su marco de IA responsable brindó a nuestros reguladores la transparencia que necesitaban sin frenar la innovación. Entregamos en tiempo récord.”',
    'testimonials.role2': 'Director de innovación',
    'testimonials.company2': 'Servicios financieros Fortune 100',
    'contact.eyebrow': 'Construyamos lo que sigue',
    'contact.heading': '¿Listo para diseñar su ventaja competitiva en IA?',
    'contact.paragraph':
      'Comparta un poco sobre sus objetivos y nuestros consultores prepararán una sesión de ruta adaptada a su organización.',
    'contact.labelEmail': 'Correo:',
    'contact.labelHq': 'Oficinas centrales:',
    'contact.labelGlobal': 'Presencia global:',
    'form.nameLabel': 'Nombre',
    'form.emailLabel': 'Correo laboral',
    'form.companyLabel': 'Empresa',
    'form.companyPlaceholder': 'Su organización',
    'form.projectLabel': 'Enfoque de la iniciativa',
    'form.option1': 'Alineación de estrategia de IA',
    'form.option2': 'Plataforma de IA en la nube',
    'form.option3': 'Inteligencia local/en el borde',
    'form.option4': 'Gobernanza responsable de IA',
    'form.option5': 'Otra',
    'form.messageLabel': 'Cuéntenos más',
    'form.messagePlaceholder': '¿Qué resultados está buscando?',
    'form.submit': 'Enviar consulta',
    'form.caption':
      'Al enviar este formulario, acepta nuestra política de privacidad y consiente recibir comunicaciones de World App Technologies.',
    'footer.legal': '© <span id="current-year"></span> World App Technologies. Todos los derechos reservados.'
  },
  en: {
    'meta.title': 'World App Technologies | AI Innovation for Every Enterprise',
    'meta.description':
      'World App Technologies delivers bespoke AI solutions that accelerate transformation for modern enterprises.',
    'nav.primaryAria': 'Primary navigation',
    'nav.mobileAria': 'Mobile navigation',
    'nav.tickerAria': 'Client highlights',
    'nav.solutions': 'Solutions',
    'nav.platform': 'Platform',
    'nav.approach': 'Approach',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'nav.portal': 'Client Portal',
    'nav.overview': 'Overview',
    'nav.menuToggle': 'Toggle navigation',
    'language.selectorAria': 'Language selector',
    'language.spanish': 'Spanish',
    'language.english': 'English',
    'hero.eyebrow': 'Trusted AI partner for ambitious teams',
    'hero.heading': 'Intelligence engineered to accelerate your next era of growth.',
    'hero.paragraph':
      'World App Technologies architects responsible AI platforms that move beyond experimentation. From hyper-local intelligence to global cloud deployments, we design, build, and scale solutions that unlock measurable value.',
    'hero.ctaPrimary': 'Schedule a strategy session',
    'hero.ctaSecondary': 'Explore capabilities',
    'hero.stat1Label': 'Client retention across enterprise engagements',
    'hero.stat2Label': 'Average automation ROI in the first year',
    'hero.stat3Label': 'Specialized AI experts in product, research, and ops',
    'hero.mesh.title': 'Unified AI Fabric',
    'hero.mesh.paragraph': 'Converged insights across devices, clouds, and ecosystems.',
    'hero.mesh.item1': 'Adaptive knowledge graph',
    'hero.mesh.item2': 'Real-time compliance guardrails',
    'hero.mesh.item3': 'Extensible SDK for your teams',
    'ticker.item1': 'Fortune 500 Retail',
    'ticker.item2': 'Digital Native Unicorns',
    'ticker.item3': 'Smart Cities Initiatives',
    'ticker.item4': 'Healthcare Innovators',
    'ticker.item5': 'Logistics Networks',
    'ticker.item6': 'Financial Services Leaders',
    'ticker.item7': 'Next-Gen Manufacturing',
    'solutions.eyebrow': 'Solutions',
    'solutions.heading': 'Precision-built intelligence for every stage of your AI journey',
    'solutions.paragraph':
      'Our teams partner from discovery to deployment, aligning AI investments with measurable business outcomes and ethical frameworks.',
    'solutions.card1.title': 'AI Strategy & Advisory',
    'solutions.card1.text':
      'Translate ambition into actionable roadmaps with executive workshops, industry benchmarking, and opportunity analysis tailored to your organization.',
    'solutions.card2.title': 'Cloud AI Platforms',
    'solutions.card2.text':
      'Architect cloud-native systems optimized for security, scalability, and interoperability. We integrate seamlessly with AWS, Azure, GCP, and sovereign clouds.',
    'solutions.card3.title': 'Local & Edge Intelligence',
    'solutions.card3.text':
      'Deploy AI at the edge with resilient, low-latency models powering local operations, IoT networks, and on-premises workloads without compromise.',
    'platform.eyebrow': 'The World App Platform',
    'platform.heading': 'Accelerate delivery with a modular AI foundation',
    'platform.paragraph':
      'Harness a library of reusable accelerators, compliant data pipelines, and governance frameworks designed to get pilots live in weeks—not months.',
    'platform.feature1':
      '<strong>Unified control plane.</strong> One dashboard for orchestrating models, data, and guardrails across hybrid infrastructures.',
    'platform.feature2':
      '<strong>Responsible by design.</strong> Built-in bias mitigation, observability, and human-in-the-loop workflows ensure accountable outcomes.',
    'platform.feature3':
      '<strong>Developer-first.</strong> SDKs, APIs, and workflow templates empower your teams to iterate quickly and securely.',
    'platform.cta': 'Book a technical deep dive →',
    'platform.panel.header': 'Live systems overview',
    'platform.panel.signal1Label': 'Inference latency',
    'platform.panel.signal2Label': 'Model reliability',
    'platform.panel.signal2Trend': 'Stable',
    'platform.panel.signal3Label': 'Secure deployments',
    'platform.panel.sparklineAria': 'Platform performance trend visualization',
    'impact.eyebrow': 'Impact',
    'impact.heading': 'Delivering outcomes that compound across the enterprise',
    'impact.paragraph':
      'From first pilot to scaled transformation, we anchor every engagement in measurable KPIs that matter to your teams.',
    'impact.metric1': 'Reduction in manual triage time for a national insurer',
    'impact.metric2': 'New customer interactions personalized via local AI assistants',
    'impact.metric3': 'Markets activated with multilingual AI agents in under 90 days',
    'impact.metric4': 'Increase in supply-chain resilience through predictive intelligence',
    'approach.eyebrow': 'Our approach',
    'approach.heading': 'Guided by rigor, grounded in partnership',
    'approach.paragraph':
      'We embed cross-functional squads that work alongside your teams to co-create, iterate, and scale with confidence.',
    'approach.step1.title': 'Discover & align',
    'approach.step1.text':
      'Map objectives, data sources, and governance requirements to craft a program blueprint with stakeholder consensus.',
    'approach.step2.title': 'Design & validate',
    'approach.step2.text':
      'Rapid prototyping with real data, rigorous evaluation, and transparent reporting to fine-tune performance.',
    'approach.step3.title': 'Deploy & scale',
    'approach.step3.text':
      'Production-grade deployments with observability, lifecycle management, and enablement for sustained adoption.',
    'testimonials.eyebrow': 'What partners say',
    'testimonials.heading': 'Future-focused teams choose World App Technologies',
    'testimonials.quote1':
      '“World App Technologies transformed our fragmented data into a decision engine that supports every storefront. Their teams felt like an extension of ours.”',
    'testimonials.role1': 'Chief Digital Officer',
    'testimonials.company1': 'Global Retail Group',
    'testimonials.quote2':
      '“Their responsible AI framework gave our regulators the transparency they needed without slowing innovation. We delivered in record time.”',
    'testimonials.role2': 'Head of Innovation',
    'testimonials.company2': 'Fortune 100 Financial Services',
    'contact.eyebrow': "Let's build what's next",
    'contact.heading': 'Ready to architect your AI advantage?',
    'contact.paragraph':
      'Share a bit about your objectives and our consultants will curate a roadmap session tailored to your organization.',
    'contact.labelEmail': 'Email:',
    'contact.labelHq': 'HQ:',
    'contact.labelGlobal': 'Global presence:',
    'form.nameLabel': 'Name',
    'form.emailLabel': 'Work email',
    'form.companyLabel': 'Company',
    'form.companyPlaceholder': 'Your organization',
    'form.projectLabel': 'Initiative focus',
    'form.option1': 'AI strategy alignment',
    'form.option2': 'Cloud AI platform',
    'form.option3': 'Local/edge intelligence',
    'form.option4': 'Responsible AI governance',
    'form.option5': 'Other',
    'form.messageLabel': 'Tell us more',
    'form.messagePlaceholder': 'What outcomes are you targeting?',
    'form.submit': 'Submit inquiry',
    'form.caption':
      'By submitting this form, you agree to our privacy policy and consent to receive communications from World App Technologies.',
    'footer.legal': '© <span id="current-year"></span> World App Technologies. All rights reserved.'
  }
};

let currentLanguage = 'es';

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('open', !isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
    });
  });
}

const updateCurrentYear = () => {
  const yearElement = document.getElementById('current-year');

  if (yearElement) {
    yearElement.textContent = currentYear;
  }
};

function applyLanguage(language) {
  const languageTranslations = translations[language];

  if (!languageTranslations) {
    return;
  }

  currentLanguage = language;
  document.documentElement.setAttribute('lang', language);

  textElements.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = languageTranslations[key];

    if (translation) {
      element.innerHTML = translation;
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = languageTranslations[key];

    if (translation) {
      element.setAttribute('placeholder', translation);
    }
  });

  ariaLabelElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const translation = languageTranslations[key];

    if (translation) {
      element.setAttribute('aria-label', translation);
    }
  });

  if (metaDescriptionEl) {
    const description = languageTranslations['meta.description'];

    if (description) {
      metaDescriptionEl.setAttribute('content', description);
    }
  }

  const title = languageTranslations['meta.title'];

  if (title) {
    document.title = title;
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  updateCurrentYear();
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.dataset.language;

    if (selectedLanguage && selectedLanguage !== currentLanguage) {
      applyLanguage(selectedLanguage);
    }
  });
});

applyLanguage(currentLanguage);
