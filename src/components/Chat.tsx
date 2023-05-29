import React from "react";

import styles from "../../src/assets/css/Chat.module.css";
import {Messages} from "./Messages";
import {Input} from "./Input";

export const Chat: React.FC = () => {
    return (
        <div className={`${styles.chat}`}>
            <div className={`${styles.chatInfo}`}>
                <div className={`${styles.user}`}>
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <span>Alise</span>
                </div>
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