import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { HoroscopeContext } from "./HoroscopeProvider";
import { HoroscopeLocalContext } from "./HoroscopeLocalProvider";
import { UserContext } from "../users/UserProvider";
import "./Horoscope.css";

export const SignHoroscope = () => {
  //accept a context object and returns the current context value
  const {
    horoscopeToday,
    horoscopeTomorrow,
    horoscopeYesterday,
    getToday,
    getTomorrow,
    getYesterday,
  } = useContext(HoroscopeContext);
  
// useHistory is needed to access the history instance to navigate
  const history = useHistory();

  //access the saveHoroscope object within the context
  const { saveHoroscope} = useContext(
    HoroscopeLocalContext
  );

  // create an object of key/value pairs of URL parameter to grab the horoscope sign utilizing <Route>
  const { starsign } = useParams();

//use Context to share data that is global to grab the user based on their id  
  const { getUserById } = useContext(UserContext);

  //save the user that is logged in sessionStorage to a variable 
  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));

  //set an variable as an object tha contains the userdata
  const [loggedUserInfo, setLoggedUserInfo] = useState({});

  //grab the sign from the state earlier using dot notation
  const signNeeded = loggedUserInfo.sign;

  //update the state of horoscope's initial state as empty strings with only userId remaining the same
  const [horoscopeItem, setHoroscope] = useState({
    userId: loggedInUser,
    date_range: "",
    current_date: "",
    description: "",
    compatibility: "",
    mood: "",
    color: "",
    lucky_number: "",
    lucky_time: "",
    comments: "",
  });

  //set the horoscopeComment to contain an empty string initially
  const [horoscopeComment, setHoroscopeComment] = useState({
    comments: "",
  });

  // 1. take in an event and create an variable with the updated object
  // 2. grab the value from that new object and and set that to be the target id
  // 3. this watches for changes within the form related to the particular comment
  // 4. then set the horoscope to contain the previously set variable of new thought
  // 5. set the state of the horoscope comment based on the value gotten from the id during the event
  const handleControlledInputChange = (event) => {
    const newThought = { ...horoscopeItem };
    newThought[event.target.id] = event.target.value;
    const commentWritten = event.target.value;
    setHoroscope(newThought);
    setHoroscopeComment(commentWritten);
  };

  // saveToday access the object and create a new property called comment
  //then grab the horoscope of Today based on the "signNeeded" (user's sign) and then save new comment or update the comment
  const saveToday = () => {
    const comment = horoscopeItem.comments;
    horoscopeToday.comments = comment;
    console.log("thought caught" + comment);
    console.log(horoscopeToday);
    getToday(signNeeded).then(() => {
      if (horoscopeToday) {
        saveHoroscope({
          userId: loggedInUser,
          date_range: horoscopeToday.date_range,
          current_date: horoscopeToday.current_date,
          description: horoscopeToday.description,
          compatibility: horoscopeToday.compatibility,
          mood: horoscopeToday.mood,
          color: horoscopeToday.color,
          lucky_number: horoscopeToday.lucky_number,
          lucky_time: horoscopeToday.lucky_time,
          comments: horoscopeComment,
        }).then(() => history.push(`/horoscopeComments`));
      } else {
        console.log("saving today's horoscope" + horoscopeItem.comment);
      
        const thoughtCaptured = { ...horoscopeItem };
        setHoroscope(thoughtCaptured);
        saveHoroscope(horoscopeItem).then(() => history.push(`/Horoscope`));
      }
    });
  };

  // saveTomorrow access the object and create a new property called comment
  //then grab the horoscope of Tomorrow based on the "signNeeded" (user's sign) and then save new comment or update the comment
  const saveTomorrow = () => {
    const comment = horoscopeItem.comments;
    horoscopeToday.comments = comment;
    console.log("thought caught" + comment);
    console.log(horoscopeYesterday);
    getYesterday(signNeeded).then(() => {
      if (horoscopeYesterday) {
        saveHoroscope({
          userId: loggedInUser,
          date_range: horoscopeYesterday.date_range,
          current_date: horoscopeYesterday.current_date,
          description: horoscopeYesterday.description,
          compatibility: horoscopeYesterday.compatibility,
          mood: horoscopeYesterday.mood,
          color: horoscopeYesterday.color,
          lucky_number: horoscopeYesterday.lucky_number,
          lucky_time: horoscopeYesterday.lucky_time,
          comments: horoscopeComment,
        }).then(() => history.push(`/horoscopeComments`));
      } else {
        console.log("saving Yesterday's horoscope" + horoscopeItem.comment);
        const thoughtCaptured = { ...horoscopeItem };
        setHoroscope(thoughtCaptured);
        saveHoroscope(horoscopeItem).then(() => history.push(`/Horoscope`));
      }
    });
  };

  //// saveYesterdayaccess the object and create a new property called comment
  //then grab the horoscope of Yesterday based on the "signNeeded" (user's sign) and then save new comment or update the comment
  //the new property is comments
  const saveYesterday = () => {
    const comment = horoscopeItem.comments;
    horoscopeToday.comments = comment;
    console.log("thought caught" + comment);
    console.log(horoscopeYesterday);
    getYesterday(signNeeded).then(() => {
      if (horoscopeYesterday) {
        saveHoroscope({
          userId: loggedInUser,
          date_range: horoscopeYesterday.date_range,
          current_date: horoscopeYesterday.current_date,
          description: horoscopeYesterday.description,
          compatibility: horoscopeYesterday.compatibility,
          mood: horoscopeYesterday.mood,
          color: horoscopeYesterday.color,
          lucky_number: horoscopeYesterday.lucky_number,
          lucky_time: horoscopeYesterday.lucky_time,
          comments: horoscopeComment,
        }).then(() => history.push(`/horoscopeComments`));
      } else {
        console.log("saving Yesterday's horoscope" + horoscopeItem.comment);
        //PUT - update
        const thoughtCaptured = { ...horoscopeItem };
        setHoroscope(thoughtCaptured);
        saveHoroscope(horoscopeItem).then(() => history.push(`/Horoscope`));
      }
    });
  };

  // 1. create sideEffects in the function SignHoroscope() function 
  // 2. goal: grab today, tomorrow and yesterday's horoscope readings after rendering
  useEffect(() => {
    getToday(starsign);
    getTomorrow(starsign);
    getYesterday(starsign);
  }, []);

  // after rendering grab the userdata and set that into setLoggedUserInfo for use later
  useEffect(() => {
    getUserById(loggedInUser).then((res) => setLoggedUserInfo(res));
  }, []);

  // renderHorosocpeButton hides the buttons and thought form from nonlogged in users for today's horoscope
  // it creates the form for capturing the user's thoughts/comments on the reading
  //It looks for a change and is rendered onClick
  const renderHoroscopeButton = () => {
    if (loggedInUser) {
      return (
        <div>
          <label> Write your thoughts on today's reading</label>,
          <input
            type="text"
            id="comments"
            placeholder="Type your thoughts here"
            value={horoscopeItem.comments}
            onChange={handleControlledInputChange}
          />
          <button
            className="savingTodaybtn"
            id="saveToday"
            onClick={() => saveToday()}
          >
            Save Today's Horoscope
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  // renderYesterdayHorosocpeButton hides the buttons and thought form from nonlogged in users for yesterday's horoscope
  const renderYesterdayHoroscopeButton = () => {
    if (loggedInUser) {
      return (
        <div>
          <label> Write your thoughts on yesterday's reading</label>,
          <input
            type="text"
            id="comments"
            placeholder="Type your thoughts here"
            value={horoscopeItem.comments}
            onChange={handleControlledInputChange}
          />
          <button
            className="savingTodaybtn"
            id="saveToday"
            onClick={() => saveYesterday()}
          >
            Save Yesterday's Horoscope
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  // renderTomorrowHorosocpeButton hides the buttons and thought form from nonlogged in users for tomorrow's horoscope
  const renderTomorrowHoroscopeButton = () => {
    if (loggedInUser) {
      return (
        <div>
          <label> Write your thoughts on tomorrow's reading</label>,
          <input
            type="text"
            id="comments"
            placeholder="Type your thoughts here"
            value={horoscopeItem.comments}
            onChange={handleControlledInputChange}
          />
          <button
            className="savingTodaybtn"
            id="saveToday"
            onClick={() => saveTomorrow()}
          >
            Save Tomorrow's Horoscope
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
// the horoscopeToday, horosocpeTomorrow, horoscopeYesterday objects that we use dot notation to grab data 
// the button is being invoked below each particular horosocpe day from above
  return (
    <section className="horoscopeValues">
      <section className="allHoroscopes">
        <section className="horoscopeToday">
          <h3 className="todaySectionTitle">Today's Horoscope</h3>
          <p>Date Range: {horoscopeToday.date_range}</p>
          <p>Current Date: {horoscopeToday.current_date}</p>
          <p>Description: {horoscopeToday.description}</p>
          <p>Compatibility: {horoscopeToday.compatibility}</p>
          <p>Mood: {horoscopeToday.mood}</p>
          <p>Color: {horoscopeToday.color}</p>
          <p>Lucky Number: {horoscopeToday.lucky_number}</p>
          <p>Lucky Time: {horoscopeToday.lucky_time}</p>

          {renderHoroscopeButton()}
        </section>

        <section className="horoscopeYesterday">
          <h3 className="yesterdaySectionTitle">Yesterday's Horoscope</h3>
          <p>Date Range: {horoscopeYesterday.date_range}</p>
          <p>Current Date: {horoscopeYesterday.current_date}</p>
          <p>Description: {horoscopeYesterday.description}</p>
          <p>Compatibility: {horoscopeYesterday.compatibility}</p>
          <p>Mood: {horoscopeYesterday.mood}</p>
          <p>Color: {horoscopeYesterday.color}</p>
          <p>Lucky Number: {horoscopeYesterday.lucky_number}</p>
          <p>Lucky Time: {horoscopeYesterday.lucky_time}</p>
          {renderYesterdayHoroscopeButton()}
        </section>
        <section className="horoscopeTomorrow">
          <h3 className="tomorrowSectionTitle">Tomorrow's Horoscope</h3>
          <p>Date Range: {horoscopeTomorrow.date_range}</p>
          <p>Current Date: {horoscopeTomorrow.description}</p>
          <p>Description: {horoscopeTomorrow.current_date}</p>
          <p>Compatibility: {horoscopeTomorrow.compatibility}</p>
          <p>Mood: {horoscopeTomorrow.mood}</p>
          <p>Color: {horoscopeTomorrow.color}</p>
          <p>Lucky Number: {horoscopeTomorrow.lucky_number}</p>
          <p>Lucky Time: {horoscopeTomorrow.lucky_time}</p>
          {renderTomorrowHoroscopeButton()}
        </section>
      </section>
    </section>
  );
};
// button onclick to run function to check what day they clicked it for and create object and create the comment and post that to the attribute
