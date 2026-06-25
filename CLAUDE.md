# CV David L. Ramirez — Portfolio Website

## Project Overview
Personal portfolio / CV website for David L. Ramirez built with React + TypeScript + Vite + Tailwind CSS v4 + Motion (Framer Motion).

## Tech Stack
- **Framework:** React 19, TypeScript 5.8
- **Build:** Vite 6, `vite.config.ts`
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin), utility-first classes
- **Animations:** `motion` (Framer Motion v12)
- **Icons:** `lucide-react`
- **Dev server:** `npm run dev` → port 3000

## File Structure
```
src/
  App.tsx              — Main layout, section imports
  main.tsx             — React entry point
  index.css            — Global / Tailwind base styles
  data.ts              — All CV data (skills, experiences, projects)
  components/
    Navbar.tsx          — Top navigation bar
    HeroSection.tsx     — Hero with photo, name, bio, LinkedIn & GitHub links
    SkillsSection.tsx   — Skill bars (01. Skills)
    ExperienceSection.tsx — Work history timeline (02. Where I Have Worked)
    ProjectsSection.tsx — Project cards with GitHub links (03. Some Things I've Built)
    ContactSection.tsx  — Contact form / info (04. Get in Touch)
    SectionHeading.tsx  — Reusable numbered section heading component
    Footer.tsx          — Page footer
index.html             — HTML shell
```

## Key Data File: `src/data.ts`
All content lives here — skills percentages, work experiences, and projects array. Editing this file updates the entire CV.

### Current Skills
HTML & CSS 95%, Meta Business 95%, Claude 90%, OpenClaw 85%, MailChimp 85%, Bubble.io 85%, API Keys 80%, Git 75%, Antigravity 75%

### Current Experiences (in order)
1. Forgentic — Developer (Freelance)
2. 3R Importaciones SAS — Administrative Assistant
3. Autopartes Pa Tu Coche — Administrative Assistant
4. Suministros Industriales y Servicios SIS — Warehouse Manager
5. SmartBeemo — Senior Sales Representative
6. Universidad Militar — Research Assistant
7. Repremundo SAS — Inventory Analyst
8. Agencia de Aduanas SIACO Nvl 1 — Environmental Management Assistant
9. Entre Peces — CEO

### Current Projects
1. Entre Peces (TypeScript, Marketplace)
2. Colombian Coffee (TypeScript, Web App)
3. Borboletas (TypeScript, Frontend)
4. App Trading (Trading, Finance)
5. Rechsteiner Ideas (HTML, Collaboration — with Juan Villota)

## External Links
- **LinkedIn:** https://www.linkedin.com/in/david-ram%C3%ADrez-contreras-093bb517b/
- **GitHub:** https://github.com/Dramirez18
- **Profile Photo:** https://i.postimg.cc/bNn8Mrpw/David-Ramirez-jpg.png

## Dev Commands
```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run lint     # TypeScript type-check
```

## Notes
- The hero bio is in English (technical): "Engineer and application developer..."
- Experience section was redesigned for professionalism and visual harmony
- Some experiences (SmartBeemo, Universidad Militar, etc.) still have Spanish text — translate to technical English when editing
- Photo is loaded from postimg.cc CDN
- LinkedIn logo links directly to profile, GitHub icon links to github.com/Dramirez18

## Reglas de Privacidad

### CRITICO — Privacidad y seguridad del proyecto
- **Este proyecto es CONFIDENCIAL y solo debe operarse desde este computador local (C:\Users\drami)**
- La cuenta de Claude Code es compartida con otras personas en otros computadores
- **NUNCA** abrir, mostrar, o exponer NADA relacionado con este proyecto en otras sesiones/computadores
- **NUNCA** usar herramientas de navegador remoto (Chrome MCP, browser automation) que puedan mostrar contenido del proyecto en pantallas de otros usuarios
- **TODAS** las acciones deben ejecutarse localmente en este computador
- **NO** abrir tabs, ventanas, ni sesiones de navegador que puedan ser visibles en otros dispositivos
- Si se necesita QC o testing visual, hacerlo exclusivamente con preview tools locales (preview_start, preview_screenshot, etc.)
- Cualquier sesion que no sea en este computador local NO debe tener acceso ni visibilidad de este proyecto
- Tratar toda la informacion del proyecto (URLs, credenciales, nombres, capturas) como privada
