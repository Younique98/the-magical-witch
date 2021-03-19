import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"




export const UserCard = ({ user}) => {
  
    const currentUser = parseInt(sessionStorage.getItem("magicalWitch_user"))


    
    
    let showButton = true
    
    
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