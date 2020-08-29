import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "./types";
import './App.css'

interface AddTodoProps {
  addTodo: AddTodo;
}

const AddToDo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Write your chore"
      />
      <button type="submit" onClick={handleSubmit}>Add Chore</button>
    </form>
  );
};

export default AddToDo;
