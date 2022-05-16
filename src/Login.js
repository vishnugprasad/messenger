import React from 'react';
import { Button } from "@mui/material"
import "./login.css";


function Login() {
    const signIn = ()=>{

    }
  return (
    <div className='login'>
        <div className='login-container'>
            <img
            src = "https://i.pinimg.com/736x/27/fc/02/27fc021e36714e35dc01ac62c9a352f2.jpg"n alt = ""
            />
            <div className='login-text'>
                <h1>sign in to </h1>
            </div>

            <Button onClick = {signIn}>
                sign in with google
            </Button>

        </div>
    </div>
  )
}

export default Login