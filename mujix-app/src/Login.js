import React from 'react'
import './Login.css';
import logo from './logo.png'
import { loginUrl } from './spotify';


function Login() {
  return (
    <div className='login'>
      {/*LOGO mujix */}
      <img src={logo} className='logo' alt="logo" />
      {/*Login button */}
      <a href={loginUrl}>Login with Your Spotify Account</a>
    </div>
  )
}

export default Login
