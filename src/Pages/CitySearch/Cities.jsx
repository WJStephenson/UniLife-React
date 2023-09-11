//page to display all available cities from the api database as selectable city cards

import React, { useEffect, useState } from 'react'
import './Cities.css'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import CityNameCard from '../../Components/CityNameCard/CityNameCard'

function Cities() {

  //information to pass to the sluider component
  const title = 'Student Accomodation'
  const message = 'UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you.'

  const [cities, setCities] = useState([]) //state to store all cities returned from api call

  //get all cities when page loads
  useEffect(() => {
    axios.get('https://unilife-server.herokuapp.com/cities')
      .then(res => {
        setCities(res.data.response)
      })
  }, [])

  return (
    <div>
      <Slider title={title} message={message} />
      <h2 className='search-by-city-heading'>Search by City</h2>
      <div className='cityname-card-container'>
        {
          cities.map(city => {
            return <CityNameCard key={city._id} name={city.name} id={city._id}/>
          })
        }
      </div>
    </div>
  )
}

export default Cities