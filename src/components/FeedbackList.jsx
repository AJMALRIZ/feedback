import { motion,AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import React from 'react'
import Feedbackitems from './Feedbackitems'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList({handleDelete}) {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0)
  return <p>No Feedback Yet</p>

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
>
        <Feedbackitems key={item.id} item={item}
        handleDelete={handleDelete}
        />
        
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
  
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <Feedbackitems key={item.id} item={item}
  //       handleDelete={handleDelete}
  //       />
        
        
  //     ))}
  //   </div>
  // )
}
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
  )
}

export default FeedbackList