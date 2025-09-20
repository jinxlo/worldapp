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
    'meta.title': 'World App Technologies | Soluciones de IA venezolanas para empresas modernas',
    'meta.description':
      'World App Technologies, con sede en Venezuela, impulsa a las empresas con inferencia en la nube, implementación local y estrategias de IA a medida.',
    'nav.primaryAria': 'Navegación principal',
    'nav.mobileAria': 'Navegación móvil',
    'nav.menuToggle': 'Mostrar u ocultar navegación',
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.methodology': 'Metodología',
    'nav.cases': 'Casos',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agenda una consulta',
    'language.selectorAria': 'Selector de idioma',
    'language.spanish': 'Español',
    'language.english': 'Inglés',
    'hero.badge': 'Nuevo lanzamiento: Aurora 2.0',
    'hero.eyebrow': 'IA venezolana con alcance global',
    'hero.heading': 'Impulsamos a las empresas con inteligencia artificial lista para producción.',
    'hero.paragraph':
      'Desde Caracas, construimos experiencias de IA que combinan infraestructura en la nube y despliegues locales para transformar operaciones críticas en Latinoamérica y el mundo.',
    'hero.ctaPrimary': 'Hablar con un especialista',
    'hero.ctaSecondary': 'Ver portafolio de servicios',
    'hero.location': 'Base operativa en Caracas, Venezuela',
    'hero.point1': 'Inferencia en la nube optimizada para cargas sensibles.',
    'hero.point2': 'Arquitecturas híbridas con soberanía de datos.',
    'hero.point3': 'Equipos bilingües expertos en adopción empresarial.',
    'hero.stat1Label': 'Modelos desplegados en producción',
    'hero.stat2Label': 'Países atendidos con soporte local',
    'hero.stat3Label': 'Monitoreo y respuesta en tiempo real',
    'hero.card.badge': 'Disponible en nube y on-premise',
    'hero.card.title': 'Suite Aurora',
    'hero.card.text': 'Orquestador modular de inferencia, automatización y seguridad.',
    'hero.card.item1': 'Panel de desempeño unificado',
    'hero.card.item2': 'Compatibilidad con modelos propietarios y abiertos',
    'hero.card.item3': 'Controles de gobernanza auditables',
    'services.eyebrow': 'Servicios principales',
    'services.heading': 'Soluciones integrales de IA para cada etapa de adopción',
    'services.paragraph':
      'Acompañamos desde la estrategia hasta la operación continua, combinando talento local y alianzas globales.',
    'services.card1.title': 'Inferencia de IA en la nube',
    'services.card1.text':
      'Desplegamos arquitecturas multi-región con costos optimizados, observabilidad y cumplimiento normativo latinoamericano.',
    'services.card2.title': 'Implementación local y en el borde',
    'services.card2.text':
      'Llevamos modelos a plantas, sucursales y centros de datos soberanos con baja latencia y mantenimiento gestionado.',
    'services.card3.title': 'Automatización inteligente de procesos',
    'services.card3.text':
      'Diseñamos asistentes, flujos y copilotos que conectan sus sistemas internos y aceleran la toma de decisiones.',
    'services.card4.title': 'Laboratorio de datos y ética',
    'services.card4.text':
      'Curamos datos, evaluamos sesgos y definimos políticas de gobernanza que protegen a su organización.',
    'methodology.eyebrow': 'Nuestra metodología',
    'methodology.heading': 'De la visión a la operación continua',
    'methodology.paragraph':
      'Construimos programas de IA sostenibles combinando discovery inmersivo, iteraciones controladas y soporte dedicado en español e inglés.',
    'methodology.step1.title': 'Diagnóstico inmersivo',
    'methodology.step1.text': 'Mapeamos procesos, datos críticos y objetivos regulatorios junto a sus equipos.',
    'methodology.step2.title': 'Blueprint de arquitectura',
    'methodology.step2.text': 'Diseñamos arquitecturas híbridas con planes de gobernanza, seguridad y adopción.',
    'methodology.step3.title': 'Implementación iterativa',
    'methodology.step3.text': 'Activamos pilotos controlados, medimos impacto y ajustamos modelos con datos reales.',
    'methodology.step4.title': 'Operación continua',
    'methodology.step4.text': 'Operamos, monitoreamos y entrenamos equipos internos para asegurar escalabilidad.',
    'cases.eyebrow': 'Historias de impacto',
    'cases.heading': 'Resultados medibles en sectores críticos',
    'cases.paragraph':
      'Unimos analítica avanzada, ingeniería de plataformas y acompañamiento cultural para acelerar resultados tangibles.',
    'cases.card1.title': 'Finanzas en Latinoamérica',
    'cases.card1.text':
      'Migramos el motor de scoring de un banco regional a inferencia en la nube con gobernanza soberana, reduciendo el riesgo crediticio en 18%.',
    'cases.card1.result': '✔ Tiempo de aprobación reducido a 45 segundos',
    'cases.card2.title': 'Retail y logística',
    'cases.card2.text':
      'Implementamos modelos locales en centros de distribución venezolanos para optimizar inventarios y rutas con conectividad limitada.',
    'cases.card2.result': '✔ 32% menos quiebre de stock',
    'cases.card3.title': 'Energía y servicios públicos',
    'cases.card3.text':
      'Habilitamos monitoreo predictivo de activos críticos combinando sensores IoT y analítica en campo con tableros centralizados.',
    'cases.card3.result': '✔ 4x detección temprana de anomalías',
    'venezuela.eyebrow': 'Raíces venezolanas',
    'venezuela.heading': 'Orgullosamente venezolanos, conectados con el mundo',
    'venezuela.paragraph':
      'Nuestros equipos en Caracas combinan talento científico, diseño de producto y conocimiento regulatorio para ofrecer experiencias de IA contextualizadas a Latinoamérica.',
    'venezuela.point1': 'Centros de excelencia en Caracas y Valencia con laboratorios de MLOps.',
    'venezuela.point2': 'Programas de transferencia tecnológica y capacitación bilingüe.',
    'venezuela.point3': 'Alianzas con universidades y comunidades tecnológicas venezolanas.',
    'venezuela.card.title': 'Conectividad regional',
    'venezuela.card.text': 'Integramos hubs en Miami, Ciudad de México y Bogotá para garantizar respuesta inmediata.',
    'venezuela.card.detail1': 'Mesa de soporte 24/7 en español e inglés',
    'venezuela.card.detail2': 'Equipos híbridos on-site y remotos',
    'testimonials.eyebrow': 'Confianza comprobada',
    'testimonials.heading': 'Historias de clientes que evolucionan con nuestra IA',
    'testimonials.quote1':
      '“Con World App Technologies migramos nuestros modelos críticos a infraestructura híbrida sin interrumpir operaciones. Son el socio estratégico que buscábamos.”',
    'testimonials.role1': 'VP de Transformación Digital',
    'testimonials.company1': 'Banco universal venezolano',
    'testimonials.quote2':
      '“Su equipo entendió nuestros retos locales y desplegó soluciones de IA confiables que hoy se replican en toda la región.”',
    'testimonials.role2': 'Directora de Operaciones',
    'testimonials.company2': 'Cadena de retail latinoamericana',
    'contact.eyebrow': 'Comencemos',
    'contact.heading': '¿Listo para diseñar su ecosistema de IA?',
    'contact.paragraph':
      'Comparta sus objetivos y prepararemos una sesión estratégica personalizada con especialistas en cloud y despliegues locales.',
    'contact.labelEmail': 'Correo:',
    'contact.labelHq': 'Oficina principal:',
    'contact.labelGlobal': 'Presencia regional:',
    'form.nameLabel': 'Nombre',
    'form.emailLabel': 'Correo laboral',
    'form.companyLabel': 'Empresa',
    'form.companyPlaceholder': 'Su organización',
    'form.projectLabel': 'Enfoque de la iniciativa',
    'form.option1': 'Inferencia en la nube',
    'form.option2': 'Implementación local/en el borde',
    'form.option3': 'Automatización de procesos',
    'form.option4': 'Gobernanza y ética de IA',
    'form.option5': 'Otro',
    'form.messageLabel': 'Cuéntenos más',
    'form.messagePlaceholder': '¿Qué resultados desea alcanzar?',
    'form.submit': 'Enviar consulta',
    'form.caption':
      'Al enviar este formulario, acepta nuestra política de privacidad y consiente recibir comunicaciones de World App Technologies.',
    'footer.legal': '© <span id="current-year"></span> World App Technologies. Todos los derechos reservados.'
  },
  en: {
    'meta.title': 'World App Technologies | Venezuelan AI solutions for modern enterprises',
    'meta.description':
      'World App Technologies, headquartered in Venezuela, powers companies with cloud inference, on-premise deployments, and tailored AI strategies.',
    'nav.primaryAria': 'Primary navigation',
    'nav.mobileAria': 'Mobile navigation',
    'nav.menuToggle': 'Toggle navigation',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.methodology': 'Methodology',
    'nav.cases': 'Case studies',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a consultation',
    'language.selectorAria': 'Language selector',
    'language.spanish': 'Spanish',
    'language.english': 'English',
    'hero.badge': 'New release: Aurora 2.0',
    'hero.eyebrow': 'Venezuelan AI with global reach',
    'hero.heading': 'We empower enterprises with production-ready artificial intelligence.',
    'hero.paragraph':
      "From Caracas, we build AI experiences that blend cloud infrastructure and local deployments to transform critical operations across Latin America and the world.",
    'hero.ctaPrimary': 'Talk to a specialist',
    'hero.ctaSecondary': 'View services portfolio',
    'hero.location': 'Operations hub in Caracas, Venezuela',
    'hero.point1': 'Cloud inference optimized for sensitive workloads.',
    'hero.point2': 'Hybrid architectures with data sovereignty.',
    'hero.point3': 'Bilingual experts driving enterprise adoption.',
    'hero.stat1Label': 'Models deployed in production',
    'hero.stat2Label': 'Countries served with local support',
    'hero.stat3Label': 'Real-time monitoring and response',
    'hero.card.badge': 'Available in cloud and on-premise',
    'hero.card.title': 'Aurora Suite',
    'hero.card.text': 'Modular orchestrator for inference, automation, and security.',
    'hero.card.item1': 'Unified performance dashboard',
    'hero.card.item2': 'Supports proprietary and open models',
    'hero.card.item3': 'Auditable governance controls',
    'services.eyebrow': 'Core services',
    'services.heading': 'End-to-end AI solutions for every adoption stage',
    'services.paragraph':
      'We guide you from strategy through ongoing operations, combining local talent with global alliances.',
    'services.card1.title': 'Cloud AI inference',
    'services.card1.text':
      'We deploy multi-region architectures with optimized costs, observability, and compliance across Latin America.',
    'services.card2.title': 'On-premise & edge implementation',
    'services.card2.text':
      'We bring models to plants, branches, and sovereign data centers with low latency and managed maintenance.',
    'services.card3.title': 'Intelligent process automation',
    'services.card3.text':
      'We design assistants, flows, and copilots that connect your internal systems and speed decision-making.',
    'services.card4.title': 'Data & ethics lab',
    'services.card4.text':
      'We curate data, audit bias, and define governance policies that protect your organization.',
    'methodology.eyebrow': 'Our methodology',
    'methodology.heading': 'From vision to continuous operations',
    'methodology.paragraph':
      'We build sustainable AI programs through immersive discovery, controlled iterations, and dedicated support in Spanish and English.',
    'methodology.step1.title': 'Immersive diagnosis',
    'methodology.step1.text': 'We map processes, critical data, and regulatory goals alongside your teams.',
    'methodology.step2.title': 'Architecture blueprint',
    'methodology.step2.text': 'We design hybrid architectures with governance, security, and adoption plans.',
    'methodology.step3.title': 'Iterative implementation',
    'methodology.step3.text': 'We launch controlled pilots, measure impact, and fine-tune models with real data.',
    'methodology.step4.title': 'Continuous operations',
    'methodology.step4.text': 'We operate, monitor, and train internal teams to ensure scalability.',
    'cases.eyebrow': 'Impact stories',
    'cases.heading': 'Measurable outcomes in critical sectors',
    'cases.paragraph':
      'We combine advanced analytics, platform engineering, and cultural alignment to accelerate tangible results.',
    'cases.card1.title': 'Latin American finance',
    'cases.card1.text':
      "We migrated a regional bank's scoring engine to cloud inference with sovereign governance, reducing credit risk by 18%.",
    'cases.card1.result': '✔ Approval time reduced to 45 seconds',
    'cases.card2.title': 'Retail & logistics',
    'cases.card2.text':
      'We implemented local models in Venezuelan distribution centers to optimize inventories and routes with limited connectivity.',
    'cases.card2.result': '✔ 32% fewer stockouts',
    'cases.card3.title': 'Energy & utilities',
    'cases.card3.text':
      'We enabled predictive monitoring of critical assets by combining IoT sensors and edge analytics with centralized dashboards.',
    'cases.card3.result': '✔ 4x earlier anomaly detection',
    'venezuela.eyebrow': 'Venezuelan roots',
    'venezuela.heading': 'Proudly Venezuelan, connected to the world',
    'venezuela.paragraph':
      'Our teams in Caracas blend scientific talent, product design, and regulatory insight to deliver AI experiences contextualized for Latin America.',
    'venezuela.point1': 'Centers of excellence in Caracas and Valencia with MLOps labs.',
    'venezuela.point2': 'Technology transfer and bilingual enablement programs.',
    'venezuela.point3': 'Partnerships with Venezuelan universities and tech communities.',
    'venezuela.card.title': 'Regional connectivity',
    'venezuela.card.text': 'We integrate hubs in Miami, Mexico City, and Bogotá to guarantee rapid response.',
    'venezuela.card.detail1': '24/7 support desk in Spanish and English',
    'venezuela.card.detail2': 'Hybrid on-site and remote squads',
    'testimonials.eyebrow': 'Proven trust',
    'testimonials.heading': 'Client stories evolving with our AI',
    'testimonials.quote1':
      '“With World App Technologies we migrated our critical models to hybrid infrastructure without interrupting operations. They are the strategic partner we needed.”',
    'testimonials.role1': 'VP of Digital Transformation',
    'testimonials.company1': 'Venezuelan universal bank',
    'testimonials.quote2':
      '“Their team understood our local challenges and delivered reliable AI solutions now replicated across the region.”',
    'testimonials.role2': 'Chief Operations Officer',
    'testimonials.company2': 'Latin American retail chain',
    'contact.eyebrow': "Let's get started",
    'contact.heading': 'Ready to design your AI ecosystem?',
    'contact.paragraph':
      "Share your objectives and we'll prepare a tailored strategy session with cloud and on-premise specialists.",
    'contact.labelEmail': 'Email:',
    'contact.labelHq': 'Headquarters:',
    'contact.labelGlobal': 'Regional presence:',
    'form.nameLabel': 'Name',
    'form.emailLabel': 'Work email',
    'form.companyLabel': 'Company',
    'form.companyPlaceholder': 'Your organization',
    'form.projectLabel': 'Initiative focus',
    'form.option1': 'Cloud inference',
    'form.option2': 'On-premise / edge implementation',
    'form.option3': 'Process automation',
    'form.option4': 'AI governance & ethics',
    'form.option5': 'Other',
    'form.messageLabel': 'Tell us more',
    'form.messagePlaceholder': 'What outcomes are you aiming for?',
    'form.submit': 'Send inquiry',
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
