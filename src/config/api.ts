import { env } from "./env";

export const api = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    byId: (id: string) => `${api.products.all}?ids=${id}`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    byId: {
      products: (id: string | number) =>
        `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
    },
  },
};

export const token = {
  shopify_key: env.SHOPIFY_API_KEY,
};
