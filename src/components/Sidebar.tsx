import React from "react";

import styles from "../App.module.css";
import {Navbar} from "./Navbar";

export const Sidebar: React.FC = () => {
    return (
        <div className={`${styles.sidebar}`}>
            <Navbar/>
        </div>
    )
}