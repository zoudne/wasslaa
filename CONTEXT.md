# Project Context for AI Assistants

This document provides comprehensive context about the Waasslaa Media website project for any AI assistant or LLM that needs to understand and work with this codebase.

## Conversation History Summary

### Initial Request
The user requested a website for "waasslaa" (وصلة ميديا), a creative visual marketing agency in Kuwait. Key requirements:
- Modern look with creative animations
- Entire website in Arabic only (RTL layout)
- Use brand colors: `#7B2553` and `#A50E64`
- Use provided white logo
- Create a component that transforms a basic product photo to an enhanced version
- Include Arabic marketing copy
- Include services and contact sections

### Provided Assets
1. **White Logo** (`white-logo.png`): Waasslaa Media logo in white for dark backgrounds
2. **Lip Cream Before** (`old-picture.jpg`): Basic product shot on white background
3. **Lip Cream After** (`new-picture.jpg`): Professional styled shot with pink background, flowers, lighting
4. **Foundation Before** (`before.jpg`): Basic foundation bottle on white background
5. **Foundation After** (`after.jpg`): Professional styled shot with beige background, reflections, lighting

### Evolution of Requirements

#### Phase 1: Initial Build
- Created basic website structure with hero, features, services, CTA, contact, and footer sections
- Implemented auto-playing image transformation component
- Used Framer Motion for animations
- Applied brand colors throughout

#### Phase 2: Header Addition
User noticed missing header, so we added:
- Fixed header with logo and navigation
- Smooth scroll to sections
- Initially had dropdown menu

#### Phase 3: Header Improvements
User reported two issues:
1. White logo disappeared on white background when scrolled
2. Wanted side drawer instead of dropdown

Solutions implemented:
- Added CSS filter to change logo color dynamically (white → magenta when scrolled)
- Created RTL-optimized side drawer with hamburger menu
- Made header transparent at top, white when scrolled

#### Phase 4: Footer Responsiveness
User reported horizontal scrolling issue caused by footer.

Solution:
- Made contact links stack vertically on mobile
- Hid separator pipes on mobile
- Added proper text wrapping

#### Phase 5: Interactive Components Enhancement
User requested:
1. More interactive "tap to edit" components across the website
2. Different styles of interactions
3. Comprehensive documentation for any LLM to understand the project

Solutions implemented:
- Created 4 new interactive comparison components:
  - **Slider Comparison**: Drag-to-compare with handle
  - **Hover Reveal**: Hover to fade between images
  - **Split View**: Side-by-side comparison with animations
  - **Tap Reveal**: Click/tap to toggle with scale animation
- Created ShowcaseGallery component to display all interaction types
- Added comprehensive README.md and CONTEXT.md documentation

## Technical Architecture

### Framework Choices
- **Next.js 16**: Latest version with App Router, React 19.2 support
- **TypeScript**: Type safety throughout
- **Tailwind CSS v4**: Utility-first styling with design tokens
- **Framer Motion**: Smooth, performant animations

### Component Architecture

#### Layout Components
- `Header`: Fixed navigation with drawer, dynamic logo color
- `Footer`: Responsive contact information

#### Section Components
- `HeroSection`: Main landing with transformation demo
- `FeaturesSection`: Value propositions
- `ShowcaseGallery`: Interactive comparison showcase
- `ServicesSection`: Service offerings grid
- `CTASection`: Call-to-action
- `ContactSection`: Contact information

#### Interactive Components
All transformation components follow similar patterns:
- Accept `beforeImage`, `afterImage`, `beforeLabel`, `afterLabel` props
- Use Framer Motion for animations
- Include Arabic instructions
- Responsive and touch-friendly
- Consistent styling with brand colors

### Design System

#### Colors
\`\`\`css
--primary: #7B2553;
--secondary: #A50E64;
\`\`\`

#### Typography
- Font: Cairo (Google Fonts)
- Direction: RTL
- Language: Arabic

#### Spacing & Layout
- Container max-width: responsive
- Section padding: py-20
- Consistent gap spacing: gap-4, gap-6, gap-8
- Border radius: rounded-2xl for cards

### State Management
- Local component state with `useState`
- No global state management needed
- Event handlers for interactions

### Performance Considerations
- Next.js Image optimization
- Lazy loading for images
- Code splitting by component
- GPU-accelerated animations via Framer Motion
- Minimal JavaScript for static sections

## Common Patterns

### RTL Layout
\`\`\`tsx
// Root layout sets direction
<html lang="ar" dir="rtl">
\`\`\`

### Responsive Design
\`\`\`tsx
// Mobile-first approach
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
\`\`\`

### Animations
\`\`\`tsx
// Scroll-triggered animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
\`\`\`

### Interactive Elements
\`\`\`tsx
// Hover and tap feedback
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
\`\`\`

## Key Files to Understand

### Critical Files
1. `app/layout.tsx`: Root layout, font configuration, RTL setup
2. `app/page.tsx`: Main page composition
3. `app/globals.css`: Design tokens, Tailwind configuration
4. `components/header.tsx`: Navigation logic, logo color change
5. `components/showcase-gallery.tsx`: Interactive gallery showcase

### Interactive Components
- `image-transformation.tsx`: Auto-play fade
- `slider-comparison.tsx`: Drag slider
- `hover-reveal.tsx`: Hover interaction
- `split-view.tsx`: Side-by-side
- `tap-reveal.tsx`: Click/tap toggle

## Troubleshooting Guide

### Common Issues

#### Logo Visibility
**Problem**: White logo disappears on white background
**Solution**: CSS filter changes logo color based on scroll state

#### Horizontal Scrolling
**Problem**: Content causes horizontal overflow
**Solution**: Ensure responsive classes, proper text wrapping, mobile-friendly layouts

#### RTL Layout Issues
**Problem**: Elements not respecting RTL direction
**Solution**: Use Flexbox/Grid (auto-reverse), avoid absolute positioning, test in RTL

#### Animation Performance
**Problem**: Janky animations
**Solution**: Use Framer Motion, GPU-accelerated properties (transform, opacity), avoid layout shifts

## Development Workflow

### Adding New Sections
1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add section ID for navigation
4. Update header navigation if needed
5. Test responsiveness and RTL layout

### Adding New Interactive Components
1. Follow existing component patterns
2. Accept standard props (beforeImage, afterImage, labels)
3. Include Arabic instructions
4. Add to ShowcaseGallery if showcasing
5. Test touch and mouse interactions

### Styling Guidelines
1. Use Tailwind utility classes
2. Reference design tokens (primary, secondary)
3. Mobile-first responsive design
4. Consistent spacing scale
5. RTL-aware layouts

## Business Context

### Agency Services
- Product photography transformation
- Social media content creation
- Visual marketing
- Brand elevation
- Professional styling and lighting

### Target Audience
- Businesses in Kuwait
- E-commerce brands
- Product-based companies
- Social media marketers
- Brands seeking professional imagery

### Value Proposition
Waasslaa Media transforms basic product photos into stunning, professionally-styled images that increase engagement and sales on social media platforms.

## Future Considerations

### Scalability
- Portfolio system for more case studies
- CMS integration for content management
- Client dashboard for project tracking
- Online booking and payment system

### Internationalization
- English version for broader reach
- Language switcher component
- Translated content management

### Analytics
- Track interaction with comparison components
- Monitor conversion rates
- A/B test different layouts

### SEO
- Arabic meta tags
- Structured data for services
- Image alt text optimization
- Performance optimization

## Questions to Ask When Modifying

1. **Does this respect RTL layout?**
2. **Is it responsive on mobile?**
3. **Does it follow the brand color scheme?**
4. **Are animations smooth and performant?**
5. **Is the Arabic text clear and correct?**
6. **Does it maintain the premium, professional feel?**
7. **Is it accessible (keyboard, screen readers)?**
8. **Does it work with touch and mouse?**

## Summary

This is a modern, interactive showcase website for a Kuwaiti product photography agency. The core concept is demonstrating transformation through multiple interactive before/after comparison components. Everything is in Arabic with RTL layout, using a bold magenta color scheme, smooth animations, and a premium aesthetic that reflects the agency's high-quality work.

The codebase is well-structured, performant, and follows Next.js best practices. All interactive components are reusable and follow consistent patterns. The design is mobile-first and fully responsive.
