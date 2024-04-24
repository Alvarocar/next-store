import styles from './Hero.module.scss';

interface Props {
  children?: React.ReactNode
}

export const Hero: React.FC<Props> = ({ children
}) => (
  <section className={styles.Hero} >
    {children}
  </section>
);