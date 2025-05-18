export async function fetchThemeConfig(tenant: string) {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/theme-configs?filters[tenant][$eq]=${tenant}&populate=deep`,
      { cache: 'no-store' } // or 'force-cache' for ISR/SSG
    );
    const data = await res.json();
    return data.data[0]?.attributes || {};
  }