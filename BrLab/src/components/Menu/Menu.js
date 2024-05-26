import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Routes } from '../../routes'

import './Menu.scss'

const Menu = () => {

    let location = useLocation()
    
    let menuList = [
        {
            path: Routes.header.forecast,
            name: 'Прогнозы'
        },
        {
            path: Routes.header.expert,
            name: 'Прогнозы от экспертов'
        },
        {
            path: Routes.header.rating,
            name: 'Рейтинг букмекеров'
        },
        {
            path: Routes.header.bonus,
            name: 'Бонусы'
        },
        {
            path: Routes.header.express,
            name: 'Экспрессы'
        },
        {
            path: Routes.header.news,
            name: 'Новости'
        },
        {
            path: Routes.header.other,
            name: 'Еще…'
        }
    ]
    
    return (
        <nav className="menu">
            <ul className="menu__list">
                {
                    menuList.map((item, index) => {
                        return (
                            <li key={index} className="menu__item">
                                <Link to={item.path} className={`menu__link ${item.path === location.pathname ? 'menu__link--active' : ''}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Menu
