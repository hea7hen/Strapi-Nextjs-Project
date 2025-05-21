import qs from "qs";

export async function fetchThemeConfig(tenant: string) {
     // Keep this for debugging
     console.log("Fetching theme config for tenant:", tenant);
    const baseUrl = process.env.STRAPI_URL;
    if (!baseUrl) {
        console.error("STRAPI_URL environment variable is not set.");
        return {}; // Or throw an error
    }

    const path = "/api/theme-configs";

    // Use qs to build the query string
    const query = qs.stringify(
        {
            filters: {
                tenant: {
                    $eq: tenant
                }
            }
            // Removed populate: 'deep' for testing
        }
    );

    const url = `${baseUrl}${path}?${query}`;

    const res = await fetch(
      url,
      { cache: 'no-store' } // or 'force-cache' for ISR/SSG
    );

    if (!res.ok) {
        console.error(`Failed to fetch theme config for tenant ${tenant}: ${res.status} ${res.statusText}`);
        return {};
    }

    const data = await res.json();
    if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn(`No theme config found for tenant: ${tenant}`);
        return {tenant};
    }

    // Return the first theme config entry's attributes (no header expectation)
    return data.data[0].attributes || {};
}