import React from 'react'

import './TableHeader.scss'

const TableHeader = ({ data }) => {
    return (
        <div className="table__header">
            <img src={data.image} alt="imageTable"/>
            <span>{data.caption}</span>
            <img src={data.person} alt="imageTable"/>
            <div className="table__forecast">
                Прогнозы
            </div>
            <div className="table__variants">
                <span>1</span>
                <span>X</span>
                <span>2</span>
            </div>
        </div>
    )
}

export default TableHeader
