import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  percent: 0,
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    countDifference: (state, { payload }) => {
      const { todayAmount, yesterdayAmount } = payload;

      if (todayAmount < yesterdayAmount) {
        const percent = yesterdayAmount / 100;
        const percent1 = todayAmount / percent;
        const dif = 100 - percent1.toFixed(1);
        state.percent = -dif;
      } else if (todayAmount > yesterdayAmount) {
        const percent = todayAmount / 100;
        const percent1 = yesterdayAmount / percent;
        const dif = 100 - percent1.toFixed(1);
        state.percent = +dif;
      }
    },
  },
});

export const { countDifference } = compareSlice.actions;
export default compareSlice.reducer;

