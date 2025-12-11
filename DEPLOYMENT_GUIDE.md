# 🚀 GitHub & Vercel Setup Guide

Follow these steps to push your code to GitHub and deploy to Vercel.

## Step 1: Initialize Git Repository

```bash
cd c:\Users\manxu\Downloads\vibepilot-web

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Create VibePilot demo webpage"
```

## Step 2: Create GitHub Repository

### Option A: Using GitHub Web Interface (Recommended)

1. Go to https://github.com/new
2. Enter repository name: `vibepilot-web`
3. Add description: `A modern demo webpage built with Next.js`
4. Choose **Public** (to allow free Vercel deployment)
5. Do **NOT** initialize with README (we already have one)
6. Click **Create repository**

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI if needed
winget install gh

# Login to GitHub
gh auth login

# Create repository
gh repo create vibepilot-web --public --source=. --remote=origin --push
```

## Step 3: Push Code to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/vibepilot-web.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. Go to https://vercel.com/new
2. Sign up with GitHub (if not already)
3. Click "Import Project"
4. Select your `vibepilot-web` repository
5. Vercel will auto-detect Next.js settings
6. Click **Deploy**

Your site will be live at: `https://vibepilot-web.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Step 5: Configure Environment Variables (If Needed)

If you have environment variables:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add your variables from `.env.example`
4. Redeploy the project

## Step 6: Set Up Custom Domain (Optional)

1. In Vercel project settings → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update GitHub repository description with live URL

## Important Security Notes ⚠️

✅ **Do's:**
- Keep `.env.local` only locally (it's in `.gitignore`)
- Use Vercel Environment Variables for secrets
- Review `.gitignore` before pushing
- Make regular commits with clear messages
- Keep dependencies updated

❌ **Don'ts:**
- Never commit `.env.local` or secret files
- Don't share GitHub tokens in code
- Don't commit API keys or passwords
- Don't make repository private unless necessary

## Verify Your Setup

```bash
# Check what will be committed
git status

# Verify .env.local is ignored
git check-ignore .env.local

# View git log
git log --oneline
```

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel
3. 🔄 Make changes locally
4. 📤 Push to GitHub (auto-deploys to Vercel)
5. 🌐 Share your live link!

## Troubleshooting

### GitHub Push Failed
```bash
# Check remote
git remote -v

# Update remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/vibepilot-web.git
```

### Vercel Deployment Failed
1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Verify Node.js version in Vercel settings

### Git Authentication
```bash
# Configure git user
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Create SSH key (optional)
ssh-keygen -t ed25519 -C "your-email@example.com"
```

## Useful Links

- 📚 [GitHub Docs](https://docs.github.com)
- 🌐 [Vercel Docs](https://vercel.com/docs)
- 📖 [Next.js Deployment](https://nextjs.org/docs/deployment)
- 🔐 [GitHub Security](https://docs.github.com/en/code-security)

---

**You're all set!** Your Next.js app is ready for the world. 🎉
