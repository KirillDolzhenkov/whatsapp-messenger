import React from "react";

import styles from "../App.module.css"
import {Sidebar} from "./Sidebar";
import {Chat} from "./Chat";

export const HomePage: React.FC = () => {
    return (
        <div className={`${styles.home}`}>
            <div className={`${styles.homeContainer}`}>
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}