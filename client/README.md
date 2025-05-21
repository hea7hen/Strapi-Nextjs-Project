# Multi-Tenant Next.js Application

A modern web application built with Next.js that supports multiple tenants, each with their own unique branding and content.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

## Project Structure

```
client/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── [tenant]/       # Tenant-specific routes
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   ├── data/              # Data fetching and loaders
│   ├── lib/               # Utility functions
│   ├── sass/              # SCSS styles
│   └── types.ts           # TypeScript type definitions
├── public/                # Static assets
└── package.json          # Project dependencies
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1338
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Features

- **Multi-tenant Support**: Each tenant has their own:
  - Custom header/navigation
  - Branding and styling
  - Content and pages

- **Modern Tech Stack**:
  - Next.js 14
  - TypeScript
  - SCSS for styling
  - Strapi CMS integration

## Styling

The project uses SCSS for styling with a modular approach:
- Base styles in `src/sass/base/`
- Component styles in `src/sass/components/`
- Page-specific styles in `src/sass/pages/`

## Tenant Configuration

Each tenant requires:
1. A unique tenant ID
2. Global settings in Strapi CMS
3. Theme configuration
4. Content and pages

## Development Guidelines

1. **Component Structure**
   - Use TypeScript for type safety
   - Follow the established component hierarchy
   - Keep components modular and reusable

2. **Styling**
   - Use SCSS modules for component-specific styles
   - Follow BEM naming convention
   - Maintain responsive design

3. **Data Fetching**
   - Use the provided data loaders
   - Implement proper error handling
   - Cache data when appropriate

## Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## Troubleshooting

Common issues and solutions:

1. **Missing Environment Variables**
   - Ensure `.env.local` is properly configured
   - Check for correct API URLs

2. **Build Errors**
   - Clear `.next` directory
   - Run `npm install` again
   - Check TypeScript errors

3. **Styling Issues**
   - Verify SCSS compilation
   - Check for conflicting styles
   - Ensure proper class names

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

[Your License Here]

## Support

For support, please [contact details or support process]
