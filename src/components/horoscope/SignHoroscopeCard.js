import React, { useContext, useState, useEffect } from "react";
import "./Horoscope.css";
import { HoroscopeLocalContext } from "./HoroscopeLocalProvider";
import { useHistory} from "react-router-dom";

//SignHorosocpeCard takes in an horosocpe object
export const SignHoroscopeCard = ({ horoscopes }) => {
  // we retrieve the global data in the HoroscopeLocalContext
  const { updateHoroscope, deleteHoroscopeComment } = useContext(
    HoroscopeLocalContext
  );

  // horoscope variable that is set holding the initial state of an empty string
  const [horoscopeComment, setHoroscopeComment] = useState({
    comments: "",
  });

  useEffect(() => {
    setHoroscopeComment({
      comments: horoscopes.comments,
    });
  }, [horoscopes]);

  const history = useHistory();
  //there will be an event that happens when an comment is added
  //the variable declared will contain the value from that event
  // we will then set the horoscope comment state to now contain that horoscope comment from the event
  const handleControlledInputChange = (event) => {
    const commentWritten = { ...horoscopeComment };
    commentWritten[event.target.id] = event.target.value;
    setHoroscopeComment(commentWritten);
  };

  /// test horoscpope

  const saveHoroscope = () => {
    updateHoroscope(horoscopes, horoscopeComment).then(
      history.push("/horoscopeComments")
    );
  };

  //delete the horoscope saved based on the user's comment and the horoscope received utilizing the global function in the context
  const deleteComment = () => {
    deleteHoroscopeComment(horoscopeComment, horoscopes);
  };
  // must return the horoscope object using dot notation to access information needed
  return (
    <>
      <div className="signHoroscopeCard" id={horoscopes.id}>
        <div className="horoscope__currentDate">
          Date Thought Captured: {horoscopes.current_date}
        </div>
        <div className="horoscope__description">
          Horoscope Reading: {horoscopes.description}
        </div>
        <div className="horoscope__description">
          Your Thoughts: {horoscopes.comments}
        </div>
      </div>
      <input
        type="text"
        placeholder="Type your thoughts here"
        value={horoscopeComment.comments}
        id="comments"
        onChange={handleControlledInputChange}
      />

      <button onClick={() => saveHoroscope()}>Update Your Thought</button>
      <button onClick={() => deleteComment()}>Delete Horoscope</button>
    </>
  );
};
