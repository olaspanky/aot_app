import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPagination: 1, // Initial current page
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPagination(state, action) {
      state.currentPagination = action.payload;
    },
  },
});

export const { setCurrentPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
