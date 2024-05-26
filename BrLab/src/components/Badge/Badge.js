import React from 'react'

import './Badge.scss'

const Badge = ({ className, caption }) => {
    return (
        <>
            {
                caption !== 0 &&
                <div className={`badge ${className ? className : ''}`}>
                    {caption}
                </div>
            }
        </>
    )
}

export default Badge