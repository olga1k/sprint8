import { useSelector } from "react-redux";
import { getTodayAmount } from "../features/expenses/selectors";
import { useTranslation} from 'react-i18next';


export default function TodayExpenses() {
    const { t, i18n} = useTranslation()
    const todayAmount = useSelector(getTodayAmount);

    console.log("todayAmount", todayAmount)

    return(
        <div className="today-exp">
        <h3>{t('main.today')}</h3>
        <p><span>{todayAmount}</span>€</p>
        </div>
    )
}
