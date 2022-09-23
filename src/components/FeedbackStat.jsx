import React from 'react';

// Context
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStat = () => {
    const { feedbackData } = useContext(FeedbackContext);

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


export default FeedbackStat;