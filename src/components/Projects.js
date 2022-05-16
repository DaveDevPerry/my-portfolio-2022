import React from 'react';
import styled from 'styled-components';

import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import expressIcon from '../../public/svg/express.svg';
// import { FaNodeJs } from 'react-icons/fa';

// import {
// 	BlogCard,
// 	CardInfo,
// 	ExternalLinks,
// 	GridContainer,
// 	HeaderThree,
// 	Hr,
// 	Tag,
// 	TagList,
// 	TitleContent,
// 	SubtitleContent,
// 	UtilityList,
// 	Img,
// 	ImgFilter,
// 	LinkWrapper,
// 	IconWrapper,
// } from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../styles/GlobalComponents';
import { projects } from '../constants/constants';

// import '../../../globals.css';

const Projects = () => {
	const DynamicSiIcon = ({ name, iconColor }) => {
		// console.log(name, 'icon name');
		let IconComponent;
		if (name[0] === 'S') {
			IconComponent = SiIcons[name];
		} else if (name[0] === 'F') {
			IconComponent = FaIcons[name];
		} else if (name[0] === 'E') {
			return (
				<svg
					role='img'
					viewBox='0 0 24 24'
					height='40px'
					width='40px'
					fill='#000000'
					xmlns='http://www.w3.org/2000/svg'
				>
					<title>Express</title>
					<path d='M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z' />
				</svg>
			);
		} else if (name[0] === 'C') {
			return (
				<svg
					role='img'
					viewBox='0 0 24 24'
					height='40px'
					width='40px'
					fill='#FF6384'
					xmlns='http://www.w3.org/2000/svg'
				>
					<title>Chart.js</title>
					<path d='M12 0L1.605 6v12L12 24l10.395-6V6zm0 1.41l9.172 5.295v10.59L12 22.59l-9.172-5.295V6.705zM5.902 8.334c-1.306 0-1.983.956-2.574 2.41v6.262L12 22.014l8.672-5.008v-5.971c-.447-.264-.894-.412-1.336-.412-4.275 0-3.97 4.885-6.717 5.8-2.748.917-3.511-8.089-6.717-8.089zm12.364.457c-2.9 0-2.137 4.732-5.342 4.732-1.63 0-2.52-1.317-3.477-1.981.148.326.3.655.442.98.467 1.068.922 2.09 1.379 2.734.228.322.455.541.644.644a.595.595 0 0 0 .549.05c.558-.187.968-.571 1.36-1.112.39-.541.74-1.228 1.154-1.916.413-.688.894-1.385 1.59-1.918.695-.534 1.607-.881 2.77-.881.465 0 .908.136 1.337.352v-.121c-.633-.849-1.348-1.563-2.406-1.563zm-6.68.152c-.868 0-1.491.82-2.076 2.06.094.055.192.106.277.167 1.06.761 1.798 1.853 3.137 1.853.678 0 1.067-.218 1.418-.585-.722-1.546-1.432-3.492-2.756-3.495Z' />
				</svg>
			);
		}
		if (!IconComponent) {
			return <VscGithub size='0' />;
		}
		return <IconComponent size='35' color={iconColor} />;
	};
	// const DynamicSiIcon = ({ name, iconColor }) => {
	// 	console.log(name, 'icon name');
	// 	const IconComponent = Icons[name];
	// 	if (!IconComponent) {
	// 		return <FaNodeJs size='30' />;
	// 	}
	// 	return <IconComponent size='35' color={iconColor} />;
	// };

	return (
		<Section id='projects'>
			<SectionTitle>My Projects</SectionTitle>
			<SectionText>
				Below is a showcase of my work that I have both designed and developed,
				most of which are my original ideas. They range from vanilla javascript
				front-end to full stack back-end.
			</SectionText>
			<GridContainer>
				{projects &&
					projects.map(
						({
							id,
							image,
							bgimage,
							bgid,
							cardclass,
							title,
							// titleCode,
							subtitle,
							description,
							tags,
							icons,
							source,
							visit,
							font,
							// colors,
						}) => (
							<BlogCard key={id} className={cardclass}>
								<ImgFilter id='card-filter' />
								<Img src={bgimage} id={bgid} alt={bgid} />
								<TitleContent>
									<HeaderThree title={title} className={font}>
										{title}
									</HeaderThree>
								</TitleContent>
								<SubtitleContent>{subtitle}</SubtitleContent>
								<Img src={image} alt={id} />
								<UtilityList>
									<LinkWrapper>
										<SiNetlify size='22px' color='#1186b4' />
										<ExternalLinks
											href={source}
											target='_blank'
											rel='noopener noreferrer'
										>
											Visit Site
										</ExternalLinks>
									</LinkWrapper>
									<LinkWrapper>
										<VscGithub size='22px' />
										<ExternalLinks
											href={visit}
											target='_blank'
											rel='noopener noreferrer'
										>
											View Code
										</ExternalLinks>
									</LinkWrapper>
								</UtilityList>
								<Hr />
								<CardInfo>{description}</CardInfo>
								<div>
									<TagList>
										{tags.map((tag, i) => (
											<Tag key={i}>{tag}</Tag>
										))}
									</TagList>
								</div>
								<div>
									<IconWrapper>
										{icons.map((icon, i) => (
											<DynamicSiIcon
												name={icon.name}
												key={i}
												className={icon.name}
												iconColor={icon.color}

												// color='#555555'
											/>
										))}
									</IconWrapper>
									{/* <IconWrapper>
										{icons.map((icon, i) => (
											<DynamicSiIcon
												name={icon}
												key={i}
												className={icon}
												// color='#555555'
											/>
										))}
									</IconWrapper> */}
								</div>
							</BlogCard>
						)
					)}
			</GridContainer>
			<SectionDivider />
		</Section>
	);
};
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;
const ImgFilter = styled.div`
	/* border: 2px solid green; */
	width: 100%;
	height: 100%;
	background-color: rgba(36, 33, 33, 0.9);
`;

const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	padding: 0 3rem 3rem 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-bottom: 2rem;
	}
`;
const BlogCard = styled.div`
	border-radius: 10px;
	padding: 10px 40px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	/* width: 400px; */
	width: 450px;
	transition: 0.5s;
	align-self: start;
	position: relative;
	/* &:hover {
		box-shadow: 3px 3px 20px rgba(219, 8, 8, 0.5);
	} */
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		padding: 10px;
	}
`;

const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
	padding: 10px;
	/* padding-bottom: 0px; */
	background-color: rgb(31, 30, 30);
	border-radius: 10px;
`;

const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	/* color: #9cc9e3; */
	/* color: #780202; */
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};

	/* font-family: 'Cherl'; */
	/* .font-loopy-lotto {
		font-family: 'Cherl';
		/* color: red; */
	/* span {
		color: blue;
	} */
`;

const SubtitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
	padding: 10px;
	/* padding-top: 0px; */
	font-style: italic;
	font-size: 14px;
	/* border: 1px solid white; */
	color: rgba(255, 255, 255, 0.5);
	/* margin-bottom: 1rem; */
	/* background-color: rgb(31,30,30); */
	/* border-radius: 0 0 10px 10px; */
`;

const Hr = styled.hr`
	width: 100px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #780202;
`;

const CardInfo = styled.p`
	width: 100%;
	padding: 0;
	/* color: #e4e6e7; */
	color: rgba(255, 255, 255, 0.5);
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;

const UtilityList = styled.div`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: center;
	margin: 1rem 0;
	column-gap: 2rem;
`;
// const UtilityList = styled.ul`
// 	list-style-type: none;
// 	padding: 0;
// 	display: flex;
// 	justify-content: center;
// 	margin: 1rem 0;
// 	column-gap: 2rem;
// `;

const ExternalLinks = styled.a`
	color: #ffffff;
	font-size: 1.8rem;
	padding: 0 0.5rem;
	/* background: #6b3030; */
	/* border: 1px solid #780202; */
	/* border-radius: 15px; */
	transition: 0.5s;
	text-transform: uppercase;
	/* flex: 1; */
	&:hover {
		color: #780202;
	}
`;
// const ExternalLinks = styled.a`
// 	color: #ffffff;
// 	font-size: 1.6rem;
// 	padding: 1rem 1.5rem;
// 	/* background: #6b3030; */
// 	border: 1px solid #780202;
// 	border-radius: 15px;
// 	transition: 0.5s;
// 	/* flex: 1; */
// 	&:hover {
// 		background: #801414;
// 	}
// `;

const TagList = styled.ul`
	display: flex;
	justify-content: space-between;
	padding: 2rem 0;
`;
const Tag = styled.li`
	/* color: #780202; */
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	flex: 1;
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
	.SiReact {
		color: green;
	}
`;

const LinkWrapper = styled.div`
	/* border: 1px solid white; */
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	width: 135px;
`;

export default Projects;
