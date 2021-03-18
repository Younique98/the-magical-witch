import React from "react"
import { Route} from "react-router-dom";
import {UserList} from "./components/users/UserList"
import {UserProvider} from "./components/users/UserProvider"
import { HoroscopeProvider } from "./components/horoscope/HoroscopeProvider"
import { HoroscopeList } from "./components/horoscope/HoroscopeList"
import { HoroscopeThoughtsForm} from "./components/horoscope/HoroscopeForm"
import { HoroscopeDetail } from "./components/horoscope/HoroscopeDetail"
import { Card } from "./components/Container/Home"
import { HoroscopeSearch } from "./components/horoscope/HoroscopeSearch"
import { HoroscopeChange } from "./components/Container/Change"

export const ApplicationViews = () => {
    return (
        <>
        {/* Render the Horoscope Pictures to click and view */}
            <Route exact path="/">
                <HoroscopeChange />
            </Route>

        {/* Render the horoscope list when http://localhost:8088/horoscopes*/}
        <HoroscopeProvider>
            <UserProvider>

            <Route path="/horoscope/create">
                <HoroscopeThoughtsForm />
                <HoroscopeList/>
            </Route>

            <Route exact path="/horoscope">
                <HoroscopeSearch />
                <HoroscopeList />
            </Route>

            <Route exact path="/horoscopeComments/detail/:horoscopeCommentId(\d+)">
                <HoroscopeDetail />
            </Route>

            <Route path="/horoscopeComments/edit/:horoscopeCommentId(\d+)">
            <HoroscopeThoughtsForm />
            </Route>

            </UserProvider>
        </HoroscopeProvider>

                <Route path="/Horoscope">
                    <Card />
                </Route>
                <Route path="/horoscopeComments">
                    <HoroscopeProvider>
                        <HoroscopeList />
                    </HoroscopeProvider>
                </Route>

                <Route path="/Register">
                <Card />
                </Route>

                <Route path="/tarot">
                    <Card />
                </Route>

                <Route path="/login">
                    <Card />
                </Route>
        
        </>
    )
}