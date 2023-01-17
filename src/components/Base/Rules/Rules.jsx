import React from 'react';
import "./Rules.css"
import Title from "../Title/Title";

const Rules = ({title, arrOfRules}) => {
    return (
        <div>
            <Title titleText={title} extraClassName={"game_rules_title"}/>
            <ul className="game_rules_container">
                {arrOfRules.map((rule, index) =>
                    <li key={index + 1}>{rule}</li>
                )}
            </ul>
        </div>
    );
};

export default Rules;