import React from "react";

import styles from "../App.module.css"
import {Button} from "./Button";

export const LoginPage: React.FC = () => {
    return (
            <div className={`${styles.formContainer}`}>
            <div className={`${styles.formWrapper}`}>
                <span className={`${styles.logo}`}>whatsapp </span>
                <span className={`${styles.title}`}>login</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <Button name={"Sign in"} callBack={()=>{}}/>
                </form>
                <p>Don't have an account yet? Register</p>
            </div>
        </div>
    )
}
