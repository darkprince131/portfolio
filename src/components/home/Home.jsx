import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './home.css';
import CV from '../../assets/CV.pdf';

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home__wrapper">
				<div className="home__container container">
					<p className="home__subtitle text-cs">
						Hello, <span>My Name Is</span>
					</p>

					<h1 className="home__title text-cs">
						<span>DEBA</span> JYOTI
					</h1>

					<p className="home__job">
						<span className="text-cs">I Am</span> <b>Web Developer/Designer</b>
					</p>

					<div className="home__img-wrapper">
						<div className="home__banner">
							<img src={profileImg} alt="" className="home__profile" />
						</div>

						<p className="home__data home__data-one">
							<span className="text-lg">
								2 <b>+</b>
							</span>

							<span className="text-sm text-cs">
								Years of <span>Designing</span>
							</span>
						</p>

						<p className="home__data home__data-two">
							<span className="text-lg">5+</span>

							<span className="text-sm text-cs">
								Designing <span>Internships</span>
							</span>
						</p>

						<img src={shapeOne} alt="" className="shape shape__1" />
						<img src={shapeTwo} alt="" className="shape shape__2" />
						<img src={shapeTwo} alt="" className="shape shape__3" />
					</div>

					<p className="home__text">
						From Balasore, Odisha. I have subtle experience in web design, also I am good at wordpress. Love to create and design.
					</p>

					<div className="home__socials">
						<a href="https://www.instagram.com/dark_prince_pila/" className="home__social-link">
							<FaInstagram />
						</a>

						<a href="https://www.linkedin.com/in/deba-jyoti-pila-564755256" className="home__social-link">
							<FaLinkedin />
						</a>

						<a href="https://github.com/darkprince131" className="home__social-link">
							<FaGithub />
						</a>
					</div>

					<div className="home__btns">
						<a download='' href={CV} className="btn">
							Download CV
						</a>

						<a href="#skills" className="hero__link text-cs" >
							My Skills
						</a>
					</div>
				</div>

				<div className="section__deco deco__left">
					<img src={shapeOne} alt="" className="shape" />
				</div>
			</div>

			<div className="section__bg-wrapper">
				<span className="bg__title">Web Developer</span>
			</div>
		</section>
	);
};

export default Home