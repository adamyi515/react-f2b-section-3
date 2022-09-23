import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Data from '../data/feedback.data';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState(Data);


    // Event Handlers
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4(); 
        setFeedbackData([newFeedback, ...feedbackData]);
    }

    const deleteFeedback = (id) => {
        setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }

    return(
        <FeedbackContext.Provider value={{
            feedbackData, addFeedback, deleteFeedback
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;