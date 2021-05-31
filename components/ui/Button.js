import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ link, children, handleClick }) => {
  return link ? (
    <Link href={link}>
      <a className={styles.btn}>{children}</a>
    </Link>
  ) : (
    <button className={styles.btn} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
