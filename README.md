# Aryan Sharma - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 App Router
- 🎨 Styled with Tailwind CSS and shadcn/ui
- 🔧 TypeScript for type safety
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Add your profile image:
   - Place your profile image as `PPFP.jpg` in the `public` folder

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
Edit the content in `app/page.tsx`:
- Update personal details, education, projects, and skills
- Modify social media links
- Add or remove sections as needed

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`

### Adding Projects
Add new projects to the `projects` array in `app/page.tsx`:

\`\`\`typescript
{
  title: "Project Name",
  year: "2024",
  oneLiner: "Brief description",
  category: "Full-Stack",
  technologies: ["React", "Node.js"],
  details: ["Detail 1", "Detail 2"],
  github: "https://github.com/username/repo",
  preview: "https://your-demo-url.com"
}
\`\`\`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching

## License

This project is open source and available under the [MIT License](LICENSE).
