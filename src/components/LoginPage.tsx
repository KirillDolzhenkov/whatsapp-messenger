import React from "react";

import styles from "../App.module.css"
import {Button} from "./Button";
import buttonStyles from "../assets/css/DefaultButton.module.css"

export const LoginPage: React.FC = () => {
    return (
            <div className={`${styles.formContainer}`}>
            <div className={`${styles.formWrapper}`}>
                <span className={`${styles.logo}`}>WhatsApp </span>
                <span className={`${styles.title}`}>Login</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <Button name={"Sign in"} className={`${buttonStyles.button}`} callBack={()=>{}}/>
                </form>
                <p>Don't have an account yet? Register</p>
            </div>
        </div>
    )
}
