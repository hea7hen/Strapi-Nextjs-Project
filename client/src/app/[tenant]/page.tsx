import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

interface TenantPageProps {
  params: { tenant: string };
}

export default async function TenantHomePage({ params }: TenantPageProps) {
  const tenant = params.tenant;
  const data = await getHomePage(tenant);
  if (!data || !data.data || !data.data.length) notFound();
  const homePage = data.data[0];
  const blocks = homePage.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}