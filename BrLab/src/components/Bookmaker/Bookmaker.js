import React from 'react'

import Headline from '../Headline/Headline'
import Button from '../Button/Button'

import imageBitmap from './images/Bitmap.png'
import imageBitmap1 from './images/Bitmap1.png'
import imageBitmap2 from './images/Bitmap2.png'
import imageBitmap3 from './images/Bitmap3.png'
import imageBitmap4 from './images/Bitmap4.png'
import imageBitmap5 from './images/Bitmap5.png'
import imageBitmap6 from './images/Bitmap6.png'
import imageBitmap7 from './images/Bitmap7.png'

import './Bookmaker.scss'

const Bookmaker = () => {

    let bookmakerList = [
        {
            image: imageBitmap,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap1,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap2,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap3,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap4,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap5,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap6,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
        {
            image: imageBitmap7,
            rate: {
                from: '5',
                to: '5'
            },
            link: 'https://www.google.com/'
        },
    ]

    return (
        <div className="bookmaker">
            <Headline className="headline--bookmaker" caption="Популярные букмекеры"/>
            {
                bookmakerList.map((item, index) => {
                    return (
                        <div key={index} className="bookmaker__item">
                            <img src={item.image} alt="imageBookmaker"/>
                            <span>{item.rate.from}/{item.rate.to}</span>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <Button type="button" className="button--bookmaker" caption="На сайт"/>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Bookmaker
