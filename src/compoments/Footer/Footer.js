import React from "react";
import '../../assets/style/Footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer>
            <div className="copyRightStyle">
                <p className="ml-5">&copy; {new Date().getFullYear()} Orange Digital Center Tous droits réservés. </p>
                <div className="socialLinks">
                    <a className="Facebook"href="https://www.facebook.com/OrangeDigitalCenterMadagascar" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"><FaFacebookSquare /></i>
                    </a>
                    <a className="Linkedin mr-5" href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"><BsLinkedin /></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
