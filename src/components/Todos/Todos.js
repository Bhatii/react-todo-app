import React from "react";
import { useSelector } from "react-redux";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

import "./Todos.css";


const Todos = () => {
  const todoList = useSelector(({ todoState: { todoList } }) => todoList);

  return (
    <div className="todos">
      <NewTodo />
      <div className="alert alert-info todo-title">Tasks in TODO</div>
      <div className="todo-container">
        <ul>
          <Todo todoList={todoList} />
        </ul>
      </div>
    </div>
  );
};

export default Todos;
