import React, { useContext, useEffect, useState } from "react";
import { HoroscopeContext } from "./HoroscopeProvider";
import "./Horoscope.css";
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
      <section className="userHoroscope">
        <p>{horoscopeToday.description}</p>
      </section>
    </>
  );
};