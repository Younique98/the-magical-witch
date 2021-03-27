import React, { useContext, useEffect, useState } from "react";
import { TarotContext } from "./TarotProvider";
import { Tarot } from "./Tarot";
import "./Tarots.css";

export const TarotList = () => {
  // access the Tarots at the Tarot Provider
  // utilize the global function of getTarots to grab the horoscope data based on Tarot
  const { tarots, getTarots } = useContext(TarotContext);
  // grab the Tarot data from the Provider
  // get that data of the horosocpe after render
  useEffect(() => {
    getTarots();
  }, []);
  // 1. return the data and use the array method
  // 2. use .map to create a new array from te results of the Tarots gathered from the TarotContext
  // 3. take that data and return it and declare a key using the id and Tarot will contain the Tarot object
  return (
    <>
      <header className="Tarot__header">
        <h2 className="pickYourTarot">Today's Tarot Reading</h2>
      </header>

      <div className="Tarots">
        {tarots.cards?.map((tarot) => {
          return <Tarot key={tarot.name} tarot={tarot} />;
        })}
      </div>
    </>
  );
};
