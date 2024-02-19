import React from "react";
import { useSelector } from "react-redux";
import { selectTotalWeeklyExpenses } from "../features/expenses/selectors";
import { selectDailyExpenses } from "../features/expenses/dailyExpensesSlice";

const Trial = () => {
    const dailyExpenses = useSelector(selectDailyExpenses);
    const totalWeeklyExpenses = useSelector(selectTotalWeeklyExpenses);
  
    return (
      <div>
        <h2>Daily Expenses</h2>
        <ul>
          {dailyExpenses.map((expense) => (
            <li key={expense.id}>{`${expense.day}: $${expense.amount}`}</li>
          ))}
        </ul>
        <h2>Total Weekly Expenses: ${totalWeeklyExpenses}</h2>
      </div>
    );
  };
  
export default Trial;
