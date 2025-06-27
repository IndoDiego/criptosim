# Cryptosim - The Learning Ledger

A React-based cryptocurrency learning platform that provides interactive lessons and simulations for understanding blockchain and cryptocurrency concepts.

## Features

- Interactive cryptocurrency lessons
- Block building simulations
- Wallet management drills
- Investor pitch scenarios
- Island dilemma challenges
- Progress tracking and checkpoints

## Tech Stack

- React 19
- TypeScript
- Vite
- Google Gemini AI Integration

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IndoDiego/criptosim.git
cd criptosim
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```
GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages. The site will be available at: https://indodiego.github.io/criptosim

#### Manual Deployment

If you want to deploy manually:

```bash
npm run deploy
```

#### Automatic Deployment

The project uses GitHub Actions for automatic deployment. Every push to the `main` branch will trigger a build and deployment to GitHub Pages.

## Project Structure

```
cryptosim_-the-learning-ledger/
├── components/          # React components
│   ├── checkpoint/     # Checkpoint components
│   ├── common/         # Common UI components
│   ├── landing/        # Landing page components
│   ├── layout/         # Layout components
│   ├── lessons/        # Lesson components
│   └── ui/             # UI components
├── context/            # React context
├── services/           # API services
├── types.ts           # TypeScript types
├── constants.ts       # Constants
└── App.tsx            # Main app component
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to your branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Live Demo

Visit the live application: https://indodiego.github.io/criptosim

<!-- Trigger auto deploy with Actions -->
