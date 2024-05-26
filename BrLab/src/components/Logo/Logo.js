import React from 'react'

import logoImage from './images/logo.svg'

import './Logo.scss'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImage} alt="logoImage" className="logo__image"/>
        </div>
    )
}

export default Logo
