import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedbackData from './data/feedback.data';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

// Pages
import AboutPage from './pages/AboutPage';

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
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm handleAdd={handleAdd} />
                            <FeedbackStat feedbackData={feedbackData} />
                            <FeedbackList feedbackData={feedbackData}  handleDelete={handleDelete} />
                        </>
                    }/>
                    <Route path='/about' element={ <AboutPage /> }/>
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App;