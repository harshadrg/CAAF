# CAAF - Compliance, Audit & Advisory Firm

A professional, high-performance web application for **CAAF**, an independent multidisciplinary advisory firm specializing in cybersecurity, governance, and regulatory compliance.

---

## Project Overview

CAAF (Compliance, Audit & Advisory Firm) provides specialized strategic guidance for regulated enterprises. The application serves as a comprehensive digital presence, showcasing CAAF's multidisciplinary advisory model which integrates:
- **Technical Expertise**: Cybersecurity and secure engineering.
- **Audit Rigor**: Independent assurance and control validation.
- **Regulatory Insight**: Legal and compliance frameworks (DPDP, GDPR, RBI).

The app is designed with a premium, professional aesthetic using modern web technologies to ensure speed, accessibility, and a seamless user experience across all devices.

---

## Tech Stack

### Core Framework & Language
- **React 19.2.0**: Latest React features including improved performance and developer experience.
- **TypeScript 5.9.3**: Strict typing for robust, self-documenting code.
- **Vite 7.3.1**: Next-generation frontend tooling for lighting-fast builds and HMR.

### Styling & Design
- **Tailwind CSS 4.2.1**: Utility-first CSS framework with the new `@tailwindcss/vite` plugin.
- **Vanilla CSS (Modern CSS)**: Extensive use of CSS Variables (CSS 4) and OKLCH color spaces for high-fidelity design.
- **Glassmorphism**: UI components utilize backdrop blurs and subtle transparencies for a premium feel.

### Routing & Navigation
- **React Router 7.13.1**: Modern routing with support for nested layouts and declarative routes.
- **HashRouter**: Used for compatibility with static hosting environments.

### Tooling & Optimization
- **ESLint 9.39.1**: Modern linting setup for code quality.
- **Babel Plugin React Compiler**: Automated optimization of React components.

---

## Project Structure

```text
src/
├── assets/             # Images, logos, and static SVG assets
├── components/         # Categorized layout and UI components
│   ├── aboutLayout/    # Sections specific to the About page
│   ├── contactLayout/  # Form and contact information components
│   ├── footerLayout/   # Global Footer with compliance and navigation
│   ├── headerLayout/   # Sticky Header with responsive mobile drawer
│   ├── homeLayout/     # High-level sections for the landing page
│   ├── industriesLayout/ # Cards and UI for sector expertise
│   ├── servicesLayout/ # Modular service sections and anchor navigation
│   ├── ui/             # Core design system components (Button, Icons)
│   └── virtualServicesLayout/ # vCISO and vDPO specific sections
├── pages/              # Top-level page components (Home, About, etc.)
├── styles/             # Global CSS and Design Tokens (theme.css)
├── App.tsx             # Main application layout wrapper
├── main.tsx            # Entry point and router configuration
└── index.css           # Global base styles and Tailwind directives
```

---

## Pages & Routes

| Path | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Landing page featuring the CAAF model, pillars, and hero statistics. |
| `/about` | `About` | Deep dive into CAAF's mandate, philosophy, and multidisciplinary model. |
| `/services` | `Services` | Comprehensive overview of the 7+ service areas with smooth anchor navigation. |
| `/virtual-services` | `VirtualServices` | Detailed breakdown of vCISO and vDPO governance offerings. |
| `/industries` | `Industries` | Sector-specific advisory expertise (Banking, Healthcare, SaaS, etc.). |
| `/contact` | `Contact` | Secure inquiry form and professional contact channels. |
| `/privacy` | `Privacy` | DPDP and GDPR aligned privacy policy. |
| `/terms` | `Terms` | Legal terms of service and engagement framework. |
| `*` | `NotFound` | Premium 404 error page with navigation recovery. |

---

## Components

### Base UI (`src/components/ui/`)
- **`Button.tsx`**: A highly flexible button component supporting:
  - **Variants**: `primary`, `secondary`, `outline`, `hero-gold`, `cta-light`, `link`.
  - **Types**: Renders as `NavLink` (internal), `<a>` (external), or `<button>` (action).
- **`Icons.tsx`**: Centralized icon system using the `IconBase` pattern for consistent sizing and styling.
- **`ThemeToggle.tsx`**: Persistent dark/light mode toggle that syncs with system preferences and `localStorage`.

### Shared Layouts
- **`Header`**: Sticky navigation bar with `backdrop-blur` and a managed mobile drawer state.
- **`Footer`**: Multi-column footer including quick links, newsletter signup, and compliance certificates.
- **`ServiceSection`**: A polymorphic section component used in the Services page to render different advisory areas with dynamic accent colors.

---

## Design System

### CSS Tokens (`theme.css`)
The project uses a comprehensive set of CSS variables defined in `@theme`:
- **Primary Color**: `oklch(55% 0.22 243)` (Professional Blue)
- **Secondary Color**: `oklch(62% 0.18 65)` (Accent Gold)
- **Surface/Card**: Modern tokens for light/dark mode elevation (`--color-surface`, `--color-card`).
- **Typography**: Primary font is **Inter**, headings use **Poppins**.

### Custom Utility Classes
- `.section-padding`: Standardizes vertical spacing between sections using `clamp`.
- `.container-max`: Caps horizontal width at `1280px` and centers content.
- `.glass-panel`: Standardizes the glassmorphism effect (blur + border + alpha).
- `.card-hover`: Handles consistent lift and shadow transitions for interactive cards.

### IconBase Pattern
All icons are wrapped in `IconBase`, which ensures standard SVG attributes (viewBox, stroke-linecap, etc.) and allows global overrides for `size` and `strokeWidth`.

---

## Icons

Available in `src/components/ui/Icons.tsx`. Every icon inherits `currentColor`.

- **`ShieldCheck`**: Used for compliance and trust indicators.
- **`ArrowRight` / `ArrowUpRight`**: Primary navigation and action indicators.
- **`Landmark`**: Associated with Banking and Financial Services.
- **`Scale`**: Used for Legal and Regulatory advisory sections.
- **`Menu` / `X`**: Controls for the mobile navigation drawer.
- *(And 50+ other specialized icons for technology, business, and industry categories)*.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Local Build
```bash
npm run preview
```

---

## Environment & Configuration

### Environment Variables
The following variables can be configured in your `.env` files:
- `VITE_COMPANY_NAME`: Display name of the firm.
- `VITE_CONTACT_EMAIL`: Primary contact email address.
- `VITE_CONTACT_PHONE`: Primary contact phone number.
- `VITE_CONTACT_ADDRESS`: Physical office address.
- `VITE_LINKEDIN_URL` / `VITE_TWITTER_URL`: Social media links.

### Routing Configuration
The project uses **HashRouter** as specified in `main.tsx`. 
> **Note on Anchor Navigation**: Because the project uses a sticky header, scroll navigation (e.g., in `ServicesAnchorNav.tsx`) uses `scrollIntoView({ behavior: 'smooth' })` to ensure the target section is not hidden behind the header.

---

## Contributing Guidelines

When contributing to the CAAF project, please adhere to the following patterns:

### Visual Consistency
- **Always use CSS Variables**: Do not use hardcoded hex values or utility colors (e.g., `text-blue-500`). Use `text-(--color-primary)`.
- **Spacing**: Use `.section-padding` for top-level page sections and `.container-max` for content containment.

### Component Structure
- **File Naming**: Use `PascalCase.tsx` for components.
- **Section Pattern**: Main page layouts should consist of modular section components imported from their respective layout folders (e.g., `src/components/homeLayout/`).
- **Semantic HTML**: Ensure headings (`h1`-`h6`) follow a logical hierarchy and use `aria-labelledby` for complex sections.

### Adding New Icons
1. Define the SVG paths within a new functional component in `src/components/ui/Icons.tsx`.
2. Wrap the paths in `<IconBase {...p}>`.
3. Add the icon to the `Icons` export object at the bottom of the file.

---

&copy; 2026 CAAF Advisory Firm. All rights reserved.
