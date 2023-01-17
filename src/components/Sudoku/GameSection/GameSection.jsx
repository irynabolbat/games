import React from 'react';
import "./GameSection.css"
import GameCell from "./GameCell";

const GameSection = ({gameArray = [], initArray, cellSelected, onClick, solvedArray}) => {
        const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

        const indexOfRow = Math.floor(cellSelected / 9)
        const startOfRowIndex = indexOfRow * 9
        const endOfRowIndex = startOfRowIndex + 8
        const indexOfCol = cellSelected - startOfRowIndex;
        const selectedCellValue = gameArray[cellSelected]

        const getSquare = () => {
            const indexSquareStartRow = Math.floor(indexOfRow / 3)
            const indexSquareStartCol = Math.floor(indexOfCol / 3)
            const squareArray = []
            const startSquareCell = 27 * indexSquareStartRow + 3 * indexSquareStartCol
            for (let i = 0; i < 3; i++) {
                for (let x = 0; x < 3; x++) {
                    squareArray.push(startSquareCell + (i * 9) + x)
                }
            }
            return squareArray
        }

        const rowCollSelected = (indexOfArray) => {
            const collIndexes = []
            for (let i = 0; i <= 9; i++) {
                collIndexes.push(9 * i + indexOfCol)
            }

            const isRow = indexOfArray >= startOfRowIndex && indexOfArray <= endOfRowIndex;
            const isColumn = collIndexes.includes(indexOfArray)
            const isSquad = getSquare().includes(indexOfArray)

            return isRow || isColumn || isSquad
        }

        const selectedCell = (indexOfArray, value, highlight, isActive, isSameNum) => {
            const rowClass = isActive ? "row__selected" : ""
            const numClass = isSameNum ? "same_num" : ""
            const rowData = {
                indexOfArray: indexOfArray,
                selectCell: onClick,
                value: value,
            }

            if (value !== "0") {
                if (initArray[indexOfArray] === "0") {
                    const extraClass = gameArray[indexOfArray] === solvedArray[indexOfArray] ? '' : "red"
                    return <GameCell {...rowData}
                                     className={`game__cell--userfilled game__cell--${highlight}selected ${extraClass} ${rowClass} ${numClass}`}/>
                } else {
                    return <GameCell {...rowData}
                                     className={`game__cell--filled game__cell--${highlight}selected ${rowClass} ${numClass}`}/>
                }
            } else {
                return <GameCell {...rowData} className={`game__cell--${highlight}selected ${rowClass}`}/>
            }
        }

        const unSelectedCell = (indexOfArray, value, isActive, isSameNum) => {
            const rowClass = isActive ? "row__selected" : ""
            const numClass = isSameNum ? "same_num" : ""
            const rowData = {
                indexOfArray: indexOfArray,
                selectCell: onClick,
                value: value,
            }
            if (value !== "0") {
                if (initArray[indexOfArray] === "0") {
                    const extraClass = gameArray[indexOfArray] === solvedArray[indexOfArray] ? '' : "red"
                    return <GameCell {...rowData}
                                     className={`game__cell--userfilled ${extraClass} ${rowClass} ${numClass}`}/>

                } else {
                    return <GameCell {...rowData} className={`game__cell--filled ${rowClass} ${numClass}`}/>
                }
            }
            return <GameCell {...rowData} className={`${rowClass}`}/>
        }

        const isCellSameAsSelected = () => {
            return true
        }

        return (
            <section className="game">
                <table className="game__board">
                    <tbody>
                    {
                        rows.map((row, index) => {
                            return (
                                <tr className="game__row" key={index + 1}>
                                    {
                                        rows.map((col) => {
                                            const indexOfArray = row * 9 + col
                                            const value = gameArray[indexOfArray]

                                            const isActive = rowCollSelected(indexOfArray);
                                            const isSameNum = selectedCellValue === value

                                            if (indexOfArray === cellSelected) {
                                                return selectedCell(indexOfArray, value, "highlight", isActive, isSameNum)
                                            }

                                            if (cellSelected === -1 && isCellSameAsSelected(row, col)) {
                                                return selectedCell(indexOfArray, value, "", isActive, isSameNum)
                                            } else {
                                                return unSelectedCell(indexOfArray, value, isActive, isSameNum)
                                            }
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>
        );
    }
;

export default GameSection;