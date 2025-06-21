# 🚀 Vite React Project Creator & Builder

A powerful bash script that creates complete Vite + React projects from scratch and builds them automatically. Works even without Node.js pre-installed!

## ✨ Features

- ⚡ **Lightning Fast Setup** - Creates complete projects in seconds
- 🛠️ **Smart Detection** - Auto-detects environment and adapts accordingly  
- 🆕 **From Scratch Creation** - Generates all files without requiring existing setup
- 🔨 **Build Existing Projects** - Can build any existing Vite + React project
- 🎯 **Production Ready** - Creates optimized builds ready for deployment
- 🤖 **Auto-Detection** - Intelligently decides whether to create or build
- 💻 **Cross-Platform** - Works on any system with bash

## 🚀 Quick Start

### 1. Make Script Executable
```bash
chmod +x script.sh
```

### 2. Create New Project
```bash
./script.sh my-awesome-project
```

### 3. Navigate and Develop
```bash
cd my-awesome-project
npm run dev
```

That's it! Your React app is running at `http://localhost:5173` 🎉

## 📋 Usage Modes

### 🆕 Create New Project
Creates everything from scratch - perfect when starting fresh:

```bash
./script.sh my-project-name
```

**What it creates:**
- Complete project directory structure
- `package.json` with all dependencies
- React components with sample app
- HTML template and build configuration
- Installs dependencies and builds project

### 🔨 Build Existing Project
When you have an existing project and want to build it:

```bash
# From outside the project directory
./script.sh existing-project --build-only

# Or from inside the project directory
./script.sh --build-only
```

**Requirements:**
- Must have `package.json` in directory
- Valid React project structure

### 🤖 Auto-Detect Mode
Let the script decide what to do:

```bash
./script.sh
```

**Smart behavior:**
- If `package.json` exists → builds existing project
- If no `package.json` → creates new project with default name
- Handles edge cases gracefully

## 📁 Project Structure

The script creates this complete structure:

```
my-project/
├── package.json              # Dependencies and scripts
├── index.html                # Main HTML template
├── src/
│   ├── index.jsx             # React entry point
│   └── components/
│       └── App.jsx           # Main React component
├── dist/                     # Built files (after build)
│   ├── index.html            # Optimized HTML
│   ├── assets/               # Bundled JS/CSS
│   └── ...
└── node_modules/             # Installed dependencies
```

## 🛠️ How It Works

### Step-by-Step Process

1. **Environment Check** - Validates Node.js and npm availability
2. **Project Detection** - Looks for existing `package.json` or creates new structure
3. **File Generation** - Creates all necessary files with proper configuration
4. **Dependency Installation** - Runs `npm install` to download packages
5. **Build Process** - Compiles React app into production-ready files
6. **Preview Option** - Optionally starts local server for preview

### The Magic Behind It

**🎯 Key Insight:** The script separates file creation from dependency installation:

- ✅ **File Creation**: Works with just bash (no Node.js needed)
- ✅ **Dependency Installation**: Requires Node.js/npm (but only when actually running)

This means you can generate a complete project structure first, then install Node.js later if needed!

## 📦 Generated Files

### package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.4.0"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### React App Component
- Interactive counter example
- Modern React 18 with hooks
- Inline styling for immediate functionality
- Ready for customization

## 💻 Available Commands

After project creation, you can use these npm scripts:

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚠️ System Requirements

### For Creating Files (Always Works)
- Bash shell
- Basic Unix commands (`mkdir`, `cat`, etc.)

### For Running the Project (Only needed when using npm)
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

> **Note:** The script can CREATE everything without Node.js! You only need Node.js when it runs `npm install` and `npm run build`.

## 🎯 Use Cases

### Perfect For:
- **Quick Prototyping** - Get a React app running in under 30 seconds
- **Learning React** - Clean, minimal setup for beginners
- **Project Templates** - Create consistent project structures
- **CI/CD Pipelines** - Automated project creation and building
- **Workshops/Tutorials** - Reliable setup for teaching environments

### Example Scenarios:

**Scenario 1: Complete Beginner**
```bash
# Even without Node.js installed, this creates all files
./script.sh my-first-react-app
# Then install Node.js and the project is ready!
```

**Scenario 2: Experienced Developer**
```bash
# Quick project for testing an idea
./script.sh prototype-app
cd prototype-app
npm run dev
# Start coding immediately!
```

**Scenario 3: Build Server**
```bash
# Automated building of existing projects
./script.sh existing-project --build-only
# Perfect for CI/CD pipelines
```

## 🚀 Advanced Usage

### Custom Project Names
```bash
./script.sh "My Awesome App"
./script.sh company-website
./script.sh react-experiment-2024
```

### Build Only Mode
```bash
# If you're already in a project directory
./script.sh --build-only

# Specify project directory
./script.sh /path/to/project --build-only
```

### Integration with Version Control
```bash
# Create project and initialize git
./script.sh my-project
cd my-project
git init
git add .
git commit -m "Initial commit"
```

## 🔧 Customization

The script generates a functional React app, but you can easily customize:

### Add Additional Dependencies
Edit the generated `package.json` to include:
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.0.0",
    "styled-components": "^5.0.0"
  }
}
```

### Modify the App Component
The generated `App.jsx` is a starting point - customize it for your needs:
```jsx
// Add routing, state management, API calls, etc.
```

### Add Build Tools
Extend the script to include:
- TypeScript support
- Tailwind CSS
- ESLint/Prettier
- Testing frameworks

## 🐛 Troubleshooting

### Common Issues

**"Command not found"**
```bash
# Make sure script is executable
chmod +x script.sh
```

**"npm not found"**
- Install Node.js from [nodejs.org](https://nodejs.org)
- Verify installation: `node --version && npm --version`

**"Package.json not found"**
- Use without `--build-only` flag to create new project
- Ensure you're in the correct directory

**Build fails**
- Check Node.js version (needs v16+)
- Delete `node_modules` and run `npm install` again
- Verify all dependencies in `package.json`

### Debug Mode
Add debug information:
```bash
# Add to script for verbose output
set -x  # Enable debug mode
```

## 🤝 Contributing

### Extending the Script

Want to add features? The script is designed to be modular:

1. **Add new file templates** in the file generation section
2. **Modify dependencies** in the package.json creation
3. **Add build steps** in the build process section
4. **Include additional tools** like TypeScript, Tailwind, etc.

### Suggested Enhancements

- [ ] TypeScript template option
- [ ] Tailwind CSS integration
- [ ] Multiple framework support (Vue, Svelte)
- [ ] Docker configuration generation
- [ ] Testing setup (Jest, Vitest)
- [ ] Linting configuration (ESLint, Prettier)

## 📄 License

This script is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces
- Bash scripting - The power of command-line automation

---

**Happy coding! 🎉**

> **Pro Tip:** Bookmark this script - it's the fastest way to get a React project up and running!# vibe-react-mui
