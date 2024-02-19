import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalWeeklyExpenses: 0,
};

export const weeklyExpensesSlice = createSlice({
  name: "weeklyExpenses",
  initialState,
  reducers: {
    addToWeeklyExpenses: (state, action) => {
      state.totalWeeklyExpenses += action.payload;
    },
  },
});

export const { addToWeeklyExpenses } = weeklyExpensesSlice.actions;
export default weeklyExpensesSlice.reducer;
