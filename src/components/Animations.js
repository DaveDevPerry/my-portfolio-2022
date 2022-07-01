import React from 'react';
import styled from 'styled-components';
import {
	Section,
	SectionText,
	SectionTitle,
	SectionDivider,
} from '../styles/GlobalComponents';
import Metronome from './Metronome';
import TerrorTelly from './TerrorTelly';
import RecordPlayer from './RecordPlayer';
import Cassette from './Cassette';

const Animations = () => {
	return (
		<Section id='animations'>
			<SectionTitle>Animations</SectionTitle>
			<SectionText style={{ paddingBottom: '0px' }}>
				A selection of custom built animations and loaders using CSS keyframes.
			</SectionText>
			<AnimationGridContainer>
				<AnimationCard>
					<Metronome />
				</AnimationCard>
				<AnimationCard>
					<RecordPlayer />
				</AnimationCard>
				<AnimationCard>
					<TerrorTelly />
				</AnimationCard>
				<AnimationCard>
					<Cassette />
				</AnimationCard>
			</AnimationGridContainer>
			<SectionDivider />
		</Section>
	);
};
const AnimationGridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	padding: 0 3rem 3rem 3rem;
	place-items: center;
	column-gap: 3rem;
	row-gap: 3rem;
	margin-bottom: 1rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-bottom: 0;
	}
`;
const AnimationCard = styled.div`
	border-radius: 10px;
	padding: 5px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 180px;
	transition: 0.5s;
	align-self: start;
	position: relative;
	background-color: rgb(27, 27, 27);
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 180px;
		align-self: center;
	}
`;

export default Animations;
