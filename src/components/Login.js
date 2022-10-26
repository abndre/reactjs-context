import React from 'react'
import "./Login.css"
import {useContext} from 'react';
import AppContext from '../context/AppContext';
function Login() {

    const {setActive} = useContext(AppContext)

    const handleSubmit = (event) => {
    event.preventDefault();
    setActive(value => !value)
    }
  return (
    <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="txt_field">
                <input type="text" required></input>
                <label>Username</label>
            </div>
            <div className="txt_field">
                <input type="password" required></input>
                <label>Password</label>
            </div>
            <input type="submit" value="Login"></input>
        </form>
      
    </div>
  )
}

export default Login
