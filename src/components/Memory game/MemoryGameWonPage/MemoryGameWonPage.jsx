import React, {useEffect} from 'react';
import "./MemoryGameWonPage.css"
import {useOutletContext} from "react-router-dom";
import Title from "../../Base/Title/Title";
import Confetti from 'react-confetti'
import {useWindowSize} from '@react-hook/window-size'
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router";

const MemoryGameWonPage = () => {
    const {click, sameCards, timeHistory} = useOutletContext()
    const {width, height} = useWindowSize();

    const {t} = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
        if (location.state === null) {
            navigate("/")
        }
    }, [])


    return (
        <div className="memory_won_page_wrapper">
            <Confetti width={width} height={height}/>
            <Title titleText={t("You won this memory game")} extraClassName="memory_game_won_title"/>
            <div className="won_memory_game_info"><span>{t("Clk")}</span> <span>{click}</span></div>
            <div className="won_memory_game_info"><span>{t("Same cards:")}</span> <span>{sameCards}</span></div>
            <div className="won_memory_game_info">
                <span>{t("T")}</span> <span>{timeHistory}</span>
            </div>
        </div>
    );
};

export default MemoryGameWonPage;