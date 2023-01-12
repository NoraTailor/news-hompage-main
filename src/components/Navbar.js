import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import InterBold from '../assets/fonts/static/Inter-Bold.ttf';

function Navbar({ handleNavbar }) {
	return (
		<Wrapper>
			<nav className='nav' onClick={handleNavbar}>
				<ul className='links'>
					<li>
						<Link activeClass='active' smooth spy to='home'>
							Home
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							smooth
							spy
							to='newposts'>
							New
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							smooth
							spy
							to='topposts'>
							Popular
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							smooth
							spy
							to='topposts'>
							Trending
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							smooth
							spy
							to='topposts'>
							Categories
						</Link>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.nav {
		display: flex;
		flex-direction: column;
		margin-top: -5rem;
		height: 100vh;
		z-index: 4;
		width: 60%;
		position: fixed;
		background-color: white;
		overflow: hidden;
		transform: translate(160%);
		visibility: hidden;
		transition: all 1s ease-in-out;
	}

	.nav-active {
		transform: translate(90%);
		visibility: visible;
		opacity: 1;
	}

	.links {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 45%;
		margin-top: 5rem;
	}

	li {
		font-family: ${InterBold};
		font-weight: bold;
		list-style-type: none;
		color: gray;
	}

	li:hover {
		color: orange;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.nav {
			flex-direction: row;
			margin-bottom: 3rem;
			height: 3rem;
			z-index: 4;
			width: 50%;
			position: relative;
			top: 1rem;
			background-color: transparent;
			transform: translate(80%);
			visibility: visible;
		}

		.links {
			flex-direction: row;
			height: 3rem;
			margin-top: 1rem;
			width: 80%;
			justify-content: space-around;
			font-size: 0.7rem;
		}

		li {
		}
	}
`;

export default Navbar;
