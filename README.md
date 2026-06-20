# Portfolio

A responsive personal portfolio built with TypeScript and Vite.

## Local development

```bash
npm install
npm run dev
```

Edit personal details, education, experience, skills, hobbies, and projects in
`src/data/portfolio.ts`. Place personal photos in `public/images` and reference
them from the data file, for example `./images/profile.jpg`.

The site includes:

- a long-form portfolio homepage;
- a printable HTML CV at `/cv/`;
- individual project case studies under `/projects/<project-name>/`.

## Production build

```bash
npm run build
```

The Vite base path is configured for deployment to `xshevc02.github.io/portfolio`.
