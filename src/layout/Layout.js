import React from 'react';
// import { gsap } from 'gsap';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';
// import { TagList } from '../components/Projects/ProjectsStyles';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};
