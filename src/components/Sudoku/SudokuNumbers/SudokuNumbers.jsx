import React from 'react';
import "./SudokuNumbers.css"
import {useOutletContext} from "react-router-dom";

const SudokuNumbers = ({onClick, gameArray}) => {
    const {status} = useOutletContext()
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const countElements = (num) => {
        return gameArray.filter(el => el === num.toString()).length
    }

    return (
        <div className="status__numbers">
            {
                numbers.map((number) => {
                    const element = countElements(number)
                    if (element === 9) {
                        return (
                            <div className="status__number status__number__empty" key={number}/>
                        )
                    }
                    return (
                        <div
                            className={status === 2  ? "status__number" : "status__number status__number__active"}
                            key={number} onClick={status === 2 ? null :  () => onClick(number.toString())}>
                            {number}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SudokuNumbers;