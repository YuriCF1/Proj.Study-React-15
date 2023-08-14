import React from "react";

import style from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <div id="modal">
      <div className={style.fade}></div>
      <div className={style.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
