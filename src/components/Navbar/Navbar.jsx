import React from 'react'
import { NavLink } from 'react-router-dom'
import css from 'components/Navbar/Navbar.module.css'

const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`
}

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={getClassName} end> Home </NavLink>
            <NavLink  to="/movies" className={getClassName} end>Movies</NavLink>
        </nav>
    )
}

