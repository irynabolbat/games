import React from 'react';
import "./Home.css"
import {useNavigate} from "react-router";
import memoryGame from "../../img/memoryGame.png"
import sudoku from "../../img/sudoku.png"
import Title from "../Base/Title/Title";
import {useTranslation} from 'react-i18next';

const Home = () => {
    const navigate = useNavigate()

    const {t} = useTranslation()

    return (
        <div className="home_wrapper">
            <Title titleText={t("Games for your brain")} extraClassName="home_page_title_mob" emoji={'🧠'}/>

            <div className="games_container">
                <button onClick={() => navigate('/memory_game')} className="btn_game">
                    <img src={memoryGame} alt='Memory game' className="img_game"/>
                    <span className="text_game">{t("Memory game")}</span>
                </button>

                <button onClick={() => navigate('/sudoku')} className="btn_game">
                    <img src={sudoku} alt="Sudoku" className="img_game"/>
                    <span className="text_game">{t("Sudoku")}</span>
                </button>
            </div>
        </div>
    );
};

export default Home;