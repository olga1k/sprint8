import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalExpenses: 0
}

export const expensesSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        sumExpenses: (state, {payload}) => {
            state.totalExpenses = payload;
        }
    }
})

export const { sumExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;