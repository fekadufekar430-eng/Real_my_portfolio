# Fikadu Fikir — Portfolio

A responsive personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements
- Node.js 20+ recommended
- npm
- Git
- GitHub account for Git-based Vercel deployment

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production check
```bash
npm run build
npm start
```
Then open `http://localhost:3000` and test the production build.

## Project structure
- `app/layout.tsx` — Root layout, SEO metadata, and theme provider.
- `app/page.tsx` — Home route entry point.
- `app/globals.css` — Theme variables, responsive layout, glass effects, animations, contrast fixes, and accessibility styles.
- `components/portfolio.tsx` — Main portfolio UI, navigation, sections, cards, contact links, and Hero image interaction.
- `components/theme-toggle.tsx` — Dark/Light theme switch.
- `components/page-loader.tsx` — Initial loading animation.
- `public/profile.jpg` — Fikadu Fikir's profile image.
- `public/resume.pdf` — Downloadable resume.
- `next.config.ts` — Next.js configuration; disables the development route indicator.
- `postcss.config.mjs` — Tailwind/PostCSS processing configuration.
- `tsconfig.json` — TypeScript compiler configuration.
- `next-env.d.ts` — Next.js TypeScript environment declarations.
- `package.json` — Dependencies and build/dev scripts.
- `.gitignore` — Keeps dependencies, build output, secrets, and local metadata out of Git.

## Deploy with GitHub + Vercel
1. Run `npm install`, then `npm run build` locally. Fix any local build error before deploying.
2. Initialize Git: `git init`, `git add .`, `git commit -m "feat: complete portfolio"`.
3. Create an empty GitHub repository.
4. Connect it and push:
```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
5. In Vercel, choose **Add New Project**, import the GitHub repository, keep **Next.js** as the framework, and keep the detected/default `next build` command and output settings.
6. This portfolio currently needs no environment variables.
7. Deploy and test the production URL.

Vercel provides first-class Next.js support and normally auto-detects the framework and build settings. Git-connected projects can receive preview deployments on pushes, allowing you to test changes before production.

## Deployment checklist
- Do not commit `node_modules/`, `.next/`, `.vercel/`, or `.env*`.
- Confirm `package.json` is at the Vercel Root Directory.
- Run `npm run build` before pushing.
- Test mobile navigation and both themes.
- Test Services, Skills, Contact, portfolio links, resume download, and Hero animation.
- Confirm there is no horizontal page overflow.

## Contact
- Email: `fekadufekar430@gmail.com`
- Phone: `+251 991 647 452`
- Phone: `+251 708 085 488`
- GitHub: `https://github.com/fekadufekar430-eng`
- LinkedIn: `https://www.linkedin.com/in/fikadu-fikir-a44862425/`
- Telegram: `@F6ike`

 Facebook remain intentionally unlinked until their real details are provided.
