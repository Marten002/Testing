import React, {useEffect, useState} from 'react'

import useWindowSize from '../../Hooks/useWindowSize/useWindowSize'

import Slide from './components/Slide/Slide'
import Button from '../Button/Button'

import imageArrowLeft from './images/ArrowLeft.svg'
import imageArrowRight from './images/ArrowRight.svg'

import './Slider.scss'

const Slider = ({ className, slides }) => {

    const [active, setActive] = useState(0)
    const slidesLength = slides.length

    const dimensions = useWindowSize()

    let slideView = dimensions.width <= 1440 ? slidesLength : slidesLength - 1

    const handleNextSlide = () => {

        const next = active + 1

        setActive(next === slideView - 2 ? 0 : next)
    }

    const handlePrevSlide = () => {

        const previous = active - 1
        setActive(previous < 0 ? slideView - 3 : previous)
    }

    const handleSetStyle = () => {
        let transition = 0

        if (active < slideView - 3) {
            transition = active * (dimensions.width <= 1440 ? -250 : -290)
        } else {
            transition = (slideView - 3) * (dimensions.width <= 1440 ? -250 : -290)
        }

        return {
            width: (slides.length * (dimensions.width <= 1440 ? 258 : 300)) + 'px',
            transform: 'translateX(' + transition + 'px)'
        }
    }

    useEffect(() => {
        handleSetStyle()
    }, [dimensions])

    return (
        <div className={`slider ${className ? className : ''}`}>
            <div className="slider__wrapper">
                <div className="slider__container" style={handleSetStyle()}>
                    {
                        slides.map((item, index) => {
                            return (
                                <Slide
                                    key={index}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Button
                className="button--slider button--slider-prev"
                type="button"
                handleClick={handlePrevSlide}
                image={imageArrowLeft}
            >
            </Button>
            <Button
                className="button--slider button--slider-next"
                type="button"
                handleClick={handleNextSlide}
                image={imageArrowRight}
            >
            </Button>
        </div>
    )
}

export default Slider
