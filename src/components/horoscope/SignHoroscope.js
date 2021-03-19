import React, { useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { HoroscopeContext } from "./HoroscopeProvider"
import "./Horoscope.css"


export const SignHoroscope = () => {
    const { horoscopeToday, horoscopeTomorrow, horoscopeYesterday, getToday, getTomorrow, getYesterday } = useContext(HoroscopeContext)

    const { starsign } = useParams();
    
    
    
    useEffect(() => {
        getToday(starsign)
        .then(() => getTomorrow(starsign))
        .then(() => getYesterday(starsign))
    }, [])

    return (
       
        <section className="horoscopeValues"> 
         <section className="horoscopeToday">
             <p>Today's Horoscope</p>
            <p>Date Range: {horoscopeToday.date_range}</p>
            <p>Current Date: {horoscopeToday.current_date}</p>
            <p>Description: {horoscopeToday.description}</p>
            <p>Compatibility: {horoscopeToday.compatibility}</p>
            <p>Mood: {horoscopeToday.mood}</p>
            <p>Color: {horoscopeToday.color}</p>
            <p>Lucky Number: {horoscopeToday.lucky_number}</p>
            <p>Lucky Time: {horoscopeToday.lucky_time}</p>
            </section>
            <section className="horoscopeYesterday">
                <p>Yesterday's Horoscope</p>
            <p>Date Range: {horoscopeYesterday.date_range}</p>
            <p>Current Date: {horoscopeYesterday.current_date}</p>
            <p>Description: {horoscopeYesterday.description}</p>
            <p>Compatibility: {horoscopeYesterday.compatibility}</p>
            <p>Mood: {horoscopeYesterday.mood}</p>
            <p>Color: {horoscopeYesterday.color}</p>
            <p>Lucky Number: {horoscopeYesterday.lucky_number}</p>
            <p>Lucky Time: {horoscopeYesterday.lucky_time}</p>
            </section>
            <section className="horoscopeTomorrow">
                <p>Tomorrow's Horoscope</p>
            <p>Date Range: {horoscopeTomorrow.date_range}</p>  
            <p>Current Date: {horoscopeTomorrow.description}</p>
            <p>Description: {horoscopeTomorrow.current_date}</p>
            <p>Compatibility: {horoscopeTomorrow.compatibility}</p>
            <p>Mood: {horoscopeTomorrow.mood}</p>
            <p>Color: {horoscopeTomorrow.color}</p>
            <p>Lucky Number: {horoscopeTomorrow.lucky_number}</p>
            <p>Lucky Time: {horoscopeTomorrow.lucky_time}</p>
            </section> 
               
        </section>
    )

}
// button onclick to run function to check what day they clicked it for and create object and create the comment and post that to the attribute