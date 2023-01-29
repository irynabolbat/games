import React, {useMemo} from 'react';
import "./HintsModal.css"
import {XCircle} from "react-bootstrap-icons";
import {hints} from "../../../hints";
import {useTranslation} from "react-i18next";
import Title from "../../Base/Title/Title";

const HintsModal = ({active, setActive}) => {
    const {t} = useTranslation()

    const rValue = useMemo(() => hints[Math.floor(Math.random() * hints.length)], [active])

    return (
        <div className={active ? "modal_hints active" : "modal_hints"} onClick={() => setActive(!active)}>
            <div className={active ? "modal_content_hints active" : "modal_content_hints"}
                 onClick={e => e.stopPropagation()}>

                <div className="close_icon_hints_modal_wrapper" onClick={() => setActive(false)}>
                    <XCircle className="close_icon_hints_modal"/>
                </div>
                <div className="hint_wrapper">
                    <Title titleText={t(rValue.title)} extraClassName="hint_title"/>
                    <img src={rValue.img} className="hint_main_img" alt="hint"/>
                    <p>{t(rValue.text)}</p>
                    <div className="hint_img_container">
                        <img src={rValue.img_1} className="hint_img" alt="hint"/>
                        {rValue.img_2 ? <img src={rValue.img_2} className="hint_img" alt="hint"/> : <></>}
                        {rValue.img_3 ? <img src={rValue.img_3} className="hint_img" alt="hint"/> : <></>}
                        {rValue.img_4 ? <img src={rValue.img_4} className="hint_img" alt="hint"/> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HintsModal;