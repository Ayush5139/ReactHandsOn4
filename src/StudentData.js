import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function StudentData() {
  return (
    <div>
          <div className='div1'>
            <Link to='/'>Home</Link>
            <Link to ='/StudentData'>Student Data</Link>
            <Link to='/ContactUs'> Conatct Us</Link>
        </div>
        <div className='div2'>
            <h1>Student Data</h1>
            <button className='btn'>Add New Student </button>
        </div>
        <div>
            <table className='table'>
                <thead className='th'>
                    <th className='th1'>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                    <hr></hr>
                </thead>
                <tbody>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    <hr></hr>

                    <tr className='tr'>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>

                    <tr>
                    <td>Tom</td>
                    <td>45</td>
                    <td>Engish</td>
                    <td>November</td>
                    <td><a href='#'>Edit</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StudentData