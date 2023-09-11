//page to show saved shortlisted properties

import React, { useContext, useEffect } from 'react'
import './Shortlist.css'
import { ShortlistContext } from '../../Context/ShortlistContext'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function Shortlist() {

    const { shortlist } = useContext(ShortlistContext) //retrieve shortlisted properties from context

  return (
    <div className='shortlist-container'>
        {/* map through shortlisted properties to show property cards or display a message if none saved */}
        {
            shortlist.length > 0 ?
            shortlist?.map(property => {
                return <PropertyCard key={property} property={property} />
        })
            :
            <h2>Add properties to your shortlist to view them here.</h2>
        }
    </div>
  )
}

export default Shortlist