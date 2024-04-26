import styles from './Hero.module.scss';

interface IHero extends ReactFC {
  Title: ReactFC
  Legend: ReactFC
}

export const Hero: IHero = ({ children
}) => (
  <section className={styles.Hero} >
    {children}
  </section>
);

const Title: ReactFC = ({ children }) => (
  <h1 className={styles.Hero__title}>{children}</h1>
)

const Legend: ReactFC = ({ children }) => (
  <h2 className={styles.Hero__legend}>{children}</h2>
)

Hero.Title = Title
Hero.Legend = Legend