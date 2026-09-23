import Image from "next/image";
import styles from "./Todo.module.css";

export default function Todo({ index, item, setTodoItems, todoItems }) {
  return (
    <div id={styles["todo-container"]}>
      <div
        className={
          item.checked
            ? `${styles["todo-active-checked"]}`
            : `${styles["todo-checked"]}`
        }
        onClick={() => {
          let oldItems = [...todoItems];
          oldItems[index].checked = !oldItems[index].checked;
          console.log(!oldItems[index].checked);
          setTodoItems(oldItems);
        }}
      >
        {item.checked ? (
          <Image alt="checked" src="./icon-check.svg" width={11} height={9} />
        ) : (
          ""
        )}
      </div>
      <div
        className={`${styles["todo-title"]} ${item.checked ? styles["todo-completed"] : ""}`}
      >
        {item.value}
      </div>
    </div>
  );
}
