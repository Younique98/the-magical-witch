import React, { useState, createContext } from "react";

export const UserContext = createContext();
//Nothing is stored in the context when it's defined. At this point,
//it's just an empty warehouse waiting to be filled.

export const UserProvider = (props) => {
  //set the users to an array of data
  const [users, setUsers] = useState([]);

  //useState hook to define a variable that holds the state of the component,
  //and a function that updates it.
  const getUsers = () => {
    return fetch("https://the-magical-witch-api.herokuapp.com/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  // grab the user by id
  // it listens for a number that is parseInt before being passed
  const getUserById = (userId) => {
    if (userId !== ""){
    return fetch(`https://the-magical-witch-api.herokuapp.com/users/${userId}`).then((res) =>
      res.json()
    );} else {
      return fetch(`https://the-magical-witch-api.herokuapp.com/users/1`).then((res) =>
      res.json() )
    }
  };

  //You return a context provider which has the `users` state, `getUsers` function,
  // etc. function as keys. This allows any child elements to access them.
  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        getUserById,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
