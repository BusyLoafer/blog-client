import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {

  return (
    <nav>
      <div className="menu">
        <div className="menu-up">
          <div className="menu-logo">
            Hi
          </div>
          <ul className="menu-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "menu-link menu-link-active" : "menu-link"}
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                A
              </NavLink>
              <NavLink
                to="articles"
                className={({ isActive }) => isActive ? "menu-link menu-link-active" : "menu-link"}
              >
                B
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu