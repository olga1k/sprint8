import { useTranslation} from 'react-i18next';

export default function Expenses() {
    const { t, i18n} = useTranslation()

    return(
        <h1>{t('main.header')}</h1>
    )
}