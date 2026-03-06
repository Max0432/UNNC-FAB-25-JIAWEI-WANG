# Pixel Player - Personal Blog Website

A React-based personal blog website with three themed sections (Play, Study, Assessment), featuring local storage data persistence and interactive animations.

---

## 📋 Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [Managing with VSCode](#managing-with-vscode)
3. [Upload Blog Posts](#upload-blog-posts)
4. [Deploy to GitHub Pages](#deploy-to-github-pages)
5. [Daily Workflow](#daily-workflow)
6. [Data Management](#data-management)

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VSCode** (recommended) - [Download here](https://code.visualstudio.com/)

### Step 1: Download Project Files

If you created this in Figma Make, download all project files to your local machine.

### Step 2: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`, type `cmd`, press Enter

**Mac:**
- Press `Cmd + Space`, type `Terminal`, press Enter

### Step 3: Navigate to Project Folder

```bash
cd path/to/your/project
# Example: cd C:\Users\YourName\Documents\pixel-player
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173/`

---

## 💻 Managing with VSCode

### Open Project in VSCode

1. **Method 1 - From VSCode:**
   - Open VSCode
   - File → Open Folder
   - Select your project folder

2. **Method 2 - From Terminal:**
   ```bash
   cd path/to/your/project
   code .
   ```

### Recommended VSCode Extensions

- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Prettier** - Code formatter
- **Tailwind CSS IntelliSense** - Tailwind class autocomplete
- **GitLens** - Git version control

### Project Structure

```
pixel-player/
├── src/
│   ├── App.tsx                 # Main application entry
│   ├── components/             # React components
│   │   ├── HomePage.tsx        # Home page
│   │   ├── PlayPage.tsx        # Play section
│   │   ├── StudyPage.tsx       # Study section
│   │   ├── AssessmentPage.tsx  # Assessment section
│   │   ├── BlogList.tsx        # Blog display component
│   │   ├── BlogUpload.tsx      # Blog upload form
│   │   └── BlogEdit.tsx        # Blog edit form
│   ├── data/                   # Initial blog data
│   │   ├── play-data.json
│   │   ├── study-data.json
│   │   └── assessment-data.json
│   ├── hooks/
│   │   └── useLocalStorage.ts  # Local storage hook
│   └── utils/
│       └── dataManager.ts      # Data export/import utility
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 📝 Upload Blog Posts

### Using the Web Interface (Recommended)

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to desired section:**
   - Click on **PLAY**, **Study**, or **Assessment** button

3. **Upload new blog post:**
   - Click the **"Upload Blog"** button (top right)
   - Enter password: `940124`
   - Fill in the form:
     - **Title** (required)
     - **Content** (required, supports line breaks)
     - **Images** (optional):
       - Click "Upload" to add local image files
       - Or paste image URL and click "Add"
       - Can add multiple images
     - **Video URL** (optional): Paste YouTube/video link

4. **Publish:**
   - Click **"Publish"** button
   - Blog post will be saved to localStorage

### Editing Existing Posts

1. Click the **"Edit"** button on any blog post
2. Enter password: `940124`
3. Modify content
4. Click **"Save Changes"**

### Deleting Posts

1. Click the **"Delete"** button on any blog post
2. Confirm deletion

---

## 🌐 Deploy to GitHub Pages

### First Time Setup

#### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/)
2. Click **"New repository"** (green button)
3. Repository name: `pixel-player` (or any name you prefer)
4. Make it **Public**
5. **Don't** initialize with README
6. Click **"Create repository"**

#### Step 2: Initialize Git in Your Project

Open terminal in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/pixel-player.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

#### Step 3: Configure Vite for GitHub Pages

1. Open `vite.config.ts` in VSCode
2. Add base path:

```typescript
export default defineConfig({
  base: '/pixel-player/',  // Add this line - use your repo name
  plugins: [react()],
})
```

3. Save the file

#### Step 4: Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

#### Step 5: Update package.json

Open `package.json` and add deploy scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

Wait 1-2 minutes, then your site will be live at:
```
https://YOUR_USERNAME.github.io/pixel-player/
```

#### Step 7: Enable GitHub Pages (if needed)

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Source: Select **gh-pages** branch
5. Click **Save**

---

## 🔄 Daily Workflow

### Updating Website Content

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Add/Edit blog posts** through the web interface

3. **Test locally** - make sure everything works

### Deploying Updates to GitHub

```bash
# Save all changes
git add .

# Commit with message
git commit -m "Add new blog posts"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

### Quick Deploy Checklist

- [ ] Add/edit blog posts locally
- [ ] Test in browser (`npm run dev`)
- [ ] Commit changes (`git add . && git commit -m "your message"`)
- [ ] Push to GitHub (`git push origin main`)
- [ ] Deploy (`npm run deploy`)
- [ ] Wait 1-2 minutes
- [ ] Check live site

---

## 💾 Data Management

### Export Blog Data (Backup)

1. Go to any blog section (Play/Study/Assessment)
2. Click **"Export Data"** button (top right)
3. A JSON file will download
4. **Save this file** as backup

### Import Blog Data (Restore)

1. Go to any blog section
2. Click **"Import Data"** button
3. Select your backup JSON file
4. Data will be restored

### Data Storage Location

- **Browser localStorage** - Data persists in your browser
- **Export files** - Manual backups in JSON format
- **Initial data** - Stored in `/src/data/*.json` files

### Important Notes

⚠️ **localStorage is browser-specific:**
- Data is stored per browser/device
- Clearing browser cache will delete data
- **Always export data regularly for backup**

⚠️ **After deploying to GitHub Pages:**
- Each visitor has their own localStorage
- Blog posts you upload locally won't appear on the live site automatically
- You need to export data and upload it to the initial data files

### Syncing Data to GitHub Pages

If you want blog posts to appear on the live site:

1. **Export data** from your local site
2. **Copy the JSON content**
3. **Update** the corresponding file in `/src/data/`:
   - Play section → `play-data.json`
   - Study section → `study-data.json`
   - Assessment section → `assessment-data.json`
4. **Commit and deploy:**
   ```bash
   git add src/data/
   git commit -m "Update blog data"
   git push origin main
   npm run deploy
   ```

---

## 🛠️ Troubleshooting

### Common Issues

**Issue: `npm: command not found`**
- Solution: Install Node.js from https://nodejs.org/

**Issue: Port 5173 already in use**
- Solution: Kill existing process or use different port:
  ```bash
  npm run dev -- --port 3000
  ```

**Issue: Images not loading**
- Solution: Use base64 (upload local files) or external image URLs

**Issue: Blog posts not showing after deploy**
- Solution: Export data and update `/src/data/*.json` files

**Issue: GitHub Pages shows 404**
- Solution: Check `base` path in `vite.config.ts` matches your repo name

---

## 📞 Password Information

**Admin Password:** `940124`

This password is required for:
- Uploading new blog posts
- Editing existing posts

To change the password, search for `940124` in:
- `/src/components/BlogUpload.tsx`
- `/src/components/BlogEdit.tsx`

---

## 🎯 Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Git commands
git add .
git commit -m "your message"
git push origin main
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Guide](https://pages.github.com/)

---

## ✨ Features

- ✅ Three themed blog sections (Play, Study, Assessment)
- ✅ Password-protected blog upload and editing
- ✅ Multiple image upload (local files + URLs)
- ✅ Image gallery with navigation
- ✅ Video link embedding
- ✅ Local storage data persistence
- ✅ Export/Import data functionality
- ✅ Responsive design
- ✅ Interactive homepage animation (iframe)
- ✅ Hover effects on buttons

---

## 📝 License

This project is created for personal use.

---

**Made with ❤️ by Figma Make**
