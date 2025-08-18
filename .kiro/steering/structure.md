# Project Structure

## Root Directory
```
├── app/                    # Next.js App Router
├── components/             # React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global CSS files
└── .kiro/                  # Kiro configuration
```

## App Directory (Next.js App Router)
- `app/layout.tsx`: Root layout with theme provider and fonts
- `app/page.tsx`: Main page with boot sequence and terminal
- `app/globals.css`: Global styles and CSS variables

## Components Organization

### Main Components
- `terminal.tsx`: Interactive terminal interface with command handling
- `boot-sequence.tsx`: System boot animation
- `theme-provider.tsx`: Dark theme management
- `crt-toggle.tsx`: CRT effect toggle

### Specialized Components
- `ascii-*.tsx`: ASCII art and portrait components
- `image-ascii-logo.tsx`: Logo with ASCII styling
- `simple-ascii-logo.tsx`: Simplified ASCII logo

### Sections Directory
- Contains individual portfolio sections (about, education, skills, etc.)
- Each section is a separate component for modularity

### UI Directory
- Shadcn/ui components
- Reusable UI primitives following Radix UI patterns

## Hooks Directory
- `use-mobile.tsx`: Mobile device detection
- `use-toast.ts`: Toast notification management

## Lib Directory
- `utils.ts`: Utility functions (cn for className merging)

## Public Directory
- Static assets including placeholder images
- Background images and logos

## Configuration Files
- `components.json`: Shadcn/ui configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `next.config.js/mjs`: Next.js configuration

## Naming Conventions
- Components: PascalCase with descriptive names
- Files: kebab-case for multi-word components
- Hooks: camelCase starting with "use"
- Utilities: camelCase
- CSS classes: Tailwind utility classes with custom CSS variables

## Import Patterns
- Use `@/` alias for all internal imports
- Group imports: React, Next.js, then internal components
- Type imports use `type` keyword when possible