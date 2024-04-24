import Image from "next/image";
import styles from "./Description.module.scss";

export enum EDescriptionMode {
  HORIZONTAL = "Horizontal"
}

interface Props {
  children?: React.ReactNode,
  src?: string,
  mode?: EDescriptionMode
}

export const Description: React.FC<Props> = ({
  src = "/images/description.jpeg",
  mode = EDescriptionMode.HORIZONTAL,
  children
}) => {

  return (
    <article className={[styles.Description, styles[mode]].join(" ")}>
      <Image
        src={src}
        alt="description Image"
        width={500}
        height={300}
      />
      <section className={styles.Section}>
        {children}
      </section>
    </article>
  );
}