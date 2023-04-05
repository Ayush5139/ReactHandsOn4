import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function ContactUs() {
  return (
    <div>
          <div className='div1'>
            <Link to='/'>Home</Link>
            <Link to ='/StudentData'>Student Data</Link>
            <Link to='/ContactUs'> Conatct Us</Link>
        </div>
        <div>
        <h1>Contact Us</h1>
        </div>
    </div>
  )
}

export default ContactUs