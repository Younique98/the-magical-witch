import React, { useContext, useEffect, useState } from "react"
import "./Horoscope.css"
import { Link } from "react-router-dom"
import {HoroscopeLocalContext} from "./HoroscopeLocalProvider"


export const SignHoroscopeCard = ({horoscopes}) => {
  
  const {updateHoroscope, deleteHoroscopeComment} = useContext(HoroscopeLocalContext)
  const [horoscopeComment, setHoroscopeComment] = useState({
    comments: "",
  });
  const handleControlledInputChange = (event) => {
    
   const commentWritten = event.target.value;
   setHoroscopeComment(commentWritten);
  };

const updateComment = () => {
  updateHoroscope(horoscopeComment, horoscopes) 
}
const deleteComment = () => {
  deleteHoroscopeComment(horoscopeComment, horoscopes) 
}


    return (
        <>
        <div className="signHoroscopeCard" id={horoscopes.id}>
      <div className="horoscope__currentDate">Date Thought Captured {horoscopes.current_date}</div>
        <div className="horoscope__description">Horoscope Reading: {horoscopes.description}</div>
        <div className="horoscope__description">Your Thoughts: {horoscopes.comments}</div>
        </div>
        <input
          type="text"
          
          placeholder="Type your thoughts about today's reading here"
          value={horoscopeComment.comments}
          onChange={handleControlledInputChange}
        />
      
        <button onClick={() => updateComment()}>
          Update Your Thought
        </button>
        <button onClick={() => deleteComment()}>
          Delete Horoscope
        </button>
        </>
    )
}