import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate();
    const handleGoHome = () =>{
        navigate("/")
    }
  return (
    <div className='not-found'>
        <h1>Oops</h1>
        <p>404 Page not Found</p>
        <button onClick={handleGoHome}>Go Home</button>
    </div>
  )
}
