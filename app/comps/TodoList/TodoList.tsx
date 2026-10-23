"use client";

import { Dispatch, SetStateAction } from "react";
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
import { useTheme } from "../ThemeProvider/ThemeProvider";

type props = {
  activeCategorie: string;
  setActiveCategorie: Dispatch<SetStateAction<string>>;
  todoItems: { id: string; value: string; checked: boolean }[];
  setTodoItems: Dispatch<
    SetStateAction<{ id: string; value: string; checked: boolean }[]>
  >;
};

export default function TodoList({
  activeCategorie,
  setActiveCategorie,
  todoItems,
  setTodoItems,
}: props) {
  const { theme, toggle } = useTheme();

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
  };

  let itemsLeft = 0;
  let todoItemsList: (React.ReactElement | undefined)[] = [];

  if (activeCategorie == "all") {
    todoItemsList = todoItems.map((item, key) => {
      if (!item.checked) itemsLeft++;
      return (
        <Todo
          key={item.id}
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
            key={item.id}
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
            key={item.id}
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
      <div className={styles["todo-list-container"]}>
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
