import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';
// import { TagList } from '../components/Projects/ProjectsStyles';

export const Layout = ({ children }) => {
	// const tl = useRef();

	// useEffect(() => {
	// 	tl.current = gsap
	// 		.timeline()
	// 		.fromTo('#header', { opacity: 0 }, { opacity: 0, duration: 8 });
	// }, []);

	return (
		<Container>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};
