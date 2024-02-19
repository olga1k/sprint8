import { selectTotalWeeklyExpenses } from './selectors';

test('calculate total balance', () => {
    const mockDailyExpenses = [
        { id: 1, day: "dl", amount: 5, date: "Jan 22 2024" },
        { id: 2, day: "dt", amount: 10, date: "Jan 23 2024" },
        { id: 3, day: "dm", amount: 30, date: "Jan 24 2024" }
    ];

    const mockState = {
        dailyExpenses: { 
            expenses: mockDailyExpenses,
        }
    };

    const result = selectTotalWeeklyExpenses(mockState);
    const expectedTotal = mockDailyExpenses.reduce((total, day) => total + day.amount, 0);

    expect(result).toEqual(expectedTotal);
    
});
