import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";

// registration screen for user signup
export const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    sign: "",
  });
  const [conflictDialog, setConflictDialog] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const newUser = { ...registerUser };
    newUser[event.target.id] = event.target.value;
    setRegisterUser(newUser);
  };

  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below!
    return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
      .then((res) => res.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    existingUserCheck().then((userExists) => {
      if (!userExists) {
        // If your json-server URL is different, please change it below!
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${registerUser.firstName} ${registerUser.lastName}`,
            email: registerUser.email,
            sign: registerUser.sign,
          }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              // The user id is saved under the key magicalWitch_user in session Storage. Change below if needed!
              sessionStorage.setItem("magicalWitch_user", createdUser.id);
              history.push("/");
            }
          });
      } else {
        setConflictDialog(true);
      }
    });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <dialog className="dialog dialog--password" open={conflictDialog}>
        <div>Account with that email address already exists</div>
        <button
          className="button--close"
          onClick={(e) => setConflictDialog(false)}
        >
          Close
        </button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">
          Please Register for The Magical Witch
        </h1>
        <img
          src="https://res.cloudinary.com/dwqyn2atu/image/upload/v1617033547/Screen_Shot_2021-03-29_at_8.56.41_AM_zr5jdu.png"
          alt="horoscope image"
        ></img>
        <fieldset>
          <label htmlFor="firstName"> First Name </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            placeholder="First name"
            required
            autoFocus
            value={registerUser.firstName}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName"> Last Name </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="Last name"
            required
            value={registerUser.lastName}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
            value={registerUser.email}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="horoscopeSign">Choose your sign:</label>
          <select
            name="sign"
            type="sign"
            id="sign"
            value={registerUser.sign}
            onChange={handleInputChange}
          >
            <option value="aries">aries</option>
            <option value="taurus">taurus</option>
            <option value="gemini">gemini</option>
            <option value="cancer">cancer</option>
            <option value="leo">leo</option>
            <option value="virgo">virgo</option>
            <option value="libra">libra</option>
            <option value="scorpio">scorpio</option>
            <option value="sagittarius">sagittarius</option>
            <option value="capricorn">capricorn</option>
            <option value="aquarius">aquarius</option>
            <option value="pisces">pisces</option>
          </select>
        </fieldset>
        <fieldset>
          <button type="submit"> Register </button>
        </fieldset>
      </form>
    </main>
  );
};
