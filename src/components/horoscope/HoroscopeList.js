import React, { useContext, useEffect, useState } from "react"
import { HoroscopeContext } from "./HoroscopeProvider"
import { HoroscopeCard} from "./HoroscopeCard"
import "./Horoscope.css"
import { useHistory } from "react-router-dom"

export const HoroscopeList = () => {
  const {getYesterday, getToday, getTomorrow, searchTerms } = useContext(HoroscopeContext)

  const history = useHistory()

  // Empty dependency array - useEffect only runs after first render
  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    getToday()
  }, [])

  return (
    <>
      <h1>The Gathering of Thoughts</h1>
      <h4>Horoscope Readings</h4>

      <button onClick={() => history.push("/horoscopes/create")}>
          Horoscope
      </button>
      <div className="Horoscopes">
      {/* {
        horoscopes.map(horoscope => {
          return <HoroscopeCard key={horoscope.id} horoscope={horoscope} />
        })
      } */}
      </div>
    </>
  )
}