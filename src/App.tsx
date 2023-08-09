import React from "react";

//Interfaces
import { ITask } from "./interfaces/Task";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Style
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
