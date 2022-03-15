import React from 'react'
import "./Button.scss"

import {ButtonProps} from "./Button.types"

const Button = (props : ButtonProps) => {
    return (
        <button type="button" onClick={props.onClick} primary={props.primary} disabled={props.disabled} size={props.size} {...props}>
            {props.text}
        </button>
    )
}

export default Button;