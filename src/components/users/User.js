import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"




export const UserCard = ({ user}) => {
  
    const currentUser = parseInt(sessionStorage.getItem("magicalWitch_user"))


    
    
    let showButton = true
    
    //if array of filtered friends is greater than 0 then leave whatever returned filtered search as blank.
    if (user.id === currentUser) {
        user.name = ""
        showButton = false
    } 
    const history = useHistory()

    return (
    <section className="user">
        
            <h3 className="user__name">{user.name}</h3>
    </section>
)}