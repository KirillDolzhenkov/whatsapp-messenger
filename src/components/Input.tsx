import React from "react";

import styles from "../assets/css/Input.module.css";
import { Button } from "./Button";

export const Input: React.FC = () => {
    return (
        <div className={`${styles.input}`}>
            <input type="text" placeholder="Write something..."/>
            <div className={`${styles.send}`}>
                <Button name={"Send"} callBack={()=>{}}/>
            </div>
        </div>
    )
}