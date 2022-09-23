import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// Context API (state management)
import { FeedbackProvider } from './context/FeedbackContext';

// Components
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

// Pages
import AboutPage from './pages/AboutPage';

const App = () => {
 
    return(
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStat />
                                <FeedbackList />
                            </>
                        }/>
                        <Route path='/about' element={ <AboutPage /> }/>
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;