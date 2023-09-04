import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import * as Styled from './RatingStar.styled'

interface RatingStarProps {
  id: string;
}

const RatingStar= ({id}: RatingStarProps) => {
  
  const [rating, setRating] = useState<number>(Number(localStorage.getItem(`rating-${id}`)) || 0);

  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleClick = (ratingValue: number): void => {
    setRating(ratingValue);
    localStorage.setItem(`rating-${id}`, String(ratingValue));
  }

  return (
    <Styled.RatingStar>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label key={ratingValue}>
                    <input 
                      type="radio" 
                      name='rating' 
                      value={ratingValue} 
                      onClick={() => handleClick(ratingValue)} 
                      />
                    <FaStar 
                      color={ratingValue <= (hoveredRating || rating) ? "#62a5a1" : "#f0f0f0"}
                      onMouseEnter={()=> setHoveredRating(ratingValue)}     
                      onMouseLeave={()=> setHoveredRating( 0)}    
                      />
                </label>
            )
        })}
    </Styled.RatingStar>
  )
}

export default RatingStar;