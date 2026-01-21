# Devon Nathan | Portfolio Engine

A high-performance, multi-identity portfolio built with NextJS. This site serves as a technical showcase of blockchain architecture, AI research, and full-stack engineering.

## 🚀 Technical Stack
- **Framework**: Next.js 16
- **Runtime**: React 19
- **Animations**: Framer Motion 12
- **Styling**: Tailwind CSS & Glassmorphism System
- **Language**: TypeScript (Strict Enum-driven architecture)
- **Icons**: React Icons (Hi, Md, Ai, Cg subsets)

## ✨ Key Features
- **Multi-Identity Engine**: Seamlessly switch between three primary personas:
  - **Architect**: Focuses on Blockchain & Systems Design.
  - **Neural**: Showcases AI Research & Autonomous Systems.
  - **Matrix**: Highlights Software Engineering & GameFi specialization.
- **Interactive Visualizations**:
  - `NeuralCanvas`: A dynamic neural network visualization.
  - `ArchitectureGraph`: Visualizing multi-chain ecosystems (Tezos, Etherlink, EVM).
  - `CyberTerminal`: A real-time system log of career accomplishments.
- **Performance Optimized**:
  - Memoized data transformations.
  - Centralized state management via `IdentityContext`.
  - Static generation for sub-second load times.

## 📁 Project Structure
```bash
├── components/        # Specialized React components (Graphs, Terminal)
├── context/           # Global state (Identity/Theme management)
├── data/              # Centralized configuration (The single source of truth)
├── pages/             # Route-based views (Projects, Resume, Skills)
├── styles/            # Global glassmorphism and theme variables
└── types.ts           # Shared TypeScript interfaces and Enums
```

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

## 📜 Standards
This project adheres to the `code_standards` skill, mandating:
- Explicit variable typing (no `any`).
- Enum-driven display labels and filtering logic.
- Total removal of unused imports and dead code.
- Centralized constants for shared configuration.