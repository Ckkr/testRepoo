# Aufuq / أفق

A responsive English and Arabic company landing page, built with TypeScript and
Vite. It includes an original horizon illustration, company introduction,
services, an expandable approach section, and a project-brief builder.

## Run the website

Use Node.js 22.12 or newer (Node 24 was used for validation):

```sh
cd aufuq
npm ci
npm run dev
```

Create and inspect a production build:

```sh
npm run build
npm run preview
```

The production files are generated in `aufuq/dist/`. Deploy that directory to a
static web host. The page needs no database, credentials, API, or external asset
service. Fonts and artwork are local/system assets.

## Features

- Complete English/Arabic language switching, including RTL layout. The language
  preference is stored locally; entered form values survive a language change.
- Responsive desktop/mobile layouts, keyboard navigation, native accessible
  accordions and modal, and reduced-motion support.
- Service links preselect the project-brief category.
- The brief form validates required fields and email format. Visitors can copy
  or download their brief as UTF-8 text. It does **not** submit information to a
  server or send email. Clipboard copying requires a secure browser context.

## Customize

Edit company copy and both translations in `aufuq/src/content.ts`, presentation
in `aufuq/src/style.css`, and interactions in `aufuq/src/main.ts`. The company
positioning and services are initial content; review them against the actual
business before publishing. No contact details, client claims, or performance
statistics have been invented. A contact destination/backend can be added when
one is supplied.

The existing TensorFlow flower-classification notebook, exported HTML, and
`temp.py` have been preserved. They are independent of the website and are not
needed to build or serve it.
