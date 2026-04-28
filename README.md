# IS117-dcp2-individual-portfolio

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

This project is configured to deploy to GitHub Pages as a static export.

1. Push the repository to GitHub.
2. In GitHub, go to `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` and the workflow will build and deploy the `out` directory.

For local production export testing, run:

```bash
npm run build
```