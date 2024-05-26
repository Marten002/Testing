import React from 'react'

import { Routes } from '../../../../../../routes'

import Headline from '../../../../../../components/Headline/Headline'
import Slider from '../../../../../../components/Slider/Slider'
import Menu from '../../../Menu/Menu'
import Select from '../../../../../../components/Select/Select'
import Person from '../../../../../../components/Person/Person'
import Table from '../../../../../../components/Table/Table'
import TableHeader from '../../../../../../components/Table/components/TableHeader/TableHeader'
import TableBody from '../../../../../../components/Table/components/TableBody/TableBody'
import Container from '../../../../../../components/Container/Container'

import imageTeam1 from './images/Team1.png'
import imageTeam2 from './images/Team2.png'
import imageTeam3 from './images/Team3.png'
import imageTeam4 from './images/Team4.png'

import imageStar from '../../../../images/Star.svg'
import imageBanner from '../../../../images/Banner.svg'
import imageBannerGrey from '../../../../images/BannerGrey.svg'
import imageStarGrey from '../../../../images/StarGrey.svg'

import imageGermany from './images/flags/Germany.svg'
import imagePortugal from './images/flags/Portugal.svg'

import imageBitmap from '../../../../images/Bitmap.png'
import imageBitmap1 from '../../../../images/Bitmap1.png'
import imageBitmap2 from '../../../../images/Bitmap2.png'

import './Football.scss'

const Football = () => {

    const slides = [
        {
            club1: {
                image: imageTeam1,
                name: 'Сангджу Сангму'
            },
            club2: {
                image: imageTeam2,
                name: 'Гангвон'
            },
            time: '20:00',
            date: '19.07.20',
            coefficient: [
                '3.38',
                '3.38',
                '3.38'
            ]
        },
        {
            club1: {
                image: imageTeam3,
                name: 'Торпедо Ж'
            },
            club2: {
                image: imageTeam4,
                name: 'Городея'
            },
            time: '20:00',
            date: '19.07.20',
            coefficient: [
                '3.38',
                '3.38',
                '3.38'
            ]
        },
        {
            club1: {
                image: imageTeam1,
                name: 'Сангджу Сангму'
            },
            club2: {
                image: imageTeam2,
                name: 'Гангвон'
            },
            time: '20:00',
            date: '19.07.20',
            coefficient: [
                '3.38',
                '3.38',
                '3.38'
            ]
        },
        {
            club1: {
                image: imageTeam3,
                name: 'Торпедо Ж'
            },
            club2: {
                image: imageTeam4,
                name: 'Городея'
            },
            time: '20:00',
            date: '19.07.20',
            coefficient: [
                '3.38',
                '3.38',
                '3.38'
            ]
        },
        {
            club1: {
                image: imageTeam1,
                name: 'Сангджу Сангму'
            },
            club2: {
                image: imageTeam2,
                name: 'Гангвон'
            },
            time: '20:00',
            date: '19.07.20',
            coefficient: [
                '3.38',
                '3.38',
                '3.38'
            ]
        },
    ]

    const dateList = [
        '15.06.2020, Пт',
        '16.06.2020, Сб',
        '17.06.2020, Вс',
    ]

    let tableList = [
        {
            header: {
                image: imageGermany,
                caption: "Кубок Германии. 1/2 финала",
                person: imageBanner
            },
            body: [
                {
                    person: imageStar,
                    fromTime: '21:45',
                    lostTime: '56 мин.',
                    watchTrigger: 'online',
                    players: {
                        player1: {
                            flag: 'yellow',
                            name: 'Саарбрюккен',
                            count: 0
                        },
                        player2: {
                            flag: 'red',
                            name: 'Байер',
                            count: 3
                        }
                    },
                    forecast: 3,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imageGermany,
                caption: "Германия - Вторая Бундеслига. 27-й тур",
                person: imageBannerGrey
            },
            body: [
                {
                    person: imageStarGrey,
                    fromTime: '19:30',
                    lostTime: 'Окончен',
                    watchTrigger: 'finished',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Динамо Др',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Гройтер Фюрт',
                            count: 3
                        }
                    },
                    forecast: 2,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imagePortugal,
                caption: "Португалия - Примейра. 26-й тур",
                person: imageBannerGrey
            },
            body: [
                {
                    person: imageStarGrey,
                    fromTime: '23:00',
                    lostTime: 'Перерыв',
                    watchTrigger: 'pause',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Жил Висенте',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Фамаликан',
                            count: 0
                        }
                    },
                    forecast: 0,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                },
                {
                    person: imageStar,
                    fromTime: '19:30',
                    lostTime: 'Не начался',
                    watchTrigger: 'denial',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Динамо Др',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Гройтер Фюрт',
                            count: 0
                        }
                    },
                    forecast: 0,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                },
                {
                    person: imageStar,
                    fromTime: '21:45',
                    lostTime: '56 мин.',
                    watchTrigger: 'online',
                    players: {
                        player1: {
                            flag: 'yellow',
                            name: 'Саарбрюккен',
                            count: 0
                        },
                        player2: {
                            flag: 'red',
                            name: 'Байер',
                            count: 3
                        }
                    },
                    forecast: 3,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imageGermany,
                caption: "Кубок Германии. 1/2 финала",
                person: imageBanner
            },
            body: [
                {
                    person: imageStar,
                    fromTime: '21:45',
                    lostTime: '56 мин.',
                    watchTrigger: 'online',
                    players: {
                        player1: {
                            flag: 'yellow',
                            name: 'Саарбрюккен',
                            count: 0
                        },
                        player2: {
                            flag: 'red',
                            name: 'Байер',
                            count: 3
                        }
                    },
                    forecast: 3,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imageGermany,
                caption: "Германия - Вторая Бундеслига. 27-й тур",
                person: imageBannerGrey
            },
            body: [
                {
                    person: imageStarGrey,
                    fromTime: '19:30',
                    lostTime: 'Окончен',
                    watchTrigger: 'finished',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Динамо Др',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Гройтер Фюрт',
                            count: 3
                        }
                    },
                    forecast: 2,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imagePortugal,
                caption: "Португалия - Примейра. 26-й тур",
                person: imageBannerGrey
            },
            body: [
                {
                    person: imageStarGrey,
                    fromTime: '23:00',
                    lostTime: 'Перерыв',
                    watchTrigger: 'pause',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Жил Висенте',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Фамаликан',
                            count: 0
                        }
                    },
                    forecast: 0,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                },
                {
                    person: imageStar,
                    fromTime: '19:30',
                    lostTime: 'Не начался',
                    watchTrigger: 'denial',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Динамо Др',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Гройтер Фюрт',
                            count: 0
                        }
                    },
                    forecast: 0,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                },
                {
                    person: imageStar,
                    fromTime: '21:45',
                    lostTime: '56 мин.',
                    watchTrigger: 'online',
                    players: {
                        player1: {
                            flag: 'yellow',
                            name: 'Саарбрюккен',
                            count: 0
                        },
                        player2: {
                            flag: 'red',
                            name: 'Байер',
                            count: 3
                        }
                    },
                    forecast: 3,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imageGermany,
                caption: "Кубок Германии. 1/2 финала",
                person: imageBanner
            },
            body: [
                {
                    person: imageStar,
                    fromTime: '21:45',
                    lostTime: '56 мин.',
                    watchTrigger: 'online',
                    players: {
                        player1: {
                            flag: 'yellow',
                            name: 'Саарбрюккен',
                            count: 0
                        },
                        player2: {
                            flag: 'red',
                            name: 'Байер',
                            count: 3
                        }
                    },
                    forecast: 3,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imageGermany,
                caption: "Германия - Вторая Бундеслига. 27-й тур",
                person: imageBannerGrey
            },
            body: [
                {
                    person: imageStarGrey,
                    fromTime: '19:30',
                    lostTime: 'Окончен',
                    watchTrigger: 'finished',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Динамо Др',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Гройтер Фюрт',
                            count: 3
                        }
                    },
                    forecast: 2,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        },
        {
            header: {
                image: imagePortugal,
                caption: "Португалия - Примейра. 26-й тур",
                person: imageBannerGrey
            },
            body: [
                {
                    person: imageStarGrey,
                    fromTime: '23:00',
                    lostTime: 'Перерыв',
                    watchTrigger: 'pause',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Жил Висенте',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Фамаликан',
                            count: 0
                        }
                    },
                    forecast: 0,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                },
                {
                    person: imageStar,
                    fromTime: '19:30',
                    lostTime: 'Не начался',
                    watchTrigger: 'denial',
                    players: {
                        player1: {
                            flag: 'none',
                            name: 'Динамо Др',
                            count: 0
                        },
                        player2: {
                            flag: 'none',
                            name: 'Гройтер Фюрт',
                            count: 0
                        }
                    },
                    forecast: 0,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                },
                {
                    person: imageStar,
                    fromTime: '21:45',
                    lostTime: '56 мин.',
                    watchTrigger: 'online',
                    players: {
                        player1: {
                            flag: 'yellow',
                            name: 'Саарбрюккен',
                            count: 0
                        },
                        player2: {
                            flag: 'red',
                            name: 'Байер',
                            count: 3
                        }
                    },
                    forecast: 3,
                    coefficient: [
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap2
                        },
                        {
                            trigger: 'down',
                            count: '1.45',
                            image: imageBitmap1
                        },
                        {
                            trigger: 'up',
                            count: '1.45',
                            image: imageBitmap
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <div className="page page--football">
            <Headline className="headline--page" caption="Топ матчи"/>
            <Slider className="slider--football" slides={slides}/>
            <div className="page__menu">
                <Menu page={Routes.page.football}/>
                <Select items={dateList}/>
            </div>
            <div className="page__content">
               <Container className="container--person">
                   <Person
                       image={imageStar}
                       caption="Мои матчи"
                       count="3"
                   />
                   <Person
                       image={imageBanner}
                       caption="Мои турниры"
                       count="2"
                   />
               </Container>
                {
                    tableList.map((item, index) => {
                        return (
                            <Table key={index} className="table--football">
                                <TableHeader data={item.header}/>
                                <TableBody data={item.body}/>
                            </Table>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Football
