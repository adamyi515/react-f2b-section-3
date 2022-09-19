import React, { useState } from 'react';

const FeedbackItem = (props) => {
    const { rating, text } = props.item; 

    return(
        <div className='card'>
            <div className='num-display'>
                { rating }
            </div>
            <div className='text-display'>
                { text }
            </div>
        </div>
    )
}

export default FeedbackItem;