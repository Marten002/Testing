import React from 'react'
import { Link } from 'react-router-dom'

import './BreadcrumbItem.scss'

const BreadcrumbItem = ({ path, caption, active }) => {
    return (
        active === false
        ? <span className="breadcrumb__item">{caption}</span>
        : <Link to={path} className="breadcrumb__item breadcrumb__item--active">
            &nbsp;{caption}
          </Link>
    )
}

export default BreadcrumbItem
