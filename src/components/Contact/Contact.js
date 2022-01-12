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
} from './ContactStyles';

const Contact = () => (
	<Section id='contact'>
		<SectionDivider />
		{/* <br /> */}
		<SectionTitle>Contact</SectionTitle>
		<SectionText>
			I've worked with a range of Contact in the web development world. From
			front to back end.
		</SectionText>
	</Section>
);

export default Contact;
