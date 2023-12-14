import { useState } from 'react'
import { NavLink } from "react-router-dom"

import './index.css'

export const Sidebar = () => {

  const [isAsideVisible, setIsAsideVisible] = useState(false)

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <>
      <div className='menu' onClick={toggleAside}>
        <img src="./extra/menu.png" alt="Menu" />
      </div>
      <aside className={isAsideVisible ? 'visible' : ''}>
        <span onClick={toggleAside}>x</span>
        <section className="nav-banner">
          <img src="./extra/logo.png" alt="" />
        </section>

        <section className="nav-section">
          <NavLink to='/home' className='nav-link'>Home</NavLink>
        </section>

        <section className="nav-section">
          <NavLink to='/details' className='nav-link'>Details</NavLink>
        </section>

        <section className="nav-section">
          <NavLink to='/danny' className='nav-link'>Danny</NavLink>
        </section>
      </aside>
    </>
  )
}
