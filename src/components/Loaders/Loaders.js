import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './LoadersStyles';

const Loaders = () => (
	<Section id='loaders'>
		{/* <SectionDivider /> */}
		{/* <br /> */}
		<SectionTitle>Loaders</SectionTitle>
		<SectionText>
			Some custom loaders I have built for various projects.
		</SectionText>
		<List>
			<ListItem>
				{/* <DiReact size='3rem' /> */}
				<ListContainer>
					<ListTitle>Keyframes</ListTitle>

					<ListParagraph>
						Experience with <br />
						HTML5 / CSS <br />
						SASS <br />
						Javascript <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				{/* <DiFirebase size='3rem' /> */}
				<ListContainer>
					<ListTitle>GSAP</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js <br />
						Express <br />
						MongoDB
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				{/* <DiZend size='3rem' /> */}
				<ListContainer>
					<ListTitle>UI / UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Figma <br />
						Photoshop
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider />
	</Section>
);

export default Loaders;
