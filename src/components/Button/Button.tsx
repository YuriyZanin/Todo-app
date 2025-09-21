import { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ title, active, onClick }) => (
  <button
    className={active ? styles.ButtonActive : styles.Button}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
