import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { AiOutlineBars } from 'react-icons/ai';
import styled from 'styled-components';
import Navbar from './Navbar';
import { GrClose } from 'react-icons/gr';

const Hero = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [windowSize, setWindowSize] = useState(
		window.innerWidth
	);
	const [isOpen, setIsOpen] = useState(false);

	const setWindowWidth = () => {
		setWindowSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', setWindowWidth);

		if (windowSize > 768) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}

		return () => {
			window.removeEventListener('resize', setWindowWidth);
		};
	}, [windowSize]);

	const handleNavbar = () => {
		const nav = document.querySelector('nav');
		const sections = document.querySelectorAll('section');
		const hero = document.querySelector('main div .logo');

		hero.classList.toggle('bcg-gray');
		nav.classList.toggle('nav-active');
		sections.forEach((section) => {
			section.classList.toggle('bcg-gray');
			console.log(section);
		});
		if (nav.classList.contains('nav-active')) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};
	return (
		<Wrapper>
			<img className='logo' src={logo} alt='logo' />
			{isDesktop ? (
				<Navbar />
			) : isOpen ? (
				<GrClose className='icon' onClick={handleNavbar} />
			) : (
				<AiOutlineBars
					onClick={handleNavbar}
					className='icon'
				/>
			)}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 5rem;

	.logo {
		position: relative;
		top: 2.9rem;
		left: 2.5rem;
		width: 10%;
		height: 2rem;
	}
	.icon {
		position: fixed;
		width: 2.5rem;
		height: 2.5rem;
		top: 2.3rem;
		left: 85%;
		font-size: 5rem;
		z-index: 10;
	}

	@media screen and (min-width: 768px) {
		.logo {
			position: relative;
			top: 2rem;
			left: 18%;
			width: 3%;
			height: 2.2rem;
		}
	}
`;

export default Hero;
