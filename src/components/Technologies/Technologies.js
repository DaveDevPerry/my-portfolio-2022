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
	TechIcons,
} from './TechnologiesStyles';

import {
	SiVisualstudiocode,
	SiHtml5,
	SiCss3,
	SiSass,
	SiJavascript,
	SiGit,
	SiNetlify,
	// SiFigma,
	SiAdobephotoshop,
} from 'react-icons/si';

const Technologies = () => (
	<Section id='tech'>
		{/* <SectionDivider /> */}
		<SectionTitle>Tech Utilised</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web development world.
			From front to back end.
		</SectionText>
		<TechIcons>
			<SiVisualstudiocode color='#007ACC' className='tech-icon' />
			<SiHtml5 color='#E44F26' className='tech-icon' />
			<SiCss3 color='#33A9DC' className='tech-icon' />
			<SiSass color='#CD6799' className='tech-icon' />
			<SiJavascript color='#F7DF1E' className='tech-icon' />
			<SiGit color='#DE4C36' className='tech-icon' />
			<SiNetlify color='#21C6B7' className='tech-icon' />
			{/* <SiFigma color='#ffffff' className='tech-icon' /> */}
			<SiAdobephotoshop color='#007ACC' className='tech-icon' />
			{/* <SiVisualstudiocode size={40} color='#007ACC' className='tech-icon' />
			<SiHtml5 size={40} color='#E44F26' className='tech-icon' />
			<SiCss3 size={40} color='#33A9DC' className='tech-icon' />
			<SiSass size={40} color='#CD6799' className='tech-icon' />
			<SiJavascript size={40} color='#F7DF1E' className='tech-icon' />
			<SiGit size={40} color='#DE4C36' className='tech-icon' />
			<SiNetlify size={40} color='#21C6B7' className='tech-icon' />
			<SiFigma size={40} color='#ffffff' className='tech-icon' />
			<SiAdobephotoshop size={40} color='#007ACC' className='tech-icon' /> */}
		</TechIcons>
		<List>
			<ListItem>
				<DiReact size='30px' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
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
				<DiFirebase size='30px' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js <br />
						Express <br />
						MongoDB
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size='30px' />
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

export default Technologies;
