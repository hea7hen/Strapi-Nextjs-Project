# Multi-Tenant Next.js Application

A modern web application built with Next.js that supports multiple tenants, each with their own unique branding and content.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- PostgreSQL (for Strapi backend)

## Project Structure

```
project/
├── client/                # Next.js frontend
│   ├── src/
│   │   ├── app/          # Next.js app directory
│   │   ├── components/   # React components
│   │   ├── data/        # Data fetching and loaders
│   │   ├── lib/         # Utility functions
│   │   ├── sass/        # SCSS styles
│   │   └── types.ts     # TypeScript type definitions
│   └── package.json     # Frontend dependencies
│
└── server/               # Strapi backend
    ├── config/          # Strapi configuration
    ├── src/            # Strapi source files
    └── package.json    # Backend dependencies
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Frontend Setup (client)**
   ```bash
   cd client
   npm install
   ```

3. **Backend Setup (server)**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**

   Frontend (client/.env.local):
   ```
   NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1338
   ```

   Backend (server/.env):
   ```
   HOST=0.0.0.0
   PORT=1338
   APP_KEYS=your-app-keys
   API_TOKEN_SALT=your-token-salt
   ADMIN_JWT_SECRET=your-jwt-secret
   TRANSFER_TOKEN_SALT=your-transfer-token-salt
   JWT_SECRET=your-jwt-secret
   DATABASE_CLIENT=postgres
   DATABASE_HOST=127.0.0.1
   DATABASE_PORT=5432
   DATABASE_NAME=strapi
   DATABASE_USERNAME=strapi
   DATABASE_PASSWORD=strapi
   ```

5. **Start the Development Servers**

   Start the backend (Strapi):
   ```bash
   cd server
   npm run develop
   ```
   The Strapi admin panel will be available at `http://localhost:1338/admin`
   
![Screenshot 2025-05-20 145034](https://github.com/user-attachments/assets/111e24cb-a747-4f94-8115-fabff0f5a125)

   Start the frontend (Next.js):
   ```bash
   cd client
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

![Screenshot 2025-05-19 033203](https://github.com/user-attachments/assets/d93a4bd9-7691-49b8-9311-e55a72d759e3)

   

## Available Scripts

### Frontend (client)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Backend (server)
- `npm run develop` - Start development server
- `npm run start` - Start production server
- `npm run build` - Build for production
- `npm run strapi` - Run Strapi CLI commands

## Features

- **Multi-tenant Support**: Each tenant has their own:
  - Custom header/navigation
  - Branding and styling
  - Content and pages

- **Modern Tech Stack**:
  - Next.js 14 (Frontend)
  - Strapi CMS (Backend)
  - TypeScript
  - SCSS for styling
  - PostgreSQL database

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

1. **Backend Deployment**
   ```bash
   cd server
   npm run build
   npm run start
   ```

2. **Frontend Deployment**
   ```bash
   cd client
   npm run build
   npm run start
   ```

## Troubleshooting

Common issues and solutions:

1. **Missing Environment Variables**
   - Ensure both frontend and backend `.env` files are properly configured
   - Check for correct API URLs and database credentials

2. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check database credentials
   - Ensure database exists

3. **Build Errors**
   - Clear `.next` directory in client
   - Clear `build` directory in server
   - Run `npm install` again in both directories
   - Check TypeScript errors

4. **Styling Issues**
   - Verify SCSS compilation
   - Check for conflicting styles
   - Ensure proper class names

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT

## Support

For support, contact me on abhisheknair616@gmail.com
