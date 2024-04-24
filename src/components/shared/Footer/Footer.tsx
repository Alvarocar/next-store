import styles from './Footer.module.scss';
interface Props {
  children?: React.ReactNode
}

export const Footer: React.FC<Props> = ({ children
}) => (
  <footer>
    {children}
  </footer>
);