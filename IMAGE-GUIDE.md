# Image Guide for Chronos Luxury Watch Website

## 📁 Folder Structure Created

```
public/
├── images/
│   ├── hero/           - Hero section background images
│   ├── watches/        - Watch product images
│   ├── testimonials/   - Customer testimonial photos
│   └── heritage/       - Heritage/craftsmanship images
└── videos/
    └── craftsmanship.mp4 - Craftsmanship video
```

## 📸 Images You Need to Download

### ⚠️ IMPORTANT: All Images Should Be Same Size
**Standard Size: 1920x1080px (16:9 aspect ratio) for ALL images**
This ensures consistency and proper display across the website.

### 1. Hero Section (2 images)
**Location:** `public/images/hero/`
**Size: 1920x1080px (16:9)**

- **hero-bg.jpg** (1920x1080px)
  - Search: "luxury watch close-up", "swiss watch detail"
  - Use: Background image for hero section
  
- **hero-watch.jpg** (1920x1080px)
  - Search: "luxury watch product photography"
  - Use: Main watch display on hero
  - Note: Center the watch in the frame

### 2. Watch Collection (3 images)
**Location:** `public/images/watches/`
**Size: 1920x1080px (16:9) - SAME SIZE FOR ALL**

- **heritage-classic.jpg** (1920x1080px)
  - Search: "silver luxury watch", "steel watch white background"
  - Style: Classic silver/steel watch
  - Price point: $12,500
  - **Important:** Center watch in frame, clean background
  
- **royal-gold.jpg** (1920x1080px)
  - Search: "gold luxury watch", "18k gold watch"
  - Style: Gold watch with leather strap
  - Price point: $24,900
  - **Important:** Center watch in frame, clean background
  
- **midnight-black.jpg** (1920x1080px)
  - Search: "black luxury watch", "ceramic watch"
  - Style: Black/dark watch with modern design
  - Price point: $15,800
  - **Important:** Center watch in frame, clean background

### 3. Heritage Section (2 images)
**Location:** `public/images/heritage/`
**Size: 1920x1080px (16:9)**

- **heritage-banner.jpg** (1920x1080px)
  - Search: "watch mechanism", "watch gears close-up"
  - Use: Top banner in heritage section
  
- **heritage-main.jpg** (1920x1080px)
  - Search: "luxury watch lifestyle", "watch on wrist"
  - Use: Main large image in heritage section

### 4. Craftsmanship Section (1 video + 1 poster image)
**Location:** `public/videos/` and `public/images/heritage/`
**Size: 1920x1080px (16:9)**

- **craftsmanship.mp4** (1920x1080px, MP4 format)
  - Search on Pexels Videos: "watchmaker", "watch assembly", "luxury watch making"
  - Duration: 2-5 minutes recommended
  - Use: Main craftsmanship showcase video
  - **Important:** Name it exactly `craftsmanship.mp4`
  
- **craftsmanship-poster.jpg** (1920x1080px)
  - Search: "watchmaker close-up", "watch assembly"
  - Use: Video thumbnail/poster before playing

### 5. Testimonials (4 images)
**Location:** `public/images/testimonials/`
**Size: 1920x1080px (16:9) - SAME SIZE FOR ALL**

- **client-1.jpg** (1920x1080px)
  - Search: "professional businessman portrait"
  - Name: James Morrison (CEO & Entrepreneur)
  - Note: Portrait should be centered
  
- **client-2.jpg** (1920x1080px)
  - Search: "professional woman portrait", "female architect"
  - Name: Sarah Chen (Luxury Architect)
  - Note: Portrait should be centered
  
- **client-3.jpg** (1920x1080px)
  - Search: "professional man portrait", "business executive"
  - Name: Michael Roberts (Watch Collector)
  - Note: Portrait should be centered
  
- **client-4.jpg** (1920x1080px)
  - Search: "fashion designer portrait", "creative professional"
  - Name: Emma Wilson (Fashion Designer)
  - Note: Portrait should be centered

## 🌐 Recommended Sources

### Free High-Quality Images:
1. **Unsplash** - https://unsplash.com
   - Search: "luxury watch", "swiss watch", "watch mechanism"
   - License: Free to use
   
2. **Pexels** - https://www.pexels.com
   - Search: "luxury watch", "professional portrait"
   - License: Free to use
   
3. **Pixabay** - https://pixabay.com
   - Search: "watch", "timepiece"
   - License: Free to use

### Free High-Quality Videos:
1. **Pexels Videos** - https://www.pexels.com/videos/
   - Search: "watchmaker", "watch making", "luxury watch"
   - Format: Download as MP4
   - License: Free to use
   
2. **Pixabay Videos** - https://pixabay.com/videos/
   - Search: "watch", "craftsmanship", "precision"
   - License: Free to use
   
3. **Coverr** - https://coverr.co
   - Search: "luxury", "craftsmanship"
   - License: Free to use

### Premium Stock Photos:
1. **Shutterstock** - https://www.shutterstock.com
2. **Adobe Stock** - https://stock.adobe.com
3. **Getty Images** - https://www.gettyimages.com

## 📝 Image Requirements

### Technical Specs:
- **Format:** JPG for ALL images
- **Size:** 1920x1080px (16:9 aspect ratio) for ALL images
- **Quality:** High resolution, minimum 1920x1080px
- **File Size:** Compress images after resizing (use https://tinypng.com)
- **Color Profile:** sRGB for web

### Style Guidelines:
- **Watches:** Clean, white/neutral background, professional lighting, centered in frame
- **Portraits:** Professional headshots, neutral backgrounds, centered in frame
- **Lifestyle:** Luxury aesthetic, high-end feel
- **Consistency:** ALL images MUST be 1920x1080px for uniform display
- **Aspect Ratio:** 16:9 (landscape) for everything

### How to Resize Images:
1. Download image from Unsplash/Pexels
2. Use online tool: https://www.iloveimg.com/resize-image
3. Set dimensions to: **1920 x 1080 pixels**
4. Download resized image
5. Compress at: https://tinypng.com
6. Save with correct filename

## 🔄 How to Replace Images in Code

Once you download images, the code will automatically use them from:

```javascript
// Current (Unsplash URLs):
src="https://images.unsplash.com/photo-xyz"

// After adding local images:
src="/images/watches/heritage-classic.png"
src="/images/hero/hero-bg.jpg"
src="/images/testimonials/client-1.jpg"
```

## ✅ Quick Checklist

### Images (ALL 1920x1080px):
- [ ] Hero background image (hero-bg.jpg) - 1920x1080px
- [ ] Hero watch image (hero-watch.jpg) - 1920x1080px
- [ ] Heritage Classic watch (heritage-classic.jpg) - 1920x1080px
- [ ] Royal Gold watch (royal-gold.jpg) - 1920x1080px
- [ ] Midnight Black watch (midnight-black.jpg) - 1920x1080px
- [ ] Heritage banner (heritage-banner.jpg) - 1920x1080px
- [ ] Heritage main image (heritage-main.jpg) - 1920x1080px
- [ ] Client 1 portrait (client-1.jpg) - 1920x1080px
- [ ] Client 2 portrait (client-2.jpg) - 1920x1080px
- [ ] Client 3 portrait (client-3.jpg) - 1920x1080px
- [ ] Client 4 portrait (client-4.jpg) - 1920x1080px
- [ ] Craftsmanship poster (craftsmanship-poster.jpg) - 1920x1080px

### Video:
- [ ] Craftsmanship video (craftsmanship.mp4) - 1920x1080px - **IMPORTANT**

## 💡 Pro Tips

1. **SAME SIZE FOR ALL:** Every image MUST be 1920x1080px (16:9 ratio)
2. **Consistency is Key:** Use images with similar lighting and style
3. **Optimize File Size:** Compress all images after resizing
4. **Use JPG Format:** All images should be .jpg format
5. **High Resolution:** Always download the highest quality available
6. **Resize First, Then Compress:** Resize to 1920x1080px, then compress
7. **Backup:** Keep original high-res versions in a separate folder
8. **Video Format:** Use MP4 format for best browser compatibility
9. **Video Length:** Keep videos between 2-5 minutes for engagement
10. **Center Your Subject:** Make sure watches/portraits are centered in the 1920x1080 frame

## 🎬 Video Setup Instructions

### Step 1: Download Your Video
1. Go to **Pexels Videos**: https://www.pexels.com/videos/
2. Search for: "watchmaker", "watch making", or "luxury craftsmanship"
3. Download in **Full HD (1920x1080)** or **4K** quality
4. Choose MP4 format

### Step 2: Add to Project
1. Rename your video to: `craftsmanship.mp4`
2. Place it in: `luxury-watch-website/public/videos/`
3. The video will automatically work on the website!

### Step 3: Test
1. Run your website: `npm run dev`
2. Scroll to the Craftsmanship section
3. Click the gold play button
4. Video should play with controls

### Video Features:
- ✅ Auto-plays when you click the play button
- ✅ Shows native video controls when playing
- ✅ Has a poster image (thumbnail) before playing
- ✅ Responsive on all devices
- ✅ Professional overlay with title and duration

### Recommended Video Searches:
- "watchmaker at work"
- "luxury watch assembly"
- "swiss watch making"
- "watch mechanism close up"
- "precision craftsmanship"

## 🎨 Color Palette Reference

Match images to the website's color scheme:
- Cream: #f5f1e8
- Dark Brown: #2d2520
- Light Brown: #c9a66b
- Gold: #d4af37

Happy image hunting! 📸✨
