import qs from "qs";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { fetchAPI } from "@/utils/fetch-api";
import type { GlobalSettings } from "@/types";

const BASE_URL = getStrapiURL();

const homePageQuery = qs.stringify(
    {
        populate: {
            blocks: {
            on: {
                "blocks.hero-section": {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                  cta: true,
                },
                },
                "blocks.info-block": {
                populate: {
                    image: {
                    fields: ["url", "alternativeText"],
                    },
                    cta: true,
                },
                },
            },
            },
        },
    },
);

export async function getHomePage(tenant?: string) {
  const path = "/api/home-pages";
  const BASE_URL = getStrapiURL();
  const query = tenant
    ? homePageQuery + `&filters[tenant][$eq]=${tenant}`
    : homePageQuery;
  const url = new URL(path, BASE_URL);
  url.search = query ? `?${query}` : "";
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getGlobalSettings(tenant?: string): Promise<GlobalSettings> {
  const path = "/api/globals";
  const url = new URL(path, BASE_URL);
  
  // Add tenant filter to the query
  const query = qs.stringify({
    populate: {
      header: {
        populate: {
          logo: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          navigation: true, 
          cta: true,
        },
      },
    },
    filters: {
      tenant: {
        $eq: tenant
      }
    }
  }, {
    encodeValuesOnly: true // This ensures proper encoding of the filter values
  });
  
  url.search = query;
  console.log("Global Settings URL:", url.href);
  console.log("Looking for tenant:", tenant);
  
  const response = await fetchAPI<GlobalSettings['data']>(url.href, { method: "GET" });
  console.log("Global Settings Raw Response:", JSON.stringify(response, null, 2));
  
  // Verify the tenant filter worked
  if (response.data) {
    const filteredData = response.data.filter(item => item.tenant === tenant);
    console.log("Filtered data for tenant:", tenant, JSON.stringify(filteredData, null, 2));
    return { data: filteredData };
  }
  
  // If no data found, return empty array
  return { data: [] };
}
  // const response = await getGlobalSettings();
  // console.log("GlobalSettings response:", response);