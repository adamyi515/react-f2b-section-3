import React, { useState } from 'react';
import FeedbackData from './data/feedback.data';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    return(
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedbackData={feedbackData} />
            </div>
        </>
    )
}

export default App;