import React from 'react'
import { NavLink } from 'react-router-dom'

type LinkType = { link: string, title: string, icon: string }

const links: LinkType[] = [
  { link: "/", title: "HOME", icon: "home" },
  { link: "food", title: "FOOD", icon: "spoon-knife" },
  { link: "contacts", title: "CONTACTS", icon: "address-book" },
  { link: "projects", title: "PROJECTS", icon: "display" },
  { link: "journal", title: "JOURNAL", icon: "book" },
]

const Menu = () => {

  return (
    <nav>
      <div className="menu">
        <div className="menu-up">
          <div className="menu-logo">
            Watch yourself
          </div>
          <ul>
            {
              links.map((l: LinkType) => (
                <li key={l.title}>
                  <NavLink
                    to={l.link}
                    className={({ isActive }) => isActive ?
                      "menu-link menu-link-active" :
                      "menu-link"
                    }
                  >
                    <i className={`icon-${l.icon} fz-24`} />
                    {l.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu