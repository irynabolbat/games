import React from 'react';
import "./SudokuNumbers.css"

const SudokuNumbers = ({onClick, gameArray}) => {
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
                            <div className="status__number" key={number}/>
                        )
                    }
                    return (
                        <div className="status__number" key={number} onClick={() => onClick(number.toString())}>
                            {number}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SudokuNumbers;