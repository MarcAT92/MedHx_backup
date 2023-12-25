import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useauthContext';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();

    const handleClick = () => {
        logout();
    }

    const isLandingPage = location.pathname === '/';
    const isForgotPassword = location.pathname === '/forgot-password';

    return (
        <header>
            <div className="container">
                <NavLink to="/">
                    <img src={logo} alt=""/>
                </NavLink>
                <nav>
                    {user && (
                        <div>
                            <span>Welcome {user.fname}{user.username}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div> 
                    )}
                    {!user && !isLandingPage && !isForgotPassword &&(
                        <div>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
