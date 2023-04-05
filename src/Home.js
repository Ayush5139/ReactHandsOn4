import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
        <div className='div1'> 
            <Link to='/'>Home</Link>
            <Link to ='/StudentData'>Student Data</Link>
            <Link to='/ContactUs'> Conatct Us</Link>
        </div>
        <div>
            <h1 className='h1'>Home</h1>
        </div>
    </div>
  )
}

export default Home