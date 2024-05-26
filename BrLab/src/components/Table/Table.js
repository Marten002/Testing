import React from 'react'

import './Table.scss'

const Table = ({ className, children }) => {
    return (
        <div className={`table ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Table
