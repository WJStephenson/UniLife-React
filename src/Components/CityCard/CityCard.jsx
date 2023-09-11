//card component to show city image, name and number of properties

import React from 'react'
import './CityCard.css'
import { Link } from 'react-router-dom'

function CityCard({ name, count, imageURL, cityId }) {

    //Link wrapping card container to allow routing when card is clicked
    return (
        <Link to={`/citydetails/${cityId}`} className='card-wrapper'>
            <div className='card-container' style={{ backgroundImage: `url(${imageURL})` }}>

            </div>
            <div className='card-text'>
                <h1 className='city-name'>{name}</h1>
                <p className='property-count'>{count} Properties</p>
            </div>
        </Link>
    )
}

export default CityCard