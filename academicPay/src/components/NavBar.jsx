import React from 'react'
import "../components/Navbar.css"
import logo from "../assets/AcademicPay_black.png"

const Navbar = () => {
  return (
    <header>
        <img src={logo} alt="" />
        <nav>
            <a href="/#">ព័ត៌មានទូទៅ</a>
            <a className='active' href="/#" >ព័ត៌មានលម្អិត</a>
        </nav>
        <div className='account'>
            <span></span>
            <div>
                <h3>academicPay</h3>
                <p>Admin</p>
            </div>
            <span></span>
        </div>
    </header>
  )
}

export default Navbar