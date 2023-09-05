import './CitySearch.css'

function CitySearch({ cities }) {

    return (
        <form className='city-search-form'>
            <select>
                <option disabled>Search by city</option>
                {
                    cities?.map((city) => {
                        return <option key={city._id} value={city.name}>{city.name}</option>
                    })
                }
            </select>
            <button>Find Homes</button>
        </form>
    )
}

export default CitySearch