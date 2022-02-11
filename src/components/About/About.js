import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import {
	Section,
	SectionText,
	SectionTitle,
	SectionDivider,
} from '../../styles/GlobalComponents';
import { AboutPageContainer, InfoText } from './AboutStyles';

import {
	SiVisualstudiocode,
	SiHtml5,
	SiCss3,
	SiSass,
	SiJavascript,
	SiGit,
	SiNetlify,
	SiFigma,
	SiAdobephotoshop,
	SiGithub,
} from 'react-icons/si';

const About = (props) => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.from('#about', { opacity: 0, duration: 1, delay: 9 });
	}, []);

	return (
		<Section id='about'>
			{/* <SectionDivider /> */}
			{/* <br /> */}
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				I am a self-taught developer who enjoys working in front-end development
				and design.
			</SectionText>
			<InfoText>
				I’m naturally creative and enjoy problem solving. I have a meticulous
				attention to detail and enjoy building stylish, engaging, and functional
				web applications.
			</InfoText>
			<InfoText>
				I’ve built and designed all my web applications thus far using html,
				sass and vanilla javascript. You can view all the technologies I have
				used in each project on my portfolio page.
			</InfoText>
			<InfoText>
				Before moving into development, I worked in the Courier and Logistics
				sector, where I designed and developed a basic intranet site and a few
				html email promo offers. I also produced a few small projects with excel
				such as dynamic tariffs and shipping quotes.
			</InfoText>
			<InfoText>
				When I am not coding, I enjoy playing and arranging pieces on guitar for
				my youtube channel, gaming and watching development channels and
				tutorials on youtube.
			</InfoText>

			{/* <AboutPageContainer>
			<div className='about-container'>
				<div className='about-header'>
					<div className='about-image' id='about-image'></div>
					<div className='about-brief'>
						<div className='about-top'>
							<div className='about-box'></div>
							<div className='about-name'>
								<h2>dave perry</h2>
							</div>
						</div>

						<div className='about-middle'></div>

						<div className='about-bottom'>
							<div className='about-box hide-box'></div>
							<div className='about-headline'>
								<p>
									I am a self-taught developer who
									<br />
									enjoys working in front-end
									<br />
									development and design.
								</p>
							</div>
							<div className='about-box'>
								<a href='https://github.com/DaveDevPerry' target='_blank'>
									<SiGithub color='#ffffff' size={50} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='about-intro'>
					<p>
						I’m naturally creative and enjoy problem solving. I have a
						meticulous attention to detail and enjoy building stylish, engaging,
						and functional web applications.
					</p>
				</div>

				<div className='about-coding'>
					<div className='about-left'>
						<p>
							I’ve built and designed all my web applications thus far using
							html, sass and vanilla javascript. You can view all the
							technologies I have used in each project in my portfolio page.
						</p>
						<div className='tech-icons'>
							{/* <img src='./img/vscode.png' alt='vs code' /> 
							<SiVisualstudiocode size={40} />
							<SiHtml5 size={40} />
							<SiCss3 size={40} />
							<SiSass size={40} />
							<SiJavascript size={40} />
							<SiGit size={40} />
							<SiNetlify size={40} />
							<SiFigma size={40} />
							<SiAdobephotoshop size={40} />
						</div>
					</div>
				</div>

				<div className='about-me'>
					<p>
						Before moving into development, I worked in the Courier and
						Logistics sector, where I produced and managed a few small projects
						with excel, some of which I have since been able to develop further
						with the knowledge I have gained in javascript.
					</p>
					<p>
						When I am not coding, I enjoy playing and arranging pieces on guitar
						for my youtube channel, gaming and watching dev channels and
						tutorials on youtube.
					</p>
				</div>
			</div>
		</AboutPageContainer> */}

			<SectionDivider />
		</Section>
	);
};

export default About;
