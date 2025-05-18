import DynamicHero from './DynamicHero';
import DynamicInfo from './DynamicInfo';
// ...import other dynamic components

const ComponentMap = {
  'blocks.hero-section': DynamicHero,
  'blocks.info-block': DynamicInfo,
  // ...add more mappings
};

interface ComponentData {
    __component: string;
    [key: string]: any;
  }

interface ComponentRendererProps {
components: ComponentData[];
}

export default function ComponentRenderer({ components = [] }: ComponentRendererProps) {
return components.map((c, i) => {
    const Component = ComponentMap[c.__component as keyof typeof ComponentMap];
    if (!Component) return null;
    return <Component key={i} {...c} />;
});
}