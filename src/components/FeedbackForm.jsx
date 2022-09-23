import React, { useState, useContext } from 'react';

// Context
import FeedbackContext from '../context/FeedbackContext';

// Components
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const { addFeedback } = useContext(FeedbackContext);

    // Event Handlers
    const handleChange = (ev) => {
        setText(() => ev.target.value);
        // Text input validation.
        if(ev.target.value === ''){
            setBtnDisabled(true);
            setMessage('');
        } else if (ev.target.value !== '' && ev.target.value.trim().length < 10){
            setBtnDisabled(true);
            setMessage('Text must be at least 10 Characters.');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if(text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating
            }

            addFeedback(newFeedback);

            setText('');
        }
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service with us?</h2>
                <RatingSelect handleSelect={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input type='text' onChange={handleChange} value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                { message && (
                    <div className='message'>
                        { message }
                    </div>
                )}
            </form>
        </Card>
    )
}

export default FeedbackForm;