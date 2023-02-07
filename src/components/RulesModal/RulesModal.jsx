import React from 'react';
import "./RulesModal.css"
import {XCircle} from "react-bootstrap-icons";
import {useLocation} from "react-router";
import Rules from "../Base/Rules/Rules";
import {useTranslation} from "react-i18next";

const RulesModal = ({active, setActive}) => {
    const {t} = useTranslation()

    const memoryGameRules = [t("The deck consists of different card types"),
        t("Each turn, you flip over two cards (one at a time, so you can see the first one before picking the second)"),
        t("If the two cards match, then they are left opened in the game, otherwise they are returned"),
        t("The game ends when all the cards are opened")]
    const sudokuRules = [t("Sudoku grid consists of 9x9 spaces"),
        t("You can use only numbers from 1 to 9"),
        t("Each 3×3 block can only contain numbers from 1 to 9"),
        t("Each vertical column can only contain numbers from 1 to 9"),
        t("Each horizontal row can only contain numbers from 1 to 9"),
        t("Each number in the 3×3 block, vertical column or horizontal row can be used only once"),
        t("The game is over when the whole Sudoku grid is correctly filled with numbers")]

    const location = useLocation()
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(!active)}>
            <div className={active ? "modal_content active" : "modal_content"}
                 onClick={e => e.stopPropagation()}>

                <div className="close_icon_wrapper" onClick={() => setActive(false)}>
                    <XCircle className="close_icon"/>
                </div>
                {
                    location.pathname === "/memory_game" || location.pathname === "/memory_game/levels" || location.pathname === "/memory_game/play" || location.pathname === "/memory_game/won_page"
                        ? <Rules title={t("Rules of memory game:")} arrOfRules={memoryGameRules}/>
                        : <Rules title={t("Rules of sudoku:")} arrOfRules={sudokuRules}/>
                }
            </div>
        </div>
    );
};

export default RulesModal;