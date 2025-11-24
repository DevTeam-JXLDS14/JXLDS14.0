# JXLDS 14.0 Website

Official website for JXLDS 14.0 - A 2-day leadership conference organized by AIESEC in University of Sri Jayewardenepura.

## Project Structure

```
JXLDS14.0/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Card.jsx         # Card for OC/Facilitators
│   │   └── ProductCard.jsx  # Product card for store
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Register.jsx     # Registration page
│   │   ├── OrganizingCommittee.jsx
│   │   ├── Facilitators.jsx
│   │   └── Store.jsx
│   ├── data/                # Data files
│   │   ├── ocMembers.js     # OC member data
│   │   ├── facilitators.js  # Facilitator data
│   │   └── products.js      # Product data
│   ├── assets/              # Static assets
│   │   ├── images/
│   │   └── videos/
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
└── build docs/
    └── plan.md              # Development plan
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd JXLDS14.0
```

2. Install dependencies (already done)
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Content Updates

### Adding OC Members
Edit `src/data/ocMembers.js` and add member information:
```javascript
{
  name: "Member Name",
  role: "Position",
  image: "/path/to/image.jpg"
}
```

### Adding Facilitators
Edit `src/data/facilitators.js` and add facilitator information:
```javascript
{
  name: "Facilitator Name",
  expertise: "Area of Expertise",
  bio: "Short bio",
  image: "/path/to/image.jpg"
}
```

### Adding Products
Edit `src/data/products.js` and add product information:
```javascript
{
  name: "Product Name",
  price: "1500",
  description: "Product description",
  image: "/path/to/image.jpg"
}
```

### Updating Google Form
1. Create your Google Form
2. Get the embed link (Send → Embed HTML → Copy iframe src)
3. Update the iframe src in `src/pages/Register.jsx`

### Adding Aftermovies
Update the video section in `src/pages/Home.jsx` with YouTube embed codes.

## Color Scheme

- Primary Blue: `#037ef3`
- Dark Blue: `#0262c4`
- Background: White (`#ffffff`)
- Text: `#1a1a1a`

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3

## Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Create a pull request

## Support

For questions or issues, contact:
- Email: info@jxlds.com
- Phone: +94 XX XXX XXXX

## License

Copyright © 2025 JXLDS 14.0. All rights reserved.
