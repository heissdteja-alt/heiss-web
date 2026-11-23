/*
 * Portafolio. Para agregar un proyecto, copia un objeto y edítalo.
 * - accent: "blue" o "navy" (color de la franja superior)
 * - before/after: si existen, se muestran como "Antes: ... Ahora: ..."; si no, se usa "description"
 * - link: { href, es, en } para un enlace, o note: { es, en } para un texto sin enlace
 * Reglas: nada inventado; proyectos privados sin nombres de empresas ni datos de clientes.
 */
window.HEISS_PROJECTS = [
  {
    accent: 'blue',
    category: { es: 'E-commerce · Código abierto', en: 'E-commerce · Open source' },
    title: { es: 'Monitor de precios en Mercado Libre', en: 'Mercado Libre price monitor' },
    before: { es: 'revisar a la competencia a mano.', en: 'checking competitors by hand.' },
    after: { es: 'productos y precios en una hoja, automático.', en: 'products and prices in a spreadsheet, automatically.' },
    tags: ['Python', 'Playwright'],
    link: { href: 'https://github.com/heissdteja-alt/mercadolibre-scraper', es: 'Ver el proyecto →', en: 'View the project →' }
  },
  {
    accent: 'navy',
    category: { es: 'Ventas · Automatización', en: 'Sales · Automation' },
    title: { es: 'Búsqueda automática de clientes', en: 'Automated lead generation' },
    before: { es: 'buscar prospectos uno por uno.', en: 'searching for prospects one by one.' },
    after: { es: 'listas de negocios con contacto, listas para llamar.', en: 'lists of businesses with contact details, ready to call.' },
    tags: ['n8n', 'Google Sheets'],
    note: { es: 'Caso privado · demo bajo solicitud', en: 'Private case · demo on request' }
  },
  {
    accent: 'navy',
    category: { es: 'CRM · Inteligencia artificial', en: 'CRM · Artificial intelligence' },
    title: { es: 'CRM con vendedor virtual', en: 'CRM with a virtual sales assistant' },
    description: {
      es: 'Un CRM hecho a la medida de cada negocio, con un bot que atiende y registra a tus clientes.',
      en: 'A CRM tailored to each business, with a bot that serves and records your customers.'
    },
    tags: ['Python', 'PostgreSQL', 'IA|AI'],
    link: { href: '#producto', es: 'Conocer HEISS CRM →', en: 'Discover HEISS CRM →' }
  },
  {
    accent: 'blue',
    category: { es: 'Inventario · Reportes', en: 'Inventory · Reporting' },
    title: { es: 'Inventario de varias tiendas en un reporte', en: 'Multi-store inventory in one report' },
    before: { es: 'juntar inventarios a mano cada día.', en: 'merging inventories by hand every day.' },
    after: { es: 'un reporte diario listo en minutos.', en: 'a daily report ready in minutes.' },
    tags: ['Python', 'Excel'],
    note: { es: 'Caso privado', en: 'Private case' }
  }
];
