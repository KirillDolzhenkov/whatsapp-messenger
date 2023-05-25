import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    className?: string
    isDisabled?: boolean
    type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    const {
        name,
        callBack,
        className = "",
        isDisabled = false,
        type = "button",
    } = props;

    const onclickHAndler = () => {
        callBack();
    }

    return (
        <button type={type} onClick={onclickHAndler} className={className} disabled={isDisabled}>{name}</button>
    )
}
