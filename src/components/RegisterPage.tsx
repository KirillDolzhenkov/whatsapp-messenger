import React, {useState} from "react";

import styles from "../App.module.css"
import {Button} from "./Button";
import buttonStyles from "../assets/css/DefaultButton.module.css";

export const RegisterPage: React.FC = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password === confirmPassword) {
            // пароль и его подтверждение совпадают, отправляем форму
            console.log("Форма отправлена");
            //onSubmit(username, password);
        } else {
            // пароль и его подтверждение не совпадают, выводим ошибку
            console.log("Пароль и его подтверждение не совпадают");
        }
    }

    return (
            <div className={`${styles.formContainer}`}>
            <div className={`${styles.formWrapper}`}>
                <span className={`${styles.logo}`}>WhatsApp </span>
                <span className={`${styles.title}`}>Register</span>
                {/*<form>*/}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <input
                        type="password"
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <Button
                        type={"submit"}
                        className={`${buttonStyles.button}`}
                        name={"Sign up"}
                        callBack={()=>handleSubmit}
                    />
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}
