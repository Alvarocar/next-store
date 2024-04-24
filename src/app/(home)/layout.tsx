import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import styles from './Home.module.scss';


export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.Home}>
      <Hero>
        <h1>Future World</h1>
        <h2>Empowering Your Tomorrow, Today!</h2>
      </Hero>
      <Description>
        <h3> una descripci&oacute;n </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ullam, nesciunt molestiae. Adipisci, voluptas! Possimus
          velit illum dignissimos et placeat? Illo quas tenetur
          quaerat ex voluptatem enim facilis corrupti ipsum rerum.
        </p>
      </Description>
      {children}
    </main>
  )
}