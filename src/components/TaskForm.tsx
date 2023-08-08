import React from "react";

import styles from "./TaskForm.module.css";

type Props = {
  btnText: string;
};

// interface Props {
//   btnText: string;
// }

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title"></label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>
      <div>
        <label htmlFor="difficulty"></label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;