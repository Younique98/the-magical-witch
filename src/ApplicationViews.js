import React from "react";
import { Route } from "react-router-dom";
import { UserProvider } from "./components/users/UserProvider";
import { HoroscopeProvider } from "./components/horoscope/HoroscopeProvider";
import { HoroscopeList } from "./components/horoscope/HoroscopeList";
import { SignProvider } from "./components/Signs/SignProvider";
import { SignList } from "./components/Signs/SignList";
import { SignHoroscope } from "./components/horoscope/SignHoroscope";
import { HoroscopeLocalProvider } from "./components/horoscope/HoroscopeLocalProvider";
import { SignHoroscopeList } from "./components/horoscope/SignHoroscopeList";
import {TarotList } from "./components/tarot/TarotList"
import { TarotProvider } from "./components/tarot/TarotProvider"


export const ApplicationViews = () => {
  return (
    <>
      {/* Render the Horoscope Pictures to click and view */}

      <SignProvider>
        <Route exact path="/">
          <SignList />
        </Route>
      </SignProvider>

      <TarotProvider>
        <Route path="/tarot">
        <TarotList />
        </Route>
         </TarotProvider>

      {/* Render the horoscope list when http://localhost:8088/horoscopes*/}
     <HoroscopeLocalProvider>
        <HoroscopeProvider>
        <UserProvider>
          
            <Route path="/horoscope/create">
              <HoroscopeList />
            </Route>

            <Route exact path="/horoscope">
              <HoroscopeList />
            </Route>
          
          <Route exact path="/horoscope/:starsign">
            <SignHoroscope />   
          </Route>
          
          <Route exact path="/horoscopeComments">
            <SignHoroscopeList />
          </Route>

        </UserProvider>
      </HoroscopeProvider>
      </HoroscopeLocalProvider>
    </>
  );
};
