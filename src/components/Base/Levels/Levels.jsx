import React from 'react';
import "./Levels.css"
import {useTranslation} from "react-i18next";

const Levels = ({active, setActive, level, click, startGame}) => {
    const {t} = useTranslation()

    return (
        <div className="level_wrapper">
            <div className={active ? "dropdown show" : "dropdown"}>
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup={active ? "true" : "false"} aria-expanded="false"
                        onClick={() => setActive(!active)}>
                    {t(level)}
                </button>
                <div className={active ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" type="button" key="easy_level"
                            onClick={() => click("Easy", "Easy")}>{t("Easy")}
                    </button>
                    <button className="dropdown-item" type="button" key="average_level"
                            onClick={() => click("Medium", "Average")}>{t("Average")}
                    </button>
                    <button className="dropdown-item" type="button" key="hard_level"
                            onClick={() => click("Hard", "Hard")}>{t("Hard")}
                    </button>
                </div>
            </div>

            <button className="btn btn-primary" onClick={startGame}>{t("Start game")}</button>
        </div>
    );
};

export default Levels;