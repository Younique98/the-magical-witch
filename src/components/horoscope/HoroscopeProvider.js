import React, {useState, createContext} from "react"


export const HoroscopeContext = createContext()

export const HoroscopeProvider = (props) => {
  const [horoscopeToday, setHoroscopeToday] = useState({})
  const [horoscopeYesterday, setHoroscopeYesterday] = useState({})
  const [horoscopeTomorrow, setHoroscopeTomorrow] = useState({})
  

    const getYesterday = sign => {
    return fetch(`https://aztro.sameerkumar.website?sign=${sign}&day=yesterday`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sign)
  })
  .then(res => res.json())
  .then(res => setHoroscopeYesterday(res))
  };

  const getToday = sign => {
    if (sign !== ""){
      return fetch(`https://aztro.sameerkumar.website?sign=${sign}&day=today`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sign)
    })
    .then(res => res.json())
    .then(res => setHoroscopeToday(res))
    } else {
      console.log("no sign, yet")
    }
};


const getTomorrow = sign => {
  return fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=tomorrow`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sign)
  })
  .then(res => res.json())
  .then(res => setHoroscopeTomorrow(res))
  };

  return (
    <HoroscopeContext.Provider value={{
      
      getYesterday: getYesterday,
      getToday: getToday,
      getTomorrow: getTomorrow,
      horoscopeToday: horoscopeToday,
      horoscopeTomorrow: horoscopeTomorrow,
      horoscopeYesterday: horoscopeYesterday
    }}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}