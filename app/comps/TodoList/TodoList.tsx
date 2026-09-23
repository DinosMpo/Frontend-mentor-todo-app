"use client";

import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

export default function TodoList({ todoItems, setTodoItems }) {
  let itemsLeft = 0;
  const todoItemsList = todoItems.map((item, key) => {
    if (!item.checked) itemsLeft++;
    return (
      <Todo
        key={key}
        index={key}
        item={item}
        setTodoItems={setTodoItems}
        todoItems={todoItems}
      />
    );
  });

  return (
    <div id={styles["todo-list-container"]}>
      <div id={styles["todo-list-wrapper"]}>{todoItemsList.reverse()}</div>

      <div id={styles["todo-options"]}>
        <div>{itemsLeft} items left</div>
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
