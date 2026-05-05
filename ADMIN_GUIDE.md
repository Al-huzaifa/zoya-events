# 🎯 Portfolio Management System - Admin Guide

## System Overview

Your portfolio now uses a **simple JSON configuration file** that you can edit directly. No coding required!

---

## 📁 File Locations

### Configuration File (Edit This!)
```
data/portfolioConfig.json
```
This is where you manage all your portfolio projects.

### Media Storage (Upload Here!)
```
public/images/portfolio/
```
This is where you store all your images and videos.

---

## 🚀 How It Works

### Current Setup
1. **Portfolio Configuration** → `data/portfolioConfig.json` (tells the website about your projects)
2. **Media Files** → `public/images/portfolio/` (where images & videos are stored)
3. **Website Display** → Automatically reads config and shows media

### What This Means
✅ Add new project → Edit JSON file  
✅ Add more images → Upload files to `public/images/portfolio/`  
✅ Remove project → Delete from JSON file  
✅ Update project details → Edit JSON file  

**No need to touch any code files!**

---

## 📝 JSON Configuration Format

### File Structure
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Event Name",
      "category": "Event Type",
      "location": "City, State",
      "year": "2025",
      "overview": "Short description",
      "services": ["Service1", "Service2"],
      "images": ["image1.webp", "image2.webp"],
      "videos": ["video1.mp4"]
    }
  ]
}
```

### Field Explanations

| Field | Purpose | Example |
|-------|---------|---------|
| `id` | Unique number (must be different) | 1, 2, 3... 33, 34 |
| `title` | Project name shown to visitors | "Grand Wedding 2025" |
| `category` | Type of event | "Corporate Events", "Weddings", "Exhibitions" |
| `location` | Where the event happened | "Mumbai, India" |
| `year` | Year of event | "2025" |
| `overview` | One paragraph description | "Beautiful event featuring..." |
| `services` | What you provided (list) | ["Decor", "Lighting", "Sound"] |
| `images` | Image filenames | ["event1.webp", "event2.jpg"] |
| `videos` | Video filenames | ["event-highlight.mp4"] |

---

## 📸 Adding New Images

### Step 1: Prepare Image
- Save image as: `eventname.webp` or `eventname.jpg`
- Size: At least 800x600 pixels (bigger is better)
- Format: WebP is best (smaller file size, faster loading)

### Step 2: Upload Image
Copy file to:
```
public/images/portfolio/
```

### Step 3: Add to JSON
Edit `data/portfolioConfig.json`:

**Before:**
```json
"images": ["image1.webp"]
```

**After (with 2 new images):**
```json
"images": [
  "image1.webp",
  "image2.webp",
  "image3.webp"
]
```

✅ Done! Images appear in gallery

---

## 🎥 Adding Videos

### Video Requirements
- **Format**: MP4 (H.264 codec)
- **Size**: Under 50MB (for fast loading)
- **Duration**: 15 seconds to 5 minutes
- **Name**: `event-highlight.mp4`

### Step 1: Prepare Video
Compress if needed (use online tools or software)

### Step 2: Upload Video
Copy to:
```
public/images/portfolio/
```

### Step 3: Add to JSON
```json
"videos": [
  "event-highlight.mp4"
]
```

✅ Video appears in gallery with play button

---

## ➕ Adding a New Project

### Step 1: Prepare Files
- Images: `eventname1.webp`, `eventname2.webp`, etc.
- Videos: `eventname-video.mp4` (optional)
- Upload to `public/images/portfolio/`

### Step 2: Edit JSON
Open `data/portfolioConfig.json`

Add new project to `projects` array (at the end, before the closing `]`):

```json
{
  "id": 33,
  "title": "Your New Event",
  "category": "Corporate Events",
  "location": "Your City, State",
  "year": "2025",
  "overview": "Describe what happened at the event",
  "services": ["Decor Design", "Lighting Setup", "Event Management"],
  "images": [
    "eventname1.webp",
    "eventname2.webp",
    "eventname3.webp"
  ],
  "videos": [
    "eventname-highlight.mp4"
  ]
}
```

⚠️ **Important**: Add a **comma** after the previous project!

```json
{
  "id": 32,
  "title": "Previous Event",
  ...
}, ← ADD THIS COMMA
{
  "id": 33,
  "title": "New Event",
  ...
}
```

✅ Save file and new project appears on website!

---

## ❌ Removing a Project

### Step 1: Find the Project
Open `data/portfolioConfig.json`

### Step 2: Delete
Remove the entire project block (including the `{` and `}`)

**Before:**
```json
{
  "id": 30,
  "title": "Event to Remove",
  "category": "...",
  ...
},
{
  "id": 31,
  "title": "Keep This",
  ...
}
```

**After:**
```json
{
  "id": 31,
  "title": "Keep This",
  ...
}
```

### Step 3: Delete Media Files (Optional)
Go to `public/images/portfolio/` and delete related images/videos

✅ Project removed from website

---

## 🔧 Editing Project Details

### Change Title
```json
"title": "Old Title" → "title": "New Title"
```

### Change Description
```json
"overview": "Old description" → "overview": "New description"
```

### Change Services
```json
"services": ["Old", "Services"] → "services": ["New", "Services"]
```

### Change Category
```json
"category": "Old Type" → "category": "New Type"
```

All changes apply immediately after saving!

---

## ✅ Quick Checklist Before Saving

- [ ] All filenames in JSON exist in `public/images/portfolio/`
- [ ] All strings use double quotes `"`, never single `'`
- [ ] Each project has unique ID number
- [ ] No typos in project titles
- [ ] Commas between projects (except after last one)
- [ ] All required fields filled: `id`, `title`, `category`, `location`, `year`, `overview`, `services`, `images`, `videos`

---

## 🐛 Troubleshooting

### Images Don't Show
**Possible causes:**
1. Filename in JSON doesn't match actual filename
2. Image file in wrong folder (should be `public/images/portfolio/`)
3. Typo in filename

**Solution:** Check spelling carefully!

### Website Looks Broken
**Possible causes:**
1. Missing comma between projects
2. Wrong quote type (using `'` instead of `"`)
3. Missing closing bracket `}`

**Solution:** Check JSON syntax. Use a JSON validator online if unsure.

### Videos Don't Play
**Possible causes:**
1. Video file too large
2. Wrong format (must be MP4)
3. Codec not supported

**Solution:** Re-encode video as MP4, keep under 50MB

---

## 📋 JSON Template (Copy & Paste)

Use this template for new projects:

```json
{
  "id": 1,
  "title": "Event Title",
  "category": "Event Type",
  "location": "City, State",
  "year": "2025",
  "overview": "One paragraph describing the event.",
  "services": ["Service 1", "Service 2", "Service 3"],
  "images": [
    "image1.webp",
    "image2.webp"
  ],
  "videos": [
    "video1.mp4"
  ]
}
```

---

## 📞 Support

### If You Get an Error
1. Take a screenshot of the error
2. Check the `data/portfolioConfig.json` file syntax
3. Contact your developer with:
   - Screenshot of error
   - Copy of `data/portfolioConfig.json`
   - List of images/videos you want to add

### Common Questions

**Q: Can I have many images per project?**  
A: Yes! Add as many as you want to the `images` array.

**Q: Can I have the same image multiple times?**  
A: Yes, but not recommended. Better to have unique images.

**Q: What if I make a mistake in JSON?**  
A: Website won't show that project. Fix the JSON and it will appear again.

**Q: Can I change the order of projects?**  
A: Yes, projects display in order of their ID. Lower IDs appear first.

**Q: Do I need to restart anything?**  
A: No. Changes appear automatically after you save the JSON file.

---

## 🎨 Recommended Image Naming

Keep it simple and organized:

```
portfolio-wedding-1.webp
portfolio-wedding-2.webp
portfolio-wedding-3.webp

portfolio-corporate-1.webp
portfolio-corporate-2.webp

portfolio-expo-1.webp
portfolio-expo-2.webp
```

This makes it easy to find and manage files!

---

**You're all set! Start adding your amazing work to the portfolio! 🚀**
