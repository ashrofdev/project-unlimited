import React, { Component } from 'react'
import fspimg from '../../resources/images/fsp.png'
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
                        <div>
                            <input type="submit" value="Sign in" />
                            <input type="submit" value="Sign up" />
                        </div>
                       
                    </form>
                </div>

            </div>
                
            </>
        )
    }
}

export default Signin
