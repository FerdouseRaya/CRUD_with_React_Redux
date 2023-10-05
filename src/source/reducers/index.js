import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import addbooksReducer from "./addBooksReducer";

const rootReducer = combineReducers({
  addbooks: addbooksReducer,
  books: booksReducer,
});

export default rootReducer;
