import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ rating, starRatedColor, changeRating, numberOfStars, starDimension, starSpacing, name }) => (
    <StarRatings
        rating={rating}
        starRatedColor={starRatedColor}
        changeRating={changeRating}
        numberOfStars={numberOfStars}
        starDimension={starDimension}
        starSpacing={starSpacing}
        name={name}
    />
);

export default StarRating;
