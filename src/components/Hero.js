import React, { useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Link from 'next/link';

import { Section, SectionTitle, BtnWrapper } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
// import { LeftSection, SectionText } from './HeroStyles';

const Hero = () => {
	// const router = useRouter();
	const tl = useRef();

	useEffect(() => {
		// console.log(window.innerWidth, 'width');

		if (window.innerWidth > 640) {
			// works over 640px
			tl.current = gsap
				.timeline()
				.from('#hero-title', { opacity: 0, duration: 1, delay: 2 })
				.from('#hero-text', { opacity: 0, duration: 1 }, '-=0.8')
				.from('#hero-buttons', { opacity: 0, duration: 1 }, '-=0.8');
			// tl.current = gsap
			// 	.timeline()
			// 	.from('#hero-title', { opacity: 0, duration: 1, delay: 4 })
			// 	.from('#hero-text', { opacity: 0, duration: 1 }, '-=0.5')
			// 	.from('#hero-buttons', { opacity: 0, duration: 1 }, '-=0.5');
		}
		if (window.innerWidth < 639) {
			console.log('mobile device');
			// works over 640px
			// tl.current = gsap
			// 	.timeline()
			// 	.from('#hero-title', { opacity: 0, duration: 1, delay: 2 })
			// 	.from('#hero-text', { opacity: 0, duration: 1 }, '-=0.5')
			// 	.from('#hero-buttons', { opacity: 0, duration: 1 }, '-=0.5');
			tl.current = gsap
				.timeline()
				.from('#hero-title', { opacity: 0, duration: 1, delay: 0.5 })
				.from('#hero-text', { opacity: 0, duration: 1 }, '-=1')
				.from('#hero-buttons', { opacity: 0, duration: 1 }, '-=1');
		}
	}, []);

	// const handleClick = (e) => {
	// 	e.preventDefault();
	// 	router.push('/resume');
	// };

	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center id='hero-title'>
					I design and develop <br />
					complete solutions for <br />
					the digital world.
				</SectionTitle>
				<SectionText id='hero-text'>
					I aim to help design and develop digital products to turn ideas into
					fully functional, enjoyable experiences.
				</SectionText>
				<BtnWrapper id='hero-buttons'>
					{/* <Link href='#' passHref> */}
					{/* <Button className='btn-left' onClick={handleClick}>
						View CV
					</Button> */}
					<Button>
						<a
							href='/pdf/daveperry_resume.pdf'
							target='_blank'
							rel='noopener noreferrer'
							id='cv-btn'
						>
							My CV
						</a>
					</Button>
					{/* </Link> */}
					{/* <Link href='#' passHref>
						<Button className='btn-left'>View C.V.</Button>
					</Link> */}
					{/* <Link href='#projects' passHref> */}
					<Button>
						<a href='#projects' id='proj-btn'>
							My Projects
						</a>
					</Button>
					{/* </Link> */}
				</BtnWrapper>
			</LeftSection>
		</Section>
	);
};
const LeftSection = styled.div`
	width: 100%;
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		margin-bottom: 12rem;
	}
`;

const SectionText = styled.p`
	max-width: 800px;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	margin-bottom: 3.6rem;
	/* color: rgba(255, 255, 255, 0.5); */
	color: rgb(181, 178, 178);
	padding-left: 20px;
	position: relative;
	/* opacity: 0; */
	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		width: 10px;
		background-color: ${(props) => props.theme.colors.red};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 32px;
		margin-bottom: 24px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 16px;
	}
`;

export default Hero;
