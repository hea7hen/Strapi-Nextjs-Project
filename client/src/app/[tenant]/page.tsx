import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

type HomePageData = {
  data: Array<{ tenant: string; blocks?: unknown }>;
};

async function loader(tenant: string) {
  const data = await getHomePage(tenant) as HomePageData;
  if (!data || !data.data || !data.data.length) notFound();
  // Find the home page for the current tenant
  const page = data.data.find((entry) => entry.tenant === tenant);
  if (!page) notFound();
  return page;
}

export default async function HomeRoute({ params }: { params: { tenant: string } }) {
  const data = await loader(params.tenant);
  console.log('PAGE TENANT: ')
  const blocks = Array.isArray(data?.blocks) ? data.blocks : [];
  return <BlockRenderer blocks={blocks} />;
}