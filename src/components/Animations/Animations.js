import React from 'react';
import {
	Section,
	SectionText,
	SectionTitle,
	SectionDivider,
	BtnWrapper,
} from '../../styles/GlobalComponents';
import { AnimationCard, GridContainer } from './AnimationStyles';
import Metronome from './Metronome';
import TerrorTelly from './TerrorTelly';
import RecordPlayer from './RecordPlayer';
import PinksPurples from './PinksPurples';
import Cassette from './Cassette';

const Animations = () => {
	return (
		<Section id='animations'>
			{/* <SectionDivider /> */}
			{/* <br /> */}
			<SectionTitle>Animations</SectionTitle>
			<SectionText style={{ paddingBottom: '0px' }}>
				A selection of custom built animations and loaders using CSS keyframes.
			</SectionText>

			<GridContainer>
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
				<AnimationCard>
					<PinksPurples />
				</AnimationCard>
			</GridContainer>

			<SectionDivider />
		</Section>
	);
};

export default Animations;
