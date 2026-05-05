📱 **QUICK START: Add Images to Portfolio**

---

## 3 Simple Steps 👇

### ✅ STEP 1: Save Your Images
Place your image files in:
```
public/images/portfolio/
```
Examples:
- `wedding-ceremony.webp`
- `corporate-event-1.webp`
- `stage-setup.jpg`

---

### ✅ STEP 2: Add Project Info to JSON
Open: `data/portfolioConfig.json`

Find the `projects` array and add your new project:

```json
{
  "id": 33,
  "title": "Your Event Name",
  "category": "Corporate Events",
  "location": "City, State",
  "year": "2025",
  "overview": "A brief description of your event",
  "services": ["Service 1", "Service 2"],
  "images": [
    "wedding-ceremony.webp",
    "wedding-ceremony-1.webp",
    "stage-setup.jpg"
  ],
  "videos": [
    "event-highlight.mp4"
  ]
}
```

---

### ✅ STEP 3: Save & Done! ✨
That's it! Your new project will appear on the portfolio.

---

## 🎥 Adding Videos
Same process! Just include MP4 files:

```json
"videos": [
  "event-video-1.mp4",
  "timelapse.mp4"
]
```

---

## 📋 Checklist Before Saving
- [ ] Images are in `public/images/portfolio/`
- [ ] Filenames in JSON match actual filenames exactly
- [ ] Each project has unique ID number
- [ ] All text uses double quotes `"`
- [ ] No typos in category names

---

## ❓ Common Issues

**"Images not showing?"**
→ Check filename spelling - it must match EXACTLY

**"Page looks broken?"**
→ Make sure all quotes are `"` not `'`
→ Check that commas are in right places

**"How to convert JPG to WebP?"**
→ Use: https://cloudconvert.com/webp (online, free)

---

## 📞 Need Help?
Contact your developer with:
1. Your images/videos
2. Event details
3. Screenshot of the error (if any)

They can finish the setup for you!
