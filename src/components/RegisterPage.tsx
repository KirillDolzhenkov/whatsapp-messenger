import React, {useState} from "react";

import styles from "../App.module.css"
import {Button} from "./Button";

export const RegisterPage: React.FC = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (password === confirmPassword) {
            // пароль и его подтверждение совпадают, отправляем форму
            console.log("Форма отправлена");
        } else {
            // пароль и его подтверждение не совпадают, выводим ошибку
            console.log("Пароль и его подтверждение не совпадают");
        }
    }

    return (
            <div className={`${styles.formContainer}`}>
            <div className={`${styles.formWrapper}`}>
                <span className={`${styles.logo}`}>whatsapp </span>
                <span className={`${styles.title}`}>register</span>
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
                    <Button name={"Sign up"} callBack={()=>{}}/>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}
