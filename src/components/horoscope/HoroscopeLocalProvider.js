import React, { useState, createContext } from "react";

export const HoroscopeLocalContext = createContext();

export const HoroscopeLocalProvider = (props) => {
  const [horoscopeComment, setHoroscopeComment] = useState({});
  const [horoscope, setHoroscope] = useState({});

  const getHoroscopes = () => {
    return fetch(
      `http://localhost:8088/horoscopes?userId=${parseInt(
        sessionStorage.getItem("magicWitch_user")
      )}`
    )
      .then((res) => res.json())
      .then(setHoroscope);
  };

  const saveHoroscope = (horoscope) => {
    debugger;
    return fetch("http://localhost:8088/horoscopes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(horoscope),
    }).then((response) => response.json());
  };

//   const addHoroscope = (horoscope) => {
//     return fetch("http://localhost:8088/horoscopes", {
//       method: "POST",
//       header: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(horoscope),
//     }).then(() =>
//       getHoroscopeComment(parseInt(sessionStorage.getItem("magicalWitch_user")))
//     );
//   };

  const getHoroscopeComment = (horoscopeid) => {
    return fetch(`http://localhost:8088/horoscopes`)
      .then((response) => response.json())
      .then((horoscope) => setHoroscopeComment(horoscope));
  };

  const getHoroscopeSavedId = (id) => {
    return fetch(`http://localhost:8088/horoscopes/${id}`).then((res) =>
      res.json()
    );
  };

  return (
    <HoroscopeLocalContext.Provider
      value={{
        horoscopeComment: horoscopeComment,
        getHoroscopeComment: getHoroscopeComment,
        getHoroscopeSavedId: getHoroscopeSavedId,
        saveHoroscope: saveHoroscope,
      }}
    >
      {props.children}
    </HoroscopeLocalContext.Provider>
  );
};
