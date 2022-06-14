import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '..//assets/images/bg1.png'
export default function ForgetPasswordPage() {
    return (
        <div className="text-center" style={ HeaderStyle } >
            <h2 className="font-heading text-lg font-normal text-white font-bold">Reset your password</h2>

            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn2" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
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