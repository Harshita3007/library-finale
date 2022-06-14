import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '..//assets/images/bg1.png'
export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto" style={ HeaderStyle }>
            <h1 className="font-heading text-lg font-normal text-white font-bold">Join us</h1>
            <h5 className="font-heading text-lg font-normal text-white font-bold">Create your personal account</h5>
            <form action="/Header">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" maxlength="8" size="50" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" size="50"  required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" size="50" requiredc />
                </p>
                <p>
                    <button id="btn" type="submit" className="btn1 ">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Login</Link>.</p>
            </footer>
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