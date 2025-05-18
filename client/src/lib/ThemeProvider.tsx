'use client';
import { ReactNode, useEffect } from 'react';

export function ThemeProvider({ config, children }: { config: any, children: ReactNode }) {
  useEffect(() => {
    if (config) {
      document.documentElement.style.setProperty('--primary', config.primary);
      document.documentElement.style.setProperty('--secondary', config.secondary);
      // Add more as needed (fonts, etc.)
    }
  }, [config]);

  return <>{children}</>;
}