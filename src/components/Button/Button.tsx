import React, {FC} from 'react'

import {ButtonProps} from "./Button.types"

const Button : FC<ButtonProps> = ({size, primary, disabled, text, onClick, ...props}) => {
    return (
        <input type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
            {text}
        </input>
    )
}

export default Button;