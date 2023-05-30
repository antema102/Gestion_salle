import React from "react";
import '../../assets/style/NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar" id="navbar_css">
                    <NavLink className="navbar-brand" to="/">
                        <img src="#" alt="logo" style={{ width: '40px' }} />
                    </NavLink>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link ml-4" to="/" exact={true}>Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ml-4" to="/Aprops" exact={true}>À propos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ml-4" to="#" exact={true}>Déconnexion</NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default NavBar;
