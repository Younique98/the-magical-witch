import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <div className="navBar">
      <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Horoscope">Horoscopes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/horoscopeComments">Horoscope Notes</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/tarot">Tarot Notes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}
