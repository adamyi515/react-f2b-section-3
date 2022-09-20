import React from 'react';
import PropTypes from 'prop-types';

const FeedbackStat = ({ feedbackData }) => {

    const averageRating = feedbackData.reduce((acu, cur) => {
        return acu +  cur.rating;
    }, 0) / feedbackData.length;

    return(
        <div className='feedback-stats'>
            <h4>{feedbackData.length} Reviews</h4>
            <h4>Average Ratings: { isNaN(averageRating) ? 0 : averageRating }</h4>
        </div>
    )
}

FeedbackStat.propTypes = {
    feedbackData: PropTypes.array.isRequired
}

export default FeedbackStat;