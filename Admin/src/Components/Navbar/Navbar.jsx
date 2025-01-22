import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/sjlogo.png';
// import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      {/* <img src={navProfile} alt="" className="nav-profile" /> */}
      <h4>Admin Panel</h4>
    </div>
  )
}

export default Navbar
