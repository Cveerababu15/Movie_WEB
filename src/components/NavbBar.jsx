import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'
function NavbBarPage() {
  return (
<>
<nav className="navbar">
    <div className="navbar-brand">
    <Link to="/">Movie.Com</Link>
    </div>
    <div className="navbar-links">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/Faviroute" className='nav-link'>Faviroutes</Link>
    </div>
</nav>



</>
  )
}

export default NavbBarPage