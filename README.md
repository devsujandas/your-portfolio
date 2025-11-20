# Portfolio - Sujan

A modern, responsive portfolio website showcasing creative UI/UX design and product design work. Built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop screens
- **Dark Mode Support** - Seamless theme switching with system preference detection
- **Modern Components** - Built with shadcn/ui component library
- **Blog System** - Markdown-based blog with dynamic routing
- **Case Studies** - Detailed project case studies with rich media
- **Services Showcase** - Display your services and expertise
- **Contact Form** - Get in touch section for potential clients
- **Performance Optimized** - Built with Next.js for optimal performance and SEO

## Project Structure

\`\`\`
portfolio/
├── app/                           # Next.js App Router
│   ├── about/                    # About page
│   ├── blog/                     # Blog listing and posts
│   ├── case-study/               # Case study pages
│   ├── contact/                  # Contact page
│   ├── services/                 # Services page
│   ├── work/                     # Work portfolio page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── not-found.tsx             # 404 page
├── components/                    # React components
│   ├── ui/                       # shadcn/ui components
│   ├── hero.tsx                  # Hero section
│   ├── navbar.tsx                # Navigation bar
│   ├── footer.tsx                # Footer component
│   ├── featured-projects.tsx     # Projects showcase
│   ├── services.tsx              # Services section
│   ├── skills.tsx                # Skills section
│   ├── experience.tsx            # Experience timeline
│   ├── cta-section.tsx           # Call-to-action section
│   ├── theme-provider.tsx        # Theme configuration
│   └── theme-toggle.tsx          # Dark mode toggle
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile detection hook
│   └── use-toast.ts              # Toast notification hook
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   ├── favicon.jpeg              # Site favicon
│   ├── data/                     # JSON data files
│   │   ├── blogs.json            # Blog posts data
│   │   ├── projects.json         # Projects data
│   │   └── services.json         # Services data
│   └── images/                   # Images and graphics
├── styles/                       # Additional styles
│   └── globals.css               # Global stylesheet
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # This file
└── LICENSE                       # License file
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   pnpm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Adding Blog Posts

1. Create a new markdown file in the blog data or add to `public/data/blogs.json`
2. Update the blog page to fetch and display your content
3. Posts will automatically generate routes based on slugs

### Adding Projects

1. Update `public/data/projects.json` with your project information
2. Create detailed case study pages in `app/case-study/[id]/`
3. Upload project images to `public/images/`

### Customizing Content

- **Hero Section** - Edit `components/hero.tsx`
- **Services** - Update `public/data/services.json`
- **Experience** - Modify `components/experience.tsx`
- **Contact Info** - Update `components/footer.tsx` and `app/contact/page.tsx`

### Theme Customization

Global styles and theme variables are configured in:
- `app/globals.css` - Color scheme and design tokens
- `components/theme-provider.tsx` - Theme provider setup
- `components/theme-toggle.tsx` - Dark mode toggle component

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Vercel Analytics** - Performance monitoring
- **next-themes** - Theme management

## Building for Production

\`\`\`bash
npm run build
# or
pnpm build
\`\`\`

The build output will be stored in the `.next` directory.

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Click deploy

### Deploy Elsewhere

The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted servers

## Performance

This portfolio is optimized for performance with:
- Image optimization through Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind CSS
- Server-side rendering for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Sujan** - Creative UI/UX Designer & Product Designer

For more information and to see the live portfolio, visit the deployed site.

## Support

If you have any questions or need help, please open an issue or contact through the contact page.

---

**Made with ❤️ using Next.js and Vercel**
