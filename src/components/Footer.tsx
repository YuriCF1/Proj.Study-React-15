import React from "react";

const Footer = () => {
  const ano: number = new Date().getUTCFullYear();

  return (
    <footer>
      <p>
        <span>React + TS Todo @{ano}</span>
      </p>
    </footer>
  );
};

export default Footer;
