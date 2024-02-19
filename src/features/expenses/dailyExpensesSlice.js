import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    { id: 1, day: "dl", amount: 50, date: "Jan 22 2024" },
    { id: 2, day: "dt", amount: 90, date: "Jan 23 2024" },
    { id: 3, day: "dm", amount: 30, date: "Jan 24 2024" },
    { id: 4, day: "dj", amount: 40, date: "Jan 25 2024" },
    { id: 5, day: "dv", amount: 60, date: "Jan 26 2024" },
    { id: 6, day: "ds", amount: 70, date: "Jan 19 2024" },
    { id: 7, day: "dm", amount: 80, date: "Jan 21 2024" },
  
  ],
};

export const dailyExpensesSlice = createSlice({
  name: "dailyExpenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { id, day, amount } = action.payload;
      const date = new Date().toDateString(); 
      state.expenses.push({ id, day, amount, date });
    },
  },
});

export const { addExpense } = dailyExpensesSlice.actions;
export const selectDailyExpenses = (state) => state.dailyExpenses.expenses;
export default dailyExpensesSlice.reducer;

