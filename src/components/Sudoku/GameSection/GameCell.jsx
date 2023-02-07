import React from 'react';
import "./GameSection.css"
import {useOutletContext} from "react-router-dom";

const GameCell = ({indexOfArray, selectCell, className, value}) => {
    const {status} = useOutletContext()
    const clickFunction = () => {
        selectCell(indexOfArray)
    }

    return (
        <td key={`${indexOfArray}-game-cell`} onClick={status === 2 ? null : clickFunction}
            className={`game__cell ${className}`}>
            {value}
        </td>
    );
};

export default GameCell;