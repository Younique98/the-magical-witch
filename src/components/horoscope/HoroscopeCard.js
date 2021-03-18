import React from "react"
import "./Horoscope.css"
import { Link } from "react-router-dom"

// -- This horoscope card is to display the horoscpeText data from database.json

export const HoroscopeCard = ({ horoscope}) => {
    return (
        <section className="horoscope">
            {/* <h3 className="horoscope__sign">
                <Link to={`/horoscopeText/detail/${horoscope.id}`}>
                    {horoscope.sign}
                </Link>
            </h3> */}
            <div className="horoscope__title">{horoscope.date_range}</div>
            <div className="horoscope__current_date">{horoscope.current_date}</div>
            <div className="horoscope__description">{horoscope.description}</div>
            <div className="horoscope__compatibity">{horoscope.compatibity}</div>
            <div className="horoscope__mood">{horoscope.mood}</div>
            <div className="horoscope__color">{horoscope.color}</div>
            <div className="horoscope__lucky_number">{horoscope.lucky_number}</div>
            <div className="horoscope__lucky_time">{horoscope.lucky_time}</div>
        </section>
    )
}

export default HoroscopeCard