import { createSlice } from '@reduxjs/toolkit'

export const DashboardPages={
    ALL_USERS:"ALL_USERS",
    LOGISTICS_USERS:"LOGISTICS_USERS",
    COMPANY:"COMPANY",
    INDIVIDUAL:"INDIVIDUAL",
   
}

const initialState = {
  currentPage:DashboardPages.ALL_USERS
}

export const dashboardSlice = createSlice({
  name: 'Dashboard Data',
  initialState,
  reducers: {
    setCurrentPage(state,action){
        state.currentPage=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = dashboardSlice.actions

export default dashboardSlice.reducer