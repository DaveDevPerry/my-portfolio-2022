import React from 'react';
import { useRouter } from 'next/router';

import {
	MdEmail,
	MdLocationOn,
	MdPrint,
	MdFileDownload,
	MdShare,
	MdHome,
} from 'react-icons/md';
import { FaGlobe, FaGithub, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const resume = () => {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push('/');
	};

	// const printToPdf = () => {
	// 	let htmlPDF = document.getElementById('html2pdf');
	// 	// let exportPDF = document.getElementById('exportPDF');
	// 	html2pdf(htmlPDF);
	// 	// exportPDF.onclick = (e) => html2pdf(htmlPDF);
	// };

	return (
		<StyledResume>
			<div className='resume-container'>
				<div className='resume-icons'>
					<ul>
						<li>
							<MdHome onClick={handleClick} />
						</li>
						<li>
							<MdPrint />
							{/* <MdPrint id='exportPDF' /> */}
						</li>
						<li>
							<MdShare />
						</li>
						<li>
							<MdFileDownload />
						</li>
					</ul>

					{/* <Button className='btn-left' onClick={handleClick}>
						Back
					</Button> */}
				</div>
				<div className='resume-wrapper' id='html2pdf'>
					<div className='resume-left'>
						<div className='resume-section resume-section-main'>
							<h2>dave perry</h2>
							<h3>web developer</h3>
							<ul className='contact-list'>
								<li>
									<p>
										<MdEmail />
									</p>
									<p>dave@daveperry.tech</p>
								</li>
								<li>
									<p>
										<FaPhone />
									</p>
									<p>+44 (0)7757 928 453</p>
								</li>
								<li>
									<p>
										<MdLocationOn />
									</p>
									<p>Heathrow, UK</p>
								</li>
								<li>
									<p>
										<FaGlobe />
									</p>
									<p>daveperry.tech</p>
								</li>
								<li>
									<p>
										<FaGithub />
									</p>
									<p>github.com/davedevperry</p>
								</li>
							</ul>
						</div>
						{/* <div className='resume-section'>section</div> */}
						<div className='resume-section'>
							<h2>courses</h2>
							<ul className='skills-list'>
								<li>Google UI/UX Design</li>
								<li>Dev Ed HTML</li>
								<li>Dev Ed Javascript</li>
								<li>Dev Ed React</li>
							</ul>
						</div>
						<div className='resume-section'>
							<h2>skills</h2>
							<ul className='skills-list'>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>SASS</li>
								<li>Javascript</li>
								<li>React</li>
								<li>Node</li>
								<li>Express</li>
								<li>MongoDB</li>
							</ul>
						</div>
						<div className='resume-section'>
							<h2>libraries</h2>
							<ul className='skills-list'>
								<li>ChartJS</li>
								<li>Bcrypt</li>
								<li>GSAP</li>
								<li>FilePond</li>
								<li>Styled Components</li>
							</ul>
						</div>

						<div className='resume-section'>
							<h2>platforms</h2>
							<ul className='skills-list'>
								<li>GitHub</li>
								<li>Netlify</li>
								<li>Heroku</li>
								<li>Vercel</li>
							</ul>
						</div>
						<div className='resume-section'>
							<h2>tools</h2>
							<ul className='skills-list'>
								<li>VsCode</li>
								<li>Photoshop</li>
								<li>Figma</li>
							</ul>
						</div>
						<div className='resume-section'></div>
					</div>
					<div className='resume-right'>
						<div className='resume-section'>
							<h2>career objective</h2>
							<p>
								I am a self taught developer with a goal of making it my
								profession. I am creative, articulate, focused and am always
								wanting to learn new code and technologies. I started focusing
								on front-end development which catered for my creative side, but
								in need to create most of my ideas, it wasn’t long before I
								needed to learn back-end technologies. Now I am looking for the
								right company, in which I can contribute, learn and grow into a
								senior developer role.
							</p>
						</div>
						<div className='resume-section'>
							<h2>work experience</h2>
							<p>
								Although my roles were not related to IT, I utilised what I
								learnt for various applications
							</p>

							<div className='resume-project-container'>
								<h3>Operations Supervisor</h3>
								<h4>AmWorld 2016-2020</h4>
								<ol id='resume-bullets'>
									<li>
										<p>Basic Intranet Site using HTML, CSS and Javascript</p>
									</li>
									<li>
										<p>
											Automated Dynamic Drivers Evening Rota - based on drivers
											in attendance it would assign roles to each driver - HTML,
											CSS, Javascript
										</p>
									</li>
									<li>
										<p>
											Fulfilment Warehouse Screen - displaying automated
											fork-lift check rota, lunch breaks and role assignments -
											HTML, CSS, Javascript
										</p>
									</li>
								</ol>
							</div>
							<div className='resume-project-container'>
								<h3>Storage &amp; Fulfilment Manager</h3>
								<h4>Impulse 2000-2005</h4>
								<ol id='resume-bullets'>
									<li>
										<p>HTML emails - for promotional mailshots</p>
									</li>
									<li>
										<p>
											Client Tariff Builder - for sales to create custom rates
											for printing with ease (MS Excel)
										</p>
									</li>
								</ol>
							</div>
						</div>
						<div className='resume-section'>
							<h2>my projects</h2>
							<p>
								Listed below are the main projects I have worked on since
								learning to code.
							</p>
							<div className='resume-project-container'>
								<h3>Designer &amp; Developer</h3>
								<h4>TV Fan Poll 2022</h4>
								<ol id='resume-bullets'>
									<li>
										<p>
											Developed both front-end and back-end using the MERN stack
										</p>
									</li>
									<li>
										<p>Styled Components</p>
									</li>
									<li>
										<p>
											Client Tariff Builder - for sales to create custom rates
											for printing with ease (MS Excel)
										</p>
									</li>
								</ol>
							</div>
							<div className='resume-project-container'>
								<h3>Designer &amp; Developer</h3>
								<h4>FUNjumble 2022</h4>
								<ol id='resume-bullets'>
									<li>
										<p>
											Built using ReactJS, styled components and local storage
										</p>
									</li>
									<li>
										<p>
											Automated Dynamic Drivers Evening Rota - based on drivers
											in attendance it would assign roles to each driver - HTML,
											CSS, Javascript
										</p>
									</li>
									<li>
										<p>
											Fulfilment Warehouse Screen - displaying automated
											fork-lift check rota, lunch breaks and role assignments -
											HTML, CSS, Javascript
										</p>
									</li>
								</ol>
							</div>
							<div className='resume-project-container'>
								<h3>Designer &amp; Developer</h3>
								<h4>Some People Say 2021</h4>
								<ol id='resume-bullets'>
									<li>
										<p>
											My original idea which I developed into a fully
											functioning app
										</p>
									</li>
									<li>
										<p>
											Client Tariff Builder - for sales to create custom rates
											for printing with ease (MS Excel)
										</p>
									</li>
								</ol>
							</div>
							<div className='resume-project-container'>
								<h3>Designer &amp; Developer</h3>
								<h4>Made 2 Measure 2021</h4>
								<ol id='resume-bullets'>
									<li>
										<p>HTML emails - for promotional mailshots</p>
									</li>
									<li>
										<p>
											Client Tariff Builder - for sales to create custom rates
											for printing with ease (MS Excel)
										</p>
									</li>
								</ol>
							</div>
							<div className='resume-project-container'>
								<h3>Designer &amp; Developer</h3>
								<h4>Terror-fi 2021</h4>
								<ol id='resume-bullets'>
									<li>
										<p>
											Created accessible, responsive and functional user
											interfaces to allow visitors on any device the have a
											great user experience.
										</p>
									</li>
									<li>
										<p>
											Incorporated audio visualization via a Javascript library.
										</p>
									</li>
									<li>
										<p>Created various bespoke animations using keyframes.</p>
									</li>
								</ol>
							</div>
							<div className='resume-project-container'>
								<h3>Designer &amp; Developer</h3>
								<h4>Loopy Lotto 2021</h4>
								<ol id='resume-bullets'>
									<li>
										<p>Built using Javascript and ES6 modules</p>
									</li>
									<li>
										<p>
											Created accessible, responsive and functional user
											interfaces to allow visitors on any device the have a
											great user experience.
										</p>
									</li>
									<li>
										<p>Created simple animations using keyframes.</p>
									</li>
									<li>
										<p>Styled with SASS and FlexBox.</p>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledResume>
	);
};
const StyledResume = styled.div`
	display: flex;
	justify-content: center;
	color: black;
	/* font-size: 1.8rem; */
	.resume-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* border: 2px solid red; */
		width: 1000px;
		.resume-icons {
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			/* column-gap: 2rem; */
			ul {
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 2rem;
				li {
					color: #cbcbcb;
					font-size: 4rem;
					cursor: pointer;
					transition: all 200ms linear;
					&:hover {
						transform: scale(1.2);
						color: white;
					}
				}
			}
		}
		.resume-wrapper {
			background-color: white;
			/* border: 2px solid black; */
			display: flex;
			/* height: 1500px; */

			.resume-left {
				/* border: 1px solid green; */
				width: 250px;
				background-color: #cdcccc;
				/* height: 1500px; */
				.resume-section {
					padding: 2rem;
					h2 {
						font-size: 2.4rem;
						/* margin-bottom: 1rem; */
						text-transform: uppercase;
						margin-bottom: 0.5rem;
					}
					.skills-list {
						/* margin-top: 1rem; */
						li {
							margin-bottom: 0.2rem;
						}
					}
				}
				.resume-section-main {
					background-color: ${(props) => props.theme.colors.red};
					color: white;
					margin-bottom: 2rem;
					h2 {
						font-size: 5rem;
					}
					h3 {
						font-size: 3rem;
						font-weight: lighter;
						text-transform: capitalize;
					}
					.contact-list {
						margin-top: 2rem;
						li {
							display: flex;
							column-gap: 0.5rem;
							margin-bottom: 0.5rem;
						}
					}
				}
			}
			.resume-right {
				/* border: 1px solid purple; */
				width: 750px;
				padding: 2rem;
				.resume-section {
					margin-bottom: 2rem;
					padding-bottom: 2rem;
					position: relative;
					&::after {
						content: '';
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						height: 0.2rem;
						width: 20rem;
						background-color: ${(props) => props.theme.colors.red};
					}
					h2 {
						font-size: 2.4rem;
						/* margin-bottom: 1rem; */
						text-transform: uppercase;
						margin-bottom: 0.5rem;
					}
					.resume-project-container {
						margin-top: 2rem;
						margin-left: 1rem;
						margin: 1rem 1rem 0 1rem;
						/* border: 1px solid black; */
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						h3 {
							font-size: 2rem;
							font-weight: 400;
						}
						h4 {
							margin: 0.5rem 0;
						}
						ol#resume-bullets {
							margin-left: 3rem;
							margin-top: 0.5rem;
							li {
								list-style-type: square;
								color: ${(props) => props.theme.colors.red};
							}
							p {
								color: black;
							}
						}
					}
				}
			}
		}
	}
`;

export default resume;
