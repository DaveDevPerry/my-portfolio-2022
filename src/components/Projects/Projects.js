import React from 'react';

import * as Icons from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { FaNodeJs } from 'react-icons/fa';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	SubtitleContent,
	UtilityList,
	Img,
	ImgFilter,
	LinkWrapper,
	IconWrapper,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

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

export default Projects;
