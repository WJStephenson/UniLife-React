import React, { useContext, useEffect } from 'react'
import './Shortlist.css'
import { ShortlistContext } from '../../Context/ShortlistContext'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

function Shortlist() {

    const { shortlist, removeProperty } = useContext(ShortlistContext)

    useEffect(() => {
        
    })

  return (
    <div className='shortlist-container'>
        {
        shortlist?.map(property => {
            return <PropertyCard key={property} property={property} />
        })
        }
    </div>
  )
}

export default Shortlist