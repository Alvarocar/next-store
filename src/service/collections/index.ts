import { api, token } from "app/config/api";

export const getCollections = async () => {
  try {
    const collections = await fetch(api.collections.all, {
      headers: {
        "X-Shopify-Access-Token": token.shopify_key,
      },
    });

    const { smart_collections } = await collections.json();
    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      };
    });
    return transformedCollections as Array<any>;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const getProductsByCollectionId = async (id: string | number) => {
  try {
    const response = await fetch(api.collections.byId.products(id), {
      headers: {
        "X-Shopify-Access-Token": token.shopify_key,
      },
    });
    const { products } = await response.json();
    return products as Array<any>;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
