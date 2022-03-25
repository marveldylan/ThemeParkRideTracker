import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RideReviews from './RideReviews';
import WriteReview from './WriteReview';


const RideDetails = () => {

    const [ selectedRide, setRide ] = useState({})

    const [ rides, setRides ] = useState([])

    let { id } = useParams()

    const getAllRides = async () => {
        const res = await axios.get('http://localhost:3001/')
        setRides(res.data.rides)

        updateCurrentRide(res.data.rides);
    }
    const updateCurrentRide = (rides) => {
        let currentRide = rides.find(
            (ride) => ride._id === id

        )
        setRide(currentRide)
    }
    
    useEffect(() => {
       getAllRides();
       return () => {
           setRide({})
       }
      }, [])  



    return (
        <div className="ride-details">
            <div className="ride-header">
                <h1 className="ride-name"> { selectedRide.name} </h1>
            </div>
            <div className="corner"/>
            <div className="details">
                <img className="ride-image" src={selectedRide.image} alt={selectedRide.name} />
                <h3 className = "current-wait">Current Wait Time: {selectedRide.currentWaitTime} minutes</h3>
                <h3 className = "average-wait">Average Wait Time: {selectedRide.averageWaitTime} minutes</h3>
                <h3 className = "min-height">Minimum Height: {selectedRide.minHeight}"</h3>
                <h3 className = "ride-type">Ride Type: {selectedRide.type}</h3>
                <h4 className = "ride-description">{selectedRide.description}</h4>
            </div>
            <div className="ride-reviews">
                <h2>Ride Reviews</h2>
                <div className="write-container">
                    <WriteReview id = {id} rides = {rides} selectedRide = {selectedRide}/>
                </div>
                <div className="reviews-container">
                    <h3>Previous Reviews</h3>
                    <RideReviews id = {id} rides = {rides} selectedRide = {selectedRide}/>
                </div>  
            </div>
        </div>
    )

}

export default RideDetails