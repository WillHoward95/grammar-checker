import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const grammarSlice = createSlice({
  name: "grammar",
  initialState,
  reducers: {
    setGrammarResponse: (state, action) => {
      state.grammarResponse = action.payload;
    },
  },
});

export const { setGrammarResponse } = grammarSlice.actions;

export const selectGrammarResponse = (state) => state.grammar.grammarResponse;

export default grammarSlice.reducer;
