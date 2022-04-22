import React from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

// import { FooterWrapper } from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<a href='/' id='chevron-up'>
				<FaChevronUp size={50} color='#780202' />
			</a>

			<div className='links-container footer-container'>
				<a href='https:github.com/DaveDevPerry' target='_blank'>
					<SiGithub size={30} color='#ffffff' pointerEvents='none' />
				</a>
			</div>

			<div className='footer-container company-container'>
				<p>© 2022 by daveperry.tech</p>
			</div>

			<div className='toggle-container footer-container'>
				<div className='toggle-mode'>
					<svg
						className='toggle-color-change'
						id='dark-mode'
						width='35'
						height='35'
						viewBox='0 0 55 55'
						fill='none'
						xmlns='http:www.w3.org/2000/svg'
					>
						<path
							className='sun'
							d='M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z'
							fill='#FFBA07'
						/>
					</svg>
				</div>
			</div>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.section`
	width: 95%;
	padding: 2rem 2rem;
	margin: 6rem auto 0 auto;
	box-sizing: border-box;
	background-color: rgb(27, 27, 27);
	border-top: 3px solid #780202;
	border: 3px solid #780202;
	border-bottom: 0px solid transparent;
	border-radius: 10px 10px 0 0;
	position: relative;
	height: 4rem;
	#chevron-up {
		position: absolute;
		top: -5rem;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #780202;
		font-size: 8rem;
	}
	.footer-container {
		border: 3px solid #780202;
		padding: 0.5rem;
		background-color: #1b1b1b;
		position: absolute;
		top: 0;
		border-radius: 10rem;
	}
	.links-container {
		left: 2rem;
		transform: translateY(-50%);
		a {
			padding: 0.5rem;
			display: grid;
			place-content: center;
			#footer-gh {
				font-size: 30px;
				color: var(--grey);
			}
		}
	}
	.toggle-container {
		right: 2rem;
		transform: translateY(-50%);
		display: grid;
		place-content: center;
		padding: 0.8rem;
		svg {
			cursor: pointer;
		}
	}
	.company-container {
		padding: 0.5rem 2rem;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	p {
		font-size: 1.2rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 16px 48px;
		border: 2px solid #780202;
		padding-bottom: 0px;
		border-bottom: 0px solid transparent;
		.footer-container {
			border: 2px solid #780202;
		}
		.company-container p {
			font-size: 10px;
		}
	}
`;

export default Footer;
