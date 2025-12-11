# 📋 Copy-Paste Commands for Deployment

All the commands you need to deploy your site. Just copy and paste!

## Prerequisites Check

Verify Node.js is installed:
```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
node --version
npm --version
```

Should show version numbers like `v25.2.1` and `11.6.2`

---

## Step 1: Test Locally (Copy-Paste)

```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
cd c:\Users\manxu\Downloads\vibepilot-web
npm run dev
```

Then visit: http://localhost:3000

Press `Ctrl+C` when done testing.

---

## Step 2: Prepare Git (Copy-Paste)

### Configure Git (One time only)
```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

### Initialize & Commit
```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
cd c:\Users\manxu\Downloads\vibepilot-web
git init
git add .
git commit -m "Initial commit: VibePilot demo webpage"
```

---

## Step 3: Create GitHub Repository

**Do this on GitHub web:**

1. Go to: https://github.com/new
2. Repository name: `vibepilot-web`
3. Description: `A modern demo webpage built with Next.js`
4. Select: **Public** (important!)
5. Do NOT initialize with README
6. Click: **Create repository**

---

## Step 4: Push to GitHub (Copy-Paste)

After creating the repo, GitHub shows you a command. Copy the `git remote add` part:

```bash
# This is the command GitHub showed you - replace USERNAME with yours
git remote add origin https://github.com/USERNAME/vibepilot-web.git
git branch -M main
git push -u origin main
```

Wait for it to complete. ✓ Code is now on GitHub!

---

## Step 5: Deploy to Vercel (Copy-Paste)

### Option A: Web Interface (Easiest for beginners)

1. Go to: https://vercel.com/new
2. Sign up with GitHub (if needed)
3. Click: **Import Project**
4. Select: `vibepilot-web`
5. Click: **Deploy**
6. Wait 1-2 minutes
7. **Your site is live!** 🎉

The URL will be something like: `https://vibepilot-web.vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd c:\Users\manxu\Downloads\vibepilot-web
vercel

# Follow the prompts
```

---

## Step 6: Update Local to Track Deployments (Optional)

```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
cd c:\Users\manxu\Downloads\vibepilot-web

# Make a small change (edit app/page.tsx if you want)
git add .
git commit -m "Update homepage"
git push

# Vercel auto-deploys! Your site updates in 1-2 minutes
```

---

## Common Operations

### Check Git Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### Make & Push Changes
```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
cd c:\Users\manxu\Downloads\vibepilot-web

# Edit files (e.g., app/page.tsx)

# Commit changes
git add .
git commit -m "Describe what you changed"
git push

# Vercel auto-deploys!
```

### Verify Linting
```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
npm run lint
```

### Test Build
```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
npm run build
```

---

## Environment Variables (If Needed)

### Add to Vercel

1. Go to: https://vercel.com/dashboard
2. Select your project: `vibepilot-web`
3. Settings → **Environment Variables**
4. Add variables from `.env.example`
5. Redeploy project

### Local Development

```bash
cd c:\Users\manxu\Downloads\vibepilot-web

# Create .env.local file
cp .env.example .env.local

# Edit .env.local with actual values
# Note: .env.local is in .gitignore - never committed!
```

---

## Troubleshooting Commands

### Node.js Not Found
```bash
# Add to PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Verify
node --version
```

### Port 3000 In Use
```bash
# Find process
netstat -ano | findstr :3000

# Kill it (replace <PID> with the number shown)
taskkill /PID <PID> /F
```

### Clear Cache & Reinstall
```bash
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
cd c:\Users\manxu\Downloads\vibepilot-web

rm -r node_modules
rm package-lock.json
npm install
```

### Git Config Issues
```bash
# View current config
git config --global --list

# Fix user name
git config --global user.name "Your Name"

# Fix email
git config --global user.email "your@email.com"
```

### Reset Git Remote
```bash
# View current remote
git remote -v

# Update remote
git remote set-url origin https://github.com/USERNAME/vibepilot-web.git

# Verify
git remote -v
```

---

## Quick Reference: Deployment Flow

```
1. npm run dev          ← Test locally
2. git init             ← Initialize git
3. git add .            ← Stage files
4. git commit           ← Create commit
5. git remote add       ← Connect to GitHub
6. git push             ← Push to GitHub
7. Vercel deploys       ← Auto-deploy ✓
```

---

## Useful Links

- **GitHub**: https://github.com
- **Vercel**: https://vercel.com
- **Next.js Docs**: https://nextjs.org/docs
- **Check Git Help**: `git help`
- **Check NPM Help**: `npm help`

---

## Remember

✅ **Do this:**
- Keep `.env.local` locally only (it's gitignored)
- Push to main branch to trigger Vercel deploy
- Commit often with clear messages

❌ **Don't do this:**
- Don't commit `.env.local` to GitHub
- Don't push to staging/test branches (unless you have them set up)
- Don't delete `.gitignore`

---

## Last Step: Test Everything!

```bash
# 1. Verify build works
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
npm run build

# 2. Verify linting
npm run lint

# 3. Check git status
git status

# 4. You're ready!
echo "Ready to deploy!"
```

---

**Copy, paste, and deploy! 🚀**

Start with: `$env:PATH = "C:\Program Files\nodejs;$env:PATH"`

Then follow Step 1 → Step 2 → Step 3 → Step 4 → Step 5

Your site will be live in 10 minutes!
