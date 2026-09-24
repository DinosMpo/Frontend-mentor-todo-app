"use client";

import { useState } from "react";
import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

export default function TodoList({ todoItems, setTodoItems }) {
  const [activeCategorie, setActiveCategorie] = useState("all");

  let itemsLeft = 0;
  let todoItemsList = [];

  if (activeCategorie == "all") {
    todoItemsList = todoItems.map((item, key) => {
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
  } else if (activeCategorie == "active") {
    todoItemsList = todoItems.map((item, key) => {
      if (!item.checked) {
        itemsLeft++;
        return (
          <Todo
            key={key}
            index={key}
            item={item}
            setTodoItems={setTodoItems}
            todoItems={todoItems}
          />
        );
      }
    });
  } else if (activeCategorie == "completed") {
    todoItemsList = todoItems.map((item, key) => {
      if (item.checked) {
        itemsLeft++;
        return (
          <Todo
            key={key}
            index={key}
            item={item}
            setTodoItems={setTodoItems}
            todoItems={todoItems}
          />
        );
      }
    });
  }

  const clearCompleted = () => {
    let oldTodoItems = [...todoItems];
    console.log("oldTodoItems");
    console.log(oldTodoItems);
    let newTodoItems: any[] = [];
    oldTodoItems.map((todo, key) => {
      // console.log("todo");
      if (!todo.checked) {
        console.log(key);
        console.log(!todo.checked);
        newTodoItems.push(todo);
      }
    });

    // console.log(newTodoItems);
    setTodoItems(newTodoItems);
  };

  console.log(todoItems);

  return (
    <div id={styles["todo-list-container"]}>
      <div id={styles["todo-list-wrapper"]}>{todoItemsList.reverse()}</div>
      <div id={styles["todo-options-container"]}>
        <div id={styles["todo-options"]}>
          <div>{itemsLeft} items left</div>
          <div id={styles["todo-options-wrapper"]}>
            <div
              id={activeCategorie == "all" ? `${styles["active-all"]}` : ""}
              onClick={() => setActiveCategorie("all")}
            >
              All
            </div>
            <div
              id={
                activeCategorie == "active" ? `${styles["active-active"]}` : ""
              }
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

          <div onClick={() => clearCompleted()}>Clear Comleted</div>
        </div>
      </div>
    </div>
  );
}
