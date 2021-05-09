import React, { useState, createContext } from "react";

export const HoroscopeLocalContext = createContext();

// What is a hook? function that lets you hook into React features
// useState is a hook that lets you add React state to function components.

export const HoroscopeLocalProvider = (props) => {
  //declare a state variable and set it to an object
  const [horoscopeComment, setHoroscopeComment] = useState({});
  //the variable is called horoscope and a function that updates it and sets it to an array
  const [horoscope, setHoroscope] = useState([]);

  //grab all the horosocpes of the signed in user
  const getHoroscopes = () => {
    return fetch(
      `https://the-magical-witch-api.herokuapp.com/horoscopes?userId=${parseInt(
        sessionStorage.getItem("magicalWitch_user")
      )}`
    )
      .then((res) => res.json())
      .then(setHoroscope);
  };
  // save the horoscope to the local server
  const saveHoroscope = (horoscope) => {
    return fetch("https://the-magical-witch-api.herokuapp.com/horoscopes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(horoscope),
    }).then((response) => response.json());
  };

  const updateHoroscope = (horoscope, horoscopeComment) => {
    return fetch(`https://the-magical-witch-api.herokuapp.com/horoscopes/${horoscope.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(horoscopeComment),
    }).then(() =>
      getHoroscopes(parseInt(sessionStorage.getItem("magicalWitch_user")))
    );
  };
  // delete the horoscope based on two parameters which are the comment and the horoscope itself. but only delete it based on the id
  const deleteHoroscopeComment = (comment, horoscope) => {
    return fetch(`https://the-magical-witch-api.herokuapp.com/horoscopes/${horoscope.id}`, {
      method: "DELETE",

      body: JSON.stringify({
        comments: comment,
      }),
    }).then(getHoroscopes);
  };

  //grab the sign in users thoughts and only that user based on their user id
  const getHoroscopeComment = () => {
    return fetch(
      `https://the-magical-witch-api.herokuapp.com/horoscopes?userId=${parseInt(
        sessionStorage.getItem("magicalWitch_user")
      )}`
    )
      .then((response) => response.json())
      .then((horoscope) => setHoroscopeComment(horoscope));
  };

  // grab the horoscopes that have been saved to the local api based on the horoscopes id
  const getHoroscopeSavedId = (id) => {
    return fetch(`https://the-magical-witch-api.herokuapp.com/horoscopes/${id}`).then((res) =>
      res.json()
    );
  };

  return (
    <HoroscopeLocalContext.Provider
      value={{
        horoscopeComment,
        getHoroscopeComment,
        getHoroscopeSavedId,
        saveHoroscope,
        getHoroscopes,
        updateHoroscope,
        horoscope,
        deleteHoroscopeComment,
      }}
    >
      {props.children}
    </HoroscopeLocalContext.Provider>
  );
};
