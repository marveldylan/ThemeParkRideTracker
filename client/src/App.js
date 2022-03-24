import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllRides from "./components/AllRides"
import RideDetails from "./components/RideDetails"
import RideReview from "./components/RideReviews"

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
