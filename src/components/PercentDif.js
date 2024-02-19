/*
import { getTodayAmount, getYesterdayAmount } from "../features/expenses/selectors";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function TodayExpenses() {
    const { t, i18n} = useTranslation()


    const todayAmount = useSelector(getTodayAmount); //20
  const yesterdayAmount = useSelector(getYesterdayAmount); //40
    
   console.log ("check amounts", todayAmount, yesterdayAmount)
let difference;

function countPercent(){
    if (todayAmount < yesterdayAmount) {
       const percent = yesterdayAmount / 100;
       const percent1 = todayAmount / percent;
       const dif = 100 - percent1.toFixed(1);
    difference = `-${dif}`;
       return difference;

    } else if (todayAmount > yesterdayAmount) {
        const percent = todayAmount / 100;
        const percent1 = yesterdayAmount / percent;
        const dif = 100 - percent1.toFixed(1);
 
        difference = `+${dif}`;
        return difference;    }

    }
countPercent();
    return(
<div className="percent-wrapper">
    <p><span>{difference}</span>%</p>
    <p>{t('main.compare')}</p>
</div>    
)
}
*/

import { countDifference } from "../features/expenses/compareSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getTodayAmount, getYesterdayAmount } from "../features/expenses/selectors";
import { useEffect } from "react";


export default function TodayExpenses() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const todayAmount = useSelector(getTodayAmount); 
  const yesterdayAmount = useSelector(getYesterdayAmount); 

  console.log("check amounts", todayAmount, yesterdayAmount);

  useEffect(() => {
    dispatch(countDifference({ todayAmount, yesterdayAmount }));
  }, [dispatch, todayAmount, yesterdayAmount]);

  const percentDifference = useSelector((state) => state.compare.percent);

  return (
    <div className="percent-wrapper">
      <p>
        <span>{percentDifference}</span>%
      </p>
      <p>{t('main.compare')}</p>
    </div>
  );
}

