import en from "./components/Translate/trans/en.json"
import ru from "./components/Translate/trans/ru.json"
import ua from "./components/Translate/trans/ua.json"

import {initReactI18next} from "react-i18next";
import i18n from 'i18next'
import {getUserLanguage} from "./helpers";

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
        lng: localStorage.getItem('language'),
        fallbackLng: getUserLanguage()
    })

export default i18n;