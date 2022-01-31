import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	Img,
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './LoadersStyles';

import { loaders } from '../../constants/constants';

const PageLoaders = () => (
	<Section id='loaders'>
		{/* <SectionDivider /> */}
		{/* <br /> */}
		<SectionTitle>Loaders</SectionTitle>
		<SectionText>
			Some custom loaders I have built for various projects.
		</SectionText>
		<List>
			{loaders.map(({ id, title, image }) => (
				<Img src={image} key={id} />
				// <ListTitle>{title}</ListTitle>
			))}
		</List>
		<SectionDivider />
	</Section>
);

export default PageLoaders;
