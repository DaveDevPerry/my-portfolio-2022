import React from 'react';

import * as Icons from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

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
			return <Icons.SiGithub />;
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
						titleCode,
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
							<Img src={bgimage} id={bgid} />
							<TitleContent>
								<HeaderThree title={title} className={font}>
									{title}
								</HeaderThree>
								{/* <p
								id='test'
								className={font}
								dangerouslySetInnerHTML={{
									__html: titleCode,
								}}
							></p>
							<HeaderThree
								dangerouslySetInnerHTML={{
									__html: titleCode,
								}}
								className={font}
							></HeaderThree> */}
								{/* <HeaderThree
								dangerouslySetInnerHTML={{
									__html: '<p>hel<span>l</span>o</p>',
								}}
								className={font}
							></HeaderThree> */}
								{/* <Hr /> */}
							</TitleContent>
							<SubtitleContent>{subtitle}</SubtitleContent>
							<Img src={image} />
							<UtilityList>
								<LinkWrapper>
									<SiNetlify size='2.2rem' color='#1186b4' />
									<ExternalLinks href={source} target='_blank'>
										Visit Site
									</ExternalLinks>
								</LinkWrapper>
								<LinkWrapper>
									<VscGithub size='2.2rem' />
									<ExternalLinks href={visit} target='_blank'>
										View Code
									</ExternalLinks>
								</LinkWrapper>
							</UtilityList>
							<Hr />
							<CardInfo>{description}</CardInfo>
							{/* <div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div> */}
							{/* <UtilityList>
							<SiNetlify size='2.5rem' />
							<ExternalLinks href={source}>View Site</ExternalLinks>
							<VscGithub size='2.5rem' />
							<ExternalLinks href={visit}>View Code</ExternalLinks>
						</UtilityList> */}
							<div>
								{/* <TitleContent>Stack</TitleContent> */}
								<TagList>
									{tags.map((tag, i) => (
										<Tag key={i}>{tag}</Tag>
									))}
								</TagList>
							</div>

							<div>
								{/* <TitleContent>Stack</TitleContent> */}
								<TagList>
									{icons.map((icon, i) => (
										// <DynamicFaIcon name={icon} key={i} />
										<DynamicSiIcon name={icon} key={i} className={icon} />
									))}
								</TagList>
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
