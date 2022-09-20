import React from 'react';
import PropTypes from 'prop-types';

// Components
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbackData }) => {
    if(!feedbackData || feedbackData.length === 0){
        return <h1>No data available.</h1>
    }

    return(
        <div className='feedback-list'>
            {feedbackData.map((item) => {
                return (
                    <FeedbackItem key={item.id} item={item} />
                )
            })}
        </div>
    )
}

FeedbackList.propTypes = {
    feedbackData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}


export default FeedbackList;