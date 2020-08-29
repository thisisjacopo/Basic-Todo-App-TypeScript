import React, { useState } from "react";
import { ToDo, ToggleTodo, AddTodo } from "./types";
import AddToDo from './AddToDo'
import TodoList from './TodoList'
import './App.css'

const initialTodos: Array<ToDo> = [
  { text: "Take vitamins", complete: true },
  { text: "Have breakfast", complete: false },
  { text: "Do two Katas", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo:ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' && setTodos([...todos, {text: newTodo, complete: false}])
  }

  return (
    <div className='defult'>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddToDo addTodo={addTodo}/>
    </div>
  );
}

export default App;
