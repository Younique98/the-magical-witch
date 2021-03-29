import React from "react";
import { Link } from "react-router-dom";
import "./Signs.css";

//take in the sign object
//access the sign object to dispaly the horoscope name and data range
// link to the horoscope that displays information to horoscope/sign using string interpolation
//make sure that sign goes to lowerCase

export const Sign = ({ sign }) => {
  return (
    <section className="sign">
      <Link to={`horoscope/${sign.name}`.toLowerCase()}>
        <img className="sign__image" src={sign.imageUrl} alt="horoscope sign images" />
      </Link>
      <h4 className="sign__name">Sign Name : {sign.name}</h4>
      <h4 className="sign__dateRange">Date Range : {sign.dateRange}</h4>
    </section>
  );
};
