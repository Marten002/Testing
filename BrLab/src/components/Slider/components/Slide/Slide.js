import React from 'react'

import Button from '../../../Button/Button'

import './Slide.scss'

const Slide = ({ item }) => {
    return (
        <div className="slide">
            <div className="slide__container">
                <div className="slide__clubs">
                    <div className="slide__club">
                        <img src={item.club1.image} alt="imageClub"/>
                        <span>{item.club1.name}</span>
                    </div>
                    <div className="slide__club">
                        <img src={item.club2.image} alt="imageClub"/>
                        <span>{item.club2.name}</span>
                    </div>
                </div>
                <div className="slide__date">
                    <span>{item.time}</span>
                    <span>{item.date}</span>
                </div>
            </div>
            <div className="slide__coefficient">
                {
                    item.coefficient.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                className="button--coefficient"
                                type="button"
                                caption={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slide
