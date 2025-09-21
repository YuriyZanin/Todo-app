import { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className={styles.Card}>{children}</div>;
};

export default Card;
