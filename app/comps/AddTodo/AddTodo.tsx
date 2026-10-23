import { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styles from "./AddTodo.module.css";

type props = {
  todoItems: { id: string; value: string; checked: boolean }[];
  setTodoItems: Dispatch<
    SetStateAction<{ id: string; value: string; checked: boolean }[]>
  >;
};

export default function AddTodo({ todoItems, setTodoItems }: props) {
  const [inputValue, setInputValue] = useState<string>("");
  const [addTodoChecked, setAddTodoChecked] = useState<boolean>(false);

  return (
    <div id={styles["add-todo"]}>
      <div
        className={
          addTodoChecked
            ? styles["active-check-circle"]
            : styles["check-circle"]
        }
        onClick={() => setAddTodoChecked((preV) => !preV)}
      >
        {addTodoChecked ? (
          <Image alt="checked" src="/icon-check.svg" width={11} height={9} />
        ) : (
          ""
        )}
      </div>

      <input
        value={inputValue}
        className={styles["add-todo-input"]}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (inputValue.trim() === "") {
              alert("Your todo is empty");
            } else {
              setTodoItems([
                ...todoItems,
                {
                  id: crypto.randomUUID(),
                  checked: addTodoChecked,
                  value: inputValue,
                },
              ]);
              setInputValue("");
              setAddTodoChecked(false);
            }
          }
        }}
        placeholder="Create a new todo..."
      />
    </div>
  );
}
