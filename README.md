# Portfolio Web App (BETA)  still testing and improving

This is a modern portfolio web application built with [SvelteKit](https://kit.svelte.dev/) and [SanityCMS](https://www.sanity.io/). It showcases projects, skills, and work experience with smooth page transitions and a clean, responsive design.

## Features

- **Animated Page Transitions**: Uses View Transitions API for smooth navigation between pages and lenis for smooth scrolling.
- **Project Showcase**: Highlights main and additional projects with images and details.
- **Skills Section**: Displays technology stack with icons.
- **Responsive Design**: Looks great on all devices.
- **SanityCMS**: Uses Sanity as CMS to fetch latest data for Projects Section and Skills section.
- **Dark/Light Mode Support**: Adapts to user’s system preferences.

## Tech Stack

- **SvelteKit**: Application framework for building fast, modern web apps.
- **TypeScript**: Type-safe JavaScript for scalable development.
- **CSS (with custom animations)**: For styling and view transitions.
- **Vite**: Lightning-fast build tool and dev server (via SvelteKit).
- **SanityCMS**: Uses Sanity as CMS to fetch latest data for Projects Section and Skills section.
- **(Optional) FontAwesome or similar**: For skill icons (based on usage in SkillsSection).

## Project Structure

- `src/routes/` — SvelteKit routes (pages)
- `src/lib/components/` — Reusable Svelte components (Sections, Header, Footer, etc.)
- `src/app.css` — Global styles and transition animations

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview the production build:**

   ```bash
   npm run preview
   ```

## Customization

- Add your projects and skills in the appropriate data files or endpoints.
- Update styles in `src/app.css` as needed.
