import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO } from "../../actions/actions";

import "./Todos.css";


const Todo = ({ todoList }) => {
  const dispatch = useDispatch();
  return (
    Array.isArray(todoList) &&
    todoList.map(({ id, status, task }) => (
      <div
        key={id}
        className={`todo ${status}`}
        onClick={() =>
          dispatch({
            type: UPDATE_TODO,
            payload: id
          })
        }
      >
        <li>{task}</li>
      </div>
    ))
  );
};

export default Todo;
