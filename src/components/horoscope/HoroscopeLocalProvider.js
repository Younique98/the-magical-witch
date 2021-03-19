import React, {useState, createContext} from "react"


export const HoroscopeLocalContext = createContext()

export const HoroscopeLocalProvider = (props) => {
    const [horoscopeComment, setHoroscopeComment] = useState({})

    const getHoroscopeComment = horoscopeid => {
        return fetch(`http://localhost:8088/horoscope`)
        .then(resposne => response.json())
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
        getHoroscopeSavedId: getHoroscopeSavedId
    }}>
        {props.children}
    </HoroscopeLocalContext.Provider>
)
}
