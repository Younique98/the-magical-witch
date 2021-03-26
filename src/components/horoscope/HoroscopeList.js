import React, { useContext, useEffect, useState } from "react";
import { HoroscopeContext } from "./HoroscopeProvider";
import { useHistory } from "react-router-dom";
import "./PersonalReadingDash.css";
import { UserContext } from "../users/UserProvider";

export const HoroscopeList = () => {
  // grab today, tomorrow, and yesterday from the horoscope api
  const { getToday, horoscopeToday, getTomorrow, getYesterday } = useContext(
    HoroscopeContext
  );
  const { getUserById } = useContext(UserContext);

  // the user must be saved based on the sessionstorage userid for later grabbing the sign
  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));
  const [loggedUserInfo, setLoggedUserInfo] = useState({});
  // store the user's sign in a variable to utilize throughout the component
  const signNeeded = loggedUserInfo.sign;
  const history = useHistory();

  // todayHoroscopeReading grabs the data for Today, tomorrow, and yesterday
  const todayHoroscopeReading = () => {
    getToday(signNeeded)
      .then(() => getTomorrow(signNeeded))
      .then(() => getYesterday(signNeeded))
      .then(history.push(`/horoscope/${signNeeded}`));
  };

  // grab the userinformation and store it in a variable to make it userSpecific
  useEffect(() => {
    getUserById(loggedInUser).then((userInfo) => setLoggedUserInfo(userInfo));
  }, []);

  // 1. grab the user's sign and grab today's horoscope based on that sign while watching out for the logged in user
  // 2. specifically grab today's horoscope only and display it for the user to read quickly
  // 3. This is currently a placeholder for the tarot reading stretch goal to come later in development
  useEffect(() => {
    getToday(loggedUserInfo.sign);
  }, [loggedUserInfo]);
  return (
    <>
      <section className="personalReadings">
        <section className="userHoroscope">
          <h3 className="titleHoroscope">Today's Horoscope Reading</h3>
          <p className="horoscopeDescrip">{horoscopeToday.description}</p>
          <button
            className="btnHoroscope"
            onClick={(event) => {
              event.preventDefault();
              todayHoroscopeReading();
            }}
          >
            Press for Horoscope Detail's
          </button>
        </section>

        <section className="userTarotReading">
          <h3 className="headingTarot">Strength</h3>
          <p className="descriptTarot">
            Put your fears to rest and develop a positive attitude and you'll
            reap richer rewards.
          </p>
          <img
            src="https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_212/v1616430844/chariot-6016921_640_sxhidi.jpg"
            className="placeholderTheChariot"
            alt="placeholderCard"
          />
          <button
            className="btnTarot"
            onClick={(event) => {
              event.preventDefault();
              // todayTarotReading()
            }}
          >
            Press for Today's Tarot Reading
          </button>
        </section>
      </section>
    </>
  );
};
