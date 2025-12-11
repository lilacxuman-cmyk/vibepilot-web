# VibePilot Web

A modern, responsive, and secure demo webpage built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- ✨ **Modern UI** - Beautiful design with Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Next.js 15
- 📱 **Responsive Design** - Works on all devices
- 🔒 **Security First** - Best practices implemented
- 🔄 **Auto Deploy** - Automatic CI/CD with GitHub Actions
- 📦 **Easy to Deploy** - One-click Vercel deployment

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+
- Git

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vibepilot-web.git
cd vibepilot-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your configuration
# NOTE: Never commit .env.local to git
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Production

### Build for Production

```bash
npm run build
npm start
```

### Run Linter

```bash
npm run lint
```

## 🌐 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Push code to GitHub**
   - Make sure your repository is public or set to the desired visibility

2. **Sign up for Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub

3. **Import Repository in Vercel**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Automatic Deployments**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests

### Option 2: Manual CLI Deployment

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts to deploy
```

## 🔐 Security Best Practices

### ✅ Implemented Security Measures

- **Environment Variables**: Sensitive data stored in `.env.local` (never committed)
- **Code Quality**: ESLint configured for secure code patterns
- **Dependency Management**: Regular npm updates
- **HTTPS**: Automatically enforced on Vercel
- **Security Headers**: Next.js built-in security defaults
- **No API Keys in Code**: All credentials in environment variables only

### 🛡️ Security Checklist Before Deployment

- [ ] All environment variables are in `.env.local` (not `.env` or `.env.example`)
- [ ] No hardcoded API keys or secrets in code
- [ ] `.env.local` is in `.gitignore`
- [ ] GitHub repository security settings reviewed
- [ ] Vercel project settings configured correctly
- [ ] All dependencies are up to date: `npm audit` runs clean

### 📝 Managing Secrets

```bash
# Check for security vulnerabilities
npm audit

# Fix vulnerabilities automatically (when possible)
npm audit fix

# Manually review and update packages
npm outdated
npm update package-name@latest
```

## 📁 Project Structure

```
vibepilot-web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
├── public/                # Static assets
├── .github/
│   └── workflows/         # GitHub Actions CI/CD
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── README.md             # This file
```

## 📚 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run tests (if configured) |

## 🚀 CI/CD Pipeline

### GitHub Actions Workflow

The repository includes automated workflows that run on every push and pull request:

1. **Lint Check** - Validates code quality with ESLint
2. **Build Test** - Ensures the app builds successfully
3. **Auto Deploy** - Deploys to Vercel (if using Vercel integration)

Check `.github/workflows/` for workflow configurations.

## 🔧 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Hosting**: [Vercel](https://vercel.com/)
- **VCS**: [GitHub](https://github.com/)

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Guide](https://docs.github.com/)

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

- 🐛 Found a bug? [Create an issue](https://github.com/yourusername/vibepilot-web/issues)
- 💡 Have a suggestion? [Start a discussion](https://github.com/yourusername/vibepilot-web/discussions)
- 📧 Email: support@yourdomain.com

## ⭐ Show Your Support

If you find this project helpful, please consider:
- Giving it a ⭐ on GitHub
- Sharing it with friends
- Contributing to the project

---

<div align="center">

**Built with ❤️ using Next.js and Vercel**

[Live Demo](#) | [GitHub](https://github.com/yourusername/vibepilot-web) | [Report Bug](https://github.com/yourusername/vibepilot-web/issues)

</div>
