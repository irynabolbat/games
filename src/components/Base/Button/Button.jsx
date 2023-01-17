import React from 'react';
import "./Button.css"

const Button = ({click, btnText}) => {
    return (
        <button className="game_btn" onClick={click}>{btnText}</button>
    );
};

export default Button;