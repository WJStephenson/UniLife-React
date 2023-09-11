//city search box with dropdown list of properties from api call

import './CitySearch.css'
import { useNavigate } from 'react-router'

function CitySearch({ cities }) {

    const navigate = useNavigate() //naviagte hook to handle page routing

    //handle user input whe the form is submitted
    function handleFormSubmit(e) {
        e.preventDefault();
        const selectedCity = e.target.city.value;
        const cityObject = cities.filter(city => city.name == selectedCity)
        if (cityObject) {
            navigate(`/citydetails/${cityObject[0]._id}`);
        } else {
            console.error(`City not found: ${selectedCity}`);
        }
    }

    return (
        <form className='city-search-form' onSubmit={handleFormSubmit}>
            <select name="city">
                <option disabled selected>Search by city</option>
                { //create an option for each city returned from api
                    cities?.map((city) => {
                        return (
                            <option key={city._id} value={city.name}>
                                {city.name}
                            </option>
                        );
                    })
                }
            </select>
            <button type='submit'>Find Homes</button>
        </form>
    );
}

export default CitySearch;