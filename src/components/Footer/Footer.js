import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaChevronUp } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

// import Anime, { anime } from 'react-anime';

const Footer = () => {
	// const { Anime, stagger } = ReactAnime;
	// dark mode toggle
	// const moonPath =
	// 	'M16 27.5C16 42.6878 27 54 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16 12.3122 16 27.5Z';
	// const sunPath =
	// 	'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';
	// const darkMode = document.querySelector('#dark-mode');
	// let toggle = false;

	// const handleClick = () => {
	// 	// darkMode.addEventListener('click', () => {
	// 	// 	// we need anime.js
	// 	// set up timeline
	// 	const timeline = anime.timeline({
	// 		duration: 750,
	// 		easing: 'easeOutExpo',
	// 	});
	// 	// 	// add diff animations to timeline
	// 	timeline
	// 		.add({
	// 			targets: '.sun',
	// 			d: [{ value: toggle ? sunPath : moonPath }],
	// 		})
	// 		.add(
	// 			{
	// 				targets: '#dark-mode',
	// 				rotate: toggle ? 0 : -40,
	// 			},
	// 			'-=300'
	// 		)
	// 		// .add(
	// 		// 	{
	// 		// 		targets: '.toggle-mode',

	// 		// 		backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
	// 		// 	},
	// 		// 	'-=700'
	// 		.add(
	// 			{
	// 				targets: '.sun',

	// 				fill: toggle ? '#ffba07' : '#ffffff',
	// 			},
	// 			'-=700'
	// 		);
	// 	// each time we click toggle switch
	// 	if (!toggle) {
	// 		toggle = true;
	// 		document.documentElement.setAttribute('data-theme', 'light');
	// 	} else {
	// 		toggle = false;
	// 		document.documentElement.removeAttribute('data-theme', 'light');
	// 	}
	// 	// run change to sun
	// 	// });
	// };

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
						// onClick={handleClick}
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

export default Footer;
