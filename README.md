# Anna Shevchenko — Portfolio

Personal portfolio of Anna Shevchenko, a UX designer and frontend developer working at the intersection of psychology, product design, and technology.

**[View the live portfolio →](https://xshevc02.github.io/portfolio/)**

## About the project

The website presents my education, professional experience, skills, interests, and selected UX/UI projects. It is designed as a lightweight, responsive experience with dedicated long-form case-study pages.

Featured projects include:

- **Analyticity redesign** — UX research, interface design, usability testing, and frontend implementation for a data-heavy traffic-analysis application.
- **Wake & Wine** — a UX/UI and full-stack case study for a neutral alcohol and caffeine habit tracker.

## Built with

- TypeScript
- Vite
- HTML and CSS
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Portfolio content is managed centrally in `src/data/portfolio.ts`. Images are stored in `public/images`.

## Deployment

Every push to the `main` branch triggers the GitHub Actions workflow that builds the Vite application and deploys the generated `dist` directory to GitHub Pages.
