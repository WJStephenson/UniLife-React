import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'
import CitySearch from '../../Components/CitySearch/CitySearch'
import axios from 'axios';
import CityCard from '../../Components/CityCard/CityCard';

function Homepage() {

    //store api response in state
    const [cities, setCities] = useState([]);

    //get city list from api when page loads
    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities`)
            .then(res => {
                console.log(res.data.response)
                setCities(res.data.response)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Slider />
            <CitySearch cities={cities} />
            <h2 className='city-cards-heading'>Student accommodations in our top cities</h2>
            <div className='city-card-container'>
                {
                    cities?.map((city) => {
                        return <CityCard key={city._id} name={city.name} count={city.property_count} imageURL={city.image_url} />
                    })
                }
            </div>
        </>
    )
}

export default Homepage