import React from "react";

import styles from "../App.module.css";
import {Navbar} from "./Navbar";
import {Search} from "./Search";
import {Chats} from "./Chats";

export const Sidebar: React.FC = () => {
    return (
        <div className={`${styles.sidebar}`}>
            <Navbar/>
            <Search/>
            <Chats/>
        </div>
    )
}