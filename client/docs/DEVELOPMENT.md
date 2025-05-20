# Development Documentation

## Table of Contents
1. [Adding New Components](#adding-new-components)
2. [Client-Specific Themes](#client-specific-themes)
3. [Content Editor Guidelines](#content-editor-guidelines)

## Adding New Components

### Component Structure
Components should be placed in the `src/components` directory following this structure:
```
src/components/
├── common/           # Shared components
├── layout/           # Layout components
└── [feature]/        # Feature-specific components
```

### Creating a New Component
1. Create a new directory for your component if it's feature-specific
2. Create the component file with the following structure:

```typescript
// src/components/example/ExampleComponent.tsx
import React from 'react';
import styles from './ExampleComponent.module.css';

interface ExampleComponentProps {
  // Define your props here
  title: string;
  description?: string;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
```

### Best Practices
- Use TypeScript for all components
- Implement proper prop typing
- Use CSS Modules for styling
- Follow atomic design principles
- Include proper documentation
- Write unit tests for complex components

## Client-Specific Themes

### Theme Structure
Themes are managed through Tailwind CSS and are located in:
```
src/styles/
└── themes/
    ├── default.ts
    └── [client-name].ts
```

### Creating a New Theme
1. Create a new theme file in the themes directory
2. Extend the base theme configuration:

```typescript
// src/styles/themes/custom-theme.ts
import { ThemeConfig } from '../types';

const customTheme: ThemeConfig = {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
    // ... other color definitions
  },
  typography: {
    // ... typography settings
  },
  // ... other theme properties
};

export default customTheme;
```

### Applying Themes
1. Import the theme in your `_app.tsx`
2. Use the ThemeProvider component
3. Access theme values using the `useTheme` hook

## Content Editor Guidelines

### Strapi Content Management

#### Creating New Content Types
1. Access the Strapi admin panel
2. Navigate to Content-Type Builder
3. Create new collection types or single types
4. Define fields and relationships

#### Content Structure Guidelines
- Use clear, descriptive names for content types
- Implement proper field validation
- Set up appropriate permissions
- Use media library for assets
- Implement proper SEO fields

### API Integration

#### Fetching Content
```typescript
// Example of fetching content from Strapi
const fetchContent = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/content-type`);
  const data = await response.json();
  return data;
};
```

#### Best Practices
- Use environment variables for API endpoints
- Implement proper error handling
- Cache responses when appropriate
- Use TypeScript interfaces for content types

### Content Editing Workflow
1. Create content in Strapi admin
2. Preview changes in development environment
3. Publish when ready
4. Verify on production

## Additional Resources

### Useful Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

### Environment Setup
Required environment variables:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_API_URL=http://localhost:1337/api
```

### Support
For additional support or questions, please contact the development team or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) 