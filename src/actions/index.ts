"use server";

import { graphQLShopify } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formObject = Object.fromEntries(formData);
  delete formObject["password_confirmation"];
  const variables = {
    input: {
      ...formObject,
      phone: `+57${formObject.phone}`,
    },
  };
  const { customerCreate } = await graphQLShopify.request<any>(
    createUserMutation,
    variables
  );
  const { customerUserErrors, customer } = customerCreate;

  if (customerUserErrors.length === 0) {
    await createAccessToken(
      formObject.email as string,
      formObject.password as string
    );
  }
  redirect("/store");
};

export const handleLoginUser = async (formData: FormData) => {
  const formObject = Object.fromEntries(formData);
  const token = await createAccessToken(
    formObject.email as string,
    formObject.password as string
  );
  console.log(token);
  if (token) {
    redirect("/store");
  }
};
