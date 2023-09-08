import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import CityDetails from './Pages/CityDetails/CityDetails'
import Cities from './Pages/CitySearch/Cities'
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/citydetails/:cityid' element={<CityDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
