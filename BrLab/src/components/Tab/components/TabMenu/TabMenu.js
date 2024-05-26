import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { handleResolvePathname } from '../../../../utils'

import Badge from '../../../Badge/Badge'

import './TabMenu.scss'

const TabMenu = ({ items, configuration }) => {

    let location = useLocation()

    const { badge, icon } = configuration

    return (
        <div className="tab__nav">
            {
                items.map((item, index) => {
                    const Icon = item?.icon

                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className={`tab__link ${`/${(item.path.split('/'))[1]}` === handleResolvePathname(location.pathname) ? 'tab__link--active' : ''} ${item.className}`}
                        >
                            {
                                icon &&
                                <Icon/>
                            }
                            {
                                item.caption
                            }
                            {
                                (badge && badge !== 0) &&
                                <Badge className="badge--tab" caption={item.badge}/>
                            }
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default TabMenu
