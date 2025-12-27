# Chronos Luxury Timepieces

A premium, marketing-focused website for luxury Swiss timepieces built with React, GSAP, and Tailwind CSS.

![Chronos Luxury Timepieces](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## 🎯 Features

- ✨ **Premium Design** - Clean, modern luxury aesthetic
- 🎬 **Smooth Animations** - GSAP-powered scroll animations
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🖱️ **Smart Navigation** - Auto-hide navbar on scroll
- 🎥 **Video Showcase** - Smooth looping craftsmanship video
- 💳 **Marketing Focused** - Prices, features, CTAs, testimonials
- ⚡ **Performance** - Optimized with Vite

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/chronos-luxury-timepieces.git

# Navigate to project directory
cd chronos-luxury-timepieces

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the website.

## 📸 Adding Images

Before running the project, add your images following the guide in `IMAGE-GUIDE.md`:

### Required Images (All 1920x1080px):

```
public/images/
├── hero/
│   ├── hero-bg.jpg
│   └── hero-watch.jpg
├── watches/
│   ├── heritage-classic.jpg
│   ├── royal-gold.jpg
│   └── midnight-black.jpg
├── heritage/
│   ├── heritage-banner.jpg
│   ├── heritage-main.jpg
│   └── craftsmanship-poster.jpg
└── testimonials/
    ├── client-1.jpg
    ├── client-2.jpg
    ├── client-3.jpg
    └── client-4.jpg

public/videos/
└── craftsmanship.mp4
```

## 🏗️ Project Structure

```
luxury-timepieces-website/
├── src/
│   ├── components/
│   │   └── NavBar.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── MessageSection.jsx
│   │   ├── CollectionSection.jsx
│   │   ├── HeritageSection.jsx
│   │   ├── WhyChooseSection.jsx
│   │   ├── CraftsmanshipSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── FooterSection.jsx
│   ├── constants/
│   │   └── index.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── images/
│   └── videos/
└── IMAGE-GUIDE.md
```

## 🎨 Sections

1. **Hero Section** - Premium landing with brand messaging
2. **Message Section** - Craftsmanship story
3. **Collection Section** - 3 timepieces with horizontal scroll
4. **Heritage Section** - Swiss precision and features
5. **Why Choose Us** - 4 key selling points
6. **Craftsmanship Section** - Video showcase
7. **Testimonials Section** - Client reviews + experience
8. **Footer Section** - Navigation and newsletter

## 🛠️ Built With

- **React 18.3** - UI framework
- **Vite** - Build tool
- **GSAP 3.12** - Animation library
- **Tailwind CSS 4.0** - Styling
- **React Responsive** - Responsive utilities

## 📦 Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎯 Key Features Explained

### Horizontal Scroll Collection
The timepiece collection uses GSAP ScrollTrigger to create a smooth horizontal scrolling experience, allowing users to view each timepiece individually.

### Smart Navbar
The navigation bar automatically hides when scrolling down and reappears when scrolling up, providing more screen space while maintaining easy access.

### Video Showcase
The craftsmanship video features smooth loop transitions with crossfade effects, eliminating any visual glitches during playback.

### Responsive Design
All sections are fully responsive with breakpoints for mobile (< 768px), tablet (768px - 1024px), and desktop (> 1024px).

## 🎨 Color Palette

```css
--color-cream: #f5f1e8
--color-dark-brown: #2d2520
--color-mid-brown: #8b7355
--color-light-brown: #c9a66b
--color-gold: #d4af37
--color-champagne: #f7e7ce
```

## 📝 Customization

### Update Timepiece Collection
Edit `src/constants/index.js` to modify:
- Timepiece names, prices, descriptions
- Features and specifications
- Testimonials
- Company information

### Modify Styling
- Global styles: `src/index.css`
- Tailwind config: Uses Tailwind CSS 4.0 with `@theme` directive

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as a luxury timepiece marketing website template.

## 🙏 Acknowledgments

- Design inspiration from premium timepiece brands
- GSAP for powerful animations
- Unsplash for placeholder images

---

**Note:** Remember to add your own images before deploying to production. Follow the `IMAGE-GUIDE.md` for detailed instructions.

For questions or issues, please open an issue on GitHub.
