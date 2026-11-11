# ShipYard – Product Catalog

A responsive product catalog built with Next.js and TypeScript. This project displays products across multiple categories with individual product detail pages.

## Live Website

https://dattathreyareddypeddireddy-cloud.github.io/shipyard/

## Lighthouse Results

Tested on November 11, 2026, using Lighthouse 13.5.0 with mobile emulation and Slow 4G throttling.

| Category | Score |
|---|---:|
| Performance | 91 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

### Performance Metrics

- First Contentful Paint: 0.9 seconds
- Largest Contentful Paint: 2.5 seconds
- Total Blocking Time: 300 ms
- Cumulative Layout Shift: 0
- Speed Index: 0.9 seconds

## Features

- Responsive product catalog
- Product detail pages
- Optimized WebP product images
- Loading state
- Error handling with retry option
- Custom 404 page
- Static site export
- GitHub Pages deployment

## Technologies Used

- Next.js
- React
- TypeScript
- CSS
- Git and GitHub
- GitHub Actions
- Sharp for image optimization

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/dattathreyareddypeddireddy-cloud/shipyard.git
   ```

2. Open the project:

   ```bash
   cd shipyard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000/shipyard/ in your browser.

## Build

To create a production build:

```bash
npm run build
```

The static website is generated in the `out` directory.

## Deployment

The project is deployed to GitHub Pages using GitHub Actions.

---

**Project:** ShipYard Product Catalog  
**Branch:** measure-deploy-ship