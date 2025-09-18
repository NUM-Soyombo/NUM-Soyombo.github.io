# GitHub User Pages Deployment Guide

## Setup for num-soyombo.github.io

### Step 1: Create the Correct Repository
1. **Repository Name**: Create a repository named exactly `num-soyombo.github.io`
2. **Important**: The repository name MUST match your GitHub username + `.github.io`

### Step 2: Push Your Code
```bash
git add .
git commit -m "Initial robotics website"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section  
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

### Step 4: Access Your Site
Your site will be available at: `https://num-soyombo.github.io`

## Deployment Process

The GitHub Actions workflow will:
1. Automatically trigger on every push to main branch
2. Build your React app with Vite
3. Deploy to GitHub Pages
4. Your site updates within 2-3 minutes

## Repository Requirements

- **Repository name**: Must be `num-soyombo.github.io` (exactly)
- **Branch**: Deploy from `main` branch
- **Visibility**: Repository must be public (for free GitHub Pages)

## Troubleshooting

- If the site doesn't appear, check the Actions tab for build errors
- Ensure repository name matches your username exactly
- Wait 5-10 minutes after first deployment for DNS propagation

## Manual Deployment (Alternative)

If you prefer manual deployment, you can also:

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Important Notes

- Make sure your repository is public (required for free GitHub Pages)
- The site will automatically rebuild when you push to the main branch
- All routes will work correctly thanks to the 404.html fallback
- The base path is automatically configured for production builds

## Troubleshooting

- If assets aren't loading, double-check the base path in vite.config.ts
- Ensure the repository name matches exactly (case-sensitive)
- Check the Actions tab for any build errors