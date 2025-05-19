export async function fetchThemeConfig(tenant: string) {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/theme-configs?filters[tenant][$eq]=${tenant}&populate=deep`,
      { cache: 'no-store' } // or 'force-cache' for ISR/SSG
    );

    // Check if the response was successful (status in 200s)
    if (!res.ok) {
        console.error(`Failed to fetch theme config for tenant ${tenant}: ${res.status} ${res.statusText}`);
        // Depending on desired behavior, you could return a default theme or throw an error
        // For now, returning an empty object, which will lead to default styling
        return {};
    }

    const data = await res.json();

    // Check if data.data exists, is an array, and has elements
    if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn(`No theme config found for tenant: ${tenant}`);
        return {}; // Return empty object if no data found
    }

    // If data exists and has elements, return the attributes of the first entry
    return data.data[0].attributes || {};
}