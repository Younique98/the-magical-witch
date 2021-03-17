import React, {useContext, useEffect, useState } from "react"
import { HoroscopeContext } from "./HoroscopeProvider"
import "./Horoscope.css"
import { useParams, useHistory } from "react-router-dom"

export const HoroscopeDetail = () => {
    const { getHoroscopeCommentsById, deleteHoroscopeComment} = useContext(HoroscopeContext)

        const [horoscopeComment, setHoroscopeComments] = useState({})

        const {horoscopeId} = useParams();
        const history = useHistory();

        const deleteHoroscopeComment = () => {
            deleteHoroscopeComment(horoscopeComment.id)
            .then(() => {
                history.push("/horoscopeComments")
            })
        }

    useEffect(() => {
        console.log("useEffect", horoscopeId)
        getHoroscopeCommentsById(horoscopeId)
        .then((response) => {
            setHoroscopeComments(response)
        })
    }, [])

    return (
        <section className="horoscopeComment">

    

      <h3 className="horoscopeComment__coment">{horoscopeComment.horoscopeComment}</h3>
      
        <h3 className="horoscopeReading">{horoscopes.map(horoscope => {
            {console.log(horoscope)}
            const horoscopeRead = horosopes.find(horoscopeComment => horoscopeComment.horoscopeReadingId ===  horoscopeId)
        {console.log(horoscopeRead)}
        return horoscopeRead})}
            </h3>
      <button onClick={deleteHoroscopeComment}>Delete Horoscope Comment</button>
      <button onClick={() => {
     history.push(`/horoscopeComments/edit/${horoscopeComment.id}`)
            }}>Edit</button>
    </section>

    )




}