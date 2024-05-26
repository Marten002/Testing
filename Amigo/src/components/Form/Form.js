import React from 'react'

import './Form.scss'

const Form = ({ className, handleSubmit, children }) => {
    return (
        <form
            className={`form ${className ? className : ''}`}
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    )
}

export default Form
