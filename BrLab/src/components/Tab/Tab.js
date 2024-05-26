import React from 'react'

import './Tab.scss'

const Tab = ({ className, children }) => {
    return (
        <div className={`tab ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Tab
