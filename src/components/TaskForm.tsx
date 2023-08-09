import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import styles from "./TaskForm.module.css";

type Props = {
  btnText: string;
};

// interface Props {
//   btnText: string;
// }

//Interfaces
import { ITask } from "../interfaces/Task";

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(Number(e.target.value));
    }

    console.log(title);
    console.log(difficulty);
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title"></label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="difficulty"></label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
