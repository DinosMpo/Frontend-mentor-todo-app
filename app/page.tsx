"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "./comps/AddTodo/AddTodo";
import TodoList from "./comps/TodoList/TodoList";

export default function Home() {
  const [todoItems, setTodoItems] = useState([
    {
      checked: false,
      value: "Complete Todo App on Fronend Mentor",
    },
    {
      checked: false,
      value: "Pick up grocereies",
    },
    {
      checked: false,
      value: "Read for 1 hour",
    },
    {
      checked: false,
      value: "10 minutes meditation",
    },
    {
      checked: false,
      value: "Jog around the park 3x",
    },
    {
      checked: true,
      value: "Complete online Javascript course",
    },
  ]);

  return (
    <div id={styles["main-container"]}>
      <Image
        alt="bg desktop"
        src={"/bg-desktop-light.jpg"}
        size="100vw"
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

        <AddTodo todoItems={todoItems} setTodoItems={setTodoItems} />
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
