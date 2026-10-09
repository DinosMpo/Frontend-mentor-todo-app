import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import styles from "./Todo.module.css";

export default function Todo({ id, index, item, setTodoItems, todoItems }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Add subtle visual cue when an item is actively dragged
    opacity: isDragging ? 0.5 : 1,
    // padding: "16px",
    backgroundColor: "#fff",
    // borderRadius: "4px",
    cursor: "grab",
  };

  const handleChildClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const deleteTodo = (index) => {
    const oldItems = [...todoItems];
    oldItems.splice(index, 1);
    setTodoItems(oldItems);
  };

  return (
    <div
      id={id}
      className={styles["todo-container"]}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className={styles["todo-wrapper"]}>
        <div
          className={
            item.checked
              ? `${styles["todo-active-checked"]}`
              : `${styles["todo-checked"]}`
          }
          onClick={(e) => {
            handleChildClick(e);
            let oldItems = [...todoItems];
            oldItems[index].checked = !oldItems[index].checked;
            // console.log(!oldItems[index].checked);
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

      <div
        className={styles["delete-todo-wrapper"]}
        onClick={() => deleteTodo(index)}
      >
        <Image
          className={styles["delete-todo"]}
          alt="close image"
          src="./icon-cross.svg"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
}
