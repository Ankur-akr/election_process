# 🇮🇳 IndiaVotes: Election Awareness Platform

IndiaVotes is a modern, responsive, and educational web application designed to increase awareness about the Indian electoral process. Built to demystify the world's largest democratic exercise, the platform provides an interactive and engaging way for citizens to understand their voting rights, how elections work, and how to cast their vote.

## ✨ Key Features

- **Interactive EVM & VVPAT Simulator:** A fully functional simulator that allows users to experience casting a vote on an Electronic Voting Machine, complete with audio feedback and a 7-second Voter Verifiable Paper Audit Trail (VVPAT) simulation.
- **Visual Process Timeline:** A scroll-triggered, step-by-step visual breakdown of the 11 key stages of an Indian election—from the announcement of dates to the formation of the government.
- **Election Types Breakdown:** Clear, expandable comparison cards explaining the differences between Lok Sabha, Vidhan Sabha, Local Bodies, and Presidential elections.
- **Interactive Quiz & FAQs:** Test your knowledge with a quick quiz, explore frequently asked questions, and debunk common election myths.
- **Modern UI/UX:** Built with a beautiful "glassmorphism" aesthetic, utilizing colors inspired by the Indian flag (Saffron, White, Green, and Navy Blue).
- **Responsive & Accessible:** Fully responsive design with a sleek mobile navigation menu and a built-in Dark/Light theme toggle.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (CSS3 with custom variables, grid, flexbox, and animations)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 16 or higher) installed.

### Installation

1. Navigate to the project directory:
   ```bash
   cd election_process
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. View the app:
   Open your browser and navigate to the URL provided in your terminal (usually `http://localhost:5173`).

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx             # Navigation and theme toggle
│   ├── Hero.jsx               # Landing section with CTA buttons
│   ├── ProcessTimeline.jsx    # Vertical timeline of election steps
│   ├── ElectionTypes.jsx      # Expandable cards and comparison table
│   ├── HowEVMWorks.jsx        # EVM/VVPAT interactive simulator
│   ├── ImportanceOfVoting.jsx # Educational content & quotes
│   ├── InteractiveSection.jsx # Quiz, FAQs, and Myth vs. Fact
│   └── Footer.jsx             # Quick links and official resources (NVSP)
├── App.jsx                    # Main application container
├── index.css                  # Global styles, variables, and utility classes
└── main.jsx                   # React entry point
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 Disclaimer
This is an educational project and is **not** an official government website. For official election information and voter registration, please visit the [Election Commission of India (ECI)](https://eci.gov.in/) and the [National Voter's Service Portal (NVSP)](https://voters.eci.gov.in/).

---
*Built with ❤️ for democracy.*
