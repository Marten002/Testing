import React, { memo, useEffect, useRef, useState } from 'react'

import useOnClickOutside from '../../Hooks/useOnClickOutside'

import imageArrow from './images/Arrow.svg'

import './Select.scss'

const Select = ({ className, label, id, name, value, error, list, handleChange }) => {
    const ref = useRef()

    const [isOpen, setIsOpen] = useState(false)

    const handleSetIsOpen = () => {
        setIsOpen(!isOpen)
    }

    useOnClickOutside(ref, () => setIsOpen(false))

    const [valueCustom, setValueCustom] = useState(label || 'Выбрать...')

    const handleSetValue = (event) => {
        setValueCustom(event.target.innerText)
        setIsOpen(false)
    }

    useEffect(() => {
        if (valueCustom === label) {
            return false
        } else {
            handleChange({
                target: {
                    name: name,
                    value: valueCustom
                }
            })
        }
    }, [valueCustom])

    return (
        <div
            ref={ref}
            className={`select ${className ? className : ''}`}
            id={id}
            onClick={handleSetIsOpen}
        >
            {
                label && <label htmlFor={id}>{label}</label>
            }
            <div className={`select__current ${isOpen ? 'select__current--active' : ''}`}>
                <span className={valueCustom === label ? 'select__placeholder' : ''}>{valueCustom}</span>
                <img src={imageArrow} alt="imageArrow"/>
            </div>
            {
                isOpen &&
                <div className="select__list">
                    {
                        list.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="select__item"
                                    onClick={handleSetValue}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            }
            {/*   Вывод ошибки   */}
            {/*{*/}
            {/*    (error && value !== null) && <span className="select__error">{error}</span>*/}
            {/*}*/}
        </div>
    )
}

export default memo(Select, (prevProps, nextProps) => {
    if (prevProps === nextProps) {
        return true
    } else {
        return false
    }
})
