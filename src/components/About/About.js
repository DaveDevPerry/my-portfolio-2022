import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import {
	Section,
	SectionText,
	SectionTitle,
	SectionDivider,
} from '../../styles/GlobalComponents';
import { AboutTextWrapper, InfoText } from './AboutStyles';

// import {
// 	SiVisualstudiocode,
// 	SiHtml5,
// 	SiCss3,
// 	SiSass,
// 	SiJavascript,
// 	SiGit,
// 	SiNetlify,
// 	SiFigma,
// 	SiAdobephotoshop,
// 	SiGithub,
// } from 'react-icons/si';
// import AboutBgText from '../Animations/AboutBgText';

const About = (props) => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.from('#about', { opacity: 0, duration: 1, delay: 9 });
	}, []);

	// animates svg
	// function playAnim(e) {
	// 	e.target.classList.add('play');
	// }

	function goRed(e) {
		e.target.classList.add('red');
	}

	return (
		<Section id='about'>
			{/* <SectionDivider /> */}
			{/* <br /> */}
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				I am a self-taught developer who enjoys working in front-end development
				and design.
			</SectionText>

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
					I’ve built and designed all my web applications thus far using HTML,
					SCSS and vanilla Javascript. You can view all the technologies I have
					used in each project on my portfolio page.
				</InfoText>
				<InfoText>
					Before moving into development, I worked in the Courier and Logistics
					sector, where I designed and developed a basic intranet site and a few
					html email promo offers. I also produced a few small projects with
					Excel such as dynamic tariffs and shipping quotes.
				</InfoText>
				<InfoText>
					When I am not coding, I enjoy playing and arranging pieces on guitar
					for my youtube channel. I also enjoy gaming and watching development
					channels and tutorials on youtube.
				</InfoText>
			</AboutTextWrapper>

			<SectionDivider />
		</Section>
	);
};

export default About;
