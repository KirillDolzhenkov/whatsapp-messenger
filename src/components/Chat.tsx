import React from "react";

import styles from "../../src/assets/css/Chat.module.css";
import {Messages} from "./Messages";
import {Input} from "./Input";

export const Chat: React.FC = () => {
    return (
        <div className={`${styles.chat}`}>
            <div className={`${styles.chatInfo}`}>
                <span>Alise</span>
                {/*<div className={`${styles.chatIcons}`}>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>*/}
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}