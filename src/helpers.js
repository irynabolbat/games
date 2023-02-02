export const getObjLocalStorage = (key, defaultVal) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultVal
}

export const getUserLanguage = () => {
    const userLanguage = navigator.language
    if(userLanguage === "ru-RU") {
        return "ru"
    } else if (userLanguage === "uk-UK") {
        return "ua"
    } else {
        return "en"
    }
}