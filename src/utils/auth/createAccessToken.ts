import { graphQLShopify } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";
import { cookies } from "next/headers";

export const createAccessToken = async (
  email: string,
  password: string
): Promise<string | void> => {
  const cookiesStore = cookies();
  try {
    const { customerAccessTokenCreate } = await graphQLShopify.request<any>(
      customerAccessTokenCreateMutation,
      {
        email,
        password,
      }
    );
    const { accessToken, expiresAt } =
      customerAccessTokenCreate.customerAccessToken;

    if (accessToken) {
      cookiesStore.set("accessToken", accessToken, {
        path: "/",
        expires: new Date(expiresAt),
        httpOnly: true,
        sameSite: true,
      });
      return accessToken;
    }
  } catch (e) {
    console.error(e);
  }
};
