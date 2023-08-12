import React from "react";

import style from "./Modal.module.css";

type Props = {};

const Modal = (props: Props) => {
  return (
    <div id="modal">
      <div className={style.fade}></div>
      <div className={style.modal}>
        <h2>Texto modal</h2>
      </div>
    </div>
  );
};

export default Modal;
