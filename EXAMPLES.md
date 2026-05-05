## 🎓 Portfolio Management - Real Examples

### ✅ Example 1: Adding 3 Images to an Existing Project

**ORIGINAL (in `data/portfolioConfig.json`):**
```json
{
  "id": 5,
  "title": "Grand Corporate Launch",
  "category": "Corporate Events",
  "location": "Mumbai, India",
  "year": "2025",
  "overview": "Premium corporate event with 500+ guests",
  "services": ["Stage Design", "Lighting", "Sound"],
  "images": [
    "corporate-launch-main.webp"
  ],
  "videos": []
}
```

**MODIFIED (Added 3 new images):**
```json
{
  "id": 5,
  "title": "Grand Corporate Launch",
  "category": "Corporate Events",
  "location": "Mumbai, India",
  "year": "2025",
  "overview": "Premium corporate event with 500+ guests",
  "services": ["Stage Design", "Lighting", "Sound"],
  "images": [
    "corporate-launch-main.webp",
    "corporate-launch-stage.webp",
    "corporate-launch-audience.webp",
    "corporate-launch-decor.webp"
  ],
  "videos": []
}
```

**What Changed:**
- ✅ Added 3 new image filenames to the `images` array
- ✅ Each new filename is on its own line
- ✅ Comma after each image (except the last one)
- ✅ Everything else stayed the same

**Files Needed in `public/images/portfolio/`:**
```
corporate-launch-main.webp
corporate-launch-stage.webp
corporate-launch-audience.webp
corporate-launch-decor.webp
```

---

### ✅ Example 2: Adding a Video to a Project

**ORIGINAL:**
```json
{
  "id": 8,
  "title": "Wedding Reception",
  "category": "Weddings",
  "location": "Pune, India",
  "year": "2025",
  "overview": "Beautiful wedding reception setup",
  "services": ["Decoration", "Lighting", "Sound", "Photography"],
  "images": [
    "wedding-main.webp",
    "wedding-stage.webp",
    "wedding-table.webp"
  ],
  "videos": []
}
```

**MODIFIED (Added video):**
```json
{
  "id": 8,
  "title": "Wedding Reception",
  "category": "Weddings",
  "location": "Pune, India",
  "year": "2025",
  "overview": "Beautiful wedding reception setup",
  "services": ["Decoration", "Lighting", "Sound", "Photography"],
  "images": [
    "wedding-main.webp",
    "wedding-stage.webp",
    "wedding-table.webp"
  ],
  "videos": [
    "wedding-highlight.mp4"
  ]
}
```

**What Changed:**
- ✅ Changed `"videos": []` to `"videos": ["wedding-highlight.mp4"]`
- ✅ That's it!

**Files Needed:**
```
public/images/portfolio/wedding-highlight.mp4
```

**Result:** Video appears in gallery with a play button thumbnail

---

### ✅ Example 3: Adding a Completely New Project

**ADD THIS TO `data/portfolioConfig.json`:**

At the end of the projects array (after the last `}` but before the final `]`), add:

```json
,
{
  "id": 33,
  "title": "Tech Conference 2025",
  "category": "Corporate Events",
  "location": "Bangalore, India",
  "year": "2025",
  "overview": "International tech conference with 1000+ attendees featuring multiple stages, advanced audio-visual systems, and premium seating arrangements.",
  "services": ["Stage Design", "A/V Integration", "Lighting Design", "Event Management"],
  "images": [
    "tech-conf-entrance.webp",
    "tech-conf-main-stage.webp",
    "tech-conf-booth.webp",
    "tech-conf-seating.webp",
    "tech-conf-lighting.webp"
  ],
  "videos": [
    "tech-conf-walkthrough.mp4",
    "tech-conf-highlights.mp4"
  ]
}
```

**Important:** Add `,` before the opening `{`

**Files Needed in `public/images/portfolio/`:**
```
tech-conf-entrance.webp
tech-conf-main-stage.webp
tech-conf-booth.webp
tech-conf-seating.webp
tech-conf-lighting.webp
tech-conf-walkthrough.mp4
tech-conf-highlights.mp4
```

**Result:** New project appears in portfolio gallery!

---

### ❌ Example 4: Common Mistakes (DON'T DO THIS!)

#### ❌ MISTAKE 1: Wrong Quote Type
```json
// WRONG - Single quotes
"title": 'Wedding Event'

// CORRECT - Double quotes
"title": "Wedding Event"
```

#### ❌ MISTAKE 2: Forgot Comma Between Projects
```json
// WRONG - No comma between projects
{
  "id": 32,
  "title": "Previous Event"
}
{
  "id": 33,
  "title": "New Event"
}

// CORRECT - Comma after first project
{
  "id": 32,
  "title": "Previous Event"
},
{
  "id": 33,
  "title": "New Event"
}
```

#### ❌ MISTAKE 3: Typo in Filename
```json
// WRONG - Filename doesn't exist
"images": ["wedding-main.webp", "wedding-stage.jpg"]
// But the file is actually "wedding-stage.webp"

// CORRECT - Exact filename match
"images": ["wedding-main.webp", "wedding-stage.webp"]
```

#### ❌ MISTAKE 4: Duplicate ID
```json
// WRONG - Two projects with same ID
{
  "id": 10,
  "title": "Event 1"
},
{
  "id": 10,  // ← Same ID as above!
  "title": "Event 2"
}

// CORRECT - Different IDs
{
  "id": 10,
  "title": "Event 1"
},
{
  "id": 11,  // ← Different ID
  "title": "Event 2"
}
```

---

### 🔄 Example 5: Updating Existing Project Info

**ORIGINAL:**
```json
{
  "id": 15,
  "title": "Corporate Gala Night",
  "category": "Events",
  "location": "Mumbai, India",
  "year": "2024",
  "overview": "Nice event",
  "services": ["Catering"],
  "images": ["gala.webp"],
  "videos": []
}
```

**UPDATED (Better description and more details):**
```json
{
  "id": 15,
  "title": "Premium Corporate Gala Night",
  "category": "Corporate Events",
  "location": "Mumbai, India",
  "year": "2024",
  "overview": "Elegant gala evening for 400 high-profile guests featuring luxury catering, live entertainment, and premium event coordination. This upscale event showcased sophisticated design, ambiance, and entertainment.",
  "services": ["Catering", "Event Management", "Entertainment", "Lighting Design"],
  "images": ["gala.webp"],
  "videos": []
}
```

**What Changed:**
- ✅ Updated title (added "Premium")
- ✅ Updated category (more specific)
- ✅ Enhanced overview (more descriptive)
- ✅ Added more services
- ✅ Images and videos stayed same

---

### 📝 Before & After Workflow

**STEP 1: You take photos/videos at event**
```
Raw files from camera:
- IMG_001.jpg (15MB)
- IMG_002.jpg (12MB)
- video001.mov (100MB)
```

**STEP 2: Prepare files (resize & convert)**
```
Optimized files:
- event-main.webp (800KB)
- event-stage.webp (750KB)
- event-highlight.mp4 (25MB)
```

**STEP 3: Upload to public folder**
```
public/images/portfolio/
├── event-main.webp
├── event-stage.webp
└── event-highlight.mp4
```

**STEP 4: Add to JSON config**
```json
{
  "id": 33,
  "title": "Your New Event",
  "category": "Corporate Events",
  "location": "Mumbai, India",
  "year": "2025",
  "overview": "Event description here...",
  "services": ["Decoration", "Sound", "Lighting"],
  "images": ["event-main.webp", "event-stage.webp"],
  "videos": ["event-highlight.mp4"]
}
```

**STEP 5: Save & Done!**
Your project automatically appears on the website! ✨

---

## 💡 Pro Tips

### Naming Convention
Use consistent naming to stay organized:
```
portfolio-[eventname]-[number].webp
portfolio-wedding-1.webp
portfolio-wedding-2.webp
portfolio-corporate-1.webp
portfolio-expo-1.webp
```

### Image Optimization
Before uploading, optimize images:
1. Resize to 1200x800 pixels minimum
2. Convert to WebP format (50% smaller than JPG)
3. Keep under 1MB per image

### Video Optimization
1. Trim to 30 seconds - 5 minutes
2. Encode as H.264 MP4
3. Keep under 50MB

### Backup
Keep a backup of `data/portfolioConfig.json` before making big changes!

---

**Ready? Start editing your portfolio! 🎉**
