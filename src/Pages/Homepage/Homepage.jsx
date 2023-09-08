import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'
import CitySearch from '../../Components/CitySearch/CitySearch'
import axios from 'axios';
import CityCard from '../../Components/CityCard/CityCard';
import { Link } from 'react-router-dom';

function Homepage() {

    const title = 'Find student homes with bills included'
    const message = 'A simple and faster way to search for student accommodation'

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
        <div className='homepage-container'>
            <Slider title={title} message={message} />
            <CitySearch cities={cities} />
            <h2 className='city-cards-heading'>Student accommodations in our top cities</h2>
            <div className='city-card-container'>
                {
                    cities?.map((city) => {
                        return <CityCard key={city._id} name={city.name} count={city.property_count} imageURL={city.image_url} />
                    })
                }
            </div>
            <Link to={'/cities'}><button className='see-all-cities-btn'>See All Cities</button></Link>
            <div className='compare-container'>
                <h3>Compare all inclusive student homes.</h3>
                <div className='comparisons'>
                    <div className='compare'>
                        <img src="../../Assets/earthSearch.png" alt="" />
                        <h4>Search</h4>
                        <p>Find your dream home in the perfect area near your university.</p>
                    </div>
                    <div className='compare'>
                        <img src="../../Assets/tickCross.png" alt="" />
                        <h4>Compare</h4>
                        <p>Compare student accommodation to find the right home for you.</p>
                    </div>
                    <div className='compare'>
                        <img src="../../Assets/paper.png" alt="" />
                        <h4>Bills Included</h4>
                        <p>Bills are included in all rent prices. No hidden fees.</p>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Homepage