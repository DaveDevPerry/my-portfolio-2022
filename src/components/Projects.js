import React from 'react';
import styled from 'styled-components';

import * as Icons from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { FaNodeJs } from 'react-icons/fa';

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
	const DynamicSiIcon = ({ name }) => {
		const IconComponent = Icons[name];

		if (!IconComponent) {
			return <FaNodeJs size='30' />;
		}

		return <IconComponent size='30' />;
	};

	return (
		<Section id='projects'>
			<SectionTitle>My Projects</SectionTitle>
			<SectionText>
				Below is a showcase of my work that I have both designed and developed,
				most of which are my original ideas. They range from vanilla javascript
				front-end to full stack back-end.
			</SectionText>
			<GridContainer>
				{projects.map(
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
									<ExternalLinks href={source} target='_blank'>
										Visit Site
									</ExternalLinks>
								</LinkWrapper>
								<LinkWrapper>
									<VscGithub size='22px' />
									<ExternalLinks href={visit} target='_blank'>
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
										<DynamicSiIcon name={icon} key={i} className={icon} />
									))}
								</IconWrapper>
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
		padding-bottom: 0;
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
	padding: 2rem;
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
`;

const LinkWrapper = styled.div`
	/* border: 1px solid white; */
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	width: 135px;
`;

export default Projects;
