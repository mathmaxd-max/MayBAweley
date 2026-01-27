# May B. Aweley – Author Website

A professional, elegant static website for German thriller author May B. Aweley, built with Astro, TypeScript, and Tailwind CSS.

## Features

- **Elegant Literary Design**: Professional design aesthetic with serif typography and warm color palette
- **Horizontal Book Selector**: Interactive book browsing with keyboard navigation
- **SEO Optimized**: Complete meta tags, structured data (JSON-LD), and sitemap generation
- **German Compliance**: Impressum and Datenschutzerklärung pages included
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Type-Safe**: Full TypeScript support with typed data structures

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **JSON Data** - Structured content from `setup/data/`

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/         # Route pages
│   ├── data/           # JSON data files and loaders
│   ├── utils/          # Utility functions
│   └── styles/         # Global styles
├── public/             # Static assets
└── setup/              # Source data and content
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

All book data, author information, and press mentions are managed through JSON files in `src/data/`:

- `books.json` - Book catalog with metadata
- `author.json` - Author bio and information
- `recognition.json` - Awards and recognition
- `press.json` - Interviews and press mentions
- `sources.json` - Source URLs for verification
- `social_proof.json` - Ratings and social proof data

## Design System

### Colors
- **Primary**: Deep burgundy (#6B2C3E) / Rich navy (#1A2332)
- **Accent**: Gold/amber (#D4AF37)
- **Neutrals**: Warm grays (#F5F3F0, #E8E5E0, #8B8680)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Pages

- `/` - Home page with book selector
- `/[bookId]` - Individual book pages
- `/ueber-die-autorin` - About the author
- `/presse-auszeichnungen` - Press and awards
- `/kontakt` - Contact information
- `/impressum` - Legal information (Impressum)
- `/datenschutz` - Privacy policy

## TODO

Before going live:

1. **Content**: Add actual book teasers/hooks (currently placeholders)
2. **Images**: Add book cover images to `public/images/covers/`
3. **Impressum**: Fill in actual author contact information
4. **Datenschutz**: Customize privacy policy based on actual services used
5. **Social Media**: Add social media links to contact page
6. **Domain**: Update `astro.config.mjs` with actual domain URL

## License

Copyright © 2026 May B. Aweley. All rights reserved.
