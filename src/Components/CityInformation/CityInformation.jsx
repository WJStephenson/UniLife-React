import React from 'react'
import './CityInformation.css'

function CityInformation({ city }) {

    console.log(city)

    return (
        <div className='cityinformation-container'>
            <div className='information-text'>
                <h2>Being a student in {city?.name}</h2>
                <p>{city?.student_life}</p>
                <p>{city?.universities}</p>
            </div>
            <img src="../../../public/students.png" alt="Happy Students" />
        </div>
    )
}

export default CityInformation