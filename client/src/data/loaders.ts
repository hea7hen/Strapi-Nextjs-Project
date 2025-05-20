import qs from "qs";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { fetchAPI } from "@/utils/fetch-api";

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
                    logo: {
                    populate: {
                        image: {
                        fields: ["url", "alternativeText"],
                        },
                    },
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

  // Add tenant filter if tenant is provided
  const query = tenant
    ? homePageQuery + `&filters[tenant][$eq]=${tenant}`
    : homePageQuery;

  const url = new URL(path, BASE_URL);
  url.search = query;
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
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
  });

  export async function getGlobalSettings() {
    const path = "/api/global";
    const url = new URL(path, BASE_URL);
    console.log("URL", url);
    console.log("URL END!!!!!!!!!!!!!!!!!!");
    url.search = globalSettingQuery;
    return fetchAPI(url.href, { method: "GET" });
  }
  const response = await getGlobalSettings();
  console.log("GlobalSettings response:", response);