

import React from "react";
import { useSelector } from "react-redux";
import { selectTotalWeeklyExpenses } from "../features/expenses/selectors";
import { useTranslation } from "react-i18next";

const TotalBalance = () => {
    const { t } = useTranslation()

    const totalWeeklyExpenses = useSelector(selectTotalWeeklyExpenses);
  
  return(
    <div className="total">
        <div className="total-info">
        <h3>{t('main.balance')}</h3>
        <span className="balance">${totalWeeklyExpenses}</span>
        </div>
        <div className="arrows-wrapper">
            <div className="arrow-back"></div>
            <div className="arrow-forward"></div>

        </div>
    </div>
)
}

export default TotalBalance;
