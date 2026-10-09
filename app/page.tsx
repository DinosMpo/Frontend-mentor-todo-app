"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "./comps/AddTodo/AddTodo";
import TodoList from "./comps/TodoList/TodoList";

export default function Home() {
  const todoIndex = useRef(5);
  console.log("todoIndex.current");
  console.log(todoIndex.current.valueOf());
  const [todoItems, setTodoItems] = useState([
    {
      id: 0,
      checked: false,
      value: "Complete Todo App on Fronend Mentor",
    },
    {
      id: 1,
      checked: false,
      value: "Pick up grocereies",
    },
    {
      id: 2,
      checked: false,
      value: "Read for 1 hour",
    },
    {
      id: 3,
      checked: false,
      value: "10 minutes meditation",
    },
    {
      id: 4,
      checked: false,
      value: "Jog around the park 3x",
    },
    {
      id: 5,
      checked: true,
      value: "Complete online Javascript course",
    },
  ]);

  return (
    <div id={styles["main-container"]}>
      <Image
        alt="bg desktop"
        src={"/bg-desktop-light.jpg"}
        width={1440}
        height={300}
        id={styles["bg-image"]}
        loading="eager"
      />

      <div id={styles["todo-container"]}>
        <div id={styles["todo-nav"]}>
          <div id={styles["todo-title"]}>T O D O</div>
          <div>
            <Image
              alt="dark or light mode"
              src="/icon-moon.svg"
              width={26}
              height={26}
              loading="eager"
            />
          </div>
        </div>

        <AddTodo
          todoIndex={todoIndex}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
        />
        <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
      </div>

      <div>Drag and drop to reorder list</div>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}
