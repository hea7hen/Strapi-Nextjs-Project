import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader(){
  const data = await getHomePage();
  if (!data || !data.data || !data.data.length) notFound();
  return data.data[0]; // Return the first home page entry object
}
export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log(data);
  return (
    <BlockRenderer blocks={blocks} />
  
  );
}
