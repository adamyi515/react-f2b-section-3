import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Data from '../data/feedback.data';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState(Data);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    // Event Handlers
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4(); 
        setFeedbackData([newFeedback, ...feedbackData]);
    }

    const deleteFeedback = (id) => {
        setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }

    // Update the actual data (feedback array)
    const updateFeedback = (id, updatedItem) => {
        setFeedbackData(feedbackData.map((item) => {
            if(item.id === id){
                return {...item, ...updatedItem}
            } else {
                return item;
            }
        }))
    }

    // Grab the feedback item and insert the data into the Form.
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return(
        <FeedbackContext.Provider value={{
            feedbackData, feedbackEdit, 
            addFeedback, deleteFeedback, editFeedback, updateFeedback
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;