# 📸 Portfolio Management Guide for Clients

## How to Add Images & Videos to Your Portfolio Gallery

No coding skills needed! Follow these simple steps:

---

## Step 1: Prepare Your Images & Videos

### Image Requirements:
- **Format**: WebP format (recommended for web)
  - Alternative: JPG, PNG formats also work
- **Size**: At least 800x600 pixels (larger is better)
- **File naming**: Use descriptive names like:
  - `portfolio-wedding-ceremony.webp`
  - `portfolio-corporate-launch-1.webp`
  - `portfolio-corporate-launch-2.webp`

### Video Requirements:
- **Format**: MP4 (H.264 codec recommended)
- **Duration**: 15 seconds to 5 minutes
- **File size**: Keep under 50MB for fast loading
- **File naming**: Use descriptive names like:
  - `portfolio-wedding-highlight.mp4`
  - `portfolio-event-timelapse.mp4`

---

## Step 2: Upload Your Media Files

### Where to Place Files:

**For Images:**
```
public/images/portfolio/
```

**For Videos:**
```
public/images/portfolio/
```

Simply copy your image and video files to this folder.

---

## Step 3: Update the Portfolio Configuration

Edit the file: `data/portfolioConfig.json`

This is a simple text file that tells the website about your projects.

### Example Format:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Event Title",
      "category": "Corporate Events",
      "location": "Mumbai, India",
      "year": "2025",
      "overview": "Brief description of your event (1-2 sentences)",
      "services": ["Service 1", "Service 2", "Service 3"],
      "images": [
        "portfolio-wedding-ceremony.webp",
        "portfolio-wedding-ceremony-1.webp",
        "portfolio-wedding-ceremony-2.webp"
      ],
      "videos": [
        "portfolio-wedding-highlight.mp4"
      ]
    }
  ]
}
```

---

## Step 4: Fill In Your Project Details

### What Each Field Means:

| Field | What to Put | Example |
|-------|------------|---------|
| `id` | Unique number | 1, 2, 3, etc. |
| `title` | Your project name | "Grand Wedding Ceremony" |
| `category` | Type of event | "Weddings", "Corporate Events", "Exhibitions" |
| `location` | Where it happened | "Mumbai, India" |
| `year` | Year completed | "2025" |
| `overview` | Short description | "A beautiful wedding setup with..." |
| `services` | What you provided | ["Decoration", "Lighting", "Sound"] |
| `images` | List image filenames | ["image1.webp", "image2.webp"] |
| `videos` | List video filenames | ["video1.mp4"] |

---

## Complete Example

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Royal Wedding Celebration",
      "category": "Weddings",
      "location": "Pune, India",
      "year": "2025",
      "overview": "A magnificent wedding celebration featuring elegant decor, professional lighting, and complete event management for 500+ guests.",
      "services": ["Decoration Design", "Lighting Setup", "Sound System", "Event Management"],
      "images": [
        "portfolio-wedding-main.webp",
        "portfolio-wedding-entrance.webp",
        "portfolio-wedding-hall.webp",
        "portfolio-wedding-stage.webp"
      ],
      "videos": [
        "portfolio-wedding-highlight.mp4"
      ]
    },
    {
      "id": 2,
      "title": "Tech Conference 2025",
      "category": "Corporate Events",
      "location": "Mumbai, India",
      "year": "2025",
      "overview": "International tech conference setup with multiple stages, audio-visual systems, and seating for 1000+ attendees.",
      "services": ["Stage Design", "A/V Setup", "Lighting Design", "On-Site Management"],
      "images": [
        "portfolio-tech-conf-main.webp",
        "portfolio-tech-conf-stage.webp",
        "portfolio-tech-conf-hall.webp"
      ],
      "videos": [
        "portfolio-tech-conf-walkthrough.mp4"
      ]
    }
  ]
}
```

---

## Common Mistakes to Avoid ❌

1. **Wrong file extensions**: Use `.webp` or `.jpg` for images, `.mp4` for videos
2. **Typos in filenames**: If image is `wedding.webp` but you write `wedding.jpg` in config, it won't show
3. **Missing commas**: Each item needs a comma after it (except the last one)
4. **Wrong quotes**: Always use double quotes `"`, not single quotes `'`
5. **Spaces in category names**: Use exactly the same category names as other projects

---

## Adding More Images to an Existing Project

Just add more filenames to the `images` array:

**Before:**
```json
"images": [
  "portfolio-event-1.webp",
  "portfolio-event-2.webp"
]
```

**After (with 2 new images):**
```json
"images": [
  "portfolio-event-1.webp",
  "portfolio-event-2.webp",
  "portfolio-event-3.webp",
  "portfolio-event-4.webp"
]
```

---

## Adding Videos to Your Projects

Simply list the video filenames in the `videos` array:

```json
"videos": [
  "portfolio-event-highlight.mp4",
  "portfolio-event-timelapse.mp4",
  "portfolio-event-walkthrough.mp4"
]
```

---

## Supported Media Formats

### Images:
- ✅ WebP (best for web - fastest loading)
- ✅ JPG / JPEG
- ✅ PNG

### Videos:
- ✅ MP4 (H.264 codec)
- ✅ WebM
- ✅ MOV

---

## Need Help? 🤔

### Validation Checklist:
- [ ] All image/video files are in `public/images/portfolio/`
- [ ] All filenames in config match actual filenames exactly
- [ ] All strings use double quotes `"`
- [ ] Each item (except last) has a comma `,`
- [ ] Categories match existing categories or are new consistent names
- [ ] Year is in quotes: `"2025"` not `2025`

---

## Quick Reference

**File locations:**
```
Upload media here:  public/images/portfolio/
Edit config here:   data/portfolioConfig.json
```

**Required fields for each project:**
```
id, title, category, location, year, overview, services, images, videos
```

**That's it!** Save the file and your portfolio will update automatically. 🎉

---

## For Converting Images to WebP Format

### Using Online Tools (No Software Needed):
1. Visit: https://cloudconvert.com/webp
2. Upload your image
3. Download as WebP
4. Save to `public/images/portfolio/`

### Using Windows/Mac Photos:
- Right-click image → Open with → Paint/Preview
- Export as WebP

---

**Questions? Contact your developer with the `portfolioConfig.json` file and they can help!**
