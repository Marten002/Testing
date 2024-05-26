import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../../../routes'

import Container from '../../../Container/Container'

import imagePlay from './images/Play.svg'

import imageUp from './images/Up.svg'
import imageDown from './images/Down.svg'

import './TableBody.scss'

const TableBody = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => {
                    const { person, fromTime, watchTrigger, lostTime } = item
                    return (
                        <Container key={index} className="container--table">
                            <div className="table__body">
                                <img
                                    src={person}
                                    alt="imageTable"
                                />
                                <span className="table__body-time">
                                {fromTime}
                            </span>
                                <span className={`status status--${watchTrigger}`}>
                                {lostTime}
                            </span>
                                {
                                    watchTrigger === 'online' &&
                                    <span className={`flag flag--${item.players.player1.flag}`}/>
                                }
                                <span className="table__body-player">
                                {item.players.player1.name} <span>{item.players.player1.count} : {item.players.player2.count}</span> {item.players.player2.name}
                            </span>
                                {
                                    watchTrigger === 'online' &&
                                    <span className={`flag flag--${item.players.player2.flag}`}/>
                                }
                                {
                                    (watchTrigger === 'online' || watchTrigger === 'pause') &&
                                    <Link
                                        to={Routes.live + '/13242843757385387'}
                                        className="table__watch"
                                    >
                                        <img src={imagePlay} alt="imagePlay"/>
                                        <span>Трансляция</span>
                                    </Link>
                                }
                                {
                                    <span className="table__body-forecast">{item.forecast !== 0 ? item.forecast : ''}</span>
                                }
                                {
                                    item.coefficient.map((item, index) => {
                                        return (
                                            <div key={index} className="table__coefficient">
                                                <Container>
                                                    {
                                                        item.trigger === 'up'
                                                        ? <img src={imageUp} alt="imageUp"/>
                                                        : <img src={imageDown} alt="imageDown"/>
                                                    }
                                                    <span>{item.count}</span>
                                                </Container>
                                                <img src={item.image} alt="imageBookmaker"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Container>
                    )
                })
            }
        </>
    )
}

export default TableBody
