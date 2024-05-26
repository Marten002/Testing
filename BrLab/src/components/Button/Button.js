import React from 'react'

import './Button.scss'

const Button = ({ className, type, handleClick, caption, image = false }) => {
    return (
        <button
            type={type}
            className={`button ${className ? className : ''}`}
            onClick={handleClick}
        >
            {
                caption &&
                caption
            }
            {
                image &&
                <img src={image} alt="imageButton"/>
            }
        </button>
    )
}

export default Button
