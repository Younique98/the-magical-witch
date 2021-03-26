import React from "react";
import { Link } from "react-router-dom";
import "./Tarots.css";

//take in the tarot object
//access the tarot object to dispaly the horoscope name and data range
// link to the horoscope that displays information to horoscope/tarot using string interpolation
//make sure that tarot goes to lowerCase

export const Tarot = ({ tarot }) => {
  return (
    <section className="tarot">
      <h4 className="tarot__type">Tarot Card Type : {tarot.type}</h4>
      <h4 className="tarot__name">Name : {tarot.name}</h4>
      <h4 className="tarot__meaning_up">Upright Meaning : {tarot.meaning_up}</h4>
      <h4 className="tarot__meaning_rev">Reversesd Meaning : {tarot.meaning_rev}</h4>
    </section>
  );
};
