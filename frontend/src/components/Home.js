import React from 'react';
import Login from './Login';
import Register from './Register';
import './home.css'

const Home = () => {
    return (
        
        <div className = "homeStyle">
            Home Page
            <Login />
            <Register />
        </div>
    )
}

export default Home

