import React from 'react'

const Button = (props) => {
    const classes = `font-medium px-4 py-2 rounded-md shadow-sm sm:text-sm text-base border ${props.className ? props.className : ""}`;
    return (
        <button className={classes} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button
