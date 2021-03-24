import React from "react"
import { Route, Redirect } from "react-router-dom"
import {ApplicationViews} from "./ApplicationViews"
import { NavBar } from "./components/Nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import "./TheMagicalWitch.css"

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
          )
        } else {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )}
      }}
    />

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>
  </>
)
