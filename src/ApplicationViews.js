import React from "react";
import { Route } from "react-router-dom";
import { UserList } from "./components/users/UserList";
import { UserProvider } from "./components/users/UserProvider";
import { HoroscopeProvider } from "./components/horoscope/HoroscopeProvider";
import { HoroscopeList } from "./components/horoscope/HoroscopeList";
import { HoroscopeThoughtsForm } from "./components/horoscope/HoroscopeForm";
import { HoroscopeDetail } from "./components/horoscope/HoroscopeDetail";
// import { Card } from "./components/Container/Home"

// import { HoroscopeChange } from "./components/Container/Change"
import { SignProvider } from "./components/Signs/SignProvider";
import { SignList } from "./components/Signs/SignList";
import {SignHoroscope} from "./components/horoscope/SignHoroscope"

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the Horoscope Pictures to click and view */}

      <SignProvider>
        <Route exact path="/">
          <SignList />
        </Route>
      </SignProvider>

      {/* Render the horoscope list when http://localhost:8088/horoscopes*/}
      <HoroscopeProvider>
        <UserProvider>
          <Route path="/horoscope/create">
            <HoroscopeThoughtsForm />
            <HoroscopeList />
          </Route>

          <Route exact path="/horoscope">
            <HoroscopeList />
          </Route>

          <Route exact path="/horoscope/:starsign">
            <SignHoroscope />
          </Route>

          <Route exact path="/horoscope/yourSign">
          
          </Route>

          <Route
            exact
            path="/horoscopeComments/detail/:horoscopeCommentId(\d+)"
          >
            <HoroscopeDetail />
          </Route>

          <Route path="/horoscopeComments/edit/:horoscopeCommentId(\d+)">
            <HoroscopeThoughtsForm />
          </Route>
        </UserProvider>
      </HoroscopeProvider>
    </>
  );
};
