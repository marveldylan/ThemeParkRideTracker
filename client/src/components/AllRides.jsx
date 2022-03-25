import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AllRides = () => {
    
    const [ rides, setRides ] = useState([])

    const getAllRides = async () => {
        const res = await axios.get('http://localhost:3001/')
        console.log(res.data.rides)
        setRides(res.data.rides)
    }
    useEffect(() => {
       getAllRides();
      }, [])  

    console.log(rides)
    
    let navigate = useNavigate();
    const rideDetails = (ride) => {
      navigate(`${ride._id}`)   
    }

    return (
        <div className="home">
            <img className='rush-logo' src="https://i.postimg.cc/V6cFhzhm/RUSH-red.png"/>
            <div className="rides">
                {
                    rides.map((ride) => {
                        console.log(ride)
                        return (
                            <div key={ride._id} onClick={() => rideDetails(ride)}>
                                <p className="ride-name">{ride.name}</p>
                                <p className="ride-status">{ride.status}</p>
                            </div> 
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AllRides