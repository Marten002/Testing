import React from 'react'

import './Headline.scss'

const Headline = ({ className, caption }) => {
    return (
        <div className={`headline ${className ? className : ''}`}>
            {caption}
        </div>
    )
}

export default Headline
