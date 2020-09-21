import React, { useState } from 'react';
import './Login.css';
import {Link , useHistory} from "react-router-dom";
import { auth } from './Firebase';
function Login() {
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login=event=>{
        event.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
       .then((auth) => {
           history.push('/');
       }).catch(e=>alert(e.message));
    };
    const register=event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        }).catch(e=>alert(e.message));
    };



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
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
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
