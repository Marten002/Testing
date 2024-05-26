import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../routes'

import Logo from './components/Logo/Logo'
import Language from '../Language/Language'
import Menu from './components/Menu/Menu'
import Button from '../Button/Button'
import Social from '../Social/Social'
import Confines from '../Confines/Confines'
import Container from '../Container/Container'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Container className="container--information">
                    <Container className="container--footer">
                        <Logo/>
                        <Language/>
                    </Container>
                    <div className="footer__information">
                        <span>© 2011-2020 «Всё про спорт.ру»</span>
                        <span>Любое использование материалов приветствуется при гиперссылке.</span>
                        <span>Свидетельство о регистрации СМИ Эл. № ФС77-73932</span>
                        <Link to={Routes.privacy}>Политика конфиденциальности</Link>
                        <Link to={Routes.legal}>Пользовательское соглашение</Link>
                    </div>
                </Container>
                <Menu/>
                <Container className="container--social">
                    <Link to={Routes.contacts}>
                        <Button className="button--footer" caption="Связаться с нами" type="button"/>
                    </Link>
                    <Social/>
                    <Confines age="18+"/>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
