import React from 'react'

import imagePromotion from './images/Promotion.png'

import './Promotion.scss'

const Promotion = () => {
    return (
        <div className="promotion">
            <img src={imagePromotion} alt="imagePromotion" className="promotion__image"/>
        </div>
    )
}

export default Promotion
