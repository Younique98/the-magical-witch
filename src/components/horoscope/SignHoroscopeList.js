import React, {useContext, useEffect, useState} from "react";
import {HoroscopeLocalContext} from "./HoroscopeLocalProvider"
import {SignHoroscopeCard} from "./SignHoroscopeCard"
import "./Horoscope.css";
import { UserContext } from "../users/UserProvider";


export const SignHoroscopeList = () => {
    const {horoscope, getHoroscopes, getHoroscopeComment} = useContext(HoroscopeLocalContext)
    const {horoscopeObj, setHoroscope} = useState({})
    const {users, getUsers} = useContext(UserContext)

    useEffect(() => {
        
        console.log("SignHoroscopeList: useEffect - getHoroscopes");
        getHoroscopes()
        // .then(response => {
        //     debugger
        //     setHoroscope(response)
        // })
        
    }, []);
    console.log(horoscope.current_date)
    return (
        <>
        <div className="horoscopes">
            
            {console.log("SignHoroscopeList: Render", horoscope)}
            {horoscope.current_date}
            {console.log(horoscope.description)}
            
            <div className="signHoroscopeList__user">
            {
                horoscope.map(horoscopes => {
                    console.log("what is a horoscope", horoscopes)
                    return <SignHoroscopeCard key={horoscopes.id} horoscopes={horoscopes} />
                })
                
            }
            
            </div>
        </div>
        <section className="usersHoroscopes">

        </section>
        </>
    )
}