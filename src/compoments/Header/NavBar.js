import React from "react";
import '../../assets/style/NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo_orange.jpg';
class NavBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{ width: '200px' }}/>

                    </NavLink>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link ml-4" to="/" exact={true}>
                                <button>
                                    <span>Acceuil</span>
                                </button>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ml-4" to="/Apropos" exact={true}>
                                <button>
                                    <span>A propos</span>
                                </button>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ml-4" to="/connection" exact={true}>
                                <button>
                                    <span>Deconnection</span>
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default NavBar;
