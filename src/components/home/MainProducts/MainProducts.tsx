import styles from "./MainProducts.module.scss";
import React from "react";
import Image from "next/image";
import { getProducts } from "app/service/products";

interface Props extends React.PropsWithChildren { }

interface IMainProducts extends React.FC<Props> {
  Title: React.FC<React.PropsWithChildren>;
}

export const MainProducts: IMainProducts = async ({ children
}) => {

  const products = await getProducts()
  return (
    <section className={styles.MainProducts}>
      {children}
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={product.image} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
  )
};

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3>{children}</h3>
)

MainProducts.Title = Title