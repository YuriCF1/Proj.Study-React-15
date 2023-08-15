import React from "react";

import style from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    console.log("Clicado");
    const xClose = document.querySelector("#xClose");
    console.log(xClose);
    xClose!.parentElement!.parentElement!.parentElement!.classList.add("hide");
  };

  return (
    <div id="modal">
      <div className={style.fade}></div>
      <div className={style.modal}>
        <div className={style.headerModal}>
          <h2>Texto modal</h2>
          <i id="xClose" className="bi bi-x" onClick={closeModal}></i>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
