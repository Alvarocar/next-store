import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import Link from "next/link";
import React from "react";
import styles from './Header.module.scss'
import { ShoppingCart } from "../ShoppingCart";

interface Props {
  children?: React.ReactNode
}

export const Header: React.FC<Props> = async ({ children
}) => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <ul className={styles.Header__list}>
        {React.Children.map(children, child => {
          return <li>{child}</li>
        })}
      </ul>
      <div className={styles.Header__user}>
        {customer ? <span> Hola {customer.firstName}</span> : <Link href="/login">Log in</Link>}
        <ShoppingCart />
      </div>
    </header>
  )
};