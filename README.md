# Waasslaa Media - وصلة ميديا

A modern, interactive website for Waasslaa Media, a creative visual marketing and product photography agency based in Kuwait.

## Project Overview

Waasslaa Media specializes in transforming basic product photography into stunning, professionally-styled imagery for social media and marketing purposes. This website showcases their expertise through interactive before/after comparisons and engaging animations.

## Brand Identity

### Colors
- **Primary**: `#7B2553` (Deep Magenta)
- **Secondary**: `#A50E64` (Vibrant Magenta)
- **Accent**: Gradient combinations of primary and secondary

### Typography
- **Font Family**: Cairo (Arabic-optimized Google Font)
- **Direction**: RTL (Right-to-Left) for Arabic content
- **Language**: 100% Arabic content

### Logo
- White logo (`white-logo.png`) used in the header
- Dynamically changes color based on scroll position for visibility

## Key Features

### 1. Interactive Image Transformations
The website features multiple interactive components that demonstrate the agency's transformation capabilities:

#### **Image Transformation Component** (`image-transformation.tsx`)
- Auto-playing fade transition between before/after images
- Toggle button for manual control
- Used in the hero section

#### **Slider Comparison** (`slider-comparison.tsx`)
- Drag-to-compare functionality
- Interactive slider handle
- Touch and mouse support
- Visual instruction: "اسحب للمقارنة" (Drag to compare)

#### **Hover Reveal** (`hover-reveal.tsx`)
- Reveals after image on hover
- Smooth fade transition
- Desktop-optimized interaction
- Visual instruction: "مرر للكشف" (Hover to reveal)

#### **Split View** (`split-view.tsx`)
- Side-by-side comparison
- Staggered animation on scroll
- Hover effects on each image
- Responsive grid layout

#### **Tap Reveal** (`tap-reveal.tsx`)
- Click/tap to toggle between images
- Scale animation on interaction
- Animated instruction with emoji
- Mobile-friendly

### 2. Responsive Header
- Transparent at top, white background when scrolled
- Logo color changes dynamically for visibility
- Side drawer navigation (RTL-optimized)
- Smooth scroll to sections
- Mobile hamburger menu

### 3. Sections

#### Hero Section
- Large headline with gradient text
- Subheadline and CTA button
- Auto-playing image transformation demo
- Full-screen impact

#### Features Section
- Three key value propositions
- Icon-based cards
- Scroll animations

#### Showcase Gallery
- Four different interactive comparison styles
- Section titles for each interaction type
- Demonstrates versatility of work

#### Services Section
- Grid of service offerings
- Hover effects
- Detailed descriptions

#### CTA Section
- Strong call-to-action
- Contact button
- Compelling copy

#### Contact Section
- Phone, email, Instagram
- Social media links
- Easy-to-reach information

#### Footer
- Responsive layout
- Copyright information
- Contact links with separators (hidden on mobile)

## Technical Stack

### Framework & Libraries
- **Next.js 16** (App Router)
- **React 19.2**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)

### Key Technologies
- Server Components for optimal performance
- Client Components for interactivity
- Image optimization with Next.js Image
- Responsive design (mobile-first)
- RTL layout support

## Project Structure

\`\`\`
waasslaa-agency-website/
├── app/
│   ├── layout.tsx          # Root layout with Cairo font
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── header.tsx          # Navigation header with drawer
│   ├── hero-section.tsx    # Hero with transformation demo
│   ├── features-section.tsx
│   ├── showcase-gallery.tsx # Interactive gallery showcase
│   ├── services-section.tsx
│   ├── cta-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── image-transformation.tsx  # Auto-play fade
│   ├── slider-comparison.tsx     # Drag slider
│   ├── hover-reveal.tsx          # Hover interaction
│   ├── split-view.tsx            # Side-by-side
│   └── tap-reveal.tsx            # Click/tap toggle
└── public/
    └── images/
        ├── white-logo.png
        ├── old-picture.jpg      # Lip cream - before
        ├── new-picture.jpg      # Lip cream - after
        ├── before.jpg           # Foundation - before
        └── after.jpg            # Foundation - after
\`\`\`

## Example Images

### Lip Cream Transformation
- **Before** (`old-picture.jpg`): GODETIA Deep Matte Lipcream on white background
- **After** (`new-picture.jpg`): Same product with professional styling, pink background, flowers, water droplets, elegant lighting

### Foundation Transformation
- **Before** (`before.jpg`): GODETIA Vitamin E Foundation on white background
- **After** (`after.jpg`): Same product with beige background, natural lighting, shadows, and reflections

## Marketing Copy

The website uses compelling Arabic copy that emphasizes:
- Transformation from ordinary to extraordinary
- Professional product photography
- Social media content creation
- Brand elevation
- Kuwaiti market expertise

### Key Messages
- "نحول منتجاتك من عادية إلى استثنائية" (We transform your products from ordinary to extraordinary)
- "تصوير احترافي يبرز جمال منتجاتك" (Professional photography that highlights your products' beauty)
- "محتوى مرئي يجذب العملاء ويزيد المبيعات" (Visual content that attracts customers and increases sales)

## Design Philosophy

### User Experience
- **Interactive**: Multiple ways to explore transformations
- **Engaging**: Smooth animations and transitions
- **Intuitive**: Clear instructions in Arabic
- **Responsive**: Works perfectly on all devices
- **Fast**: Optimized images and code splitting

### Visual Design
- **Modern**: Clean, contemporary aesthetic
- **Bold**: Strong use of brand colors
- **Professional**: Premium feel matching agency quality
- **Cultural**: RTL layout respecting Arabic reading patterns

## Development Notes

### RTL Considerations
- All layouts use `dir="rtl"` from root layout
- Flexbox and Grid automatically reverse in RTL
- Text alignment defaults to right
- Animations and transitions respect RTL flow

### Performance Optimizations
- Next.js Image component for automatic optimization
- Lazy loading for images
- Code splitting by component
- Framer Motion for GPU-accelerated animations

### Accessibility
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Touch-friendly interactive elements
- Clear visual feedback for interactions

## Future Enhancements

Potential additions:
- Portfolio page with more case studies
- Blog section for marketing tips
- Client testimonials
- Pricing packages
- Online booking system
- Multi-language support (English)
- Video transformations
- 3D product photography examples

## Contact Information

- **Phone**: +965 9876 5432
- **Email**: info@waasslaa.com
- **Instagram**: @waasslaa.media
- **Location**: Kuwait

## License

© 2025 Waasslaa Media. All rights reserved.

---

**Built with ❤️ for creative excellence in Kuwait**
