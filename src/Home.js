// Home.js
import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to Home</h2>
            <p>This is the home page of our application.</p>
            <Link to="/studentLogin" className="customLink">學生登入</Link>
        </div>
    );
};

export default Home;
