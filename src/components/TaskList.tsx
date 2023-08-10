import React from "react";

//Interfaces
import { ITask } from "../interfaces/ITask";

//CSS
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITask[];
};

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          return (
            <div key={task.id}>
              <div>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div>
                <i className="bi bi-pencil"></i>
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })
      ) : (
        <p>Não há tarefas</p>
      )}
    </>
  );
};

export default TaskList;
