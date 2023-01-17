import React, {useEffect, useState} from 'react';
import "./SudokuDesk.css"
import GameSection from "../GameSection/GameSection";
import {getUniqueSudoku} from "../uniqueSudoku";
import SudokuNumbers from "../SudokuNumbers/SudokuNumbers";
import {useNavigate, useOutletContext} from "react-router-dom";
import Timer from "../../Timer/Timer";
import SudokuTools from "../SudokuTools/SudokuTools";

const SudokuDesk = () => {
    const {
        history,
        setHistory,
        solvedArray,
        setSolvedArray,
        difficulty,
        setTimeHistory,
        time,
        reset,
        start
    } = useOutletContext()

    const [temporaryInitArray, temporarySolvedArray] = getUniqueSudoku(difficulty);

    const [gameArray, setGameArray] = useState(temporaryInitArray)
    const [initArray, setInitArray] = useState(temporaryInitArray)
    const [cellSelected, setCellSelected] = useState(-1)

    const navigate = useNavigate()

    useEffect(() => {
        setSolvedArray(temporarySolvedArray)
    }, [])

    const isSolved = (index, value) => {
        if (gameArray.every((cell, cellIndex) => {
            if (cellIndex === index) {
                return value === solvedArray[cellIndex]
            } else {
                return cell === solvedArray[cellIndex]
            }
        })) {
            return true
        }
        return false
    }

    const fillCell = (index, value) => {
        if (initArray[index] === "0") {
            let tempArray = gameArray.slice()
            let tempHistory = history.slice();

            tempHistory.push(gameArray.slice());
            setHistory(tempHistory);

            tempArray[index] = value
            setGameArray(tempArray);

            if (isSolved(index, value)) {
                navigate("/sudoku/won_page")
                setTimeHistory(`${time.h >= 10 ? time.h : "0" + time.h}:${time.m >= 10 ? time.m : "0" + time.m}:${time.s >= 10 ? time.s : "0" + time.s}:${time.ms >= 10 ? time.ms : "0" + time.ms}`)
                reset()
            }
        }
    }

    const userFillCell = (index, value) => {
        fillCell(index, value)
        history.push(value)
    }

    const handleNumberClick = (number) => {
        userFillCell(cellSelected, number);
    }

    const handleCelledClick = (index) => {
        setCellSelected(index)
    }

    const onClickCansel = () => {
        if (history.length) {
            let tempHistory = history.slice();
            let tempArray = tempHistory.pop();
            setHistory(tempHistory);
            if (tempArray !== undefined)
                setGameArray(tempArray);
        }
    }

    const handleCleanCell = () => {
        userFillCell(cellSelected, "0")
    }

    useEffect(() => {
        start()
        document.getElementById("sudoku_desk_wrapper").scrollIntoView();
    }, [])

    return (
        <div className="sudoku_desk_wrapper" id={"sudoku_desk_wrapper"}>
            <div className="mob_timer"><Timer/></div>
            <GameSection gameArray={gameArray} initArray={initArray} onClick={handleCelledClick}
                         cellSelected={cellSelected} solvedArray={solvedArray}/>
            <div className="sudoku_all_tools">
                <div className="web_timer"><Timer/></div>
                <SudokuNumbers onClick={handleNumberClick} gameArray={gameArray}/>
                <SudokuTools cansel={onClickCansel} cleanCell={handleCleanCell}/>
            </div>
        </div>
    );
}
export default SudokuDesk;