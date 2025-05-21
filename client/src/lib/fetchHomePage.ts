export async function fetchHomePage(tenant: string) {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/home-pages?filters[tenant][$eq]=${tenant}&populate=deep`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    console.log("HOME PAGE!!!!",data);
    if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        return {};
    }
    // Return the first home page entry object (no header expectation)
    return data.data[0].attributes || {};
  }