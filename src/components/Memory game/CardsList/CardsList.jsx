import React, {useEffect, useState} from 'react';
import "./CardsList.css"
import Card from "../Card/Card";
import {showCards} from "../../../cards";
import {useNavigate, useOutletContext} from "react-router-dom";
import Timer from "../../Timer/Timer";
import {useTranslation} from "react-i18next";
import {getObjLocalStorage} from "../../../helpers";

const CardsList = () => {
    const {
        cardsNumber,
        time,
        setTimeHistory,
        reset,
        click,
        setClick,
        sameCards,
        setSameCards,
        start
    } = useOutletContext()

    const [prevState, setPrevState] = useState(-1)
    const [cards, setCards] = useState(getObjLocalStorage("memoryCards", showCards(cardsNumber)))

    const navigate = useNavigate()
    const {t} = useTranslation()

    let className = "cards_list_wrapper"

    if (cardsNumber === 3) {
        className = "cards_list_wrapper"
    }
    if (cardsNumber === 6) {
        className = "cards_list_wrapper cards_list_wrapper_middle"
    }
    if (cardsNumber === 10) {
        className = "cards_list_wrapper cards_list_wrapper_hard"
    }

    const setCardsLocalStorage = (memoryCards) => {
        localStorage.setItem("memoryCards", JSON.stringify(memoryCards))
        setCards(memoryCards)
    }

    const checkCards = (current) => {
        if (cards[current].id === cards[prevState].id) {
            cards[current].status = "correct"
            cards[prevState].status = "correct"
            setCardsLocalStorage([...cards])
            setPrevState(-1)
        } else {
            cards[current].status = "wrong"
            cards[prevState].status = "wrong"
            setCardsLocalStorage([...cards])
            setTimeout(() => {
                cards[current].status = ""
                cards[prevState].status = ""
                setCardsLocalStorage([...cards])
                setPrevState(-1)
            }, 500)
        }

        if (cards.filter(el => el.status === "correct").length === cardsNumber * 2) {
            setSameCards(cardsNumber)
            wonGame()
        }
    }

    const wonGame = () => {
        navigate("/memory_game/won_page")
        setTimeHistory(`${time.h >= 10 ? time.h : "0" + time.h}:${time.m >= 10 ? time.m : "0" + time.m}:${time.s >= 10 ? time.s : "0" + time.s}:${time.ms >= 10 ? time.ms : "0" + time.ms}`)
        reset()
        cards.map((el) => {
            el.status = ""
        })
    }

    const clickHandler = (index) => {
        setClick(click + 1)
        if (prevState === -1) {
            cards[index].status = "active"
            setCardsLocalStorage([...cards])
            setPrevState(index)
        } else {
            checkCards(index)
            setCardsLocalStorage([...cards])
        }
        console.log(cards.filter(el => el.status === "active"))
    }

    useEffect(() => {
        start()
        document.getElementById("cards_list_wrapper").scrollIntoView();
    }, [])

    return (
        <div className="card_list">
            <div className="memory_game_info">{t("Clk")} <span>{click}</span></div>
            <div className="memory_game_info">{t("Same cards:")} <span>{sameCards}</span></div>
            <Timer/>
            <div className={className} id="cards_list_wrapper">
                {cards.map((card, index) => {
                    return <Card card={card} key={index} index={index} clickHandler={clickHandler}/>
                })}
            </div>
        </div>
    );
};

export default CardsList;