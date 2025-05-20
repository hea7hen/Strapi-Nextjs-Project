import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

interface TenantPageProps {
  params: { tenant: string };
}

async function loader(params: { tenant: string }) {
  const resolvedParams = await params;
  const data = await getHomePage(resolvedParams.tenant);
  if (!data || !Array.isArray(data.data) || !data.data.length) notFound();
  return data.data[0];
}

export default async function TenantHomePage({ params }: TenantPageProps) {
  const data = await loader(params);
  const blocks = data?.blocks || [];
  console.log(data);
  return <BlockRenderer blocks={blocks} />;
}