"use client";

import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./comps/TodoList/TodoList";

export default function Home() {
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
        <div id={styles["add-todo"]}>
          <div id={styles["check-circle"]}></div>
          <input placeholder="Create a new todo..." />
        </div>
        <TodoList />
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
