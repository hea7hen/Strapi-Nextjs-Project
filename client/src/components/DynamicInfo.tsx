   // DynamicInfo.tsx
   export default function DynamicInfo(props: any) {
    return <section className="bg-secondary text-black p-8">Info Section: {JSON.stringify(props)}</section>;
  }