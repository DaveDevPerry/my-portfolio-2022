import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

import {
	Section,
	SectionText,
	SectionTitle,
	SectionDivider,
} from '../styles/GlobalComponents';
// import { AboutTextWrapper, InfoText } from './AboutStyles';

const About = () => {
	const tl = useRef();
	useEffect(() => {
		if (window.innerWidth > 640) {
			tl.current = gsap
				.timeline()
				.from('#about', { opacity: 0, duration: 1, delay: 7 });
		}
		if (window.innerWidth < 639) {
			tl.current = gsap
				.timeline()
				.from('#about', { opacity: 0, duration: 1, delay: 4 });
		}
	}, []);

	function goRed(e) {
		e.target.classList.add('red');
	}

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				I am a self-taught developer. Starting with front-end design as an
				outlet for the creative side in me. It gave me a thirst to delve deeper
				into development. It wasn't long before I included the back-end, as I
				realized I needed to learn full-stack to build out my project ideas in
				their entirety.
			</SectionText>
			{/* <SectionText>
				I am a self-taught developer. I began with front-end which incorporated
				creativity and design aspects. I then moved on to the back-end, as I
				realized I needed to learn full-stack to build out my project ideas in
				their entirety.
			</SectionText> */}
			<AboutTextWrapper>
				<p id='about-bg-text-name' onMouseOver={goRed}>
					dave <span>perry</span>
				</p>
				<InfoText>
					I’m naturally creative and enjoy problem solving. I have a meticulous
					attention to detail and enjoy building stylish, engaging, and
					functional web applications.
				</InfoText>
				<InfoText>
					I’ve built and designed all my web applications thus far beginning
					with HTML, SCSS and vanilla Javascript, and then on to React and the
					MERN stack. You can view all the technologies I have used in each
					project on my portfolio page.
				</InfoText>
				<InfoText>
					Before moving into development, I worked in the Courier and Logistics
					sector, where I designed and developed a basic intranet site and a few
					html email promo offers. I also produced a few small projects with
					Excel such as dynamic tariffs and shipping quotes.
				</InfoText>
				<InfoText>
					When I am not coding, I enjoy playing and arranging pieces on guitar
					for my youtube channel. I also enjoy gaming and watching dev. and
					tech. channels on youtube.
				</InfoText>
			</AboutTextWrapper>
			<SectionDivider />
		</Section>
	);
};

// <Section id='about'>
// 			<SectionTitle>About Me</SectionTitle>
// 			<SectionText>
// 				I am a self-taught developer who enjoys working in front-end development
// 				and design.
// 			</SectionText>
// 			<AboutTextWrapper>
// 				<p id='about-bg-text-name' onMouseOver={goRed}>
// 					dave <span>perry</span>
// 				</p>
// 				<InfoText>
// 					I’m naturally creative and enjoy problem solving. I have a meticulous
// 					attention to detail and enjoy building stylish, engaging, and
// 					functional web applications.
// 				</InfoText>
// 				<InfoText>
// 					I’ve built and designed all my web applications thus far using HTML,
// 					SCSS and vanilla Javascript. You can view all the technologies I have
// 					used in each project on my portfolio page.
// 				</InfoText>
// 				<InfoText>
// 					Before moving into development, I worked in the Courier and Logistics
// 					sector, where I designed and developed a basic intranet site and a few
// 					html email promo offers. I also produced a few small projects with
// 					Excel such as dynamic tariffs and shipping quotes.
// 				</InfoText>
// 				<InfoText>
// 					When I am not coding, I enjoy playing and arranging pieces on guitar
// 					for my youtube channel. I also enjoy gaming and watching development
// 					channels and tutorials on youtube.
// 				</InfoText>
// 			</AboutTextWrapper>
// 			<SectionDivider />
// 		</Section>

const InfoText = styled.p`
	width: 100%;
	padding: 0;
	/* color: rgba(255, 255, 255, 0.5); */

	color: rgb(181, 178, 178);
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	margin-bottom: 2rem;
	pointer-events: none;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
		font-size: 16px;
		line-height: 24px;
		font-weight: 300;
	}
`;

const AboutTextWrapper = styled.div`
	position: relative;
	overflow: hidden;
	#about-bg-text-name {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Gemunu Libre', sans-serif;
		color: rgba(255, 255, 255, 0.013);
		-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
		-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
		color: white;
		font-size: 20rem;
		width: 100%;
		text-align: center;
		line-height: 14rem;
		transition: 0.5s ease-in;
		span {
			text-transform: uppercase;
		}
	}

	.red#about-bg-text-name {
		color: rgba(221, 9, 9, 0.013);
		-webkit-text-stroke: 1px #5e060621;
		-webkit-text-fill-color: #5e060621;
		span {
			color: rgba(221, 9, 9, 0.013);
			-webkit-text-stroke: 1px #5e060621;
			-webkit-text-fill-color: #5e060621;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		#about-bg-text-name {
			font-size: 14rem;
		}
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		#about-bg-text-name {
			font-size: 10rem;
		}
	}
`;

export default About;
