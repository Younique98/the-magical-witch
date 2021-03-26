import React, { useState, createContext } from "react";

//This context is importing the Tarots data from local database.json

export const TarotContext = createContext();

//This component gathers the horoscope data to use throughout Applicaiton

export const TarotProvider = (props) => {
  //set the variable of Tarots using the setTarots function
  // making the state contain an array of data
  const [tarots, setTarots] = useState({});

  // get the Tarots from the local host and set Tarots state using that data that came back
  const getTarots = () => {
    return fetch(
        `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10`
        )
        .then((res) => res.json())
        .then(setTarots);
  };

  // return the data that came back and set the object values to contain that data
  // the provider component will accepts a value prop to be passed to consuming components tat are descendants of this provider
  return (
    <TarotContext.Provider
      value={{
        tarots,
        getTarots,
      }}
    >
      {props.children}
    </TarotContext.Provider>
  );
};
