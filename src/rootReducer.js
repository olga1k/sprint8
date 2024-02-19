import { combineReducers } from "@reduxjs/toolkit";
import dailyExpensesReducer from "./features/expenses/dailyExpensesSlice";
import weeklyExpensesReducer from "./features/expenses/weeklyExpensesSlice";
import compareReducer from "./features/expenses/compareSlice";

const rootReducer = combineReducers({
  dailyExpenses: dailyExpensesReducer,
  weeklyExpenses: weeklyExpensesReducer,
  compare: compareReducer,
});

export default rootReducer;
