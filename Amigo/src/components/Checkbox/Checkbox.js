import React, { memo, useState } from 'react'

import imageCheck from './images/Check.svg'

import './Checkbox.scss'

const CheckBox = ({ className, label, id, name, value, error, handleChange }) => {

    const [checked, setChecked] = useState(value || false)

    const handleSetValue = () => {
        setChecked(!checked)
        handleChange({target: {name: name, value: !checked}})
    }

    return (
        <div className={`checkbox ${className ? className : ''}`}>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={handleSetValue}
            />
            <span
                className={`checkbox__mark ${checked ? 'checkbox__mark--checked' : ''}`}
                onClick={handleSetValue}
            >
                <img src={imageCheck} alt="imageCheck"/>
            </span>
            <label htmlFor={name}>{label}</label>
            {/*   Вывод ошибки   */}
            {/*{*/}
            {/*    (error && value !== null) && <span className="checkbox__error">{error}</span>*/}
            {/*}*/}
        </div>
    )
}

export default memo(CheckBox, (prevProps, nextProps) => {
    if (prevProps === nextProps) {
        return true
    } else {
        return false
    }
})
