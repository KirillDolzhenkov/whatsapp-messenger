import React from "react";

import {Message} from "./Message";
import styles from "../assets/css/Messages.module.css";

export const Messages: React.FC = () => {
    return (
        <div className={`${styles.messages}`}>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}