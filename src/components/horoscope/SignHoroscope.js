import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HoroscopeContext } from "./HoroscopeProvider";
import { HoroscopeLocalContext } from "./HoroscopeLocalProvider";
import { UserContext } from "../users/UserProvider";
import "./Horoscope.css";

export const SignHoroscope = () => {
  const {
    horoscopeToday,
    horoscopeTomorrow,
    horoscopeYesterday,
    getToday,
    getTomorrow,
    getYesterday,
  } = useContext(HoroscopeContext);
  const { horoscope, setHoroscope } = useState({});
  const { saveHoroscope } = useContext(HoroscopeLocalContext);
  const { starsign } = useParams();
  const { getUserById } = useContext(UserContext);
  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));

  const [loggedUserInfo, setLoggedUserInfo] = useState({});

  const signNeeded = loggedUserInfo.sign;

  const saveToday = () => {
   console.log(horoscopeToday)
    getToday(signNeeded)
   .then(() => {
       if(horoscopeToday){
           
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
          comments: ""
        })}
   })
        

        console.log("saving today's horoscope");
       
  };

//   const saveTomorrow = () => {
//     console.log("saving tomorrow's horoscope");
//     saveHoroscope(() => {
//       getTomorrow();
//     });
//   };
//   const saveYesterday = () => {
//     console.log("saving yesterday's horoscope");
//     saveHoroscope(() => {
//       getYesterday();
//     });
//   };
  useEffect(() => {
    getToday(starsign)
      getTomorrow(starsign)
      getYesterday(starsign);
  }, []);
  useEffect(() => {
    getUserById(loggedInUser).then((res) => setLoggedUserInfo(res));
  }, []);

  return (
    <section className="horoscopeValues">
      <section className="horoscopeToday">
        <p>Today's Horoscope</p>
        <p>Date Range: {horoscopeToday.date_range}</p>
        <p>Current Date: {horoscopeToday.current_date}</p>
        <p>Description: {horoscopeToday.description}</p>
        <p>Compatibility: {horoscopeToday.compatibility}</p>
        <p>Mood: {horoscopeToday.mood}</p>
        <p>Color: {horoscopeToday.color}</p>
        <p>Lucky Number: {horoscopeToday.lucky_number}</p>
        <p>Lucky Time: {horoscopeToday.lucky_time}</p>
        <button id="saveToday" onClick={() => saveToday()}>
          Save Today's Horoscope
        </button>
      </section>
      <section className="horoscopeYesterday">
        <p>Yesterday's Horoscope</p>
        <p>Date Range: {horoscopeYesterday.date_range}</p>
        <p>Current Date: {horoscopeYesterday.current_date}</p>
        <p>Description: {horoscopeYesterday.description}</p>
        <p>Compatibility: {horoscopeYesterday.compatibility}</p>
        <p>Mood: {horoscopeYesterday.mood}</p>
        <p>Color: {horoscopeYesterday.color}</p>
        <p>Lucky Number: {horoscopeYesterday.lucky_number}</p>
        <p>Lucky Time: {horoscopeYesterday.lucky_time}</p>
        {/* <button id="saveYesterday" onClick={() => saveYesterday()}>
          Save Yesterday's Horoscope
        </button> */}
      </section>
      <section className="horoscopeTomorrow">
        <p>Tomorrow's Horoscope</p>
        <p>Date Range: {horoscopeTomorrow.date_range}</p>
        <p>Current Date: {horoscopeTomorrow.description}</p>
        <p>Description: {horoscopeTomorrow.current_date}</p>
        <p>Compatibility: {horoscopeTomorrow.compatibility}</p>
        <p>Mood: {horoscopeTomorrow.mood}</p>
        <p>Color: {horoscopeTomorrow.color}</p>
        <p>Lucky Number: {horoscopeTomorrow.lucky_number}</p>
        <p>Lucky Time: {horoscopeTomorrow.lucky_time}</p>
        {/* <button id="saveTomorrow" onClick={() => saveTomorrow()}>
          Save Tomorrow's Horoscope
        </button> */}
      </section>
    </section>
  );
};
// button onclick to run function to check what day they clicked it for and create object and create the comment and post that to the attribute
