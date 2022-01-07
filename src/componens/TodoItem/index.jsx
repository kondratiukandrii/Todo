import React from "react";
import "./style.scss";

const TodoItem = ({ todo, editTodo, removeTodo }) => {
  const handleChange = () => {
    todo.completed = !todo.completed;
    editTodo(todo);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="item">
      <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      <p className={`${todo.completed ? "completed" : ""}`}>{todo.text}</p>
      <div className="button" onClick={handleDelete}>
        X
      </div>
    </li>
  );
};

export default TodoItem;
