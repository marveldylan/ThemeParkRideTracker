// import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllRides from './components/AllRides'
import RideDetails from './components/RideDetails'
import RideReviews from './components/RideReviews'




function App() {

  // const [ reviews, setReviews ] = useState('')

  return (
    <div>
      <header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AllRides/> } />
          <Route path="/:id" element={<RideDetails />} />
          {/* <Route path="/reviews" element={<RideReviews/>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;