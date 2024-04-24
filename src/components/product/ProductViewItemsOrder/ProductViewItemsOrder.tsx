"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';
import styles from "./ProductViewItemsOrder.module.scss";
import { useShoppingCart } from "app/app/hooks/useShoppingCart";


interface ProductViewItemsOrderProps {
  product: ProductType,
}

export const ProductViewItemsOrder = ({ product }: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      id: product.id,
      price: Number(product.price),
      quantity: product.quantity,
      title: product.title,
    })
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === product.quantity) return;
    setCounter(counter + 1);
  }

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewItemsOrder__form}
      >
        <button
          className={styles.ProductViewItemsOrder__submit}
          type="submit"
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  )
};