import React from 'react'
import { NavLink  } from 'react-router-dom'
import './NavLikns.css'
const Navlinks = () => {
  return (
    <ul className='nav-links'>
    <li>
        <NavLink to="/"> ALL USERS</NavLink>
    </li>
    <li>
        <NavLink to="/u1/places"> MY PLACES</NavLink>
    </li>
    <li>
        <NavLink to="/place/new"> ADD PLACE</NavLink>
    </li>
    <li>
        <NavLink to="/auth"> AUTHENTICATE</NavLink>
    </li>
    </ul>
  )
}

export default Navlinks 