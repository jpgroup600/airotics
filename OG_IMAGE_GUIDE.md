# Open Graph Image Guide

## 📐 Image Specifications

### Required Dimensions
- **Size**: 1200 x 630 pixels
- **Aspect Ratio**: 1.91:1
- **Format**: PNG or JPG (PNG recommended for quality)
- **Max File Size**: < 8 MB (ideally < 1 MB)

---

## 🎨 Design Guidelines

### Best Practices
1. **Keep text large and readable** - Minimum 60px font size
2. **Use high contrast** - Dark text on light background or vice versa
3. **Include your logo** - In a corner or prominently
4. **Safe zone** - Keep important content 100px from edges
5. **Test on mobile** - Image will be displayed at various sizes

### What to Include
- **Page title** (large, bold)
- **Brief description** or tagline
- **Company logo**
- **Brand colors**
- **Relevant icon or image**

### What to Avoid
- ❌ Too much text (3-5 words max for title)
- ❌ Small fonts (will be unreadable)
- ❌ Busy backgrounds
- ❌ Low contrast
- ❌ Critical info near edges

---

## 📁 File Organization

### Directory Structure
```
public/
├── og-image.png              # Default homepage image
└── services/
    ├── ai-og-image.png       # AI services page
    ├── blockchain-og-image.png
    ├── marketing-og-image.png
    └── web-and-app-og-image.png
```

### Naming Convention
- Use lowercase
- Separate words with hyphens
- Include `-og-image` suffix
- Example: `ai-services-og-image.png`

---

## 🛠️ Tools for Creating OG Images

### Design Tools
1. **Canva** (easiest)
   - Template: "Facebook Post" (1200x630)
   - Free tier available
   - Pre-made templates

2. **Figma** (professional)
   - Create 1200x630 frame
   - Export as PNG
   - Team collaboration

3. **Photoshop/Sketch** (advanced)
   - Full control
   - Requires license

### Online Generators
1. **Social Image** - https://www.socialimage.app/
2. **OG Image Generator** - https://og-image.vercel.app/
3. **Meta Tags** - https://metatags.io/

---

## ✅ Image Checklist

Before uploading:
- [ ] Size is exactly 1200x630px
- [ ] Text is large and readable
- [ ] Logo is visible
- [ ] File size < 1 MB
- [ ] High contrast between text and background
- [ ] Important content within safe zone
- [ ] Tested on mobile preview
- [ ] File name follows convention
- [ ] Saved in `/public/` directory

---

## 🧪 Testing Your Images

### Preview Tools
1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Paste your page URL
   - Click "Scrape Again" to refresh

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Paste your page URL

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Paste your page URL

### Test Checklist
- [ ] Image displays correctly on Facebook
- [ ] Image displays correctly on Twitter
- [ ] Image displays correctly on LinkedIn
- [ ] Text is readable at small sizes
- [ ] Logo is visible
- [ ] Colors match brand

---

## 📝 Template Examples

### Example 1: Homepage
```
Background: Gradient (brand colors)
Content:
  - Logo (top right)
  - "Airotics" (72px, bold)
  - "AI & Robotics Solutions" (36px)
  - Subtle tech pattern or icon
```

### Example 2: Service Page
```
Background: Solid color with subtle pattern
Content:
  - Logo (top left)
  - Service icon (center or right)
  - "AI Services" (68px, bold)
  - "Transform Your Business" (32px)
```

---

## 🎯 Quick Start

### Using Canva (Recommended for Beginners)
1. Go to Canva.com
2. Create new design → Custom size → 1200 x 630 px
3. Choose a template or start from scratch
4. Add your logo, title, and description
5. Use brand colors
6. Download as PNG
7. Save to `/public/og-image.png`

### Using Figma (Recommended for Designers)
1. Create new frame: 1200 x 630 px
2. Add background color/gradient
3. Add text layers (title, description)
4. Add logo and icons
5. Export as PNG (2x for retina)
6. Optimize with TinyPNG
7. Save to `/public/og-image.png`

---

## 🔍 Common Issues

### Image Not Showing
- Clear Facebook cache with Sharing Debugger
- Check file path in SEO component
- Verify image is in `/public/` directory
- Ensure URL is absolute (includes https://)

### Image Looks Blurry
- Check original size is 1200x630
- Export at high quality (100%)
- Avoid upscaling smaller images

### Text Too Small
- Minimum 60px for titles
- Minimum 30px for descriptions
- Test on mobile preview

---

## 📚 Resources

### Inspiration
- **Dribbble** - Search "og image"
- **Pinterest** - Search "social media card"
- **Behance** - Search "open graph"

### Stock Photos (if needed)
- Unsplash - https://unsplash.com/
- Pexels - https://pexels.com/
- Pixabay - https://pixabay.com/

### Icons
- Lucide Icons - https://lucide.dev/
- Heroicons - https://heroicons.com/
- Font Awesome - https://fontawesome.com/

---

**Last Updated**: 2026-02-19
