import React from "react";
import styles from "../assets/css/Search.module.css";

export const Chats: React.FC = () => {
    return (
        <div className={"chats"}>
            <div className={`${styles.userChat}`}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <div className={`${styles.userChatInfo}`}>
                    <span>Alise</span>
                    <p>Hi, what's up?</p>
                </div>
            </div>

            <div className={`${styles.userChat}`}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <div className={`${styles.userChatInfo}`}>
                    <span>Alise</span>
                    <p>Hi, what's up?</p>
                </div>
            </div>

            <div className={`${styles.userChat}`}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <div className={`${styles.userChatInfo}`}>
                    <span>Alise</span>
                    <p>Hi, what's up?</p>
                </div>
            </div>
        </div>
    )
}