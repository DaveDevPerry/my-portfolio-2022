import React from 'react';
import styled from 'styled-components';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../styles/GlobalComponents';
// import {
// 	List,
// 	ListContainer,
// 	ListItem,
// 	ListParagraph,
// 	ListTitle,
// 	TechIcons,
// } from './TechnologiesStyles';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import {
	SiVisualstudiocode,
	SiHtml5,
	SiCss3,
	SiSass,
	SiJavascript,
	SiGit,
	// SiNetlify,
	SiReact,
	// SiFigma,
	SiAdobephotoshop,
	SiMongodb,
} from 'react-icons/si';

const Technologies = () => (
	<Section id='tech'>
		{/* <SectionDivider /> */}
		<SectionTitle>Tech Utilised</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web development world.
			From front to back end.
		</SectionText>
		<TechIcons>
			<SiReact color='#00CDF2' className='tech-icon' />
			<SiJavascript color='#F7DF1E' className='tech-icon' />
			<SiMongodb color='#459546' className='tech-icon' />
			<FaNodeJs color='#6cc24a' className='tech-icon' />
			<SiHtml5 color='#E44F26' className='tech-icon' />
			<SiCss3 color='#33A9DC' className='tech-icon' />
			<SiSass color='#CD6799' className='tech-icon' />
			<SiGit color='#DE4C36' className='tech-icon' />
			<SiVisualstudiocode color='#007ACC' className='tech-icon' />
			{/* <SiAdobephotoshop color='#007ACC' className='tech-icon' /> */}
		</TechIcons>
		<List>
			<ListItem>
				<DiReact size='30px' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						HTML5 / CSS3 <br />
						SASS <br />
						Javascript <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='30px' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js <br />
						Express <br />
						MongoDB
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size='30px' />
				<ListContainer>
					<ListTitle>UI / UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Photoshop <br />
						Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider />
	</Section>
);

const TechIcons = styled.div`
	background-color: rgb(31, 30, 30);
	padding: 20px;
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;
	margin-bottom: 3.6rem;
	transition: 0.5s;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		flex-wrap: wrap;
		padding: 10px 20px;
	}
	.tech-icon {
		font-size: 40px;
		animation: grow 3.4s ease-in-out infinite;
		flex-basis: 8%;
	}
	.tech-icon:nth-child(2) {
		animation-delay: 0.2s;
	}
	.tech-icon:nth-child(3) {
		animation-delay: 0.4s;
	}
	.tech-icon:nth-child(4) {
		animation-delay: 0.6s;
	}
	.tech-icon:nth-child(5) {
		animation-delay: 0.8s;
	}
	.tech-icon:nth-child(6) {
		animation-delay: 1s;
	}
	.tech-icon:nth-child(7) {
		animation-delay: 1.2s;
	}
	.tech-icon:nth-child(8) {
		animation-delay: 1.4s;
	}
	.tech-icon:nth-child(9) {
		animation-delay: 1.6s;
	}
	@keyframes grow {
		0% {
			transform: scale(1);
		}

		10% {
			transform: scale(1.2);
		}
		20% {
			transform: scale(1);
		}

		100% {
			transform: scale(1);
		}
	}
`;

const List = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
	margin: 0 0 3rem 0;
	@media ${(props) => props.theme.breakpoints.lg} {
		margin: 64px 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin: 64px 0;
		gap: 24px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		margin: 32px 0;
	}
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		margin-left: 18px;
	}
`;

const ListTitle = styled.p`
	font-weight: 700;
	font-size: 28px;
	line-height: 32px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-bottom: 8px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 24px;
		line-height: 28px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
		line-height: 28px;
		letter-spacing: 0.02em;
		margin-bottom: 4px;
	}
`;

const ListParagraph = styled.p`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
	}
`;
const ListItem = styled.li`
	max-width: 320px;
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 203px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 14px;
		max-width: 320px;
		flex-direction: row;
	}
`;

export default Technologies;
