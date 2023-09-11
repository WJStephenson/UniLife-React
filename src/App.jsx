import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import CityDetails from './Pages/CityDetails/CityDetails'
import Cities from './Pages/CitySearch/Cities'
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Shortlist from './Pages/Shortlist/Shortlist'
import ShortlistContextProvider from './Context/ShortlistContext'

function App() {

  return (

    <BrowserRouter>
      <ShortlistContextProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/citydetails/:cityid' element={<CityDetails />} />
          <Route path='/propertydetails/:propertyid' element={<PropertyDetails />} />
          <Route path='/shortlist' element={<Shortlist />} />
        </Routes>

        <Footer />
      </ShortlistContextProvider>
    </BrowserRouter>
  )
}

export default App
