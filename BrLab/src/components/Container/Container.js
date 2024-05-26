import React from 'react'

import './Container.scss'

const Container = ({ className, children }) => {
    return (
        <div className={`container ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Container
