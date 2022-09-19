import React from 'react';

// Components
import FeedbackItem from './FeedbackItem';

const FeedbackList = (props) => {
    const { feedbackData } = props;

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

export default FeedbackList;