import React from 'react';
import styled from 'styled-components';
import { blogData as data } from '../data';

function NewBlogPosts() {
	return (
		<Wrapper id='newposts' className='page'>
			<h1>New</h1>
			{data.map((post) => {
				const { id, heading, text } = post;
				return (
					<div key={id}>
						<h2>{heading}</h2>
						<p>{text}</p>
						{id <= 2 ? <hr /> : null}
					</div>
				);
			})}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: rgb(17, 9, 54);
	margin: 2.1rem;
	padding: 1rem;
	color: white;
	div {
		margin-left: 1rem;
	}

	h1 {
		margin-left: 2rem;
		color: orange;
	}
	h2 {
		font-size: 1.2rem;
	}

	h2:hover {
		color: orange;
		cursor: pointer;
	}
	@media screen and (min-width: 768px) {
		position: relative;
		width: 20%;
		height: 16rem;
		top: -25rem;
		right: -58%;
		padding-left: 0.5rem;

		h1 {
			font-size: 1.5rem;
			margin-top: -1rem;
			margin-left: 1rem;
			margin-bottom: -0.7rem;
		}

		h2 {
			font-size: 0.8rem;
		}
		p {
			font-size: 0.7rem;
		}
	}
`;

export default NewBlogPosts;
