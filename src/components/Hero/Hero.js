import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				{/* Welcome To <br /> */}
				{/* My Personal Portfolio  */}
				I design and develop <br />
				complete solutions for <br />
				your digital world.
			</SectionTitle>
			<SectionText>
				I help companies design and develop digital products to turn ideas into
				fully functional, enjoyable experiences.
			</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
