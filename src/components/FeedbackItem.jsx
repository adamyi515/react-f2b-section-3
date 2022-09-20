import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Components
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
    const { rating, text, id } = item; 

    return(
        <Card>
            <div className='num-display'>
                { rating }
            </div>
            <button className='close' onClick={() => handleDelete(id)}>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>
                { text }
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;