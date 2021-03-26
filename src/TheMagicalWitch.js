import React from "react";
import { Route} from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./components/Nav/NavBar";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import "./TheMagicalWitch.css";
// here the Route is used to keep everyting in sync
// dynamic route matching to display the NavBar and Application Views
// this providers conditional display for React components based on the current web URL
// we can utilizing navigation without refreshing
//this creates a single page application into one big application using "routing"
export const TheMagicalWitch = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("magicalWitch_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>
  </>
);
