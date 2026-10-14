import React from "react";
import TodoOptionsFilters from "../TodoOptionsFilters/TodoOptionsFilters";
import styles from "./TodoOptions.module.css";

export default function TodoOptions({
  activeCategorie,
  setActiveCategorie,
  clearCompleted,
  itemsLeft,
  activeTheme,
}) {
  return (
    <div
      id={styles["todo-options-container"]}
      className={`${activeTheme == "light" ? styles["todo-options-container-light"] : styles["todo-options-container-dark"]}`}
    >
      <div id={styles["todo-options"]}>
        <div id={styles["todo-items-left-wrapper"]}>{itemsLeft} items left</div>

        <TodoOptionsFilters
          activeCategorie={activeCategorie}
          setActiveCategorie={setActiveCategorie}
          design={"desktop"}
          activeTheme={activeTheme}
        />

        <div id={styles["todo-clear-wrapper"]} onClick={() => clearCompleted()}>
          Clear Completed
        </div>
      </div>
    </div>
  );
}
