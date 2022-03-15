import React from 'react'
import "./Button.css"

import {ButtonProps} from "./Button.types"

const Button = (props : ButtonProps) => {
    return (
        <input type="button" onClick={props.onClick} primary={props.primary} disabled={props.disabled} size={props.size} {...props}>
            {props.text}
        </input>
    )
}

export default Button;