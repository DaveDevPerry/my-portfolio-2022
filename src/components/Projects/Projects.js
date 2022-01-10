import React from 'react';

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
	UtilityList,
	Img,
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
				({ id, image, title, description, tags, source, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks href={source}>View Site</ExternalLinks>
							<ExternalLinks href={visit}>View Code</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
