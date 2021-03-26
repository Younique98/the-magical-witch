// import React, {useContext, useEffect, useState } from "react"
// import { HoroscopeContext } from "./HoroscopeProvider"
// import "./Horoscope.css"
// import { useParams, useHistory } from "react-router-dom"

// export const HoroscopeDetail = () => {
//     const { getHoroscopeCommentsById, deleteHoroscopeComment, getHoroscopeById} = useContext(HoroscopeContext)

//         const [horoscopeComment, setHoroscopeComments] = useState({})
//         const [horoscopes, setHoroscopes] = useState({})
//         const {horoscopeCommentId} = useParams();
//         const {horoscopeId} = useParams();
//         const history = useHistory();

//         const deleteHoroscopeComments = () => {
//             deleteHoroscopeComment(horoscopeComment.id)
//             .then(() => {
//                 history.push("/horoscopeComments")
//             })
//         }
//     useEffect(() => {
//         console.log("useEffect", horoscopeId)
//         getHoroscopeById(horoscopeId)
//         .then((response) => {
//             setHoroscopes(response)
//         })
//     }, []) 

//     useEffect(() => {
//         console.log("useEffect", horoscopeCommentId)
//         getHoroscopeCommentsById(horoscopeCommentId)
//         .then((response) => {
//             setHoroscopeComments(response)
//         })
//     }, [])

//     return (
//         <section className="horoscopeComment">

    

//       <h3 className="horoscopeComment__coment">{horoscopeComment.horoscopeComment}</h3>
      
//         <h3 className="horoscopeReading">{horoscopes.map(horoscope => {
//             debugger
//             {console.log(horoscope)}
//             const horoscopeRead = horoscopes.find(horoscopeComment => horoscopeComment.horoscopeReadingId ===  horoscopeCommentId)
//         {console.log(horoscopeRead)}
//         return horoscopeRead})}
//             </h3>
//       <button onClick={deleteHoroscopeComments}>Delete Horoscope Comment</button>
//       <button onClick={() => {
//      history.push(`/horoscopeComments/edit/${horoscopeComment.id}`)
//             }}>Edit</button>
//     </section>

//     )




// }