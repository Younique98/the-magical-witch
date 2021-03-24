import React, { useContext, useEffect, useState } from "react"
import "./Horoscope.css"
import { Link } from "react-router-dom"
import {HoroscopeLocalContext} from "./HoroscopeLocalProvider"

export const SignHoroscopeCard = ({horoscopes}) => {

    return (
        <>
        <div className="signHoroscopeCard" id={horoscopes.id}>
      <div className="horoscope__currentDate">Date Thought Captured {horoscopes.current_date}</div>
        <div className="horoscope__description">Horoscope Reading: {horoscopes.description}</div>
        <div className="horoscope__description">Your Thoughts: {horoscopes.comments}</div>
        </div>
        </>
    )
}