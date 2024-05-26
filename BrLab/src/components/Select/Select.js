import React, { useRef, useState } from 'react'

import useOnClickOutside from '../../Hooks/useOnClickOutside/useOnClickOutside'

import imageSelect from './images/Select.svg'

import './Select.scss'

const Select = ({ items }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState('15.06.2020, Пт')

    const handleClickSelect = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectValue = (value) => {
        setCurrentValue(value)
        setIsOpen(!isOpen)
    }

    const ref = useRef()
    useOnClickOutside(ref, () => setIsOpen(false))

    return (
        <div
            className="select"
            onClick={handleClickSelect}
            ref={ref}
        >
            <div className="select__current">
                {currentValue}
                <img src={imageSelect} alt="imageSelect"/>
            </div>
            {
                isOpen &&
                <div className="select__content">
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="select__item"
                                    onClick={() => handleSelectValue(item)}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Select
