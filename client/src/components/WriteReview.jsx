import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WriteReview = (props) => {

    const [ review, writeReview ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ rating, setRating ] = useState(null)
    const [ description, setDescription ] = useState('')
    const [ reviewSent, setReviewSent ] = useState(false)

    const handleTitle = (e) => {
        setTitle(e.target.value)
        }

    const handleRating = (e) => {
        setRating(e.target.value)
        }
    
    const handleDescription = (e) => {
        setDescription(e.target.value)
        }

    const submitReview = async () => {
        await axios.post(`http://localhost:3001/reviews/${props.id}`, {
            title: title,
            rating: rating,
            description: description
          })
          .then(function (response) {
            setReviewSent(true);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        return () => {
            setReviewSent(false)
        }
       }, [reviewSent])  

    return (
        <div className="review-form">
            <h3>Write a review!</h3>
            <input 
                type="text"
                name="title"
                placeholder="Title" 
                onChange={(e) => handleTitle(e, 'num')}
                />
            <input 
                type="number"
                name="rating"
                placeholder="Rating"
                onChange={(e) => handleRating(e, 'num')}
                />
            <input 
                type="text" 
                name="description"
                placeholder="Description" 
                onChange={(e) => handleDescription(e, 'num')}
                />
            <button className="submit-button" type="submit" onClick={() => submitReview()}>Submit</button>
        </div>
    )
}

export default WriteReview