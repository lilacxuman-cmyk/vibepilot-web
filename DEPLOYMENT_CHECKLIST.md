# 📝 Printable Deployment Checklist

Print this page and check off items as you go!

---

## ✅ Pre-Deployment (Local Machine)

- [ ] Node.js installed and working
  ```bash
  node --version  # Should show v18+
  npm --version   # Should show 9+
  ```

- [ ] Project builds successfully
  ```bash
  npm run build
  ```

- [ ] No linting errors
  ```bash
  npm run lint
  ```

- [ ] Dev server starts
  ```bash
  npm run dev
  # Visit: http://localhost:3000
  ```

- [ ] `.env.local` is in `.gitignore`
  ```bash
  git check-ignore .env.local  # Should return .env.local
  ```

- [ ] No secrets in code
  - Search for "API_KEY" - should be empty
  - Search for "SECRET" - should be empty
  - Search for "PASSWORD" - should be empty

- [ ] Git is configured
  ```bash
  git config --global user.name  # Should show your name
  git config --global user.email # Should show your email
  ```

---

## ✅ GitHub Setup

- [ ] GitHub account created (github.com)

- [ ] New repository created
  - [ ] Name: `vibepilot-web`
  - [ ] Set to: **Public**
  - [ ] Do NOT initialize with README

- [ ] Code pushed to GitHub
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/YOUR_USERNAME/vibepilot-web.git
  git push -u origin main
  ```

- [ ] Repository is public (verify on GitHub)

- [ ] All files pushed successfully (check GitHub web)

---

## ✅ Vercel Setup

- [ ] Vercel account created (vercel.com)

- [ ] GitHub connected to Vercel

- [ ] Repository imported in Vercel
  - [ ] Project name: `vibepilot-web`
  - [ ] Framework: Next.js (auto-detected)

- [ ] Build settings correct
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `.next`
  - [ ] Install command: `npm install`

- [ ] Initial deployment successful
  - [ ] No build errors
  - [ ] Live URL provided
  - [ ] Site loads in browser

---

## ✅ Post-Deployment

- [ ] Visit live site and test
  ```
  https://vibepilot-web.vercel.app
  ```

- [ ] All pages load correctly

- [ ] Links work

- [ ] Responsive on mobile (test with browser tools)

- [ ] No console errors (check DevTools F12)

- [ ] Homepage looks good

---

## ✅ Security Verification

- [ ] `.env.local` exists locally only
  ```bash
  ls -la | grep .env.local  # Should show file
  ```

- [ ] `.env.local` is gitignored
  ```bash
  git check-ignore .env.local  # Should return path
  ```

- [ ] `.env.example` has no real values

- [ ] No API keys in code
  ```bash
  grep -r "API_KEY\|SECRET\|PASSWORD" app/
  # Should return nothing
  ```

- [ ] GitHub repo settings reviewed
  - [ ] Visibility: Public or correct setting
  - [ ] No sensitive info in description

- [ ] Vercel environment variables added (if needed)

---

## ✅ GitHub Actions

- [ ] CI/CD workflow exists
  - File: `.github/workflows/lint.yml`

- [ ] Workflow runs on push
  - Go to GitHub repo
  - Click "Actions" tab
  - Should see workflow run

- [ ] Linter passes in CI/CD

- [ ] Build passes in CI/CD

---

## ✅ Ongoing Maintenance

- [ ] Bookmark live site URL

- [ ] Test update workflow:
  - [ ] Make a small code change
  - [ ] Commit: `git commit -am "Test update"`
  - [ ] Push: `git push`
  - [ ] Wait 2 minutes
  - [ ] Verify site updated

- [ ] Check for dependency updates
  ```bash
  npm outdated
  ```

- [ ] Run security audit
  ```bash
  npm audit
  ```

---

## 🎯 Success Indicators

Your deployment is successful if:

✓ Site is live and accessible
✓ All pages load without errors
✓ Responsive on desktop and mobile
✓ No security warnings in console
✓ GitHub Actions workflows pass
✓ Code auto-updates after git push
✓ No secrets exposed in repository

---

## 📋 Important URLs to Save

- **Live Site:**
  ```
  https://vibepilot-web.vercel.app
  ```

- **GitHub Repository:**
  ```
  https://github.com/YOUR_USERNAME/vibepilot-web
  ```

- **Vercel Dashboard:**
  ```
  https://vercel.com/dashboard
  ```

- **Vercel Project Settings:**
  ```
  https://vercel.com/vibepilot-web
  ```

---

## 🔄 Common Next Updates

After deployment, you can:

```bash
# Edit code
nano app/page.tsx  # (or use VS Code)

# Commit
git add app/page.tsx
git commit -m "Update homepage"

# Push (auto-deploys!)
git push

# Site updates in 1-2 minutes ✓
```

---

## 📞 Troubleshooting Checklist

If something goes wrong:

- [ ] Check Vercel deployment logs
  - Vercel Dashboard → Project → Deployments

- [ ] Check GitHub Actions logs
  - GitHub → Actions tab → Latest run

- [ ] Test local build
  ```bash
  npm run build
  npm run lint
  ```

- [ ] Check for uncommitted changes
  ```bash
  git status
  ```

- [ ] Verify `.env.local` not committed
  ```bash
  git check-ignore .env.local
  ```

- [ ] Clear Vercel cache
  - Vercel Dashboard → Settings → Advanced → Clear Cache

---

## ✨ Celebration Checklist

- [ ] 🎉 Site is live!
- [ ] 🔒 Secrets are safe!
- [ ] 📝 Code is versioned!
- [ ] 🚀 Auto-deployments working!
- [ ] 📱 Mobile responsive!
- [ ] 🧪 Tests passing!
- [ ] ✅ Everything documented!

**Congratulations! You deployed your first website! 🎊**

---

## Final Notes

- Check this checklist regularly
- Keep dependencies updated
- Monitor Vercel deployments
- Celebrate your success!

**Date Deployed:** ________________

**Live URL:** ________________________

**Notes:** _____________________________

---

**You did it! 🚀**

Print this, check items off, and enjoy your new website!
