import { NavLink } from "react-router-dom"

import './index.css'

export const Sidebar = () => {
  return (
    <aside>
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
  )
}
