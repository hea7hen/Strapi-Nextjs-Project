import { ReactNode } from "react";
import { fetchThemeConfig } from "@/lib/fetchThemeConfig";
import { Header } from "@/components/layout/Header";
import { getGlobalSettings } from "@/data/loaders";

export default async function TenantLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { tenant: string };
}) {
  const tenantId = params.tenant;
  console.log("TenantLayout - Using tenant ID:", tenantId);
  
  const config = await fetchThemeConfig(tenantId);
  console.log("TenantLayout - Tenant ID from config:", config.tenant);
  
  const globalSettings = await getGlobalSettings(tenantId);
  console.log("TenantLayout - Global Settings Response:", JSON.stringify(globalSettings, null, 2));
  
  // Get the first matching tenant's header data
  const header = globalSettings?.data?.find(item => item.tenant === tenantId)?.header || null;
  console.log("TenantLayout - Header Data being passed to Header component:", JSON.stringify(header, null, 2));
  
  return (
    <>
      {header && <Header data={header} />}
      {children}
    </>
  );
}