import React, { useContext, useEffect, useState } from "react"
import { HoroscopeContext } from "./HoroscopeProvider"
import { HoroscopeCard} from "./HoroscopeCard"
import "./Horoscope.css"
import { useHistory } from "react-router-dom"

export const HoroscopeList = () => {
  const { horoscopes, getHoroscopes, searchTerms } = useContext(HoroscopeContext)

  // Since you are no longer ALWAYS displaying all of the Horoscopes
  const [ filteredHoroscopes, setFiltered ] = useState([])
  const history = useHistory()

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getHoroscopes()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching Horoscopes
      const subset = horoscopes.filter(horoscope => horoscope.mood.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all Horoscopes
      setFiltered(horoscopes)
    }
  }, [searchTerms, horoscopes])

  return (
    <>
      <h1>Horoscopes based on Mood</h1>

      <button onClick={() => history.push("/horoscopes/create")}>
          Horoscope
      </button>
      <div className="Horoscopes">
      {
        filteredHoroscopes.map(horoscope => {
          return <HoroscopeCard key={horoscope.id} horoscope={horoscope} />
        })
      }
      </div>
    </>
  )
}