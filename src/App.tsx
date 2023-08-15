import React, { useState } from "react";

//Interfaces
import { ITask } from "./interfaces/ITask";

import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

//Style
import styles from "./App.module.css";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleTask = (id: number) => {
    setTaskList(
      taskList.filter((tasks) => {
        return tasks.id !== id;
      })
    );
  };

  const toggleModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask) => {
    toggleModal(true);
    setTaskToUpdate(task);
    console.log(task);
  };

  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskToUpdate}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
