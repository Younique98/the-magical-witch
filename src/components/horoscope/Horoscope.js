import React from "react"

import { Link } from "react-router-dom"
import "../horoscope/Horoscope.css"

export const HoroscopeCard = ({ horoscope }) => (
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