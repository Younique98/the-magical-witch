// import React, { useContext, useEffect, useState } from "react"
// import { HoroscopeContext } from "../horoscope/HoroscopeProvider"
// import {  UserContext } from "../users/UserProvider"
// import "../users/User.css"
// import {useHistory, useParams} from "react-router-dom";

// export const HoroscopeThoughtsForm = () => {
//     const {getHoroscopes, addHoroscope, addHoroscopeComment, getHoroscopeCommentsById, updateHoroscopeComment} = useContext(HoroscopeContext)
//     const { users, getUsers} = useContext(UserContext)


// const [horoscopeComment, setHoroscopeComment] = useState({
//       userId: sessionStorage.getItem("magicalWitch_user"),
//       date_range: "",
//       current_date: "",
//       description: "",
//       compatibility: "",
//       mood: "",
//       color: "",
//       lucky_number: "",
//       lucky_time: ""
// })

// const [horoscopes, setHoroscope] = useState({
//     data_range: "",
//     current_date: "",
//     description: "",
//     compatibility: "",
//     mood: "",
//     color: "",
//     lucky_number: 0,
//     lucky_time: ""
    
// })

// // this wait for data before button is active. diababiling it until filled out
// const [isLoading, setIsLoading] = useState(true);

// // Horoscope Id for fetching the horoscopeComment wanting to edit

// const { horoscopeCommentId} = useParams();
//     const history = useHistory();


// // once fields are updated, this cause re-render to update views

// const handleControlledInputChange = (event) => {

//     const newHoroscopeComment = {...horoscopeComment}
//     //horoscopeComment is object with the properties
//     //set the properties to the new values
//     newHoroscopeComment[event.target.id] = event.target.value
//     //update the Comment state
//     setHoroscopeComment(newHoroscopeComment)
// }


// const handleSaveHoroscopeComment = () => {
//     if (parseInt(horoscopeComment.horoscopeComment === "")){
//       debugger
//         window.alert("Please enter your thoughts on today's reading")
//     } else {
//         //This is where I check for whether form is used for editing or creating
//         setIsLoading(true);

//         if (horoscopeCommentId){

//             updateHoroscopeComment({
//             id: horoscopeComment.id,
//             sign: horoscopeComment.sign,
//             horoscopeComment: horoscopeComment.horoscopeComment,
//             horoscopeReadingId: parseInt(horoscopeComment.horoscopeReadingId),
//             userId: parseInt(horoscopeComment.userId)
//         })
//         .then(() => history.push(`/horoscopeComments/detail/${horoscopeComment.id}`))
//             }else {
//                 addHoroscopeComment({
//                     id: horoscopeComment.id,
//                     sign: horoscopeComment.sign,
//                     horoscopeComment: horoscopeComment.horoscopeComment,
//                     horoscopeReadingId: parseInt(horoscopeComment.horoscopeReadingId),
//                     userId: parseInt(horoscopeComment.userId)
//                 })
//                 .then(() => history.push("/horoscopeComments"))
//             }
//         }
//     }

//     // Get users and horoscopes

//     useEffect(() => {
//       debugger
//         getUsers().then(getHoroscopes).then(() => {
//           if (horoscopeCommentId) {
//             getHoroscopeCommentsById(horoscopeCommentId)
//             .then(horoscopeComment => {
//                 setHoroscopeComment(horoscopeComment)
//                 setIsLoading(false)
//             })
//           } else {
//             setIsLoading(false)
//           }
//         })
//       }, [])


//       return (
//         <form className="horoscopeCommentForm">
//         <h2 className="horoscopeCommentForm__title">{horoscopeCommentId ? "Edit Horoscope Comment" : "Add Horoscope Thoughts"}</h2>
//         <fieldset>
//           <div className="form-group">
//               <label htmlFor="horoscopeGiven">Horoscope Given:</label>
//               <p>{horoscopes.data_range}</p>
//               <p>{horoscopes.current_range}</p>
//               <p>{horoscopes.description}</p>
//               <p>{horoscopes.compatibility}</p>
//               <p>{horoscopes.mood}</p>
//               <p>{horoscopes.color}</p>
//               <p>{horoscopes.lucky_number}</p>
//               <p>{horoscopes.lucky_time}</p>
//           </div>
//           </fieldset>
//         <fieldset>
//           <p>{horoscopeComment.sign}</p>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//               <label htmlFor="horoscopeComment">Horoscope Comment:</label>
//               <input type="text" id="horoscopeComment" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="horoscope Comment" value={horoscopeComment.comment}/>
//           </div>
//         </fieldset>
//         <button className="btn btn-primary"
//           disabled={isLoading}
//           onClick={event => {
//             debugger
//             event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//             handleSaveHoroscopeComment()
//           }}>
//         {horoscopeCommentId ? "Save Horoscope Comment" : "Add Horoscope Comment"}</button>
//       </form>
//       )
//         }