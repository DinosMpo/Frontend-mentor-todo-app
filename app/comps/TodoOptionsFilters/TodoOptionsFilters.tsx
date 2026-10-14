import React from "react";
import styles from "./TodoOptionsFilters.module.css";

export default function TodoOptionsFilters({
  activeCategorie,
  setActiveCategorie,
  design,
  activeTheme,
}) {
  return design == "desktop" ? (
    <div id={styles["todo-options-filter-container"]}>
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
          activeCategorie == "completed" ? `${styles["active-completed"]}` : ""
        }
        onClick={() => setActiveCategorie("completed")}
      >
        Completed
      </div>
    </div>
  ) : (
    <div
      id={styles["todo-options-filter-mobile-container"]}
      className={`${activeTheme == "light" ? styles["todo-options-filter-mobile-container-light"] : styles["todo-options-filter-mobile-container-dark"]}`}
    >
      <div id={styles["todo-options-filter-mobile-wrapper"]}>
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
    </div>
  );
}
