import React, { useContext, useEffect} from "react";
import { HoroscopeLocalContext } from "./HoroscopeLocalProvider";
import { SignHoroscopeCard } from "./SignHoroscopeCard";
import "./Horoscope.css";

export const SignHoroscopeList = () => {
  //access the global varibales within the local api to use in this component
  const { horoscope, getHoroscopes } = useContext(HoroscopeLocalContext);

  //we must grab the horoscopes of the logged in user only after render
  useEffect(() => {
    getHoroscopes();
  }, []);


  // 1. return the horoscope object and grab the data from that object
  // 2. return the object and set it using a card
  // 3. create key and value pairs to store the id and the horoscope object
  // 4. render this in the aplican views to display on the DOM
  return (
    <>
      <div className="horoscopes">
        {horoscope.current_date}
        <div className="signHoroscopeList__user">
          <h3>Thanks for signing in! This is special feature for our registered users. If you are signed in head over to Horoscopes and capture those magical thoughts. </h3>
          <p>*If you have not signed in please do to save your thoughts and use this feature.*</p>
          {horoscope.map((horoscopes) => {
            return (
              <SignHoroscopeCard key={horoscopes.id} horoscopes={horoscopes} />
            );
          })}
        </div>
      </div>
      <section className="usersHoroscopes"></section>
    </>
  );
};
