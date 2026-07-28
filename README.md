# 🚀 Interactive Developer Portfolio

A modern, highly interactive, and responsive developer portfolio web application built with **React 18** and **Tailwind CSS**. Features a retro-futuristic **Digimon World 3 Cyber Matrix Landing Gate**, dynamic theme customization, smooth section transitions, and printable formal resume view.

🌐 **Live Demo**: [rohmat97.github.io/portofolio](https://rohmat97.github.io/portofolio)

---

## ✨ Features

- 👾 **Digimon World 3 Cyber Matrix Gate**: Interactive splash gate with retro cyber aesthetic, matrix effects, and sound toggles.
- 🎨 **Dynamic Multi-Theme Customizer**: Real-time theme customizer supporting custom color schemes, dynamic mouse spotlight, and section-aware particle animations.
- 💼 **Interactive Work & Projects Showcase**: Detailed filterable list of projects, live demo links, and tech stack tags.
- 🛠️ **Categorized Skills Grid**: Interactive skill breakdown with proficiency meters and category filtering.
- ⏳ **Career & Experience Journey**: Visual timeline of work history, accomplishments, and metrics.
- 📄 **Print & PDF Export Resume**: Integrated `PrintCV` view optimized specifically for standard paper printing and PDF resume generation.
- 📱 **Fully Responsive Layout**: Mobile-first design tailored with responsive Tailwind CSS utilities and smooth scroll navigation.

---

## 🛠️ Tech Stack

- **Framework & Core**: [React 18](https://react.dev/), JavaScript (ES6+)
- **Styling & UI**: [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer
- **Icons & Navigation**: [React Icons](https://react-icons.github.io/react-icons/), [React Scroll](https://www.npmjs.com/package/react-scroll)
- **Deployment**: [GitHub Pages](https://pages.github.com/) (`gh-pages`)

---

## 📂 Project Structure

```text
portofolio/
├── public/                # Static assets, HTML template, favicon
├── src/
│   ├── assets/            # Project images, icons, and audio assets
│   ├── components/
│   │   ├── layout/        # Navigation bar, Footer, Back-to-top button
│   │   ├── print/         # Printable CV component for export
│   │   ├── sections/      # Home, About, Skills, Work, Journey, Contact
│   │   └── ui/            # Cursor, Spotlight, Splash Gate, Theme Customizer
│   ├── constants/         # Global constants & configurations
│   ├── data/              # Projects, skills, experiences, & metrics data
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Helper utilities
│   ├── App.jsx            # Main Application component
│   └── index.css          # Global CSS & Tailwind directives
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
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

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
