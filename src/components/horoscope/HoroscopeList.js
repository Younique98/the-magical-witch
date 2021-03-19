import React, { useContext, useEffect, useState } from "react";
import { HoroscopeContext } from "./HoroscopeProvider";
import "./Horoscope.css";
import { UserContext } from "../users/UserProvider";

export const HoroscopeList = () => {
  const { getToday } = useContext(HoroscopeContext);
  const { getUserById } = useContext(UserContext);

  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));
  const [loggedUserInfo, setLoggedUserInfo] = useState({});

  useEffect(() => {
    getUserById(loggedInUser)
      .then((userInfo) => {
        setLoggedUserInfo(userInfo);
      });
  }, []);

    useEffect(() => {
      getToday(loggedUserInfo.sign)
    }, [])

  return (
    <>
      <section className="userHoroscope">
        <p>{loggedUserInfo.sign}</p>
      </section>
      {

      }
    </>
  );
};
