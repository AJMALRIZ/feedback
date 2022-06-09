import { FaTimes} from 'react-icons/fa'
import { useState } from "react"
import PropTypes from 'prop-types'
import Card from "./shared/Card"
export default function Feedbackitems({item, handleDelete}) {
//  const handleDelete = () =>
//  {
//    console.log(123)
//  }
    
  return (<>
 
    <Card>
       <div className="num-display">{item.rating}</div> 
       <button onClick={() => handleDelete(item.id)} className='close'>
         <FaTimes color="purple" /></button>
        <div className="text-display">{item.text}</div> 
        
    </Card>
    </>
  )
}
Feedbackitems.propTypes = {
  item: PropTypes.object.isRequired,

}
