import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs'
import Home from './Home'
import StudentData from './StudentData'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/StudentData' element = {<StudentData/>}/>
            <Route path='/ContactUs' element = {<ContactUs/>}/>
        </Routes>
    </div>
  )
}

export default Routing