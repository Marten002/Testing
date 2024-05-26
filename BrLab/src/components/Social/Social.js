import React from 'react'

import imageTelegram from './images/Telegram.svg'
import imageFacebook from './images/Facebook.svg'
import imageTwitter from './images/Twitter.svg'
import imageInstagram from './images/Instagram.svg'
import imageVk from './images/Vk.svg'

import './Social.scss'

const Social = () => {

    let socialList = [
        {
            icon: imageTelegram,
            path: 'https://www.google.com/'
        },
        {
            icon: imageFacebook,
            path: 'https://www.google.com/'
        },
        {
            icon: imageTwitter,
            path: 'https://www.google.com/'
        },
        {
            icon: imageInstagram,
            path: 'https://www.google.com/'
        },
        {
            icon: imageVk,
            path: 'https://www.google.com/'
        },
    ]

    return (
        <div className="social">
            <div className="social__caption">
                Мы в социальных сетях:
            </div>
            <div className="social__content">
                {
                    socialList.map((item, index) => {
                        return (
                            <a key={index} href={item.path} target="_blank" rel="noopener noreferrer">
                                <img src={item.icon} alt="imageSocial"/>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Social
