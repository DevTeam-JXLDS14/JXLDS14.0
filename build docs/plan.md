# JXLDS 14.0 Website Development Plan

## Project Overview
A React-based website for JXLDS 14.0, a 2-day leadership conference organized by AIESEC in University of Sri Jayewardenepura.

## Tech Stack
- **Frontend Framework**: React
- **Styling**: TBD (CSS Modules / Tailwind CSS / Styled Components)
- **Routing**: React Router
- **Form Integration**: Google Forms embedded for registration
- **Deployment**: TBD

---

## Site Structure

### 1. Landing Page (`/`)
**Purpose**: Main entry point introducing JXLDS and showcasing past events

**Components**:
- Hero section with event branding
- About JXLDS section
  - Event description
  - Conference overview (2-day leadership conference)
  - AIESEC in University of Sri Jayewardenepura introduction
- Past Aftermovies section
  - Video gallery/carousel
  - Embedded YouTube/Vimeo players
- Call-to-action buttons (Register Now, Learn More)
- Navigation menu

**Key Features**:
- Responsive design
- Video playback functionality
- Smooth scrolling to sections
- Engaging animations/transitions

---

### 2. Registration Page (`/register`)
**Purpose**: Member registration for the event

**Components**:
- Registration form (Google Form embedded)
- Event details reminder
- Registration guidelines/instructions
- Deadline information

**Key Features**:
- Embedded Google Form connected to Google Sheets
- Responsive iframe integration
- Form validation (handled by Google Forms)
- Success message after submission
- Contact information for registration queries

---

### 3. About OC Page (`/organizing-committee`)
**Purpose**: Showcase the Organizing Committee members

**Components**:
- Page header/title
- OC member cards grid
  - Member photo
  - Name
  - Position/Role (optional)
  - Social media links (optional)
- Team introduction/message

**Key Features**:
- Card-based layout (grid/flexbox)
- Hover effects on cards
- Responsive grid (adjusts to screen size)
- Professional photo displays
- Filtering by department/team (optional)

---

### 4. About Facilitators Page (`/facilitators`)
**Purpose**: Showcase event facilitators

**Components**:
- Page header/title
- Facilitator cards grid (similar structure to OC page)
  - Facilitator photo
  - Name
  - Expertise/Topic area
  - Bio (optional)
- Introduction to facilitation approach

**Key Features**:
- Card-based layout matching OC page style
- Hover effects
- Responsive grid
- Modal/expandable view for detailed bios (optional)

---

### 5. Store Page (`/store`)
**Purpose**: Showcase JXLDS merchandise

**Components**:
- Store header
- Merchandise cards grid
  - Product image
  - Product name
  - Price
  - Description
  - Purchase/Contact button
- Filters by category (optional)

**Key Features**:
- Card-based product display
- Image gallery for each product (optional)
- Price display
- Purchase instructions/contact information
- Responsive grid layout
- Wishlist/cart functionality (optional - future enhancement)

---

## Shared Components

### Navigation Bar
- Logo/Event branding
- Links to all pages
- Mobile hamburger menu
- Sticky/fixed positioning option

### Footer
- AIESEC branding
- Social media links
- Contact information
- Copyright notice
- Quick links to pages

---

## Development Phases

### Phase 1: Project Setup
- [ ] Initialize React project (Create React App / Vite)
- [ ] Set up project structure
- [ ] Install dependencies (React Router, styling library)
- [ ] Configure routing
- [ ] Create basic layout components (Header, Footer)

### Phase 2: Landing Page Development
- [ ] Design and implement hero section
- [ ] Create About JXLDS section
- [ ] Implement aftermovie video gallery
- [ ] Add animations and transitions
- [ ] Ensure responsive design

### Phase 3: Registration Page
- [ ] Create registration page layout
- [ ] Embed Google Form
- [ ] Add event information section
- [ ] Test form submission and Google Sheets integration
- [ ] Optimize for mobile devices

### Phase 4: Team Pages (OC & Facilitators)
- [ ] Design reusable card component
- [ ] Create OC page with member cards
- [ ] Implement facilitator page with similar structure
- [ ] Add hover effects and interactions
- [ ] Implement responsive grid layout

### Phase 5: Store Page
- [ ] Design merchandise card component
- [ ] Create product grid layout
- [ ] Add product information display
- [ ] Implement purchase/inquiry functionality
- [ ] Ensure responsive design

### Phase 6: Polish & Optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility improvements

### Phase 7: Deployment
- [ ] Choose hosting platform (Vercel / Netlify / GitHub Pages)
- [ ] Set up deployment pipeline
- [ ] Configure custom domain (if applicable)
- [ ] Deploy production build

---

## Content Requirements

### To Be Collected:
1. **Event Information**
   - Official JXLDS 14.0 description
   - Event dates and venue
   - Schedule outline
   - Registration deadline

2. **Media Assets**
   - Logo and branding assets
   - Past event aftermovie links
   - High-quality event photos
   - OC member photos and names
   - Facilitator photos, names, and bios
   - Merchandise photos and details

3. **Forms & Links**
   - Google Form URL for registration
   - Social media handles
   - Contact email/phone numbers

4. **Merchandise Details**
   - Product names and descriptions
   - Pricing information
   - Available sizes/variants
   - Purchase/ordering process

---

## Design Considerations

### Branding
- AIESEC brand colors and guidelines
- JXLDS 14.0 event theme colors
- Typography choices
- Logo usage

### User Experience
- Intuitive navigation
- Fast loading times
- Clear call-to-action buttons
- Easy access to registration
- Mobile-first approach

### Accessibility
- Alt text for images
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

---

## Future Enhancements (Post-Launch)
- Live countdown timer to event
- Gallery page for event photos
- Testimonials from past participants
- Blog/News section for updates
- Email newsletter subscription
- Online payment integration for merchandise
- Event schedule/agenda page
- Speaker/guest profiles

---

## Notes
- Ensure all content is proofread before deployment
- Test Google Form integration thoroughly
- Keep backup of all assets
- Document any API keys or credentials securely
- Consider analytics integration (Google Analytics) for tracking
