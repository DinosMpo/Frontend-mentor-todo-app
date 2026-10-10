import React from "react";
import styles from "./TodoOptions.module.css";

export default function TodoOptions({
  activeCategorie,
  setActiveCategorie,
  clearCompleted,
  itemsLeft,
}) {
  return (
    <div id={styles["todo-options-container"]}>
      <div id={styles["todo-options"]}>
        <div id={styles["todo-items-left-wrapper"]}>{itemsLeft} items left</div>
        <div id={styles["todo-options-wrapper"]}>
          <div
            id={activeCategorie == "all" ? `${styles["active-all"]}` : ""}
            onClick={() => setActiveCategorie("all")}
          >
            All
          </div>
          <div
            id={activeCategorie == "active" ? `${styles["active-active"]}` : ""}
            onClick={() => setActiveCategorie("active")}
          >
            Active
          </div>
          <div
            id={
              activeCategorie == "completed"
                ? `${styles["active-completed"]}`
                : ""
            }
            onClick={() => setActiveCategorie("completed")}
          >
            Completed
          </div>
        </div>

        <div id={styles["todo-clear-wrapper"]} onClick={() => clearCompleted()}>
          Clear Comleted
        </div>
      </div>
    </div>
  );
}
