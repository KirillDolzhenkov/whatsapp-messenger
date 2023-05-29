import React from "react";

import styles from "../assets/css/Navbar.module.css";
import {Button} from "./Button";

export const Navbar: React.FC = () => {
    return (
        <div className={`${styles.navbar}`}>
            {/*<span className={`${styles.logo}`}>Whatsapp</span>*/}
            <div className={`${styles.user}`}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                     alt=""
                />
                <span>Alex</span>
                {/*<Button name={"logout"} className={`${styles.button}`} callBack={()=>{}}/>*/}
            </div>
            <Button name={"logout"} className={`${styles.button}`} callBack={()=>{}}/>
        </div>
    )
}