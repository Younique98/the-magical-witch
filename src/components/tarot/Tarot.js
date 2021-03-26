import React from "react";
import { Link } from "react-router-dom";
import "./Tarots.css";

//take in the tarot object
//access the tarot object to dispaly the horoscope name and data range
// link to the horoscope that displays information to horoscope/tarot using string interpolation
//make sure that tarot goes to lowerCase

export const Tarot = ({ tarot }) => {
  return (
    <section className="card_container">
      <div className="card_background">
        <div className="card_frame">

        <div class="frame-header">
          <h4 className="tarot__name">Name : {tarot.name}</h4>
          </div>

          <div className="frame_type_line">
      <h4 className="tarot__type">Tarot Card Type : {tarot.type}</h4>
      </div>

      <div className="frame_text_box_description">
      <h4 className="tarot__meaning_up">Upright Meaning : {tarot.meaning_up}</h4>
</div>

<div className="frame_text_rev_box_description">
      <h4 className="tarot__meaning_rev">Reversesd Meaning : {tarot.meaning_rev}</h4>
      </div>

    </div>
    </div>
    </section>
  );
};
