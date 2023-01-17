import React from 'react';
import "./Title.css"

const Title = ({titleText, extraClassName = null, emoji = null}) => {
    return (
        <div className="title_wrapper">
            <h1 className={`game_title ${extraClassName}`}>{titleText}</h1>
            {emoji ? <span className="emoji_icon" role="img" aria-label="emoji">{emoji}</span> : <></>}
        </div>
    );
};

export default Title;