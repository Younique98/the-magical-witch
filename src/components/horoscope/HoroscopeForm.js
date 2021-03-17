import React, { useContext, useEffect, useState } from "react"
import { HoroscopeContext } from "../horoscope/HoroscopeProvider"
import {  UserContext } from "../users/UserProvider"
import "../users/User.css"
import {useHistory, useParams} from "react-router-dom";

export const HoroscopeThoughtsForm = () => {
    const {getHoroscopes, addHoroscope, addHoroscopeComment, getHoroscopeCommentsById, updateHoroscopeComment} = useContext(HoroscopeContext)
    const { users, getUsers} = useContext(UserContext)
}

const [horoscopeComment, setHoroscopeComment] = useState({
    id: 0,
    sign: "",
    userId: 0,
    horoscopeComment: "",
    horoscopeReadingId: 0
})

const [horoscopes, setHoroscope] = useState({
    data_range: "",
    current_date: "",
    description: "",
    compatibility: "",
    mood: "",
    color: "",
    lucky_number: 0,
    lucky_time: ""
    
})

// this wait for data before button is active. diababiling it until filled out
const [isLoading, setLoading] = useState(true);

// Horoscope Id for fetching the horoscopeComment wanting to edit

const { horoscopeCommentId} = useParams();
    const history = useHistory();


// once fields are updated, this cause re-render to update views

const handleControlledInputChane = (event) => {

    const newHoroscopeComment = {...horoscopeComment}
    //horoscopeComment is object with the properties
    //set the properties to the new values
    newHoroscopeComment[event.target.id] = event.target.value
    //update the Comment state
    setHoroscopeComment(newHoroscopeComment)
}


const handleSaveHoroscopeComment = () => {
    if (parseInt(horoscopeComment.horoscopeComment === "")){
        window.alert("Please enter your thoughts on today's reading")
    } else {
        //This is where I check for whether form is used for editing or creating
        setIsLoading(true);

        if (horoscopeCommentId){

            updateHoroscopeComment({
            id: horoscopeComment.id,
            sign: horoscopeComment.sign,
            horoscopeComment: horoscopeComment.horoscopeComment,
            horoscopeReadingId: parseInt(horoscopeComment.horoscopeReadingId),
            userId: parseInt(horoscoopeComment.userId)
        })
        .then(() => history.push(`/horoscopeComments/detail/${horoscopeComment.id}`))
            }else {
                addHoroscopeComment({
                    id: horoscopeComment.id,
                    sign: horoscopeComment.sign,
                    horoscopeComment: horoscopeComment.horoscopeComment,
                    horoscopeReadingId: parseInt(horoscopeComment.horoscopeReadingId),
                    userId: parseInt(horoscoopeComment.userId)
                })
                .then(() => history.push("/horoscopeComments"))
            }
        }
    }

    // Get users and horoscopes

    useEffect(() => {
        getUsers().then(getHoroscopes).then(() => {
          if (horoscopeCommentId) {
            getHoroscopeCommentsById(horoscopeCommentId)
            .then(horoscopeComment => {
                setHoroscopeComment(horoscopeComment)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        })
      }, [])

      return ()