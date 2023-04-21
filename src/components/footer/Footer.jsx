import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">

                    <a href="https://www.instagram.com/dark_prince_pila/" className="footer__social-link">
                        <FaInstagram />
                    </a>

                    <a href="https://www.linkedin.com/in/deba-jyoti-pila-564755256" className="footer__social-link">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/darkprince131" className="home__social-link">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer__copyright text-cs">
                    &copy;2023 <span></span> All Rights Reserved
                </p>

                <p className="footer__copyright text-cs">Developed by
                    <span> Deba Jyoti Pila</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer