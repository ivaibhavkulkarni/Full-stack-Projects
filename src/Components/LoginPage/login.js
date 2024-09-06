import { Component } from "react"
import './login.css'
import applelogo from './apple-logo.png'

class Login extends Component{

    render(){
        return(
            <div>
                <nav className="nav-bar">
                    <div className="nav">
                        <img className="img" src={applelogo}/>
                    <p className="apple-text">Welcome to Apple Employee</p>
                    </div>
                </nav>
                <div className="login-container">
                    <div className="bg-login">
                        <form>
                            <label  className="form-text" for="username">Username</label>
                            <input className="input" id="username" type="text"/>
                            <label className="form-text" for="password">Password</label>
                            <input className="input" id="password" type="text"/>
                            <div className="button-div">
                                <button className="button">Login</button>
                                <button className="button">Create new user</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login