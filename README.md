# 🇮🇳 IndiaVotes — Election Awareness Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-IndiaVotes-orange)](https://indiavotes.ankurrai.in/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)](https://vite.dev/)
[![Firebase Hosting](https://img.shields.io/badge/Hosted%20on-Firebase-ffca28?logo=firebase)](https://firebase.google.com/docs/hosting)

IndiaVotes is an educational web application that helps people understand India's electoral process, voting rights, and the importance of participating in democracy. It presents civic information through interactive learning experiences and a responsive interface.

**Live website:** https://indiavotes.ankurrai.in/  
**Source code:** https://github.com/Ankur-akr/election_process

> IndiaVotes is an independent educational project, not an official government website.

## Features

- **EVM and VVPAT simulator** — explore a simplified demonstration of the electronic voting process.
- **Election process timeline** — follow the major stages involved in conducting an election.
- **Election types** — learn about different elections in India.
- **Quizzes, FAQs, and myth-versus-fact content** — reinforce election awareness through interactive learning.
- **Voter pledge** — encourage informed and responsible participation.
- **Responsive interface** — use the application on desktop and mobile screens.
- **Firebase integration** — uses the Firebase web SDK and Cloud Firestore.

## Tech stack

- **Frontend:** React 19
- **Build tool:** Vite 8
- **Styling:** CSS
- **Icons:** Lucide React
- **Backend service:** Firebase / Cloud Firestore
- **Hosting and CI/CD:** Firebase Hosting and GitHub Actions
- **Tests:** Vitest and React Testing Library

## Run locally

### Prerequisites

- Node.js 22 or a version supported by the project's Vite dependencies
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Ankur-akr/election_process.git
cd election_process
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure Firebase

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Fill in the Firebase web app values for your own environment:

```dotenv
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Vite exposes variables prefixed with `VITE_` to client-side code. Do not put private service-account credentials or other server secrets in these variables. Firebase web API keys are identifiers, not a replacement for correctly configured Firebase Security Rules.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest test suite |
| `npm run coverage` | Run tests with coverage |

## Project structure

```text
public/                 Static assets, including the IndiaVotes favicon
src/
├── components/         React UI components
├── firebase/           Firebase client configuration
├── __tests__/           Component tests
├── assets/              Imported application assets
├── App.jsx              Main application component
├── App.css              Application styles
├── index.css            Global styles
├── main.jsx             React entry point
└── setupTests.js        Test setup
index.html               Vite HTML entry point
firebase.json            Firebase Hosting configuration
.github/workflows/       Firebase preview and deployment workflows
```

## Deployment

The repository is configured for Firebase Hosting. The GitHub Actions workflows build the Vite app and deploy it to Firebase Hosting. The production hosting directory is `dist`, as configured in `firebase.json`.

- Pull requests from branches in this repository use the Firebase preview workflow.
- Pushes to `main` trigger the production deployment workflow.
- The deployment workflow requires the `FIREBASE_SERVICE_ACCOUNT_INDIAVOTES` GitHub Actions secret to be configured.

## Screenshots

![IndiaVotes homepage](Screenshot%202026-05-29%20000813.png)

![EVM and VVPAT simulator](Screenshot%202026-05-29%20000903.png)

## Official resources

For authoritative election information and voter services, visit:

- [Election Commission of India](https://eci.gov.in/)
- [Voters' Services Portal](https://voters.eci.gov.in/)

## Contributing

Suggestions, bug reports, and improvements are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ to support election awareness and informed participation.
