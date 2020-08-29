import React from "react";
import { ToDo, ToggleTodo } from "./types";
import "./ToDoItem.css";

interface ToDoItemsProps {
  todo: ToDo;
  toggleTodo: ToggleTodo;
}

export const ToDoItem: React.FC<ToDoItemsProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo);
          }}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoItem;
