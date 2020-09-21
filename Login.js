import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
function Login() {

    const login=event=>{
        event.preventDefault();
    }
    const register=event=>{
        event.preventDefault();
    }



    return (
        <div className="login">
            <Link>
            <img 
            className="login_image" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG27.png" 
            alt=""/>
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>password</h5>
                    <input type="password"/>
                    <br/>
                    <button onClick={login} type="submit" className="login_signinbutton">Sign in</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register}>Create your Amazon acccount</button>
                </form>
            </div>
        </div>
    )
}

export default Login
