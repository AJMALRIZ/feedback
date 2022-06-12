import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This item is from context 1',
            rating:9
        },
        {
          id:2,
          text:'This item is from context 2',
          rating:10
      },
      {
        id:3,
        text:'This item is from context 3',
        rating:8
    }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })


    const addFeedback =(newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => item.id !==id))
        }
      }

      const updateFeedback = (id, updItem) => {
        console.log(id, updItem);
      }

      const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit: true
        })
      }


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext