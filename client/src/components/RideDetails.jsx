import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RideReviews from './RideReviews';


const RideDetails = () => {

    const [ selectedRide, setRide ] = useState({})

    const [ rides, setRides ] = useState([])

    let { id } = useParams()

    const getAllRides = async () => {
        const res = await axios.get('http://localhost:3001/')
        console.log(res.data.rides)
        setRides(res.data.rides)

        updateCurrentRide(res.data.rides);
    }
    const updateCurrentRide = (rides) => {
        console.log(rides)
        let currentRide = rides.find(
            (ride) => ride._id === id

        )
        console.log(`Current Ride: ${currentRide}`)
        setRide(currentRide)
    }
    
    useEffect(() => {
       getAllRides();
       return () => {
           setRide({})
       }
      }, [])  



    return (
        <div className="detail">
            <img src={selectedRide.image} alt={selectedRide.name} />
            <div>
                <h3 className = "current-wait">Current Wait Time: {selectedRide.currentWaitTime} minutes</h3>
                <h3 className = "average-wait">Average Wait Time: {selectedRide.averageWaitTime} minutes</h3>
                <h3 className = "min-height">Minimum Height: {selectedRide.minHeight}"</h3>
                <h3 className = "ride-type">Ride Type: {selectedRide.type}</h3>
                <h4 className = "ride-description">{selectedRide.description}</h4>
            </div>
            <div className="ride-reviews">
                {/* <RideReviews/> */}
            </div>
        </div> 
    )

}

export default RideDetails