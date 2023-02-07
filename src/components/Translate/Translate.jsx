import React, {useState} from 'react';
import "./Translate.css"
import i18n from "../../i18n";
import {Outlet} from "react-router";
import {getUserLanguage} from "../../helpers";

const Translate = () => {
    const [active, setActive] = useState(false)
    const userLanguage = localStorage.getItem("language") || getUserLanguage()
    const [language, setLanguage] = useState(userLanguage)
    const handleLanguageChange = (lng) => {
        localStorage.setItem("language", lng);
        i18n.changeLanguage(lng)
        setLanguage(lng)
        setActive(false)
    }

    return (
        <>
            <div className="translate_wrapper">
                <div className={active ? "dropdown show" : "dropdown"}>
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup={active ? "true" : "false"} aria-expanded="false"
                            onClick={() => setActive(!active)}>
                        {language.toUpperCase()}
                    </button>
                    <div className={active ? "dropdown-menu show" : "dropdown-menu"}
                         aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" type="button" key="easy_level"
                                onClick={() => handleLanguageChange("en")}>EN
                        </button>
                        <button className="dropdown-item" type="button" key="average_level"
                                onClick={() => handleLanguageChange("ua")}>UA
                        </button>
                        <button className="dropdown-item" type="button" key="hard_level"
                                onClick={() => handleLanguageChange("ru")}>RU
                        </button>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    );
};

export default Translate;