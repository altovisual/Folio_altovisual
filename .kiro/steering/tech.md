# Technology Stack

## Framework & Runtime
- **Next.js 14.2.16**: React framework with App Router
- **React 18**: UI library with TypeScript support
- **TypeScript 5**: Static type checking
- **Node.js**: Runtime environment

## Styling & UI
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **next-themes**: Dark/light theme management
- **CSS Variables**: Custom theming with HSL color system

## Key Libraries
- **React Hook Form + Zod**: Form handling and validation
- **Class Variance Authority**: Component variant management
- **Tailwind Merge + clsx**: Conditional CSS class handling
- **Geist Font**: Typography
- **JetBrains Mono**: Monospace font for terminal aesthetic

## Development Tools
- **ESLint**: Code linting (disabled during builds)
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## Build Configuration
- **Strict Mode**: Enabled for development
- **Image Optimization**: Disabled (unoptimized: true)
- **TypeScript**: Build errors ignored for deployment
- **ESLint**: Ignored during builds

## Terminal Features
- **Command Autocomplete**: Tab completion and arrow key navigation for available commands
- **Command History**: Up/down arrows to navigate through previous commands
- **Multiple Clear Commands**: Both `clear` and `cls` commands clear the terminal
- **Interactive Suggestions**: Real-time command suggestions with keyboard navigation
- **Internationalization**: English/Spanish language support with persistent storage
- **Language Toggle**: Visual toggle button and `lang` command to switch languages

## Available Terminal Commands
- `about` - Personal information
- `education` - Educational background
- `skills` - Technical skills
- `experience` - Work experience
- `projects` - Portfolio projects
- `certifications` - Certifications and achievements
- `contact` - Contact information
- `clear` / `cls` - Clear terminal screen
- `lang` - Switch language between English and Spanish
- `help` - Show available commands
- `scan` - Run security scan simulation

## Internationalization System
- **Languages**: English (default) and Spanish
- **Context Provider**: React Context for global language state
- **Persistent Storage**: Language preference saved in localStorage
- **Translation Files**: Centralized translations in `lib/translations.ts`
- **Dynamic Updates**: Real-time language switching without page reload

## Common Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package Management
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new dependency
```

## Path Aliases
- `@/*`: Root directory alias for clean imports
- Components, utils, UI, lib, and hooks have dedicated aliases via components.json