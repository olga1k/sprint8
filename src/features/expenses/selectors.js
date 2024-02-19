import { createSelector } from "@reduxjs/toolkit";
import { selectDailyExpenses } from "./dailyExpensesSlice";

export const selectTotalWeeklyExpenses = createSelector(
  [selectDailyExpenses],
  (dailyExpenses) =>
    dailyExpenses.reduce((total, day) => total + day.amount, 0)
);
export const currentDate = new Date().toDateString().split(" ").slice(1).join(" ");
    console.log(currentDate);

    console.log("selectDailyExpenses", selectDailyExpenses)
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayDate = yesterday.toDateString().split(" ").slice(1).join(" ");
    
    console.log("yesterday", yesterdayDate);

    export const getTodayAmount = createSelector(
      [selectDailyExpenses],
      (dailyExpenses) => {
        const todayExpense = dailyExpenses.find(dailyExpense => dailyExpense.date === currentDate);
        if (todayExpense && todayExpense.amount !== undefined) {
          console.log("todayExpense", todayExpense.amount);
          return todayExpense.amount;
        } else {
          console.error("Error in getTodayAmount: Unable to find or access amount property.");
          return 0;
        }
      }
    );
    
    export const getYesterdayAmount = createSelector(
      [selectDailyExpenses],
      (dailyExpenses) => {
        const yesterdayExpense = dailyExpenses.find(dailyExpense => dailyExpense.date === yesterdayDate);
        if (yesterdayExpense && yesterdayExpense.amount !== undefined) {
          console.log("yesterdayExpense", yesterdayExpense.amount);
          return yesterdayExpense.amount;
        } else {
          console.error("Error in getYesterdayAmount: Unable to find or access amount property.");
          return 0;
        }
      }
    );
    
    




