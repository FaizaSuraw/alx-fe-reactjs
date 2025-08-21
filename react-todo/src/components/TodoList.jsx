import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a Todo App",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button
              data-testid="delete-btn"
              onClick={() => removeTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoList;
