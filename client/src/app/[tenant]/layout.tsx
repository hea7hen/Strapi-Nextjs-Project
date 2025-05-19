import { ThemeProvider } from '@/lib/ThemeProvider';
import { fetchThemeConfig } from '@/lib/fetchThemeConfig';
import { ReactNode } from 'react';

export default async function Layout({ children, params }: { children: ReactNode, params: { tenant: string } }) {
  const resolvedParams = await params;
  const config = await fetchThemeConfig(resolvedParams.tenant);
  return <ThemeProvider config={config}>{children}</ThemeProvider>;
}