import { createSlice } from '@reduxjs/toolkit'

export const PromotionsPages={
   
    ALL_PROMOTIONS:"ALL_PROMOTIONS",
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE"
}

const initialState = {
  currentPage:PromotionsPages.ALL_PROMOTIONS
}

export const promotionsSlice = createSlice({
  name: 'promotions Data',
  initialState,
  reducers: {
    setCurrentPage(state,action){
        state.currentPage=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = promotionsSlice.actions

export default promotionsSlice.reducer