import React, { useContext } from "react"
import { HoroscopeContext } from "./HoroscopeProvider"
import "./Horoscope.css"

export const HoroscopeSearch = () => {
  const { setSearchTerms } = useContext(HoroscopeContext)

  return (
    <>
      Horoscope search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a mood... " />
    </>
  )
}