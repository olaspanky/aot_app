import { createSlice } from '@reduxjs/toolkit';

export const TableQuestions = {
  CATEGORY_ONE: "CATEGORY_ONE",
  CATEGORY_TWO: "CATEGORY_TWO",
  CATEGORY_THREE: "CATEGORY_THREE",
  CATEGORY_FOUR: "CATEGORY_FOUR",
  CATEGORY_FIVE: "CATEGORY_FIVE"
};

const initialState = {
  currentCategory: TableQuestions.CATEGORY_ONE
};

export const tableSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { selectCategory } = tableSlice.actions;
export default tableSlice.reducer;
