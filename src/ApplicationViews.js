import React from "react"
import { Route} from "react-router-dom"
import {UserList} from "./components/users/UserList"
import {UserContext, UserProvider} from "./components/users/UserProvider"
import {Card} from "./components/Card/HoroscopeProvider"
import {TheMagicalWitch} from "./TheMagicalWitch"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/home">
                <TheMagicalWitch />
            </Route>

        <UserProvider>
        <Card>
        </Card>
        </UserProvider>
        
        </>
    )
}