import React from 'react';
import styled from 'styled-components';
import { topPosts as data } from '../data';

function TopBlogPosts() {
	return (
		<Wrapper id='topposts' className='page'>
			{data.map((post) => {
				const { id, heading, text, img } = post;
				return (
					<div className='post-container' key={id}>
						<img src={img} alt='top-imgs' />
						<div className='text'>
							<h2>0{id}</h2>
							<h3>{heading}</h3>
							<p>{text}</p>
						</div>
					</div>
				);
			})}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.post-container {
		display: flex;
		align-items: flex-start;
		width: 80%;
		margin-bottom: 1.2rem;
	}

	img {
		flex: 1;
		width: 35%;
	}
	.text {
		order: 1;
		padding-left: 0.9rem;
	}

	h2 {
		color: gray;
		font-size: 2.3rem;
		margin-bottom: -1.1rem;
		margin-top: -0.6rem;
	}
	h3 {
		font-size: 1.2rem;
	}

	h3:hover {
		color: salmon;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		position: relative;
		display: grid;
		margin-left: 1.5rem;
		grid-template-columns: repeat(3, 1fr);
		width: 70%;

		top: -32rem;
		right: -16%;
		.post-container {
			width: 89%;
			height: 80%;
		}

		img {
			width: 9rem;
		}
		.text {
			margin-top: 0.2rem;
		}

		h3 {
			font-size: 1.3rem;
			margin-top: 0.9rem;
		}

		h2 {
			font-size: 1.9rem;
			margin-bottom: 0.2rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
`;

export default TopBlogPosts;
