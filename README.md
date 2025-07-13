# Babji Sheik’s Portfolio

A personal portfolio website built with React and Vite, showcasing Babji Sheik’s projects, experience, and skills. Features a dynamic space-themed background, interactive starfield, 3D canvas, and optional background music for an immersive visitor experience.

---

## 🚀 Features

- **Vite + React** for fast development with Hot Module Replacement (HMR)
- **Dynamic Background**  
  - Full‐screen galaxy image with subtle zoom animation
  - Interactive star particles (`react-tsparticles`)
  - 3D “Universe” canvas powered by `@react-three/fiber`
- **Sectioned Layout**  
  - Hero banner with name, tagline, and quick links  
  - About Me section with personal details and CV/Résumé download  
  - Education & Experience timeline  
  - Expertise cards with icons  
  - Skills grid organized by category  
  - Project showcase with descriptions and tech stack  
  - Contact form and contact cards (Email, WhatsApp, Phone)
- **Background Music** toggle button (optional) to play a themed MP3
- **Responsive design** and mobile‐friendly navigation, including a collapsible menu
- Built-in scroll-to-section anchors and sticky navbar with auto-hide on scroll

---

## 📁 Folder Structure

my-portfolio/
├── public/ # Static assets served at root
│ ├── galaxy.jpg
│ ├── galaxy-bg.jpg
│ └── resume.pdf
├── src/
│ ├── assets/ # Module-imported assets
│ │ └── universe-theme.mp3
│ ├── components/
│ │ └── SectionWrapper.jsx
│ ├── About.jsx
│ ├── App.jsx
│ ├── BackgroundMusic.jsx
│ ├── Contact.jsx
│ ├── Experiences.jsx
│ ├── Expertise.jsx
│ ├── Hero.jsx
│ ├── Navbar.jsx
│ ├── Projects.jsx
│ ├── Studies.jsx
│ ├── Stars.jsx
│ ├── Technologies.jsx
│ ├── UniverseCanvas.jsx
│ ├── index.css
│ ├── main.jsx
│ └── index.html
├── package.json
├── vite.config.js # Vite config (e.g. base, assetsInclude)
└── README.md

yaml
Copy
Edit

---

## 💻 Local Development

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Babji-Sheik/my-portfolio.git
   cd my-portfolio
Install dependencies

bash
Copy
Edit
npm install
Run the dev server

bash
Copy
Edit
npm run dev
Open your browser at http://localhost:5173 to see live updates.

📦 Build & Preview
Build for production

bash
Copy
Edit
npm run build
Outputs optimized files to the dist/ folder.

Preview the production build

bash
Copy
Edit
npm run preview
Serves dist/ locally with correct routing and sub-path support.

📂 Public vs. Bundled Assets
Static files (galaxy images, resume.pdf) go in the public/ folder and are served at /.

Module imports (MP3, processed images) live in src/assets/ and are hashed by Vite.

⚙️ Configuration
Vite Base Path
In vite.config.js, adjust base if you host under a sub-directory (e.g., GitHub Pages).

Asset Inclusion
To bundle non-standard types (e.g. .docx), add to assetsInclude in vite.config.js:

js
Copy
Edit
export default defineConfig({
  assetsInclude: ['**/*.docx', '**/*.pdf']
});
Environment Variables
You can add a .env file at project root and reference via import.meta.env.

🎨 Customization
Change Background Images: Swap galaxy.jpg and galaxy-bg.jpg in public/.

Update Resume: Replace public/resume.pdf with your latest resume.

Adjust Sections: Modify or reorder React components in App.jsx.

Theme Colors: Tweak CSS variables or inline styles in index.css and component styles.

📬 Contact & Contribution
Report issues or suggest improvements via GitHub Issues.

Pull requests are welcome—feel free to enhance animations, accessibility, or add new sections.

Crafted with ❤️ by Babji Sheik using React, Vite, and Three.js