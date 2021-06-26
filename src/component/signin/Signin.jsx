import React, { Component } from 'react'
import fspimg from '../../resources/images/fsp.png'
import {NavLink} from 'react-router-dom'

 class Signin extends Component {
    render() {
        return (
            <>
            <div className="signin-container">
                <div className="img-container">
                    <img src={fspimg} alt="fspimage" className="fspimage"/>
                    <h3>Login to your account</h3>
                </div>
                <div className="input-container">
                    <p>Enter your email and password</p>
                    <form>
                        <label htmlFor="">Username</label>
                        <input type="text" />
                        <label htmlFor="">Password</label>
                        <input type="text" />
                        <div className="cta">
                            <NavLink to="/dashboard"><button>Log in to your dashboard</button></NavLink>
                            <p>Don't have an account? <button className="signup">SignUp</button></p>
                        </div>
                       
                    </form>
                </div>

            </div>
                
            </>
        )
    }
}

export default Signin
