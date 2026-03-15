# ABC Foundation Website Structure

## Overview
This is a mobile-first, responsive website for ABC Foundation, an environmental NGO. The site is built using HTML5, TailwindCSS (via CDN), and minimal vanilla JavaScript.

## Folder Structure
```
abc-foundation/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects page
├── volunteer.html          # Volunteer page
├── donate.html             # Donation page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom CSS styles
│   ├── js/
│   │   └── main.js         # Main JavaScript functionality
│   └── images/             # Placeholder for future images
├── components/             # Reusable HTML components
│   ├── navbar.html         # Navigation bar component
│   ├── footer.html         # Footer component
│   ├── hero.html           # Hero section component
│   ├── stats.html          # Impact stats component
│   ├── project-card.html   # Project card component
│   └── cta-section.html    # Call-to-action section component
└── docs/
    └── site-structure.md   # This documentation file
```

## Pages Description

### Home (index.html)
- Hero section with NGO image and call-to-action buttons
- Impact stats with animated counters
- Core initiatives grid
- Featured projects
- Volunteer CTA banner
- Donation CTA section
- Latest news preview

### About (about.html)
- Organization story
- Vision and mission statements
- Leadership team grid

### Projects (projects.html)
- Project categories filter
- Project cards grid with images and descriptions

### Volunteer (volunteer.html)
- Volunteer introduction
- Application form with validation

### Donate (donate.html)
- Donation message
- Suggested donation amounts
- Payment form placeholder

### Gallery (gallery.html)
- Responsive image grid
- Hover effects on images

### Contact (contact.html)
- Contact form
- Contact information
- Google Maps placeholder

## Components
Reusable HTML components are stored in the `components/` folder. These can be included in pages using server-side includes or copied manually for static hosting.

## Technologies Used
- **HTML5**: Semantic markup for accessibility
- **TailwindCSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: Minimal JS for interactivity
- **Responsive Design**: Mobile-first approach with breakpoints

## Features
- Mobile-first responsive design
- Sticky navigation with hamburger menu
- Animated impact counters
- Form validation
- Keyboard accessibility
- Smooth scrolling
- Hover effects and transitions

## Customization
- Colors: Green primary (#38a169), earth brown accents, neutral backgrounds
- Typography: Clean, readable fonts optimized for web
- Spacing: Consistent spacing using Tailwind utilities

## Future Integration
This wireframe is designed to be easily integrated with:
- Laravel backend for dynamic content
- CMS for content management
- Payment gateways for donations
- Email systems for forms
- Google Maps API for location display

## Development Notes
- All images use Unsplash placeholders
- Forms are functional but don't submit data (demo purposes)
- JavaScript is minimal and focused on UX enhancements
- Code is commented for maintainability