import React from 'react';
// import { GrDocumentPdf } from 'react-icons/gr';
import Link from 'next/link';

import {
	Section,
	SectionText,
	SectionTitle,
	BtnWrapper,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { InfoText, LeftSection } from './AboutStyles';

const About = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				About Me
			</SectionTitle>
			<SectionText>
				I am a self-taught developer who enjoys working in front-end development
				and design.
			</SectionText>
			<InfoText>
				I’m naturally creative and enjoy problem solving. I have a meticulous
				attention to detail and enjoy building stylish, engaging, and functional
				web applications.
			</InfoText>
			<InfoText>
				I’ve built and designed all my web applications thus far using html,
				sass and vanilla javascript. You can view all the technologies I have
				used in each project in my portfolio page.
			</InfoText>
			<InfoText>
				Before moving into development, I worked in the Courier and Logistics
				sector, where I produced and managed a few small projects with excel,
				some of which I have since been able to develop further with the
				knowledge I have gained in javascript.
			</InfoText>
			<InfoText>
				When I am not coding, I enjoy playing and arranging pieces on guitar for
				my youtube channel, gaming and watching dev channels and tutorials on
				youtube.
			</InfoText>
			{/* <BtnWrapper>
			
			
				<Link href='#projects'>
					<Button>My Projects</Button>
				</Link>
			</BtnWrapper> */}
		</LeftSection>
	</Section>
);

export default About;
