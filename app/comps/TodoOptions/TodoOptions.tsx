import { Dispatch, SetStateAction } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import TodoOptionsFilters from "../TodoOptionsFilters/TodoOptionsFilters";
import styles from "./TodoOptions.module.css";

type props = {
  activeCategorie: string;
  setActiveCategorie: React.Dispatch<SetStateAction<string>>;
  clearCompleted: () => void;
  itemsLeft: number;
};

export default function TodoOptions({
  activeCategorie,
  setActiveCategorie,
  clearCompleted,
  itemsLeft,
}: props) {
  const { theme, toggle } = useTheme();

  return (
    <div id={styles["todo-options-container"]}>
      <div id={styles["todo-options"]}>
        <div id={styles["todo-items-left-wrapper"]}>{itemsLeft} items left</div>

        <TodoOptionsFilters
          activeCategorie={activeCategorie}
          setActiveCategorie={setActiveCategorie}
          design={"desktop"}
        />

        <div id={styles["todo-clear-wrapper"]} onClick={() => clearCompleted()}>
          Clear Completed
        </div>
      </div>
    </div>
  );
}
