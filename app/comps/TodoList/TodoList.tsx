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
import TodoOptions from "../TodoOptions/TodoOptions";

export default function TodoList({ todoItems, setTodoItems, activeTheme }) {
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
          activeTheme={activeTheme}
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
            activeTheme={activeTheme}
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
            activeTheme={activeTheme}
          />
        );
      }
    });
  }

  const clearCompleted = () => {
    let oldTodoItems = [...todoItems];
    let newTodoItems: any[] = [];
    oldTodoItems.map((todo, key) => {
      if (!todo.checked) {
        newTodoItems.push(todo);
      }
    });
    setTodoItems(newTodoItems);
  };

  return (
    <div id={styles["todo-list"]}>
      <div
        className={`${styles["todo-list-container"]} ${activeTheme == "light" ? styles["todo-list-container-light"] : styles["todo-list-container-dark"]}`}
      >
        <DndContext
          id="todo-list-dnd"
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[
            restrictToVerticalAxis,
            restrictToFirstScrollableAncestor,
          ]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={todoItems.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div id={styles["todo-list-wrapper"]}>{todoItemsList}</div>
          </SortableContext>
        </DndContext>
      </div>

      <TodoOptions
        activeCategorie={activeCategorie}
        setActiveCategorie={setActiveCategorie}
        clearCompleted={clearCompleted}
        itemsLeft={itemsLeft}
      />
    </div>
  );
}
