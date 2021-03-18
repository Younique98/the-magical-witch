import React, { useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { HoroscopeContext } from "./HoroscopeProvider"


export const SignHoroscope = () => {
    const { horoscopeToday, horoscopeTomorrow, horoscopeYesterday, getToday, getTomorrow, getYesterday } = useContext(HoroscopeContext)

    const { starsign } = useParams();
    
    
    
    useEffect(() => {
        getToday(starsign)
        .then(() => getTomorrow(starsign))
        .then(() => getYesterday(starsign))
    }, [])

    return (
       
        <section> 
         {console.log(horoscopeToday)}
         {console.log(horoscopeYesterday)}
         {console.log(horoscopeTomorrow)}
            <p>{horoscopeToday.description}</p>
            <p>{horoscopeYesterday.description}</p>
            <p>{horoscopeTomorrow.description}</p>
               // button onclick to run function to check what day they clicked it for and create object and create the comment and post that to the attribute
        </section>
    )

}