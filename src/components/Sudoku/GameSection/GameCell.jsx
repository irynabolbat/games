import React from 'react';
import "./GameSection.css"

const GameCell = ({indexOfArray, selectCell, className, value}) => {
    const clickFunction = () => {
        selectCell(indexOfArray)
    }

    return (
        <td key={`${indexOfArray}-game-cell`} onClick={clickFunction}
            className={`game__cell ${className}`}>
            {value}
        </td>
    );
};

export default GameCell;