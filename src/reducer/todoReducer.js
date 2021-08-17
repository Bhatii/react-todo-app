import { ADD_TODO, NEW_TODO, UPDATE_TODO } from "../actions/actions";
import { COMPLETED, DONE, PENDING } from "../constants";

const initialState = {
  todoList: [
    {
      id: 1,
      task: "Go to the Library",
      status: COMPLETED,
    },
    {
      id: 2,
      task: "Have Lunch",
      status: PENDING,
    },
    {
      id: 3,
      task: "Meet Friends",
      status: PENDING,
    },
  ],
  newTodo: {
    value: "",
  },
};

const todoReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todoList: [payload, ...state.todoList] };
    case NEW_TODO:
      return { ...state, newTodo: { task: payload } };
    case UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload
            ? {
                ...todo,
                status: [COMPLETED, DONE].includes(todo.status)
                  ? DONE
                  : COMPLETED
              }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
