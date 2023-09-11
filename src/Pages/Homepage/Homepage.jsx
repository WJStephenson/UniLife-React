//landing page with cards for each city as well as a seach dropdown

import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'
import CitySearch from '../../Components/CitySearch/CitySearch'
import axios from 'axios';
import CityCard from '../../Components/CityCard/CityCard';
import { Link } from 'react-router-dom';

function Homepage() {

    //information to pass to slider component
    const title = 'Find student homes with bills included'
    const message = 'A simple and faster way to search for student accommodation'

    const [cities, setCities] = useState([]);  //store api response in state

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
            <Slider title={title} message={message} />
            <div className='homepage-container' id='top'>
                <CitySearch cities={cities} />
                <h2 className='city-cards-heading'>Student accommodations in our top cities</h2>
                <div className='city-card-container'>
                    {
                        cities?.map((city) => {
                            return <CityCard key={city._id} name={city.name} count={city.property_count} imageURL={city.image_url} cityId={city._id}/>
                        })
                    }
                </div>
                <Link to={'/cities'}><button className='see-all-cities-btn'>See All Cities</button></Link>
                <div className='compare-container'>
                    <h3>Compare all inclusive student homes.</h3>
                    <div className='comparisons'>
                        <div className='compare'>
                            <img src="../../../public/earthSearch.png" alt="" />
                            <h4>Search</h4>
                            <p>Find your dream home in the perfect area near your university.</p>
                        </div>
                        <div className='compare'>
                            <img src="../../../public/tickCross.png" alt="" />
                            <h4>Compare</h4>
                            <p>Compare student accommodation to find the right home for you.</p>
                        </div>
                        <div className='compare'>
                            <img src="../../../public/paper.png" alt="" />
                            <h4>Bills Included</h4>
                            <p>Bills are included in all rent prices. No hidden fees.</p>
                        </div>
                    </div>
                </div>
                <div className='benefits-container'>
                    <div className='section-container'>
                        <h3>Best selection</h3>
                        <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                        <img className='section-image' src="../../../public/hand.png" alt="hand icon" />
                    </div>
                    <div className='section-container'>
                        <h3>Your favorite</h3>
                        <p>Shortlist your favourite properties and send enquiries in one click.</p>
                        <img className='section-image' src="../../../public/heart.png" alt="hand icon" />
                    </div>
                    <a href='#top'>Search & Compare</a>
                    <img className='man-image' src="../../../public/man.png" alt="student on phone" />
                </div>
            </div>
        </>
    )
}

export default Homepage