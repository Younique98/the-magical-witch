import React, { useContext, useEffect, useState } from "react";
import { HoroscopeContext } from "./HoroscopeProvider";

import "./PersonalReadingDash.css"
import { UserContext } from "../users/UserProvider";
export const HoroscopeList = () => {
  const { getToday, horoscopeToday } = useContext(HoroscopeContext);
  const { getUserById } = useContext(UserContext);
  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));
  const [loggedUserInfo, setLoggedUserInfo] = useState({});
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
      </section>
      <section className="userTarotReading">
        {/* <p className="tarotDescrip"> */}
          <p className="headingTarot">Strength</p>
          <p className="descriptTarot">It is important to come from a place of love and tolerance though, not aggression. Put your fears to rest and develop a positive attitude and you'll reap richer rewards.</p>
        {/* </p> */}
      </section>
      </section>
    </>
  );
};