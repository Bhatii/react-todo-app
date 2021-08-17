import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const reducer = combineReducers({
	todoState: todoReducer,
});

export default reducer;