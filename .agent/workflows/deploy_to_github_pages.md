---
description: Deploy the Vite project to GitHub Pages
---

This workflow sets up the project for deployment to GitHub Pages.

1. Configure Vite base path
// turbo
2. Create GitHub Actions workflow file
3. Push changes to GitHub

# Step 1: Configure Vite base path
We need to set the `base` property in `vite.config.ts` to match the repository name.
Run the following tool to update `rappresentanti/vite.config.ts`:

```javascript
// In rappresentanti/vite.config.ts
export default defineConfig(({ mode }) => {
    // ...
    return {
      base: '/rappresentanti/', // Add this line
      server: {
        // ...
      },
      // ...
    };
});
```

# Step 2: Create GitHub Actions workflow file
Create a file at `.github/workflows/deploy.yml` with the following content. This workflow handles building the project from the `rappresentanti` subdirectory and deploying it.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'
          cache-dependency-path: rappresentanti/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: rappresentanti

      - name: Build
        run: npm run build
        working-directory: rappresentanti

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: rappresentanti/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

# Step 3: Push changes
After creating the files, commit and push them to the `main` branch.
Then go to your GitHub repository settings -> Pages, and ensure the source is set to "GitHub Actions".
