import { createSlice } from '@reduxjs/toolkit'

export const DisputePages={
   
    ALL_DISPUTES:"ALL_DISPUTES",
    RESOLVED: "RESOLVED",
    UNRESOLVED: "UNRESOLVED"
}

const initialState = {
  currentPage:DisputePages.ALL_DISPUTES
}

export const disputeSlice = createSlice({
  name: 'dispute Data',
  initialState,
  reducers: {
    setCurrentPage(state,action){
        state.currentPage=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = disputeSlice.actions

export default disputeSlice.reducer