import React, { useState, createContext, useContext } from "react";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  //declare a state variable and set it to an object
  const [horoscopeToday, setHoroscopeToday] = useState({});

  //the variable is called horoscopeYesterday and a function that updates it and sets it to an object
  const [horoscopeYesterday, setHoroscopeYesterday] = useState({});

  //the variable is called horoscopeTomorrow and a function that updates it and sets it to an object
  const [horoscopeTomorrow, setHoroscopeTomorrow] = useState({});

  //grab horoscope for yesterday from the api
  const getYesterday = (sign) => {
    return fetch(
      `https://aztro.sameerkumar.website?sign=${sign}&day=yesterday`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sign),
      }
    )
      .then((res) => res.json())
      .then((res) => setHoroscopeYesterday(res));
  };

  //grab today from the api pass it a sign using string interpolation
  const getToday = (sign) => {
    if (sign !== "") {
      return fetch(`https://aztro.sameerkumar.website?sign=${sign}&day=today`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setHoroscopeToday(json);
        });
    }
  };

  //grab tomorrow from the api pass it a sign using string interpolation
  //set the state variable using setHoroscopeTomorrow
  const getTomorrow = (sign) => {
    return fetch(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=tomorrow`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sign),
      }
    )
      .then((res) => res.json())
      .then((res) => setHoroscopeTomorrow(res));
  };

  return (
    <HoroscopeContext.Provider
      value={{
        getYesterday,
        getToday,
        getTomorrow,
        horoscopeToday,
        horoscopeTomorrow,
        horoscopeYesterday,
      }}
    >
      {props.children}
    </HoroscopeContext.Provider>
  );
};
