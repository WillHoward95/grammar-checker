import { configureStore } from "@reduxjs/toolkit";
import grammarReducer from "../features/grammar/grammarSlice";

export const store = configureStore({
  reducer: {
    grammar: grammarReducer,
  },
});
