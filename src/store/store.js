import { configureStore } from '@reduxjs/toolkit';
import {todosReducer} from "../todoslice/createslice"

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
