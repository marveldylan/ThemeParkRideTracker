import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RideReviews = (props) => {
    console.log(props.id)
    console.log(props.rides)
    console.log(props.selectedRide)

    // axios get for ride reviews
    const getReviews = async () => {
        const res = await axios.get(`http://localhost:3001/reviews/${props.id}`)
        console.log(res)
    }


    // axios post for new reviews

    //use Effect for making axios calls for reviews when mounted:
    useEffect(() => {
        getReviews();
        // return () => {
        //     setRide({})
        // }
       }, [])  



    return (
        <h1>Ride Reviews are linked!</h1>
    )

}

export default RideReviews