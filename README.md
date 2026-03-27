# Campus Insights - University Website Portal

A modern, feature-rich university website built with Next.js, TypeScript, Tailwind CSS, and Three.js. Campus Insights provides a comprehensive portal for students, faculty, and visitors with information about academics, admissions, clubs, placements, and more.

## 🎨 Features

### Core Features
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Dark theme with gold accents, smooth animations, and professional styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **TypeScript**: Full type safety throughout the application
- **Three.js Integration**: WebGL shader animations for visual effects

### Pages & Sections

#### 1. **Landing Page (Home)**
- Professional hero section with CTA buttons
- Institution statistics and highlights
- Quick links to key sections
- Navigation bar with dropdown menus

#### 2. **Splash/Loading Screen** ✨ NEW
- WebGL shader animation background powered by Three.js
- Smooth fade-in transitions with BMSCE branding
- Auto-redirect to home after 4 seconds
- Professional typography and spacing
- Campus building image displayed on About page

#### 3. **About Page** ✨ UPDATED
- Two-column layout (text + image)
- Campus building image with professional styling
- Legacy information ("A Legacy of Excellence Since 1946")
- Achievement statistics (95%+ placement, ₹40+ LPA packages, 100+ recruiters)
- Vision and mission statements
- Campus highlights section
- Clubs and societies showcase

#### 4. **Academics Page**
- 8 department cards with icons and descriptions
- Program overview (13 undergraduate, 16 postgraduate)
- Accreditation information (NAAC A++, NBA, VTU, AICTE)
- Department-specific landing pages
- Career outcomes and achievements
- Fixed emoji display across all sections

#### 5. **Admissions Page**
- 6 admission type cards (UG, PG, PhD, International, Apply)
- Application timeline (6-step process)
- Requirements and scholarships information
- Program filtering system
- Interactive admission cards with modals

#### 6. **Clubs Page** ✨ NEW
- 12 club cards with detailed descriptions
- Club focus areas and metadata
- 4 activity detail sections (Workshops, Hackathons, Guest Sessions, Outreach)
- 6 achievement cards with recognition
- 4 engagement metric cards (2,600+ members, 180+ events, 65% participation, 90+ competitions)
- CTA buttons for club engagement

#### 7. **Contact Page** ✨ EXPANDED
- 4 contact detail cards (Address, Phone, Email, Office Hours)
- Embedded Google Maps
- Advanced contact form with validation
- 4 department contact sections
- FAQ quick links (4 items)
- Chat assistance section
- Professional layout with clear hierarchy
- Multiple CTA buttons

#### 8. **Research & Innovation**
- Research centers and labs
- Innovation initiatives
- Project showcases
- Collaboration opportunities

#### 9. **Placements & Careers**
- Placement statistics and metrics
- Top recruiting companies
- Career guidance resources
- Alumni success stories

#### 10. **Postgraduate Programs**
- Specialized program pages
- Course curriculum details
- Faculty profiles
- Application processes

#### 11. **Student Portal**
- Dashboard information
- Resources and downloads
- Important dates and announcements
- Student services

### Components

#### ShaderAnimation Component ✨ NEW
- WebGL-based Three.js shader renderer
- Responsive sizing and pixel ratio support
- Memory-safe cleanup and disposal
- Cross-browser compatible
- High-performance animation
- Located: `/src/components/ui/shader-animation.tsx`

#### LoadingScreen Component ✨ NEW
- Branded splash screen with animations
- Auto-redirect functionality
- Customizable redirect paths
- Smooth fade-in effects
- Props-based configuration
- Located: `/src/components/ui/loading-screen.tsx`

#### UI Components
- Image carousel
- Particle text effects
- Spotlight cards
- Responsive containers
- Professional styling

### Advanced Features

#### 1. **Navigation System** ✨ UPDATED
- 10 main navigation items (added "Clubs")
- Dropdown submenus
- Active state tracking
- Desktop and mobile versions
- Hamburger menu on mobile
- Smooth transitions

#### 2. **Chatbot Integration**
- Live chat widget on all pages
- Multi-page support
- Context-aware assistance
- Professional styling
- Easy support access

#### 3. **Emoji & Icon Support** ✨ FIXED
- Fixed emoji display (UTF-8 encoding issues resolved)
- SVG icons throughout
- Consistent icon library
- Accessibility support
- Cross-browser rendering

#### 4. **Animations & Effects**
- Shader animations (Three.js)
- Fade-in reveals
- Stagger animations
- Smooth transitions
- Hover effects with lift (4-8px translate)
- Glow border effects

#### 5. **Responsive Grid System**
- 4-column on desktop (1200px+)
- 2-column on tablet (768-1200px)
- 1-column on mobile (<768px)
- Equal height cards
- Flexible spacing (96px sections)

#### 6. **Image Management** ✨ UPDATED
- Campus building image (About page)
- Responsive image loading
- Professional styling with shadows
- Fallback support

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.1 (Latest)
- **React**: 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js (WebGL)
- **Package Manager**: npm
- **Build Tool**: Turbopack

## 📦 Dependencies

```json
{
  "next": "16.2.1",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "three": "latest",
  "@types/three": "latest",
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Modern web browser with WebGL support

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sarthak-t10/Campus-Insights.git
cd Campus-Insights
```

2. Install dependencies:
```bash
npm install
```

3. Install Three.js (if not already installed):
```bash
npm install three @types/three
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
npm run lint -- --fix
```

## 📁 Project Structure

```
campus-insights/
├── src/
│   ├── app/
│   │   ├── page.tsx (LoadingScreen - Splash Screen)
│   │   ├── splash/
│   │   │   └── page.tsx
│   │   ├── shader-demo/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── academics/
│   │   │   └── page.tsx
│   │   ├── admissions/
│   │   │   └── page.tsx
│   │   ├── clubs/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── departments/
│   │   ├── postgraduate/
│   │   ├── research/
│   │   ├── placements/
│   │   ├── students/
│   │   ├── innovation/
│   │   ├── activities/
│   │   ├── alumni/
│   │   ├── campus-life/
│   │   ├── facilities/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── ...
│   ├── components/
│   │   ├── ui/
│   │   │   ├── shader-animation.tsx (NEW)
│   │   │   ├── loading-screen.tsx (NEW)
│   │   │   ├── particle-text-effect.tsx
│   │   │   ├── spotlight-card.tsx
│   │   │   └── image-carousel.tsx
│   │   ├── academics/
│   │   ├── departments/
│   │   ├── postgraduate/
│   │   └── ...
│   └── data/
│       └── postgraduate-programs.ts
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── about-image.webp (NEW - Campus building)
│   │   │   ├── splash-image.webp (NEW)
│   │   │   ├── bmsce-icon.jpg (NEW)
│   │   │   ├── logo.jpeg
│   │   │   └── ...
│   │   ├── css/
│   │   │   ├── styles.css
│   │   │   └── chatbot.css
│   │   └── js/
│   │       ├── main.js (UPDATED - Added Clubs navigation)
│   │       ├── chatbot.js
│   │       └── chatbot-data.js
│   ├── about.html (UPDATED - Added image section)
│   ├── academics.html (FIXED - Emoji display)
│   ├── admissions.html (FIXED - Emoji display)
│   ├── clubs.html (NEW)
│   ├── contact.html (EXPANDED)
│   ├── index.html (UPDATED - Admissions button redirect)
│   └── ...
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
└── eslint.config.mjs
```

## 🎯 Key Routes

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Landing page with splash screen | ✨ NEW |
| `/about.html` | About the institution | ✨ UPDATED |
| `/academics.html` | Academic programs | ✨ FIXED |
| `/admissions.html` | Admission information | ✨ FIXED |
| `/clubs.html` | Student clubs | ✨ NEW |
| `/contact.html` | Contact information | ✨ EXPANDED |
| `/research.html` | Research & innovation | ✅ |
| `/placements.html` | Placement info | ✅ |
| `/students.html` | Student portal | ✅ |
| `/facilities.html` | Campus facilities | ✅ |
| `/activities.html` | Student activities | ✅ |
| `/alumni.html` | Alumni network | ✅ |
| `/departments.html` | Department listing | ✅ |
| `/splash` | Splash screen demo | ✨ NEW |
| `/shader-demo` | Shader animation demo | ✨ NEW |

## 🎨 Design System

### Color Scheme
- **Primary Gold**: #C9A96E (`--gold`)
- **Background**: #09090B (`--background`)
- **Surface**: #111113 (`--surface`)
- **Surface 2**: #1A1A1E (`--surface-2`)
- **Text Primary**: #F2EDE4 (`--foreground`)
- **Text Muted**: rgba(242, 237, 228, 0.66) (`--text-muted`)
- **Text Dim**: rgba(242, 237, 228, 0.4) (`--text-dim`)
- **Border**: rgba(255, 255, 255, 0.07) (`--border`)

### Typography
- **Headers**: Cormorant Garamond (serif, 300-600 weight)
- **Body**: DM Sans (sans-serif, 400-500 weight)
- **Data**: Space Grotesk (monospace, 400-500 weight)
- **Base Size**: 16px
- **Line Height**: 1.6-1.8

### Spacing
- **Sections**: 96px padding (desktop), 76px (tablet)
- **Cards**: 20-24px padding
- **Gaps**: 16-28px between items
- **Container**: min(100%, 1152px) width

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Animation Effects
- **Transitions**: 240-250ms ease
- **Hover Lift**: translateY(-4px to -8px)
- **Glow Border**: Gold color with box-shadow
- **Fade In**: 0.8s ease-out

## 📊 Implementation Summary

### Total Pages: 14
- 11 Main pages
- 3 Demo/Specialty pages

### Total Components: 40+
- Professional cards
- Form elements
- Navigation structures
- UI elements

### New Features Added:
- ✨ Three.js shader animation component
- ✨ Loading/splash screen system
- ✨ 12 student clubs with full details
- ✨ Expanded contact page with form
- ✨ Campus building image on About page
- ✨ Fixed emoji display across pages
- ✨ Updated navigation with Clubs link
- ✨ BMSCE logo placement in assets

### Bug Fixes:
- ✅ Fixed double UTF-8 emoji encoding
- ✅ Fixed admissions button navigation
- ✅ Resolved image display issues
- ✅ Updated navigation structure

## 🔧 Configuration

### Tailwind CSS
- Custom CSS variables in `src/app/globals.css`
- PostCSS configuration in `postcss.config.mjs`
- Tailwind v4 with @tailwindcss/postcss plugin
- Theme colors defined as CSS variables

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` → `src/*`)
- Type definitions for all dependencies
- Proper React component typing

### Next.js
- App Router implementation
- Turbopack for fast build times
- Image optimization support
- Client components marked with "use client"

## 🧪 Testing

### Testing Checklist:
- ✅ Desktop responsiveness verified
- ✅ Mobile responsiveness tested
- ✅ Tablet layout confirmed
- ✅ Navigation tested (desktop/mobile)
- ✅ Emoji display verified
- ✅ Splash screen animation working
- ✅ Shader animation rendering
- ✅ Form validation functional
- ✅ All pages loading correctly
- ✅ Links and navigation working

## 🚢 Deployment

### Ready for Deployment On:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Traditional Node.js servers
- Docker containers

### Environment Variables:
- Configure API endpoints for contact form
- Set up email service integration
- Configure analytics tracking
- Add API keys if needed

## 🧪 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ |
| Firefox | Latest | ✅ |
| Safari | Latest | ✅ |
| Edge | Latest | ✅ |
| Mobile Safari | iOS 12+ | ✅ |
| Chrome Mobile | Latest | ✅ |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## 📚 Documentation

### Comprehensive Guides:
- `IMPLEMENTATION_COMPLETE.md` - Detailed implementation summary
- `SHADER_ANIMATION_INTEGRATION.md` - Three.js setup and usage guide
- `TESTING_CHECKLIST.md` - Quality assurance procedures
- `NAVIGATION_STRUCTURE.md` - Navigation system documentation
- `QUICK_REFERENCE_GUIDE.md` - Quick lookup reference
- `CLUBS_CONTACT_VISUAL_GUIDE.md` - Visual design guides
- `IMPLEMENTATION_DELIVERY_SUMMARY.md` - Full delivery details

## 📞 Support

For questions or issues, please contact:
- **Email**: info@campusinsights.edu
- **Phone**: +91 44 4000 9000 (Main), +91 44 4000 9010 (Helpdesk)
- **Website**: [Campus Insights](https://campusinsights.edu)

## 🔗 Repository Links

- **Primary**: https://github.com/sarthak-t10/Campus-Insights.git
- **Secondary**: https://github.com/sharancode3/campus-insights.git

## 📝 License

This project is part of Campus Insights University portal system.

## 🎯 Roadmap

### Planned Features:
- [ ] User authentication system
- [ ] Student dashboard with personalized content
- [ ] Advanced search functionality
- [ ] Blog/News section
- [ ] Event management system
- [ ] Alumni tracking system
- [ ] Payment gateway integration
- [ ] Mobile app (React Native)
- [ ] Internationalization (i18n)
- [ ] Advanced analytics

---

**Last Updated**: March 27, 2026  
**Version**: 2.0 (Complete Implementation)  
**Status**: ✅ Production Ready  
**Build Tool**: Turbopack  
**Performance**: Optimized with Next.js 16
