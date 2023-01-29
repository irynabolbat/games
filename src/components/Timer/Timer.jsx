import React from 'react';
import "./Timer.css"
import {PauseFill, PlayFill} from "react-bootstrap-icons";
import {useOutletContext} from "react-router-dom";

const Timer = () => {
    const {time, status, pause, resume} = useOutletContext()

    return (
        <div className="timer_wrapper" id="timer">
            <div className="timer">
                <span className="time">{(time.h >= 10 ? time.h : "0" + time.h)}</span>
                <span className="time_division">:</span>
                <span className="time">{(time.m >= 10 ? time.m : "0" + time.m)}</span>
                <span className="time_division">:</span>
                <span className="time">{(time.s >= 10 ? time.s : "0" + time.s)}</span>
                <span className="time_division">:</span>
                <span className="time">{(time.ms >= 10 ? time.ms : "0" + time.ms)}</span>
            </div>

            {status === 1
                ? <button className="timer_button" onClick={pause}><PauseFill className="timer_icon"/></button>
                : ""
            }

            {status === 2
                ? <button className="timer_button" onClick={resume}><PlayFill className="timer_icon"/></button>
                : ""
            }
        </div>
    );
};

export default Timer;