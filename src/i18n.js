import en from "./components/Translate/trans/en.json"
import ru from "./components/Translate/trans/ru.json"
import ua from "./components/Translate/trans/ua.json"

import {initReactI18next} from "react-i18next";
import i18n from 'i18next'

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    ua: {
        translation: ua
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: JSON.parse(localStorage.getItem('language')),
        fallbackLng: 'ru'
    })

export default i18n;