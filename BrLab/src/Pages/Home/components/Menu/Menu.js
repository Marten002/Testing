import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Routes } from '../../../../routes'

import Badge from '../../../../components/Badge/Badge'

const Menu = ({ page }) => {

    let location = useLocation()

    const menuList = [
        {
            name: 'Все',
            path: Routes.type.all,
            className: location.pathname === Routes.index ? 'menu__link--active' : '',
            badge: '127'
        },
        {
            name: 'Live',
            path: Routes.type.live,
            className: '',
            badge: '2'
        },
        {
            name: 'Завершенные',
            path: Routes.type.completed,
            className: '',
            badge: '57'
        },
        {
            name: 'Запланированные',
            path: Routes.type.planned,
            className: '',
            badge: '73'
        },
        {
            name: 'С прогнозами',
            path: Routes.type.forecast,
            className: '',
        },
        {
            name: 'Лучшие коэффиценты',
            path: Routes.type.best,
            className: '',
        },
    ]

    return (
        <div className="menu">
            <ul className="menu__list">
                {
                    menuList.map((item, index) => {
                        return (
                            <li key={index} className="menu__item">
                                <Link
                                    key={index}
                                    to={page + item.path}
                                    className={`menu__link ${page + item.path === location.pathname ? 'menu__link--active' : ''} ${item.className}`}
                                >
                                    {item.name}
                                    {
                                        item.badge &&
                                        <Badge className="badge--menu" caption={item.badge}/>
                                    }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Menu
