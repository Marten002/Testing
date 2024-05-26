import React, { memo } from 'react'

import { Routes } from '../../routes'

import Headline from '../../components/Headline/Headline'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/components/BreadcrumbItem/BreadcrumbItem'
import TabVariants from './components/TabVariants/TabVariants'
import Container from '../../components/Container/Container'
import Promotion from '../../components/Promotion/Promotion'
import Bookmaker from '../../components/Bookmaker/Bookmaker'
import Forecast from '../../components/Forecast/Forecast'

import './Home.scss'

const Home = () => {
    console.log('rerender home')
    return (
        <main className="home">
            <div className="home__container">
                <Container className="container--home">
                    <Container className="container--center">
                        <Headline
                            className="headline--home"
                            caption="Матч центр"
                        />
                        <Breadcrumb className="breadcrumb--home">
                            <BreadcrumbItem caption="Главная / " path={Routes.index} active={false}/>
                            <BreadcrumbItem caption="Матч центр" path={Routes.match} active={true}/>
                        </Breadcrumb>
                    </Container>
                    <TabVariants/>
                </Container>
                <Container className="container--aside">
                    <Promotion/>
                    <Bookmaker/>
                    <Forecast/>
                </Container>
            </div>
        </main>
    )
}

export default memo(Home)
