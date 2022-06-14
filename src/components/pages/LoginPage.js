import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '..//assets/images/bg1.png'

export default function SignInPage() {
    return (
        <div className="container-fluid " style={ HeaderStyle }>
        <div className="text-center" >
            <h1 className="font-heading text-lg font-normal text-white font-bold  font-size: 110% " >MOVIE LIBRARY</h1>
            <form action="/header" style={{backgroundColor: "white"}} class="form-group">
                <p>
                    <label >Username or email address</label><br/>
                    <input type="text" name="first_name" size="50" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    
                    <input type="password" name="password" size="50"  required />
                {/* </p>
                <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>   
                <p> */}
                <br/>   
                <br/> 
                    <button id="btn1" type="submit" className="btn1 ">Login</button>
                </p>
            </form>
            <footer>
                <p> <Link to="/register">Create an account</Link>.</p>
                
            </footer>
        </div>
        </div>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}