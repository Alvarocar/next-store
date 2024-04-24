import { api, token } from "app/config/api";

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(api.products.all, {
      headers: {
        "X-Shopify-Access-Token": token.shopify_key,
      },
    });
    const { products } = await response.json();
    return products.map(transformeProduct);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getProductById = async (id: string): Promise<ProductType[]> => {
  try {
    const response = await fetch(api.products.byId(id), {
      headers: {
        "X-Shopify-Access-Token": token.shopify_key,
      },
    });
    const data = await response.json();
    return data.products.map(transformeProduct);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const transformeProduct = (product: Product): ProductType => ({
  id: product.id,
  gql_id: product.variants[0].admin_graphql_api_id,
  title: product.title,
  description: product.body_html,
  price: product.variants[0].price,
  image: product.images[0].src,
  quantity: product.variants[0].inventory_quantity,
  handle: product.handle,
  tags: product.tags,
});
