interface ErrorPageProps {
  reset: () => void;
  error: Error;
}

interface Product {
  id: string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Array<{
    admin_graphql_api_id: string;
    price: string;
    inventory_quantity: number;
  }>;
  options: Array<{}>;
  images: Array<{ src: string }>;
  image: {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
};

type CollectionType = {
  id: number;
  title: string;
  handle: string;
};

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
};
