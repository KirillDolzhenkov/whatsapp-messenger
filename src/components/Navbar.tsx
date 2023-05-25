import React from "react";

import styles from "../assets/css/Navbar.module.css";
import {Button} from "./Button";

export const Navbar: React.FC = () => {
    return (
        <div className={`${styles.navbar}`}>
            <span className={`${styles.logo}`}>Whatsapp</span>
            <div className={`${styles.user}`}>
                <img src="" alt=""/>
                <span>Alex</span>
                <Button name={"logout"} className={`${styles.button}`} callBack={()=>{}}/>
            </div>
        </div>
    )
}