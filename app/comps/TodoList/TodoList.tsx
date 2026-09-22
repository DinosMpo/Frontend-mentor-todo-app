import React from "react";
import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const todoItems = [
    "Complete online Javascript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up grocereies",
    "Complete Todo App on Fronend Mentor",
  ];

  const todoItemsList = todoItems.map((item, key) => {
    return <Todo key={key} item={item} />;
  });

  return (
    <div id={styles["todo-list-container"]}>
      <div>{todoItemsList}</div>

      <div id={styles["todo-options"]}>
        <div>{todoItems.length} items left</div>
        <div id={styles["todo-options-wrapper"]}>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div>Clear Comleted</div>
      </div>
    </div>
  );
}
