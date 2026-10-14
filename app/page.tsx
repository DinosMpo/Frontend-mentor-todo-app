"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "./comps/AddTodo/AddTodo";
import TodoList from "./comps/TodoList/TodoList";
import TodoListOptionsFilters from "./comps/TodoOptionsFilters/TodoOptionsFilters";

export default function Home() {
  const todoIndex = useRef(5);
  // console.log("todoIndex.current");
  // console.log(todoIndex.current.valueOf());
  const [activeTheme, setActiveTheme] = useState("light");
  const [activeCategorie, setActiveCategorie] = useState("all");

  const [todoItems, setTodoItems] = useState([
    {
      id: 0,
      checked: true,
      value: "Complete online Javascript course",
    },
    {
      id: 1,
      checked: false,
      value: "Jog around the park 3x",
    },
    {
      id: 2,
      checked: false,
      value: "10 minutes meditation",
    },
    {
      id: 3,
      checked: false,
      value: "Read for 1 hour",
    },
    {
      id: 4,
      checked: false,
      value: "Pick up grocereies",
    },
    {
      id: 5,
      checked: false,
      value: "Complete Todo App on Fronend Mentor",
    },
  ]);

  return (
    <div
      id={styles["main-container"]}
      className={activeTheme == "light" ? "" : styles["main-container-dark"]}
    >
      <Image
        alt="backgroung image desktop"
        src={
          activeTheme == "light"
            ? "/bg-desktop-light.jpg"
            : "/bg-desktop-dark.jpg"
        }
        width={1440}
        height={300}
        id={styles["bg-image"]}
        loading="eager"
      />

      <Image
        alt="backgroung image mobile"
        src={
          activeTheme == "light"
            ? "/bg-mobile-light.jpg"
            : "/bg-mobile-dark.jpg"
        }
        width={375}
        height={200}
        id={styles["mobile-bg-image"]}
        loading="eager"
      />

      <div id={styles["todo-container"]}>
        <div id={styles["todo-nav"]}>
          <div id={styles["todo-title"]}>T O D O</div>
          <div
            id={styles["theme"]}
            onClick={() =>
              activeTheme == "light"
                ? setActiveTheme("dark")
                : setActiveTheme("light")
            }
          >
            <Image
              alt="dark or light mode"
              src={activeTheme == "light" ? "/icon-moon.svg" : "/icon-sun.svg"}
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
          activeTheme={activeTheme}
        />
        <TodoList
          activeCategorie={activeCategorie}
          setActiveCategorie={setActiveCategorie}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          activeTheme={activeTheme}
        />

        <TodoListOptionsFilters
          activeCategorie={activeCategorie}
          setActiveCategorie={setActiveCategorie}
          design={"mobile"}
          activeTheme={activeTheme}
        />
      </div>

      <div
        className={`${styles["drag-and-drop-info"]} ${activeTheme == "light" ? "" : styles["drag-and-drop-info-dark"]}`}
      >
        Drag and drop to reorder list
      </div>

      <footer id={activeTheme == "light" ? "" : styles["footer-dark"]}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Dinos Mpo</a>.
      </footer>
    </div>
  );
}
