import React, { memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { Routes } from '../../../../routes'

import { handleResolvePathname } from '../../../../utils'

import Football from './contents/Football/Football'
import Hockey from './contents/Hockey/Hockey'
import Tennis from './contents/Tennis/Tennis'
import Basketball from './contents/Basketball/Basketball'
import Tab from '../../../../components/Tab/Tab'

import TabMenu from '../../../../components/Tab/components/TabMenu/TabMenu'
import TabPanel from '../../../../components/Tab/components/TabPanel/TabPanel'

import { Football as iconFootball } from './icons/Football'
import { Hockey as iconHockey } from './icons/Hockey'
import { Tennis as iconTennis } from './icons/Tennis'
import { Basketball as iconBasketball } from './icons/Basketball'

import './TabVariants.scss'

const TabVariants = () => {

    let location = useLocation()

    let component = useMemo(() => {
        switch (handleResolvePathname(location.pathname)) {
            case Routes.page.football || Routes.index:
                return 'football'
            case Routes.page.hockey:
                return 'hockey'
            case Routes.page.tennis:
                return 'tennis'
            case Routes.page.basketball:
                return 'basketball'
            default:
                return '/'
        }
    }, [location.pathname])

    let tabVariantsList = [
        {
            path: Routes.page.footballIndex,
            className: location.pathname === Routes.index ? 'tab__link--active' : '',
            icon: iconFootball,
            caption: 'Футбол',
            badge: 127
        },
        {
            path: Routes.page.hockeyIndex,
            className: '',
            icon: iconHockey,
            caption: 'Хоккей',
            badge: 0
        },
        {
            path: Routes.page.tennisIndex,
            className: '',
            icon: iconTennis,
            caption: 'Тенис',
            badge: 1
        },
        {
            path: Routes.page.basketballIndex,
            className: '',
            icon: iconBasketball,
            caption: 'Баскетбол',
            badge: 0
        }
    ]

    const handleSwitchComponent = () => {
        switch (component) {
            case 'football':
                return <Football/>
            case 'hockey':
                return <Hockey/>
            case 'tennis':
                return <Tennis/>
            case 'basketball':
                return <Basketball/>
            default:
                return <Football/>
        }
    }
    
    return (
        <Tab className="tab--variants">
            <TabMenu
                items={tabVariantsList}
                configuration={{
                    badge: true,
                    icon: true
                }}
            />
            <TabPanel>
                {handleSwitchComponent()}
            </TabPanel>
        </Tab>
    )
}

export default memo(TabVariants)
