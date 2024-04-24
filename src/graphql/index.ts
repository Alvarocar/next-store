import { GraphQLClient } from "graphql-request";
import { env } from "app/config/env";

export const graphQLShopify = new GraphQLClient(env.SHOPIFY_GRAPHQL_ENDPOINT, {
  headers: {
    "Shopify-Storefront-Private-Token": env.SHOPIFY_STOREFRONT_TOKEN,
  },
});
