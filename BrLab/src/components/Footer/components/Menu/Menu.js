import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../../../routes'

import './Menu.scss'

const Menu = () => {

    let menuList = [
        {
            path: Routes.footer.forecast,
            name: 'Прогнозы'
        },
        {
            path: Routes.footer.blog,
            name: 'Блоги'
        },
        {
            path: Routes.footer.statistic,
            name: 'Статистика'
        },
        {
            path: Routes.footer.rating,
            name: 'Рейтинг букмекеров'
        },
        {
            path: Routes.footer.tribune,
            name: 'Трибуна'
        },
        {
            path: Routes.footer.cappers,
            name: 'Капперы'
        },
        {
            path: Routes.footer.bonus,
            name: 'Бонусы'
        },
        {
            path: Routes.footer.match,
            name: 'Матч центр'
        },
        {
            path: Routes.footer.payment,
            name: 'Платные прогнозы'
        },
        {
            path: Routes.footer.express,
            name: 'Экспрессы'
        },
        {
            path: Routes.footer.guide,
            name: 'Гид по Ставкам'
        },
        {
            path: Routes.footer.us,
            name: 'О нас'
        },
        {
            path: Routes.footer.news,
            name: 'Новости'
        },
        {
            path: Routes.footer.live,
            name: 'Трансляции'
        },
    ]

    return (
        <div className="footer__menu">
            {
                menuList.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className="footer__item"
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Menu
