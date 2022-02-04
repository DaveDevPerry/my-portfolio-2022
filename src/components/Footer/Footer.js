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

const Footer = () => {
	return (
		<FooterWrapper>
			<a href='#home' id='chevron-up'>
				{/* <span class='iconify' data-icon='bi:chevron-compact-up'></span> */}
				<FaChevronUp size={50} color='#780202' />
			</a>

			<div className='links-container footer-container'>
				<a href='https:github.com/DaveDevPerry' target='_blank'>
					<SiGithub size={30} color='#ffffff' />
					{/* <span
						className='iconify'
						id='footer-gh'
						data-inline='false'
						data-icon='akar-icons:github-fill'
					></span> */}
				</a>
			</div>

			<div className='footer-container company-container'>
				<p>© Copyright 2021 by daveperry.tech</p>
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

export default Footer;

// <footer>
// 			<a href="#home-page" id="chevron-up">
// 				<span className="iconify" data-icon="bi:chevron-compact-up"></span>
// 			</a>

// 			<div className="links-container footer-container">
// 				<a href="https://github.com/DaveDevPerry" target="_blank">
// 					<span
// 						class="iconify"
// 						id="footer-gh"
// 						data-inline="false"
// 						data-icon="akar-icons:github-fill"
// 					></span>
// 				</a>
// 			</div>

// 			<div class="footer-container company-container">
// 				<p>© Copyright 2021 by daveperry.tech</p>
// 			</div>

// 			<div class="toggle-container footer-container">
// 				<!-- <div class="toggle-mode"> -->
// 				<svg
// 					class="toggle-color-change"
// 					id="dark-mode"
// 					width="35"
// 					height="35"
// 					viewBox="0 0 55 55"
// 					fill="none"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<path
// 						class="sun"
// 						d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
// 						fill="#FFBA07"
// 					/>
// 				</svg>
// 				<!-- </div> -->
// 			</div>
// 		</footer>

{
	/* <FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:contact@mail.com'>contact@mail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating One Project at a Time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://linkedin.com'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://instagram.com'>
						<AiFillInstagram size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper> */
}
