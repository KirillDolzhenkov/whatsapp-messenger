import React from "react";

import styles from "../assets/css/Message.module.css";

export const Message: React.FC = () => {
    return (
        <div>
            <div className={`${styles.message}`}>
                {/*<div className={`${styles.messageInfo}`}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <span>just now</span>
            </div>*/}
                <div className={`${styles.messageContent}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae cum
                        doloremque eaque facere nam nihil saepe similique veritatis.
                        Ab, aliquid consequatur cum fugit iure iusto quis reiciendis sunt.</p>
                    {/* <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />*/}
                </div>
            </div>
            <div className={`${styles.message}  ${styles.owner}`}>
                {/*<div className={`${styles.messageInfo}`}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <span>just now</span>
            </div>*/}
                <div className={`${styles.messageContent}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae cum
                        doloremque eaque facere nam nihil saepe similique veritatis.
                        Ab, aliquid consequatur cum fugit iure iusto quis reiciendis sunt.</p>
                    {/* <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />*/}
                </div>
            </div>
        </div>

    )
}