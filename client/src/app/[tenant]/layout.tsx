import { ThemeProvider } from '@/lib/ThemeProvider';
import { fetchThemeConfig } from '@/lib/fetchThemeConfig';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { tenant: string } }) {
  const config = await fetchThemeConfig(params.tenant);
  return <ThemeProvider config={config}>{children}</ThemeProvider>;
}