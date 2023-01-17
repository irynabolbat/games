import React, {useState} from 'react';
import {useNavigate, useOutletContext} from "react-router-dom";
import Levels from "../../Base/Levels/Levels";

const SudokuLevels = ({modalActive, setModalActive}) => {
    const {setDifficulty, start, reset} = useOutletContext()

    const [level, setLevel] = useState("Choose your level:")
    const [active, setActive] = useState(false)

    const navigate = useNavigate()

    const handlerClick = (difficultyLevel, level) => {
        setDifficulty(difficultyLevel)
        setLevel(level)
        setActive(false)
    }

    const startGame = () => {
        if (modalActive === true) {
            setModalActive(false)
            document.location.reload()
        }
        navigate("/sudoku/play")
        reset()
        start()
    }

    return (
        <Levels active={active} setActive={setActive} level={level} click={handlerClick} startGame={startGame}/>
    );
};

export default SudokuLevels;