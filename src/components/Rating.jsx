import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((start, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)} />

                        <FaStar className='rating-star'
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            size={20} />
                    </label>
                );
            })}

        </div>
    )
};

export default Rating
