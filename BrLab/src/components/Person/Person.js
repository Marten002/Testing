import React from 'react'

import './Person.scss'

const Person = ({ image, caption, count }) => {
    return (
        <div className="person">
            <div className="person__image">
                <img src={image} alt="imagePerson"/>
            </div>
            <div className="person__caption">
                {caption}
            </div>
            <div className="person__count">
                {count}
            </div>
        </div>
    )
}

export default Person
