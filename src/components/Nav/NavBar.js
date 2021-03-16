import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/Horoscope">Horoscopes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/horoscopeComments">Saved Horoscopes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tarot">Tarot Reading</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
