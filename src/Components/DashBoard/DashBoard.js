import { Component } from 'react'
import './DashBoard.css'
import applelogo from './apple-logo.png'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <nav className="nav-bar-dash">
                    <div className="nav">
                        <img className="img" src={applelogo}/>
                        <button className='Dbutton'>Employee List</button>
                        <button className='Dbutton'>Add User</button>
                    </div>
                    <div className='nav-2'>
                        <button className='logbutton'>Log out</button>
                    </div>
                </nav>
                <div className='dash-container'>
                    <h1 className='Welcomeheading'>Welcome Username</h1>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>FullName</th>
                                <th>Email</th>
                                <th>Phone no</th>
                                <th>Designation</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Create Date</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            this.state.employees
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Dashboard