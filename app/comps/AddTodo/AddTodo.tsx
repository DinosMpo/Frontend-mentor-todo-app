import { useState } from "react";
import Image from "next/image";
import styles from "./AddTodo.module.css";

export default function AddTodo({ todoIndex, todoItems, setTodoItems }) {
  const [inputValue, setInputValue] = useState("");
  const [addTodoChecked, setAddTodoChecked] = useState(false);

  console.log(inputValue);

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
          <Image alt="checked" src="./icon-check.svg" width={11} height={9} />
        ) : (
          ""
        )}
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (inputValue == "") {
              alert("Your todo is empty");
            } else {
              todoIndex.current++;
              // let newId = todoIndex
              console.log(todoIndex);
              setTodoItems([
                ...todoItems,
                {
                  id: todoIndex.current,
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
