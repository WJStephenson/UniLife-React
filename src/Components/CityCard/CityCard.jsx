import React from 'react'
import './CityCard.css'

function CityCard({ name, count, imageURL }) {
    return (
        <div className='card-container' style={{ backgroundImage: `url(${imageURL})` }}>
            <div className='card-text'>
                <h1 className='city-name'>{name}</h1>
                <p className='property-count'>{count} Properties</p>
            </div>
        </div>
    )
}

export default CityCard