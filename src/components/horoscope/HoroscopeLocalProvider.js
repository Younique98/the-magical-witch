import React, {useState, createContext} from "react"


export const HoroscopeLocalContext = createContext()

export const HoroscopeLocalProvider = (props) => {
    const [horoscopeComment, setHoroscopeComment] = useState({})
    const [horoscope, setHoroscope] = useState({})
    
    const getHoroscopes = () => {
        return fetch(`http://localhost:8088/horoscope?userId=${(parseInt(sessionStorage.getItem("magicWitch_user")))}`)
            .then(res => res.json())
            .then(setHoroscope)
    }

    const saveHoroscope = (horoscope) => {
        return fetch("http://localhost:8088/horoscope", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(horoscope)
        })
        .then(() => getHoroscopes(parseInt(sessionStorage.getItem("magicalWitch_user"))))
    }

    const addHoroscope = (horoscope) => {
        return fetch("http://localhost:8088/horoscope", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(horoscope)
        })
        .then(() => getHoroscopeComment(parseInt(sessionStorage.getItem("magicalWitch_user"))))
    }

    const getHoroscopeComment = horoscopeid => {
        return fetch(`http://localhost:8088/horoscope`)
        .then(response => response.json())
        .then(horoscope => setHoroscopeComment(horoscope))
    };

    const getHoroscopeSavedId = (id) => {
        return fetch(`http://localhost:8088/horoscope/${id}`)
          .then(res => res.json())
    };

return (
    <HoroscopeLocalContext.Provider value={{
        horoscopeComment: horoscopeComment,
        getHoroscopeComment: getHoroscopeComment,
        getHoroscopeSavedId: getHoroscopeSavedId,
        saveHoroscope: saveHoroscope
    }}>
        {props.children}
    </HoroscopeLocalContext.Provider>
)
}
