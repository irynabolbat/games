import React, {useState} from 'react';
import "./SudokuTools.css"
import {ArrowCounterclockwise, Eraser, Lightbulb} from "react-bootstrap-icons";
import HintsModal from "../HintsModal/HintsModal";

const SudokuTools = ({cansel, cleanCell}) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="tools_wrapper">
            <ArrowCounterclockwise className="tools_icon" onClick={cansel}/>
            <Eraser className="tools_icon" onClick={cleanCell}/>
            <Lightbulb className="tools_icon" onClick={() => setModalActive(true)}/>
            <HintsModal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default SudokuTools;