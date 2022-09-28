import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackData, setFeedbackData] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Lifecycle method ///////////////////////////////////////////////////////////
    useEffect(() => {
        fetchFeedbacks();
    }, []);


    // Event Handlers ////////////////////////////////////////////////////////////
    // GET data from backend.
    const fetchFeedbacks = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setFeedbackData(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`http://localhost:5000/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();
        setFeedbackData([data, ...feedbackData]);
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`http://localhost:5000/feedback/${id}`);
            setFeedbackData(feedbackData.filter((item) => item.id !== id));
        }
        
    }

    // Update the actual data (feedback array)
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, { 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        });
        const data = await response.json();

        setFeedbackData(feedbackData.map((item) => {
            if(item.id === id){
                return {...item, ...data}
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
            feedbackData, feedbackEdit, isLoading, 
            addFeedback, deleteFeedback, editFeedback, updateFeedback
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;