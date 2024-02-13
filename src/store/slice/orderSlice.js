import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderStatus: null,
  },
  reducers: {
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    },
  },
});

export const { setOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
