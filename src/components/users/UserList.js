import React, { useContext, useEffect, useState } from "react"
import { UserCard } from "./User"
import { UserContext } from "./UserProvider"

export const UserList = () => {

    const { users, getUsers, searchTerms } = useContext(UserContext)
    const [ filteredUsers, setFiltered ] = useState([])
    
    //import the context object created in the provider component so that 
    // the Context hook can access the objects it exposes.
    // This state changes when `getUsers()` is invoked below
    useEffect(() => {
        getUsers()
    }, [])
    useEffect(() => {
        
        if (searchTerms !== "") {
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(users)
            //If search field is empty display all users
        }
    }, [searchTerms, users])
//   The useEffect hook allows the component to reach out into the world for anything 

    return (
        <div className="users">
            
            {   
                filteredUsers.map(user => {
                    return <UserCard key={user.id} user={user}/>
                })
            }
        </div>
    )
}