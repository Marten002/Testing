import React, { memo } from 'react'

import './Input.scss'

const Input = ({ className, label, id, name, placeholder, value, error, disabled, handleInput, ...props }) => {
    return (
        <div className={`input ${className ? className : ''}`}>
            {
                label && <label htmlFor={id}>{label}</label>
            }
            <input
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                onInput={handleInput}
                {...props}
            />
            {
                (error && value !== null) && <span className="input__error">{error}</span>
            }
        </div>
    )
}

export default memo(Input, (prevProps, nextProps) => {
    if (prevProps === nextProps) {
        return true
    } else {
        return false
    }
})
