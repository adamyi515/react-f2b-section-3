import React from 'react';

// Context
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// Components
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
    const { feedbackData, isLoading } = useContext(FeedbackContext);
    
    if(!isLoading && (!feedbackData || feedbackData.length === 0)){
        return <h1>No data available.</h1>
    }

    if(isLoading){
        return(
            <h1>Loading....</h1>
        )
    } else {
        return(
            <div className='feedback-list'>
                {feedbackData.map((item) => {
                    return (
                        <FeedbackItem key={item.id} item={item}/>
                    )
                })}
            </div>
        )
    }
    
}



export default FeedbackList;