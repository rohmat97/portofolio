# 🚀 Interactive Developer Portfolio — Rohmat Dasuki

A modern, highly interactive, gaming-themed developer portfolio web application built with **React 18** and **Tailwind CSS**. Features an authentic retro-futuristic **Digimon World 3 Cyber Matrix Landing Gate**, **Digimon Digivolution Project Card Animations**, **3D Flip Profile Skill Matrix Card**, **Thor Mjolnir Skill Reassembly System**, and a printable formal resume view.

🌐 **Live Demo**: [rohmat97.github.io/portofolio](https://rohmat97.github.io/portofolio)

---

## ✨ Feature Highlights

- 👾 **Digimon World 3 Cyber Matrix Gate**: Interactive entrance gate with matrix digital waterfall particles, CRT scanlines, 3D cyber grid, keyboard shortcuts (`Enter`), and background music toggle.
- ⚡ **Digimon Digivolution Project Animations**: Staggered $0.25\times \rightarrow 1.0\times$ scale-up card evolution sequence featuring rotating concentric Digi-code rings, laser scanning beams, energy burst flashes, and live evolution stage progression (`ROOKIE` $\rightarrow$ `CHAMPION` $\rightarrow$ `ULTIMATE` $\rightarrow$ `MEGA FORM`). Includes a manual **"DIGIVOLVE ALL"** button with synthesized digital warp audio.
- 🎴 **3D Flip RPG Profile Card**: Floating profile card in the hero section that flips $180^\circ$ on hover to reveal an RPG character skill matrix with live progress meters for React/Next.js (98%), Nuxt 3/Vue (92%), React Native (90%), TypeScript (94%), and Spring Boot (40%).
- 🔨 **Thor Mjolnir Skill Reassembly**: Skill matrix cards shatter and snap back together with electric SVG crackles and lightning audio effects upon scroll or tab filter changes.
- 🔊 **Web Audio API Haptic Sound Effects**: Zero external audio files needed for interaction sounds — synthesized hover chirps, click tones, digital warp sweeps, and Mjolnir thunder cracks via Web Audio API.
- 🎨 **Dynamic Multi-Theme Customizer**: Real-time theme switcher supporting Cyber, Emerald, Violet, Obsidian, Indigo, and Teal modes with dynamic cursor spotlighting.
- 📄 **Executive Print & PDF Export Resume**: Integrated `PrintCV` view optimized specifically for standard A4 paper printing and PDF resume export.
- 📱 **Fully Responsive Layout**: Mobile-first design tailored with responsive Tailwind CSS utilities, glassmorphism UI, and smooth-scroll navigation.

---

## 🛠️ Tech Stack

- **Framework & Core**: [React 18](https://react.dev/), JavaScript (ES6+)
- **Styling & UI**: [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Glassmorphism, CSS 3D Transforms
- **Icons & Navigation**: [React Icons](https://react-icons.github.io/react-icons/), [React Scroll](https://www.npmjs.com/package/react-scroll)
- **Audio Synthesis**: Web Audio API (synthesized sound effects) + HTML5 Audio BGM
- **Deployment**: [GitHub Pages](https://pages.github.com/) (`gh-pages`)

---

## 📂 Project Structure

```text
portofolio/
├── public/                # Static assets, HTML template, favicon
├── src/
│   ├── assets/            # Project logos, profile photos, and audio files
│   ├── components/
│   │   ├── layout/        # Navigation bar, Footer, Back-to-top button
│   │   ├── print/         # Executive Printable CV component for export
│   │   ├── sections/      # Home, About, Skills, Work, Journey, Contact
│   │   └── ui/            # ProjectCard (Digivolution), Theme Customizer, Splash Gate
│   ├── constants/         # Links, resume URLs, contact info
│   ├── data/              # Projects, skills, experiences, & metrics data
│   ├── utils/             # Web Audio API synthesizer & sound effects
│   ├── App.jsx            # Main application root
│   └── index.css          # Core CSS design system, 3D flip, and keyframes
├── package.json           # Dependencies and build scripts
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v16.x` or higher
- **Package Manager**: `yarn` or `npm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rohmat97/portofolio.git
   cd portofolio
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**:
   ```bash
   yarn start
   # or
   npm start
   ```
   Open [http://localhost:3000/portofolio](http://localhost:3000/portofolio) to view the application in your browser.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| --- | --- |
| `yarn start` / `npm start` | Runs the app in development mode with hot reload. |
| `yarn build` / `npm run build` | Builds the app for production to the `build` folder. |
| `yarn test` / `npm test` | Launches the interactive test runner. |
| `yarn deploy` / `npm run deploy` | Builds the project and deploys it to **GitHub Pages**. |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
