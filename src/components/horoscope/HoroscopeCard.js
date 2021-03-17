import React from "react"
import "./Horoscope.css"
import { Link } from "react-router-dom"

// -- This horoscope card is to display the horoscpeText data from database.json

export const HoroscopeCard = ({ horoscope}) => {
    return (
        <section className="horoscope">
            <h3 className="horoscope__sign">
                <Link to={`/horoscopeText/detail/${horoscope.id}`}>
                    {horoscope.sign}
                </Link>
            </h3>
            <div className="horoscope__title">{horoscope.title}</div>
            <div className="horoscope__text">{horoscope.text}</div>
        </section>
    )
}