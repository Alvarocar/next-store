import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getCollections, getProductsByCollectionId } from "app/service/collections";
import { getProducts } from "app/service/products";

interface CategoriesProps {
  params: {
    categories: string[],
  }
  searchParams?: string,
  collections: CollectionType[],
}


const getProductsByCategories = async (categories: string[], collections: CollectionType[]) => {
  if (categories.length === 0) return await getProducts()
  const findCollection = collections.find(colle => colle.handle === categories[0])
  if (findCollection == null) return await getProducts()
  return getProductsByCollectionId(findCollection.id)
}


export default async function Categories(props: CategoriesProps) {
  const { categories = [] } = props.params;
  const collections = await getCollections()
  const products = await getProductsByCategories(categories, collections)

  return (
    <ProductsWrapper products={products} />
  );
};