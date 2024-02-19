import { countDifference } from './compareSlice';
import { compareSlice } from './compareSlice';

describe('Compare Slice', () => {
  it('should calculate the difference correctly', () => {
    const initialState = { percent: 0 };
    const todayAmount = 120;
    const yesterdayAmount = 100;
    const nextState = compareSlice.reducer(initialState, countDifference({ todayAmount, yesterdayAmount }));
    expect(nextState.percent).toBeGreaterThan(0);
  });
});
