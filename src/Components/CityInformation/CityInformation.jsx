//city information card to display city name and paragraph information from api

import React from 'react'
import './CityInformation.css'

function CityInformation({ city }) {

    return (
        <div className='cityinformation-container'>
            <div className='information-text'>
                <h2>Being a student in {city?.name}</h2>
                <p>{city?.student_life}</p>
                <p>{city?.universities}</p>
            </div>
            <img src="/images/students.png" alt="Happy Students" />
        </div>
    )
}

export default CityInformation