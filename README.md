# Rachael Ngotho — Portfolio

Personal portfolio website for **Rachael Ngotho**, UI/UX & Product Designer. Built with Next.js, TypeScript, and Tailwind CSS.

---

## Sections

| Section | Folder | Description |
|---|---|---|
| Landing | `src/components/sections/landing` | Hero / introduction |
| Featured Projects | `src/components/sections/featured-projects` | Showcase of selected work |
| Areas of Focus | `src/components/sections/areas-of-focus` | Core design disciplines |
| Design with Purpose | `src/components/sections/design-with-purpose` | Philosophy and process |
| Footer | `src/components/sections/footer` | Links, contact, and credits |

---

## Project Structure

```
rachaeluiux/
├── public/
│   ├── fonts/          # Custom typefaces
│   └── images/         # Static images (OG image, favicon assets, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css # Global styles and Tailwind base
│   │   ├── layout.tsx  # Root layout (metadata, fonts)
│   │   └── page.tsx    # Home page — composes all sections
│   ├── assets/
│   │   ├── icons/      # SVG icon files
│   │   └── images/     # Imported image assets (next/image sources)
│   ├── components/
│   │   ├── sections/   # One folder per page section
│   │   │   ├── landing/
│   │   │   ├── featured-projects/
│   │   │   ├── areas-of-focus/
│   │   │   ├── design-with-purpose/
│   │   │   └── footer/
│   │   └── ui/         # Shared, reusable UI components
│   ├── lib/            # Utility functions and helpers
│   └── types/          # Shared TypeScript type definitions
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Tech Stack

- **Framework** — [Next.js 14](https://nextjs.org/) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Linting** — ESLint

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start the production server
npm start
```

---

## Design

Designs are maintained in Figma. Ask Rachael for access to the design file.

---

## License

All design work and content © Rachael Ngotho. All rights reserved.
