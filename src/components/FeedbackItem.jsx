import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Context
import FeedbackContext from '../context/FeedbackContext';

// Components
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
    const { rating, text, id } = item; 
    const { deleteFeedback } = useContext(FeedbackContext);

    return(
        <Card>
            <div className='num-display'>
                { rating }
            </div>
            <button className='close' onClick={() => deleteFeedback(id)}>
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