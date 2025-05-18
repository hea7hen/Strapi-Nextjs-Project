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
export async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;
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
    url.search = globalSettingQuery;
    return fetchAPI(url.href, { method: "GET" });
  }