import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "" });
  const [existDialog, setExistDialog] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const newUser = { ...loginUser };
    newUser[event.target.id] = event.target.value;
    setLoginUser(newUser);
  };

  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below!
    return fetch(`https://the-magical-witch-api.herokuapp.com/users?email=${loginUser.email}`)
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        // The user id is saved under the key magicalWitch_user in session Storage. Change below if needed!
        sessionStorage.setItem("magicalWitch_user", exists.id);
        sessionStorage.setItem("magicalWitch_userName", exists.name);

        history.push("/");
      } else {
        setExistDialog(true);
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" open={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => setExistDialog(false)}
        >
          Close
        </button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1 className="siteNameHomePage">
            Its good to see you!! Lets see what the universe has in store for
            you today!!!
          </h1>
          <h2 className="loginPrompt">Login</h2>
          {/* <p>"Witchcraft ... is a spiritual path. You walk it for nourishment of the soul, to commune with the life force of the universe, and to thereby better know your own life.
                        - CHRISTOPHER PENCZAK"</p> */}
          <section className="PleaseSignAndBelow">
            {/* <h2>Please sign in</h2> */}
            <fieldset>
              <label htmlFor="inputEmail"> Email address </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
                value={loginUser.email}
                onChange={handleInputChange}
              />
            </fieldset>
            <fieldset>
              <button type="submit">Enter</button>
            </fieldset>
          </section>
          <section className="link--register">
            <Link to="/register">Register for an account</Link>
          </section>
        </form>
      </section>
    </main>
  );
};
