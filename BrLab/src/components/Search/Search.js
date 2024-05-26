import React from 'react'

import imageSearch from './images/Search.svg'

import './Search.scss'

const Search = () => {
    return (
        <div className="search">
            <img src={imageSearch} alt="imageSearch" className="search__image"/>
        </div>
    )
}

export default Search
