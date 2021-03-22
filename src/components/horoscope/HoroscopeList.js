import React, { useContext, useEffect, useState } from "react";
import { HoroscopeContext } from "./HoroscopeProvider";
import {useHistory } from "react-router-dom"

import "./PersonalReadingDash.css"
import { UserContext } from "../users/UserProvider";
export const HoroscopeList = () => {
  const { getToday, horoscopeToday, getTomorrow, getYesterday } = useContext(HoroscopeContext);
  const { getUserById } = useContext(UserContext);
  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));
  const [loggedUserInfo, setLoggedUserInfo] = useState({});
  const signNeeded = loggedUserInfo.sign
  const history = useHistory();
  console.log(signNeeded)
  const todayHoroscopeReading = () => {
    getToday(signNeeded)
    .then(() => getTomorrow(signNeeded))
    .then(() => getYesterday(signNeeded))
    .then(history.push(`/horoscope/yourSign`))
  }
  
  
  useEffect(() => {
    getUserById(loggedInUser)
      .then((userInfo) => 
        setLoggedUserInfo(userInfo)
      );
  }, []);
    useEffect(() => {
        getToday(loggedUserInfo.sign)
    }, [loggedUserInfo])
  return (
    <>
    <section className="personalReadings">
      <section className="userHoroscope">
        <p className="horoscopeDescrip">{horoscopeToday.description}</p>
        <button className="btnHoroscope" onClick={event => { event.preventDefault()
        todayHoroscopeReading()}}>Press for Today's Horoscope</button>
      </section>
      <section className="userTarotReading">
          <p className="headingTarot">Strength</p>
          <p className="descriptTarot">It is important to come from a place of love and tolerance though, not aggression. Put your fears to rest and develop a positive attitude and you'll reap richer rewards.</p>
          <img src="https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_212/v1616430844/chariot-6016921_640_sxhidi.jpg" className="placeholderTheChariot" alt="placeholderCard" />
      </section>
      </section>
    </>
  );
};