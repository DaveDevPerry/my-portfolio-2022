import React from 'react';
import styled from 'styled-components';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../styles/GlobalComponents';
// import {
// 	Img,
// 	List,
// } from './LoadersStyles';

import { loaders } from '../constants/constants';

const PageLoaders = () => (
	<Section id='loaders'>
		<SectionTitle>Loaders</SectionTitle>
		<SectionText>
			Some custom loaders I have built for various projects.
		</SectionText>
		<List>
			{loaders.map(({ id, image }) => (
				<Img src={image} key={id} />
			))}
		</List>
		<SectionDivider />
	</Section>
);
const Img = styled.img`
	width: 100%;
	/* height: 100%; */
	object-fit: cover;
	overflow: hidden;
	border-radius: 20px;
`;

const List = styled.div`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
	margin: 3rem 0;
	background-color: rgb(27, 27, 27);
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

export default PageLoaders;
