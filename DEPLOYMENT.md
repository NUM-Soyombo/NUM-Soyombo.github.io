# GitHub Pages Deployment Guide

## Quick Setup

1. **Update Repository Name**: 
   - Edit `vite.config.ts` and replace `/your-repo-name/` with your actual repository name
   - Example: If your repo is `champions-robotics`, change it to `/champions-robotics/`

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

## Your Site URL
Once deployed, your site will be available at:
`https://[your-username].github.io/[your-repo-name]/`

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