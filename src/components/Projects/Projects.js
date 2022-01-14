import React from 'react';
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
	LinkWrapper,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section id='projects'>
		<SectionDivider />
		<SectionTitle main>My Projects</SectionTitle>
		<GridContainer>
			{/* {[0, 1, 2, 3, 4, 5].map((project) => (
				<div>{project}</div>
			))} */}
			{/* {projects.map((project) => (
				<BlogCard key={project.id}>
					<Img src={project.image} />
					<TitleContent>
						<HeaderThree title>{project.title}</HeaderThree>
					</TitleContent>
				</BlogCard>
			))} */}
			{projects.map(
				({ id, image, title, subtitle, description, tags, source, visit }) => (
					<BlogCard key={id}>
						{/* <Img src={image} /> */}
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							{/* <Hr /> */}
						</TitleContent>
						<SubtitleContent>{subtitle}</SubtitleContent>
						<Img src={image} />
						<UtilityList>
							<LinkWrapper>
								<SiNetlify size='2.2rem' color='#1186b4' />
								<ExternalLinks href={source}>Visit Site</ExternalLinks>
							</LinkWrapper>
							<LinkWrapper>
								<VscGithub size='2.2rem' />
								<ExternalLinks href={visit}>View Code</ExternalLinks>
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
					</BlogCard>
				)
			)}
		</GridContainer>
		<SectionDivider />
	</Section>
);

export default Projects;
