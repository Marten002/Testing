import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../routes'

import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import Event from '../Event/Event'
import Search from '../Search/Search'
import Button from '../Button/Button'
import Container from '../Container/Container'

import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to={Routes.index}>
                    <Logo/>
                </Link>
                <Menu/>
                <Container className="container--header">
                    <Link to={Routes.event}>
                        <Event/>
                    </Link>
                    <Link to={Routes.search}>
                        <Search/>
                    </Link>
                    <Link to={Routes.auth.entry}>
                        <Button
                            className="button--header"
                            type="button"
                            caption="Войти"
                        />
                    </Link>
                </Container>
            </div>
        </header>
    )
}

export default Header
