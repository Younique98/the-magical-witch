import React, {useState, createContext} from "react"


export const HoroscopeContext = createContext()

export const HoroscopeProvider = (props) => {
  const [horoscopes, setHoroscope] = useState([])
  const [horoscopeComments, setHoroscopeComments] = useState([])
  const [ searchTerms, setSearchTerms ] = useState("")


  const getHoroscopes = (sign) => {
    return fetch(`https://aztro.sameerkumar.website/?sign=${sign.toLowerCase}`)
    .then(response => response.json())
    .then(horoscopeData => setHoroscope(horoscopeData))
    .then(horoscopeData => {
      addHoroscope(horoscopeData)
    })
  }
  const addHoroscope = (sign) => {
    debugger
    return fetch('http://localhost:8088/horoscopes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sign)
  })
  .then(res => res.json())
  };
  
  const getYesterday = sign => {
    return fetch(`https://aztro.sameerkumar.website?sign=${sign.toLowerCase()}&day=yesterday`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sign)
  })
  .then(res => res.json())
  };

  const getToday = sign => {
    return fetch(`https://aztro.sameerkumar.website?sign=${sign.toLowerCase()}&day=today`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sign)
  })
  .then(res => res.json())
};

const getTomorrow = sign => {
  return fetch(`https://aztro.sameerkumar.website/?sign=${sign.toLowerCase()}&day=tomorrow`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sign)
  })
  .then(res => res.json())
  };

  const getHoroscopeComment = () => {
    return fetch("http://localhost:8088/horoscopeComments")
    .then(response => response.json())
    .then(horoscopeCommentData => setHoroscopeComments(horoscopeCommentData))
  }

  const addHoroscopeComment = horoscopeComment => {
    return fetch("http://localhost:8088/horoscopeComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(horoscopeComment)
    })
    .then(response => response.json())
  }

  const getHoroscopeCommentsById = (id) => {
    return fetch(`http://localhost:8088/horoscopeComments/${horoscopeId}`)
      .then(res => res.json())
  };

  const deleteHoroscopeComment = horoscopeId => {
    return fetch(`http://localhost:8088/horoscopeComments/${horoscopeId}`, {
      method: "DELETE"
    })
    .then(getHoroscopeComment)
  }

  const updateHoroscopeComment = horoscopeComment => {
    return fetch(`http://localhost:8088/horoscopeComments/${horoscopeComment.id}`, {
      method: "PUT",
      headers: {
        "Conent-Type": "application/json"
      },
      body: JSON.stringify(horoscopeComment)
    })
    .then(getHoroscopeComment)
  }



  return (
    <HoroscopeContext.Provider value={{

      horoscopes: horoscopes,
      setHoroscope: setHoroscope,
      horoscopeComments: horoscopeComments,
      searchTerms: searchTerms,
      setSearchTerms: setSearchTerms,
      getHoroscopes: getHoroscopes,
      getYesterday: getYesterday,
      getToday: getToday,
      getTomorrow: getTomorrow,
      getHoroscopeComment: getHoroscopeComment,
      addHoroscopeComment : addHoroscopeComment,
      getHoroscopeCommentsById: getHoroscopeCommentsById,
      deleteHoroscopeComment: deleteHoroscopeComment,
      updateHoroscopeComment: updateHoroscopeComment
    }}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}