import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, NEW_TODO } from "../../actions/actions";

import "./Todos.css";


const NewTodo = () => {
  const { task } = useSelector(({ todoState: { newTodo } }) => newTodo);
  const dispatch = useDispatch();
  const onTextInput = ({ target: { value } }) =>
    dispatch({
      type: NEW_TODO,
      payload: value,
    });

  const onButtonClick = () =>
    task &&
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        task,
        status: "pending",
      },
    }) &&
    dispatch({
      type: NEW_TODO,
      payload: "",
    });
  return (
    <div className="card new-todo">
      <h5>Create a new Todo</h5>
      <input
        className="form-control"
        value={task || ""}
        onChange={onTextInput}
        placeholder="Let's add a task here..."
      />
      <button className="btn btn-success mt-1" onClick={onButtonClick}>
        Add todo
      </button>
    </div>
  );
};

export default NewTodo;
