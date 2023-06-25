import React, { useState } from 'react';
import './Review.css';
import { Link } from 'react-router-dom';

function ReviewBlock() {
  const [customerName, setCustomerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      name: customerName,
      text: reviewText,
      rating: rating,
    };
    setReviews([...reviews, newReview]);
    setCustomerName('');
    setReviewText('');
    setRating(0);
  };

  return (
    <div className="review-block">
       
       <div className="Heading4_r">
        <div className="heading_in4_r">
            <p className="heading14_r"><Link to="">CUSTOMER REVIEW</Link> </p>
        </div>
    </div>
      <div className="login1">
        <div className="login_in1">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerName" className="customerName">Your Name:</label>
          <input className="custom_type"
            type="text"
            value={customerName}
            onChange={handleCustomerNameChange}
            required
            placeholder="your name"
          />
        </div>
        <div>
          <label htmlFor="reviewText" className="reviewText">Review:</label>
          <textarea
            className='text_type'
            value={reviewText}
            onChange={handleReviewTextChange}
            required
            placeholder="write text"
          />
        </div>
        <div>
          {/* <label htmlFor="rating" className="rating1">Rating:</label> */}
          <select id="rating"  value={rating} onChange={handleRatingChange} required>
            <option value="0">Select rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button className="submit" type="submit">Submit Review</button>
      </form>
      </div></div>
      {reviews.length === 0 ? (
        <p className='para_review'>No reviews yet.</p>
      ) : (
        <ul className='ul_review'>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="rating">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </div>
              <p>{review.text}</p>
              <p>By: {review.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    
    
  );
}

export default ReviewBlock;
