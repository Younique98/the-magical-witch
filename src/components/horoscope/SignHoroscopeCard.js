import React, { useContext, useEffect, useState } from "react"
import "./Horoscope.css"
import { Link } from "react-router-dom"
import {HoroscopeLocalContext} from "./HoroscopeLocalProvider"

export const SignHoroscopeCard = ({signObj}) => {

    return (
        <>
        <div className="signHoroscopeCard" id={signObj.id}>
            <h4 className="signHoroscopeCard__reading">
                {console.log("signObj rendering", signObj)}
                <Link to={`/detail/${signObj.id}`}>
                    {signObj.comment}
                </Link>
            </h4>
        </div>
        
        <div className="horoscope__currentDate">Date Thought Captured{signObj.current_date}</div>
        <div className="horoscope__description">{signObj.description}</div>
        </>
    )
}