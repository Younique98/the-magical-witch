import React, { useState, createContext } from "react";

//This context is importing the signs data from local database.json

export const SignContext = createContext();

//This component gathers the horoscope data to use throughout Applicaiton

export const SignProvider = (props) => {
  //set the variable of signs using the setSigns function
  // making the state contain an array of data
  const [signs, setSigns] = useState([]);
  // get the signs from the local host and set signs state using that data that came back

  
  const getSigns = () => {
    return fetch(`https://the-magical-witch-api.herokuapp.com/signs`)
      .then((res) => res.json())
      .then(setSigns);
  };
  // return the data that came back and set the object values to contain that data
  // the provider component will accepts a value prop to be passed to consuming components tat are descendants of this provider
  return (
    <SignContext.Provider
      value={{
        signs,
        getSigns,
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};
