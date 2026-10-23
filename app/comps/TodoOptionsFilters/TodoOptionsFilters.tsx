import { Dispatch, SetStateAction } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styles from "./TodoOptionsFilters.module.css";

type props = {
  activeCategorie: string;
  setActiveCategorie: Dispatch<SetStateAction<string>>;
  design: string;
};

export default function TodoOptionsFilters({
  activeCategorie,
  setActiveCategorie,
  design,
}: props) {
  const { theme, toggle } = useTheme();

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
      className={`${theme == "light" ? styles["todo-options-filter-mobile-container-light"] : styles["todo-options-filter-mobile-container-dark"]}`}
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
