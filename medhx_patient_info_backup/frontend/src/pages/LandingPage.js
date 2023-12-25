import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };
    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="landing-page">
            <h1>Welcome to Medhx Health Records</h1>
            <p>
                Medhx is a health records app that helps you manage and track your health information securely.
                Sign up today to get started on your health journey.
            </p>
            <p>
                New to Medhx? Sign up here 
            </p>
            <button onClick={handleSignUpClick}>Sign Up</button>
            <p>
                Already a user? Login here
            </p>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
};

export default LandingPage;
