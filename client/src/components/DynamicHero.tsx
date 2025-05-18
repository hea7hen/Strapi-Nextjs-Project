   // DynamicHero.tsx
   export default function DynamicHero(props: any) {
    return <section className="bg-primary text-white p-8">Hero Section: {JSON.stringify(props)}</section>;
  }