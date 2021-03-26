import React, { useContext, useEffect } from "react";
import { SignContext } from "./SignProvider";
import { Sign } from "./Sign";
import "./Signs.css";

export const SignList = () => {
  // access the signs at the Sign Provider
  // utilize the global function of getSigns to grab the horoscope data based on sign
  const { signs, getSigns } = useContext(SignContext);

  // grab the Horoscope sign data from the Provider
  // get that data of the horosocpe after render
  useEffect(() => {
    getSigns();
  }, []);

  // 1. return the data and use the array method
  // 2. use .map to create a new array from te results of the signs gathered from the SignContext
  // 3. take that data and return it and declare a key using the id and sign will contain the sign object
  return (
    <>
      <header className="sign__header">
        <h2 className="pickYourSign">Pick your Sign</h2>
      </header>
      <div className="signs">
        {signs.map((sign) => {
          {
            console.log(sign);
          }
          return <Sign key={sign.id} sign={sign} />;
        })}
      </div>
    </>
  );
};
