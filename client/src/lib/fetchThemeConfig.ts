import qs from "qs";

export async function fetchThemeConfig(tenant: string) {
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

    // ADD THIS LINE: Log the generated URL to the server terminal
    // console.log("Fetching theme config with URL (without populate):", url);

    const res = await fetch(
      url,
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
    // console.log("Theme config data received:", data); // Keep this for debugging
    // Check if data.data exists, is an array, and has elements
    if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
        console.warn(`No theme config found for tenant: ${tenant}`);
        return {}; // Return empty object if no data found
    }

    // If data exists and has elements, return the attributes of the first entry
    return data.data[0].attributes || {};
}