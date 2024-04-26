import { graphQLShopify } from "app/graphql";
import { customerName } from "app/graphql/queries/customerName";
import { cookies } from "next/headers";

export const validateAccessToken = async (): Promise<
  { email: string; firstName: string } | undefined
> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (accessToken == null) return;
  try {
    const { customer } = await graphQLShopify.request<any>(customerName, {
      customerAccessToken: accessToken,
    });

    return customer satisfies { email: string; firstName: string };
  } catch (e) {
    console.error(e);
    return;
  }
};
