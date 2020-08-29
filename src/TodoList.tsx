import React from 'react'
import TodoItem from './ToDoItem'
import { ToDoItem } from './ToDoItem'
import {ToDo, ToggleTodo} from './types'

interface TodoListProps {
    todos: Array<ToDo>;
    toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return (
    <ul>{todos.map(todo => {
        return <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
    })}</ul>
    )
}

export default TodoList
