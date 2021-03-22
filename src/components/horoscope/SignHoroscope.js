import React, { useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { HoroscopeContext } from "./HoroscopeProvider"
import { HoroscopeLocalContext} from "./HoroscopeLocalProvider"
import { UserContext} from "../users/UserProvider"
import "./Horoscope.css"


export const SignHoroscope = () => {
    const { horoscopeToday, horoscopeTomorrow, horoscopeYesterday, getToday, getTomorrow, getYesterday } = useContext(HoroscopeContext)
    const {saveHoroscope} = useContext(HoroscopeLocalContext)
    const { starsign } = useParams();
    const { getUserById } = useContext(UserContext);
  const loggedInUser = parseInt(sessionStorage.getItem("magicalWitch_user"));
 
  const [loggedUserInfo, setLoggedUserInfo] = useState({});

  const signNeeded = loggedUserInfo.sign
  
    const saveToday = () => {
        console.log("saving today's horoscope")
        getToday(signNeeded)
        .then((response) => {
            saveHoroscope(response)
            
    })}

    const saveTomorrow = () => {
        console.log("saving tomorrow's horoscope")
        saveHoroscope(() => {
            getTomorrow()
        })
    }
    const saveYesterday = () => {
        console.log("saving yesterday's horoscope")
        saveHoroscope(() => {
            getYesterday()
        })
    }
    useEffect(() => {
        
       getUserById(loggedInUser)
         .then((res) => 
             setLoggedUserInfo(res)
              )
              
      }, []);
    
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
            <button onClick={() => saveToday()}>Save Today's Horoscope</button>
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
            <button onClick={() => saveYesterday()}>Save Yesterday's Horoscope</button>
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
            <button onClick={() => saveTomorrow()}>Save Tomorrow's Horoscope</button>
            </section> 
               
        </section>
    )

}
// button onclick to run function to check what day they clicked it for and create object and create the comment and post that to the attribute