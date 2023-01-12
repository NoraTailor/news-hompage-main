import React from 'react';
import styled from 'styled-components';
import desktopImg from '../assets/images/image-web-3-desktop.jpg';
import MainImg from '../assets/images/image-web-3-mobile.jpg';

function Main() {
	return (
		<Wrapper id='home' className='page'>
			<div className='main-img' />
			<div className='main-text-container'>
				<h1>The Bright Future of Web 3.0?</h1>
				<div className='small-text-container'>
					<p>
						We dive into the next evolution of the web that
						claims to put the power of the platforms back
						into the hands of the people. But is it really
						fulfilling its promise?
					</p>
					<button>read more</button>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;

	.main-img {
		background: url(${MainImg}) no-repeat;
		background-size: 100%;
		width: 90vw;
		height: 30vh;
	}

	.main-img,
	.main-text-container {
		width: 80%;
	}

	h1 {
		font-weight: 700;
		font-size: 2rem;
	}

	button {
		position: relative;

		background-color: salmon;
		color: white;
		text-transform: uppercase;
		width: 50%;
		border: none;
		padding: 1rem;
	}

	button:hover {
		background-color: black;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.main-img {
			background: url(${desktopImg}) no-repeat;
			width: 45vw;
			background-size: 100%;
			position: relative;
			top: -1.5rem;
			left: -9rem;
		}

		.main-text-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 50%;
			flex-wrap: wrap;
			height: 25%;
			position: relative;
			top: -2.5rem;
			left: -7rem;
		}

		h1 {
			margin-top: 1.4rem;
			font-size: 2.5rem;
			font-weight: 900;
			line-height: 2.5rem;
			word-wrap: break-word;
		}
		.small-text-container {
			margin-left: -1rem;
			width: 80%;
			margin-top: 1rem;
		}

		p {
			font-size: 0.7rem;
		}
		button {
			margin-top: 0.6rem;
			width: 60%;
			padding: 0.5rem;
		}
	}
`;

export default Main;
