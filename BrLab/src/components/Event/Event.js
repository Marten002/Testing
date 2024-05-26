import React from 'react'

import imageEvent from './images/Gift.svg'

import './Event.scss'

const Event = () => {
    return (
        <div className="event">
            <img src={imageEvent} alt="imageEvent" className="event__image"/>
        </div>
    )
}

export default Event
