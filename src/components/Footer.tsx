import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const ano: number = new Date().getUTCFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo @{ano}</span>
      </p>
    </footer>
  );
};

export default Footer;
