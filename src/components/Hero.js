import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Link from 'next/link';

import { Section, SectionTitle, BtnWrapper } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
// import { LeftSection, SectionText } from './HeroStyles';

const Hero = () => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.from('#hero-title', { opacity: 0, duration: 1, delay: 6 })
			.from('#hero-text', { opacity: 0, duration: 1 })
			.from('#hero-buttons', { opacity: 0, duration: 1 });
	}, []);

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
					<Link href='#' passHref>
						<Button className='btn-left'>View C.V.</Button>
					</Link>
					<Link href='#projects' passHref>
						<Button>My Projects</Button>
					</Link>
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
`;

const SectionText = styled.p`
	max-width: 800px;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	margin-bottom: 3.6rem;
	color: rgba(255, 255, 255, 0.5);
	padding-left: 20px;
	position: relative;
	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		width: 10px;
		background-color: #780202;
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
