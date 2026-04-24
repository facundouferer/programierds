# Programierds

Academia de programacion con contenido gratuito, enfoque practico y cero aburrimiento.

## Por que existe este proyecto

En la era de la inteligencia artificial, aprender a programar no perdio relevancia: se volvio mas importante que nunca. Herramientas como ChatGPT, Copilot o Claude pueden escribir codigo, pero **si no entendes los fundamentos, no sabes que pedirle a la IA, no podes evaluar si lo que te devuelve esta bien, y mucho menos depurarlo cuando falla**.

Programierds nace para ensenar los fundamentos de la programacion de forma clara y directa. No se trata de seguir tutoriales sin pensar, sino de entender los conceptos que te permiten dirigir a la IA como una herramienta, no depender de ella como una muleta.

**Somos Tony Stark, la IA es Jarvis.** Nosotros dirigimos, ella ejecuta. Pero para dirigir, hay que saber.

## Tecnologias

| Tecnologia | Version | Uso |
|---|---|---|
| [Astro](https://astro.build) | 5.x | Framework web, SSG, Content Collections |
| [TypeScript](https://www.typescriptlang.org) | strict | Tipado estatico en todo el proyecto |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Styling utility-first con dark mode |
| [Vitest](https://vitest.dev) | 4.x | Testing unitario de funciones de utilidad |
| [CodeMirror 6](https://codemirror.net/) | 6.x | Editor de codigo en el Playground |
| [Zod](https://zod.dev) | via Astro | Validacion de schemas en Content Collections |

### Plugins de Tailwind

- `@tailwindcss/typography` — clases `prose` para renderizado de Markdown
- `@tailwindcss/forms` — estilos base para formularios

### Fuentes

- **Space Grotesk** — tipografia principal (`@fontsource/space-grotesk`)
- **Fira Code** — tipografia monospace para bloques de codigo (`@fontsource/fira-code`)

### Colores personalizados

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#0df259` | Verde acento |
| `background-dark` | `#102216` | Fondo oscuro |
| `background-light` | `#f5f8f6` | Fondo claro |
| `accent-blue` | `#3b82f6` | Acentos azules |
| `accent-brown` | `#78350f` | Acentos marrones |
| `editor-bg` | `#0d1b11` | Fondo del editor de codigo |
| `terminal-bg` | `#050a06` | Fondo de la terminal |

## Arquitectura

```
programierds/
├── src/
│   ├── assets/              # Assets estaticos (SVGs, imagenes)
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro       # Sistema de iconos SVG por nombre
│   │   ├── Icons.astro      # Sprite sheet de iconos
│   │   ├── Welcome.astro    # Componente de bienvenida
│   │   └── test/
│   │       └── TestRunner.astro  # Motor de quizzes interactivos
│   ├── content/
│   │   ├── es/              # Contenido en espanol (fuente de verdad)
│   │   │   ├── courses/     # Cursos (c, git, java, javascript)
│   │   │   └── tests/       # Quizzes
│   │   └── en/              # Contenido en ingles (traducciones, fallback a es)
│   │       ├── courses/
│   │       └── tests/
│   ├── content.config.ts    # Schemas Zod (courses_es, courses_en, tests_es, tests_en...)
│   ├── i18n/                # Sistema bilingue
│   │   ├── es.ts            # Diccionario de strings en espanol
│   │   ├── en.ts            # Diccionario de strings en ingles
│   │   ├── types.ts         # Locale, DEFAULT_LOCALE, LOCALES
│   │   ├── index.ts         # useTranslations, getLocaleFromPathname, withLocale
│   │   └── i18n.test.ts     # Tests del helper
│   ├── layouts/
│   │   └── Layout.astro     # Layout base: fonts, meta, dark mode, <html lang>
│   ├── pages/
│   │   ├── index.astro      # Redirect a /es/
│   │   ├── 404.astro        # Pagina de error (detecta locale desde URL)
│   │   └── [lang]/          # Todo el sitio vive bajo /[lang]/
│   │       ├── index.astro  # Home
│   │       ├── playground.astro
│   │       ├── cursos/
│   │       │   ├── index.astro
│   │       │   └── [course]/
│   │       │       ├── index.astro
│   │       │       └── [lesson].astro
│   │       ├── presentaciones/
│   │       │   ├── index.astro
│   │       │   └── *.astro (22 slides)
│   │       └── test/
│   │           ├── index.astro
│   │           └── [slug].astro
│   ├── styles/
│   │   └── global.css       # Tailwind directives + estilos globales
│   ├── templates/           # Mockups HTML de referencia (no se buildean)
│   └── utils/
│       ├── paths.ts         # getRelativePath, getLocalizedRelativePath
│       ├── paths.test.ts    # Tests unitarios de paths.ts
│       ├── content.ts       # Helpers bilingues: getCoursesForLocale, etc.
│       ├── tests.ts         # Logica pura de quizzes
│       └── tests.test.ts    # Tests unitarios
├── public/                  # Assets estaticos (imagenes, favicons)
├── docs/                    # Documentacion del proyecto
├── astro.config.mjs         # Configuracion Astro (site, base path)
├── tailwind.config.mjs      # Configuracion Tailwind con tokens
├── tsconfig.json            # TypeScript strict mode
└── package.json
```

## Rutas del sitio

El sitio es **bilingue (es / en)** con prefijo de locale obligatorio. La raiz `/` hace redirect a `/es/`.

| Ruta | Descripcion |
|---|---|
| `/` | Redirect a `/es/` (locale default) |
| `/[lang]/` | Landing principal (lang = `es` o `en`) |
| `/[lang]/cursos` | Listado de cursos |
| `/[lang]/cursos/[course]` | Detalle del curso |
| `/[lang]/cursos/[course]/[lesson]` | Leccion individual en Markdown |
| `/[lang]/playground` | Editor de codigo interactivo |
| `/[lang]/presentaciones` | Listado de presentaciones |
| `/[lang]/presentaciones/[nombre]` | Slide interactiva individual |
| `/[lang]/test` | Listado de quizzes |
| `/[lang]/test/[slug]` | Quiz interactivo individual |
| `/404` | Pagina de error (detecta locale desde URL) |

## Sistema bilingue (i18n)

El sitio soporta **espanol (`es`, default) e ingles (`en`)**. El selector en el header son las banderas 🇦🇷 / 🇺🇸.

### Arquitectura

- **Config**: `astro.config.mjs` define `i18n` con `defaultLocale: 'es'`, `prefixDefaultLocale: true`, `fallback: { en: 'es' }`.
- **Diccionarios UI**: `src/i18n/es.ts` y `src/i18n/en.ts` — objetos planos con todas las strings de interfaz.
- **Helper**: `src/i18n/index.ts` expone `useTranslations(locale)`, `getLocaleFromPathname`, `withLocale`, etc.
- **Paths**: `src/utils/paths.ts` expone `getLocalizedRelativePath(locale, path)` — usalo SIEMPRE para links internos, en lugar de `getRelativePath`.
- **Content collections**: hay seis colecciones en total — `courses_es`, `courses_en`, `chapters_es`, `chapters_en`, `tests_es`, `tests_en`. Los helpers `getCoursesForLocale`, `getChaptersForLocale`, `getTestsForLocale` de `src/utils/content.ts` hacen merge con fallback a espanol cuando falta la traduccion en ingles.

### Como agregar una string de UI nueva

1. Agrega la clave y su valor en **`src/i18n/es.ts`** (fuente de verdad, define el tipo `TranslationKey`).
2. Agrega la traduccion equivalente en **`src/i18n/en.ts`** (TypeScript te obliga a cubrirla).
3. En el componente, leela con:

```astro
---
import { useTranslations, type Locale } from '../i18n';
const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
---
<h1>{t('mi.nueva.clave')}</h1>
```

Si la clave falta en `en.ts` (traduccion parcial), `useTranslations` hace fallback automatico a espanol.

### Como agregar una leccion/curso traducido

La estructura es **espejada por idioma**. El curso de C en espanol vive en `src/content/es/courses/c/` y su version en ingles deberia vivir en `src/content/en/courses/c/`.

Para traducir una leccion existente:

1. Copiar `src/content/es/courses/c/03-variables-y-constantes.md` a `src/content/en/courses/c/03-variables-y-constantes.md` (mismo nombre de archivo).
2. Traducir el `title` del frontmatter y el cuerpo en Markdown.
3. Al buildear, la version en ingles aparece en `/en/cursos/c/03-variables-y-constantes`.

Si una leccion NO existe en `en/`, la ruta `/en/cursos/c/...` renderiza la version en espanol con un banner "traduccion pendiente". Esto permite traducir de forma incremental sin romper el sitio.

Para traducir un curso entero, tambien hay que crear su `index.md` en `src/content/en/courses/<curso>/index.md` con los campos `description`, `technology`, `difficulty`.

### Workflow recomendado para una IA que continua traducciones

Si una IA tiene que seguir traduciendo contenido faltante, este es el flujo correcto:

1. **Elegir un bloque coherente**: terminar un curso o una tanda consecutiva de lecciones (`01-04`, `05-08`, etc.). Evitar traducir archivos sueltos al azar.
2. **Verificar que realmente falte**: revisar si el archivo ya existe en `src/content/en/...` antes de crearlo.
3. **Mantener la ruta espejada**: mismo nombre de archivo, misma carpeta, mismo slug.
4. **Traducir solo contenido**: frontmatter + cuerpo Markdown. No cambiar nombres de archivo, slugs, estructura del curso ni schemas.
5. **Conservar identificadores**:
   - en cursos/lecciones: conservar filename y ruta relativa
   - en tests: conservar `slug`, `id` de preguntas, `kind`, y estructura `questions` / `algorithm`
6. **No usar `getCollection()` directo** para “probar” si aparece. La resolucion oficial siempre pasa por `src/utils/content.ts`.
7. **Validar despues de cada tanda**:
   - `npm run astro check`
   - `npm run test`
8. **Si una traduccion nueva no aparece en `localhost`** pero el archivo existe, sospechar de **dev server stale**. Reiniciar `astro dev` antes de asumir que la traduccion esta mal.

### Reglas concretas para traducciones de contenido

- **No inventar slugs nuevos** en tests traducidos.
- **No renombrar archivos** al pasar de `es` a `en`.
- **No mezclar varios cursos en una sola tanda** si todavia no cerraste el bloque actual.
- **Preferir consistencia pedagogica** sobre literalidad absoluta: si el original usa tono didactico simple, la traduccion tambien.
- **Mantener snippets de codigo intactos** salvo strings visibles al usuario cuando tenga sentido traducirlas.
- **No tocar contenido fuente en `es/`** salvo que el trabajo sea explicitamente corregir errores del original.

### Como detectar fallback vs traduccion real

Cuando una ruta `/en/...` muestra espanol, no asumas automaticamente que “la pagina esta rota”.

- Si **existe** el archivo en `src/content/en/...` y aun asi ves espanol, puede haber **cache/dev server stale**.
- Si **no existe** el archivo en `src/content/en/...`, entonces el helper esta haciendo **fallback intencional** al contenido en espanol.
- El comportamiento de fallback vive en `src/utils/content.ts`.

### Gotcha conocido del repositorio

Hay un problema de contenido preexistente en tests de C con id/slug repetido:

- `src/content/es/tests/input-c-01.md`
- `src/content/es/tests/ingreso-de-datos-en-c.md`

Antes de traducir tests, verificar duplicados para no replicar el problema en `en/`.

### Como agregar un test/quiz traducido

Mismo patron: copiar `src/content/es/tests/mi-test.md` a `src/content/en/tests/mi-test.md` y traducir `title`, `description`, `prompt`, `options`, `explanation`. El `slug` se mantiene (es el identificador).

### Como traducir una presentacion

Las presentaciones viven en `src/pages/[lang]/presentaciones/*.astro`. Cada archivo tiene `getStaticPaths` que genera `/es/presentaciones/...` y `/en/presentaciones/...`. Hoy el contenido interno esta en espanol.

Para soportar EN en una presentacion:

1. Leer el locale desde `Astro.params.lang`.
2. Envolver los textos con `useTranslations(lang)` o usar un condicional `{lang === 'en' ? '...' : '...'}` para los fragmentos.
3. Cuando aun no este traducida, el Layout muestra el banner "untranslatedBanner" automaticamente al detectar `lang === 'en'` en el listing.

### Fallback a espanol

El fallback opera a dos niveles:

1. **UI strings**: si `en.ts` no tiene una clave, `useTranslations('en')` devuelve el valor de `es.ts`.
2. **Content**: si una leccion/test no existe en `src/content/en/...`, los helpers de `utils/content.ts` devuelven el entry en espanol y marcan `fallbackUsed: true`. Las paginas muestran un banner.

## Content Collections (Content Config)

Definidas en `src/content.config.ts` con Zod. Hay **seis colecciones** (tres por idioma):

| Collection | Patron | Campos obligatorios |
|---|---|---|
| `courses_es` / `courses_en` | `{es,en}/courses/**/index.md` | `description`, `technology`, `difficulty` |
| `chapters_es` / `chapters_en` | `{es,en}/courses/**/*.md` (sin index) | `title` |
| `tests_es` / `tests_en` | `{es,en}/tests/**/*.md` | `title`, `description`, `slug`, `category`, `kind`, y segun `kind`: `questions[]` o `algorithm` |

**Importante**: nunca llames `getCollection('courses_es')` directamente en paginas — usa los helpers `getCoursesForLocale(lang)`, `getChaptersForCourse(courseId, lang)`, `getTestsForLocale(lang)` de `src/utils/content.ts`. Estos hacen el merge con fallback a espanol cuando falta la traduccion.

### Tipos de test (`kind`)

Hay dos tipos soportados. Si no se especifica `kind`, se usa `multiple-choice`.

| `kind` | Descripcion |
|---|---|
| `multiple-choice` (default) | Varias preguntas con opciones, feedback al final |
| `code-ordering` | Un unico algoritmo con lineas mezcladas que hay que reordenar, contra tiempo |

### Schema de un quiz `multiple-choice` (`tests`)

```yaml
---
title: "Fundamentos de JavaScript"
description: "Descripcion breve (max 180 chars)"
slug: "fundamentos-javascript"
category: "JavaScript"
difficulty: "beginner"      # beginner | intermediate | advanced (opcional)
timeEstimate: 10            # minutos (opcional)
kind: "multiple-choice"     # opcional, este es el default
questions:
  - id: "q1"
    prompt: "¿Cuanto es 2 + 2?"
    code: |                 # snippet de codigo (opcional)
      const x = 2 + 2;
    language: "js"          # lenguaje del snippet (opcional)
    options:
      - "3"
      - "4"
      - "5"
    correctAnswer: 1        # indice 0-based
    explanation: "2 + 2 = 4." # explicacion (opcional)
---

Contenido introductorio del quiz en Markdown (opcional).
```

### Schema de un test `code-ordering` (`tests`)

Un **unico algoritmo** con lineas en el orden correcto. El runner las mezcla en el cliente al cargar y el usuario las reordena arrastrando o con botones de flecha, contra tiempo.

```yaml
---
title: "Ordenar: variables y constantes en C"
description: "Arrastra las lineas para reconstruir un programa en C."
slug: "ordenar-variables-c"
category: "C"
difficulty: "beginner"
timeEstimate: 5             # minutos (activa el timer)
kind: "code-ordering"       # OBLIGATORIO para este tipo
algorithm:
  prompt: "Ordena las lineas para armar un programa en C."
  language: "c"
  lines:                    # orden correcto, minimo 2 lineas
    - "#include <stdio.h>"
    - "int main() {"
    - "    int edad = 18;"
    - "    return 0;"
    - "}"
  explanation: "Por que este orden es correcto..."   # opcional
---

Contenido introductorio en Markdown (opcional).
```

**Notas importantes para `code-ordering`:**

- `algorithm.lines` va en el **orden correcto**. El shuffle se hace en el cliente.
- Cada linea tiene que ser un string NO vacio (`.min(1)` en el schema).
- Para escapar comillas dobles en una linea: `\"`. Para representar `\n` en un `printf`: `\\n` en el YAML.
- Se recomienda `timeEstimate` — este tipo de test esta pensado como "programa con tiempo".

## Como agregar un curso nuevo

1. Crear una carpeta en `src/content/es/courses/` con el nombre del curso (ej: `python/`)
2. Agregar `index.md` con el frontmatter requerido:

```yaml
---
description: "Descripcion del curso (max 120 caracteres)"
technology: "Python"
difficulty: "Beginner"  # Beginner | Intermediate | Advanced
---
```

3. Agregar lecciones como archivos Markdown numerados:

```yaml
---
title: "Titulo de la leccion"
---

# Titulo de la leccion

Contenido en Markdown...
```

4. Agregar un `logo.svg` para el icono del curso
5. Registrar el icono en `src/components/Icon.astro` con el nombre en minuscula de la technology

Las paginas se generan automaticamente. No hay que tocar rutas ni configuracion.

Para publicar el curso en ingles, duplicar los mismos archivos en `src/content/en/courses/<curso>/`. Si no existen en ingles, `/en/cursos/<curso>` hace fallback al contenido en espanol automaticamente.

## Como agregar un test/quiz nuevo

1. Crear un archivo `.md` en `src/content/es/tests/` (ej: `mi-quiz.md`) — la version en ingles va en `src/content/en/tests/` con el mismo nombre.
2. Elegir el `kind` (default: `multiple-choice`). Para tests de ordenar codigo: `kind: "code-ordering"`
3. El slug en el frontmatter debe ser unico — se valida en runtime
4. Usar el schema definido en `content.config.ts`
5. El quiz queda disponible automaticamente en `/test/[slug]`

### Ejemplo: agregar un test `code-ordering`

```bash
# crear archivo en espanol (default)
touch src/content/es/tests/ordenar-mi-algoritmo.md
# (opcional) version en ingles
touch src/content/en/tests/ordenar-mi-algoritmo.md
```

```yaml
# frontmatter
---
title: "Ordenar: mi algoritmo"
description: "Descripcion breve."
slug: "ordenar-mi-algoritmo"
category: "C"
difficulty: "beginner"
timeEstimate: 5
kind: "code-ordering"
algorithm:
  prompt: "Descripcion de lo que hay que ordenar."
  language: "c"
  lines:
    - "linea 1"
    - "linea 2"
    - "linea 3"
  explanation: "Opcional."
---
```

## Tests unitarios (Vitest)

Los tests de logica pura viven en `src/utils/tests.test.ts` y cubren `src/utils/tests.ts`.

```bash
npm run test         # Corre todos los tests una vez
npm run test:watch   # Modo watch (desarrollo)
```

### Ciclo TDD obligatorio

Una tarea no esta completa hasta completar este circuito:

1. **Test primero** — escribir el test que falla (Rojo)
2. **Implementacion minima** — hacer que el test pase (Verde)
3. **Validacion estatica** — `npm run astro check` (TypeScript + Astro)
4. **Sin regresiones** — `npm run test` (todos los tests pasan)

## Comandos

```bash
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de produccion -> ./dist/
npm run preview      # Preview del build de produccion
npm run astro check  # Validacion TypeScript y Astro
npm run test         # Tests con Vitest (single run)
npm run test:watch   # Tests con Vitest (watch mode)
```

## Deploy

El sitio se despliega automaticamente a GitHub Pages cuando se hace push a la rama `main`. El desarrollo se hace en la rama `desarrollo` y se mergea a `main` via Pull Request.

- **URL de produccion**: https://facundouferer.github.io/programierds

## Autor

**Facundo Uferer** — Senior Full Stack Engineer | AI-Driven Architect | Tech Lead

- [LinkedIn](https://www.linkedin.com/in/facundouferer)
- [GitHub](https://github.com/facundouferer)
- [Web](https://facundouferer.ar)
