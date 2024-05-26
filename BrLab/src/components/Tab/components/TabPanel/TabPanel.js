import React from 'react'

import './TabPanel.scss'

const TabPanel = ({ children }) => {
    return (
        <div className="tab__content">
            {children}
        </div>
    )
}

export default TabPanel
