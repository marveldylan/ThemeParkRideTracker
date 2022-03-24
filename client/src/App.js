<<<<<<< HEAD
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllRides from "./components/AllRides"
import RideDetails from "./components/RideDetails"
import RideReview from "./components/RideReviews"
=======
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllRides from './components/AllRides'
import RideDetails from './components/RideDetails'
import RideReviews from './components/RideReviews'
import axios from 'axios'


>>>>>>> main

function App() {

  const [ rides, setRides ] = useState('')

  useEffect(() => {
    async function getRides() {
      const res = await axios.get('http://localhost:3001/')
      setRides(res.data.rides.name)
      console.log(res.data.rides)
    }
    getRides()
  }, [])  

  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
=======
    <div>
      <header>
        <Routes>
          <Route path="/" element={ <AllRides /> } />
        </Routes>
>>>>>>> main
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AllRides /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;