import React, { memo } from 'react'

import './Button.scss'

const Button = ({ className, children, disabled, ...props }) => {
    return (
        <button
            className={`button ${className ? className : ''}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default memo(Button, (prevProps, nextProps) => {
    if (prevProps === nextProps) {
        return true
    } else {
        return false
    }
})
