# Blog Data Management Guide

## Overview
This application uses a hybrid storage approach that combines browser localStorage with JSON file export/import functionality for permanent data persistence.

## How It Works

### 1. **Local Storage (Browser)**
- All blog posts are automatically saved to your browser's localStorage
- Data persists across page refreshes
- Each page (PLAY, Study, Assessment) has its own separate storage

### 2. **Export Data**
When you want to save your content permanently:
1. Click the **"Export Data"** button on any page
2. A JSON file will be downloaded (e.g., `play-data-1234567890.json`)
3. This file contains all blog posts for that page

### 3. **Import Data**
To restore or load data:
1. Click the **"Import Data"** button
2. Select a previously exported JSON file
3. All posts will be imported and saved to localStorage

## Deploying to GitHub Pages

### Step 1: Create Your Content Locally
1. Open the application in your browser
2. Upload blog posts to each page (PLAY, Study, Assessment)
3. Test everything to make sure it works as expected

### Step 2: Export Your Data
1. Go to each page (PLAY, Study, Assessment)
2. Click **"Export Data"** on each page
3. Save the downloaded JSON files

### Step 3: Add Data to Your Repository
1. Rename your exported files:
   - `play-data-xxxxx.json` → `play-data.json`
   - `study-data-xxxxx.json` → `study-data.json`
   - `assessment-data-xxxxx.json` → `assessment-data.json`

2. Place these files in the `public/data/` directory of your project

3. Commit and push to GitHub:
   ```bash
   git add public/data/*.json
   git commit -m "Add blog data"
   git push
   ```

### Step 4: Deploy to GitHub Pages
The application will automatically load the JSON files from `public/data/` on first visit, making your content available to all visitors.

## Updating Content After Deployment

### Option A: Update Locally Then Re-deploy
1. Make changes on your local version
2. Export the updated data
3. Replace the JSON files in `public/data/`
4. Commit and push to GitHub

### Option B: Update on Live Site
1. Make changes on the live GitHub Pages site
2. Export the updated data
3. Manually download and add to your repository
4. Commit and push

## Data Format

Each JSON file contains an array of blog posts:

```json
[
  {
    "id": "1234567890",
    "title": "Post Title",
    "content": "Post content here...",
    "imageUrl": "https://example.com/image.jpg",
    "videoUrl": "https://youtube.com/watch?v=...",
    "createdAt": "2026-01-03T10:00:00.000Z"
  }
]
```

## Important Notes

- **Browser Storage**: Data in localStorage is specific to each browser/device
- **Initial Load**: The app checks for JSON files in `public/data/` only on first load when localStorage is empty
- **Password Protection**: The password (940124) is only for uploading/editing content, not for viewing
- **Image/Video Links**: Only URLs are stored, not the actual files
- **Data Safety**: Always keep backup copies of your exported JSON files

## Troubleshooting

**Q: My data disappeared!**  
A: Check if you're using a different browser or cleared browser data. Import your backup JSON file.

**Q: Changes aren't showing on GitHub Pages**  
A: Make sure you committed and pushed the updated JSON files, and cleared your browser cache.

**Q: Can multiple people edit content?**  
A: Yes, but they need to coordinate. Each person's changes are local until exported and re-deployed.

## File Structure

```
project/
├── public/
│   └── data/
│       ├── play-data.json          # Initial data for PLAY page
│       ├── study-data.json         # Initial data for Study page
│       └── assessment-data.json    # Initial data for Assessment page
├── hooks/
│   └── useLocalStorage.ts          # localStorage hook
└── utils/
    └── dataManager.ts              # Export/import utilities
```
