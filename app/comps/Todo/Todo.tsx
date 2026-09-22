import React from "react";
import styles from "./Todo.module.css";

export default function Todo({ item }) {
  return (
    <div id={styles["todo-container"]}>
      <div className={styles["todo-checked"]}></div>
      <div className={styles["todo-title"]}>{item}</div>
    </div>
  );
}
