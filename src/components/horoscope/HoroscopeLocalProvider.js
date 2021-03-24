import React, { useState, createContext } from "react";

export const HoroscopeLocalContext = createContext();

export const HoroscopeLocalProvider = (props) => {
  const [horoscopeComment, setHoroscopeComment] = useState({});
  const [horoscope, setHoroscope] = useState([]);
  
  const getHoroscopes = () => {
    
    return fetch(
      `http://localhost:8088/horoscopes?userId=${parseInt(
        sessionStorage.getItem("magicalWitch_user")
      )}`
    )
      .then((res) => res.json())
      .then(setHoroscope);
  };

  const saveHoroscope = (horoscope) => {
    
    return fetch("http://localhost:8088/horoscopes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(horoscope),
    }).then((response) => response.json());
  };

    const updateHoroscope = (comment, horoscope) => {
      debugger
        return fetch(`http://localhost:8088/horoscopes/${horoscope.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
    },
    body: JSON.stringify({
      comments:comment
    })
  })
    .then(getHoroscopes)
    }

    const deleteHoroscope = (comment, horoscope) =>  {
      return fetch(`http://localhost:8088/horoscopes/${horoscope.id}`, {
            method: "DELETE"
        })
            .then(getHoroscopes) 
    }

  const getHoroscopeComment = () => {
    
    return fetch(`http://localhost:8088/horoscopes?userId=${parseInt(
      sessionStorage.getItem("magicalWitch_user")
    )}`)
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
        getHoroscopes: getHoroscopes, 
        updateHoroscope: updateHoroscope,
        horoscope: horoscope,
        deleteHoroscope: deleteHoroscope
      }}
    >
      {props.children}
    </HoroscopeLocalContext.Provider>
  );
};
