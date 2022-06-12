import { useContext } from 'react'
import React from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
//     let average = feedback.reduce((acc, cur) => {
//         return acc + cur.rating / feedback.length
//     }, 0)
    
// average = average.toFixed(1).replace(/[.,]0$/,'')
const average = Math.round(
  feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating :{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

