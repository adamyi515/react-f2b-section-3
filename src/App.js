import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from './data/feedback.data';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    // Event Handlers
    const handleDelete = (id) => {
        setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }

    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4(); 
        setFeedbackData([newFeedback, ...feedbackData]);
    }

    return(
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={handleAdd} />
                <FeedbackStat feedbackData={feedbackData} />
                <FeedbackList feedbackData={feedbackData}  handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default App;