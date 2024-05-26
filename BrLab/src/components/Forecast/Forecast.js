import React from 'react'

import Headline from '../Headline/Headline'
import Button from '../Button/Button'

import './Forecast.scss'

const Forecast = () => {

    let forecastList = [
        {
            name: 'MIBR — Furia eSports',
            coefficient: '3.38'
        },
        {
            name: 'Марк Богданов - Даниил Ким',
            coefficient: '3.38'
        },
        {
            name: '«Квидинг» — «Оддевольд»',
            coefficient: '3.38'
        },
        {
            name: 'Рух Брест — Энергетик',
            coefficient: '3.38'
        },
        {
            name: 'SK Telecom N1 — DragonX',
            coefficient: '3.38'
        },
    ]

    return (
        <div className="forecast">
            <Headline className="headline--forecast" caption="Железные прогнозы"/>
            {
                forecastList.map((item, index) => {
                    return (
                        <div key={index} className="forecast__item">
                            <span>{item.name}</span>
                            <Button className="button--forecast" type="button" caption={item.coefficient}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Forecast
