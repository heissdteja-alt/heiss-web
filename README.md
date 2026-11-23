# heiss-web

Sitio estático de **HEISS Data Business Solutions** (https://heissdata.com). HTML + CSS + JS vanilla, sin frameworks ni build. Español e inglés.

## Estructura

```
index.html                 Página principal (textos en español en el HTML)
aviso-de-privacidad.html   Aviso de privacidad (LFPDPPP) ES + EN
css/styles.css             Estilos (réplica del diseño aprobado)
js/main.js                 Traducciones al inglés, selector ES/EN, menú móvil, animaciones
js/projects.js             Portafolio (arreglo de proyectos)
assets/                    Logo, favicon, imagen Open Graph
_headers                   Cabeceras de seguridad para Cloudflare Pages
robots.txt, sitemap.xml
```

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta (por ejemplo `npx serve .`) para probar rutas como `/aviso-de-privacidad`.

## Idiomas

- El español vive en el HTML. El inglés está en el objeto `EN` de `js/main.js`, con la misma clave que el atributo `data-i18n` (texto), `data-i18n-html` (con etiquetas) o `data-i18n-attr="atributo:clave"`.
- Para un texto nuevo: ponle `data-i18n="seccion.clave"` en el HTML y agrega `'seccion.clave': 'English text'` en `EN`.
- La primera visita usa el idioma del navegador; la elección se guarda en `localStorage`. `?lang=en` o `?lang=es` la fuerzan.

## Agregar un proyecto al portafolio

Edita `js/projects.js` y agrega un objeto al arreglo:

```js
{
  accent: 'blue',                                   // 'blue' o 'navy'
  category: { es: 'Datos · Reportes', en: 'Data · Reporting' },
  title:    { es: 'Título en español', en: 'English title' },
  before:   { es: 'cómo era antes.', en: 'how it was before.' },   // opcional
  after:    { es: 'cómo es ahora.',  en: 'how it is now.' },       // opcional
  // description: { es: '...', en: '...' },  // si no usas before/after
  tags: ['Python', 'IA|AI'],                        // 'es|en' si la etiqueta cambia con el idioma
  link: { href: 'https://github.com/...', es: 'Ver el proyecto →', en: 'View the project →' }
  // o, sin enlace: note: { es: 'Caso privado', en: 'Private case' }
}
```

Reglas: nada inventado (clientes, métricas, testimonios) y proyectos privados sin nombres de empresas ni datos de clientes.

## Enlaces pendientes

Los enlaces de LinkedIn y Upwork del pie están ocultos hasta que se llenen en el objeto `LINKS` al inicio de `js/main.js`.

## Publicar (Cloudflare Pages)

Primera vez:

```powershell
npx wrangler login
npx wrangler pages project create heiss-web --production-branch main
```

Cada vez que cambies algo:

```powershell
git add -A
git commit -m "feat: describe el cambio"
git push
npx wrangler pages deploy . --project-name heiss-web --branch main
```

El despliegue sube la carpeta tal cual (no hay build). Archivos como `README.md` también se publican; no pongas nada privado en el repo.

## Dominio

`heissdata.com` y `www.heissdata.com` se conectan en el panel de Cloudflare: Workers & Pages → heiss-web → Custom domains → Set up a custom domain. No toques los registros de correo (MX, SPF, DKIM `zmail._domainkey`, DMARC `_dmarc`, `zoho-verification`), que son de Zoho Mail.
