import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import useOnClickOutside from '../../Hooks/useOnClickOutside/useOnClickOutside'

import imageLanguage from './images/Language.svg'

import './Language.scss'

const Language = () => {

    const { i18n } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const handleCurrentLanguage = () => {
        return i18n.language.toUpperCase().slice(0, 2)
    }

    const handleClickDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectLanguage = (language) => {

        handleChangeLanguage(language)

        setIsOpen(!isOpen)
    }

    const ref = useRef()
    useOnClickOutside(ref, () => setIsOpen(false))

    return (
        <div
            className="language"
            onClick={handleClickDropdown}
            ref={ref}
        >
            <div className="language__current">
                <img src={imageLanguage} alt="imageLanguage"/>
                {handleCurrentLanguage()}
            </div>
            {
                isOpen &&
                <div className="language__content">
                    <div
                        className="language__item"
                        onClick={() => handleSelectLanguage('ru')}
                    >
                        RU
                    </div>
                    <div
                        className="language__item"
                        onClick={() => handleSelectLanguage('en')}
                    >
                        EN
                    </div>
                </div>
            }
        </div>
    )
}

export default Language
