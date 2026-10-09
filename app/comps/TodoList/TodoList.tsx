import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToFirstScrollableAncestor,
} from "@dnd-kit/modifiers";
import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

export default function TodoList({ todoItems, setTodoItems }) {
  // console.log(todoItems);
  const [activeCategorie, setActiveCategorie] = useState("all");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 10 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTodoItems((todoItems) => {
        const oldIndex = todoItems.findIndex((item) => item.id === active.id);
        const newIndex = todoItems.findIndex((item) => item.id === over.id);

        // arrayMove is a built-in helper utility to reorder the array
        return arrayMove(todoItems, oldIndex, newIndex);
      });
    }
    // console.log(todoItems);
  };

  let itemsLeft = 0;
  let todoItemsList = [];

  if (activeCategorie == "all") {
    todoItemsList = todoItems.map((item, key) => {
      if (!item.checked) itemsLeft++;
      return (
        <Todo
          key={key}
          id={item.id}
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
            id={item.id}
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
            id={item.id}
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
    // console.log("oldTodoItems");
    // console.log(oldTodoItems);
    let newTodoItems: any[] = [];
    oldTodoItems.map((todo, key) => {
      // console.log("todo");
      if (!todo.checked) {
        // console.log(key);
        // console.log(!todo.checked);
        newTodoItems.push(todo);
      }
    });

    // console.log(newTodoItems);
    setTodoItems(newTodoItems);
  };

  // console.log(todoItems);

  return (
    <div id={styles["todo-list-container"]}>
      <DndContext
        id="todo-list-dnd"
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={todoItems.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div id={styles["todo-list-wrapper"]}>{todoItemsList}</div>
        </SortableContext>
      </DndContext>

      {/* prepei na to kanw component auto */}
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
