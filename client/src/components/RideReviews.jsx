import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RideReviews = (props) => {

    const [ reviews, setReviews ] = useState([])

    // axios get for ride reviews
    const getReviews = async () => {
        const res = await axios.get(`http://localhost:3001/reviews/${props.id}`)
        setReviews(res.data.reviews)
    }
    // axios post for new reviews
    //use Effect for making axios calls for reviews when mounted:
    useEffect(() => {
        getReviews();
        
       }, [])
    return (
        reviews.map((review) => {
            console.log(review)
            return (
                <div key={review._id}>
                    <p className="review-title">{review.title}</p>
                    <p className="review-rating">{review.rating}</p>
                    <p className="review-description">{review.description}</p>
                </div> 
            )
        })
    
    )
}
export default RideReviews








