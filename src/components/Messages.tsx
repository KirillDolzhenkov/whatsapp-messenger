import React, {useReducer} from "react";

import {Message} from "./Message";
import styles from "../assets/css/Messages.module.css";

export const Messages: React.FC = () => {

    const initialState: any = [
            {messageId: "1", message: "hello"},
            {messageId: "2", message: "hello"},
            {messageId: "3", message: "hello"},
    ]

   /* const [messages, dispatch] = useReducer(messagesReducer, initialState);*/

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