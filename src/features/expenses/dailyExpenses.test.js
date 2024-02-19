import { addExpense, dailyExpensesSlice, selectDailyExpenses } from './dailyExpensesSlice';

describe('Daily Expenses Slice', () => {
  it('should add an expense to the state', () => {
    const initialState = { expenses: [] };
    const nextState = dailyExpensesSlice.reducer(initialState, addExpense({ id: 8, day: 'df', amount: 120 }));
    expect(nextState.expenses.length).toBe(1);
  });

  it('should select daily expenses', () => {
    const state = { dailyExpenses: { expenses: [{ id: 1, day: 'dl', amount: 50 }] } };
    const selectedExpenses = selectDailyExpenses(state);
    expect(selectedExpenses).toEqual([{ id: 1, day: 'dl', amount: 50 }]);
  });
});
