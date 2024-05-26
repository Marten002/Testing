import React from 'react'

import './Breadcrumb.scss'

const Breadcrumb = ({ className, children }) => {
    return (
        <div className={`breadcrumb ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Breadcrumb
