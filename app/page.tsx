"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./comps/ThemeProvider/ThemeProvider";
import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "./comps/AddTodo/AddTodo";
import TodoList from "./comps/TodoList/TodoList";
import TodoListOptionsFilters from "./comps/TodoOptionsFilters/TodoOptionsFilters";
import ThemeToggle from "./comps/ThemeToggle/ThemeToggle";

type Todo = { id: string; value: string; checked: boolean };

export default function Home() {
  const { theme } = useTheme();
  const [activeCategorie, setActiveCategorie] = useState<string>("all");
  const [todoItems, setTodoItems] = useState<Todo[]>([
    {
      id: crypto.randomUUID(),
      checked: true,
      value: "Complete online Javascript course",
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      value: "Jog around the park 3x",
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      value: "10 minutes meditation",
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      value: "Read for 1 hour",
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      value: "Pick up grocereies",
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      value: "Complete Todo App on Fronend Mentor",
    },
  ]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodoItems(JSON.parse(saved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems, loaded]);

  return (
    <div id={styles["main-container"]}>
      <Image
        alt="backgroung image desktop"
        src={
          theme == "light" ? "/bg-desktop-light.jpg" : "/bg-desktop-dark.jpg"
        }
        width={1440}
        height={300}
        id={styles["bg-image"]}
        loading="eager"
      />

      <Image
        alt="backgroung image mobile"
        src={theme == "light" ? "/bg-mobile-light.jpg" : "/bg-mobile-dark.jpg"}
        width={375}
        height={200}
        id={styles["mobile-bg-image"]}
        loading="eager"
      />

      <div id={styles["todo-container"]}>
        <div id={styles["todo-nav"]}>
          <div id={styles["todo-title"]}>T O D O</div>
          <ThemeToggle />
        </div>

        <AddTodo todoItems={todoItems} setTodoItems={setTodoItems} />

        <TodoList
          activeCategorie={activeCategorie}
          setActiveCategorie={setActiveCategorie}
          todoItems={loaded ? todoItems : []}
          setTodoItems={setTodoItems}
        />

        <TodoListOptionsFilters
          activeCategorie={activeCategorie}
          setActiveCategorie={setActiveCategorie}
          design={"mobile"}
        />
      </div>

      <div
        className={`${styles["drag-and-drop-info"]} ${theme == "light" ? "" : styles["drag-and-drop-info-dark"]}`}
      >
        Drag and drop to reorder list
      </div>

      <footer id={theme == "light" ? "" : styles["footer-dark"]}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Dinos Mpo</a>.
      </footer>
    </div>
  );
}
