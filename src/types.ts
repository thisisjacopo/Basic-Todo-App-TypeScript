export type ToDo = {
    text: string;
    complete: boolean;
  }

export type ToggleTodo = (selectedTodo: ToDo) => void;

export type AddTodo = (newTodo: string) => void;