import React, { useState } from 'react';
import FeedbackData from './data/feedback.data';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const handleDelete = (id) => {
        setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }

    return(
        <>
            <Header />
            <div className='container'>
                <FeedbackStat feedbackData={feedbackData} />
                <FeedbackList feedbackData={feedbackData}  handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default App;