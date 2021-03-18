import React, {useState, createContext } from "react"

//This context is importing the signs data from database.json

export const SignContext = createContext()

//This component gathers data to use throughout Applicaiton

export const SignProvider = (props) => {
    const [signs, setSigns] = useState([])

    const getSigns = () => {
        return fetch (`http://localhost:8088/signs`)
        .then(res => res.json())
        .then(setSigns)
    }

    

    return (
        <SignContext.Provider value={{
            signs, getSigns
        }}>
            {props.children}
        </SignContext.Provider>
    )

}
