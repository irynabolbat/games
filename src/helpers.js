export const getObjLocalStorage = (key, defaultVal) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultVal
}