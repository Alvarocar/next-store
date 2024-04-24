import { ProductView } from "app/components/product/ProductView/ProductView"
import { getProductById } from "app/service/products"
import { redirect } from "next/navigation"

interface Props {
  searchParams: {
    id: string
  }
}

export async function generateMetadata({ searchParams }: Props) {
  const id = searchParams.id
  const products = await getProductById(id)
  const product = products[0]

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}


export default async function ProductPage(props: Props) {
  const id = props.searchParams.id
  const products = await getProductById(id)
  const [product = null] = products

  if (!product) {
    redirect("/")
  }

  return <ProductView product={product} />
}