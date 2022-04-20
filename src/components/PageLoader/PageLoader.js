import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { Container } from './PageLoaderStyles';

const PageLoader = () => {
	const circleOuter = useRef();
	const circleInner = useRef();
	const bgTextName = useRef();
	// const tl = useRef();

	useEffect(() => {
		setTimeout(() => {
			const tl = gsap.timeline();

			tl.fromTo('#bg-text-name-red', { scale: 50 }, { scale: 0, duration: 3 });
			tl.fromTo(
				'#bg-text-name-red',
				{ opacity: 0 },
				{ opacity: 1, duration: 0.1 },
				'-=3'
			);
			tl.fromTo('.circle-outer', { scale: 0 }, { scale: 2, duration: 2 });
			tl.fromTo(
				'.circle-outer',
				{ opacity: 0 },
				{ opacity: 1, duration: 0.1 },
				'-=2'
			);
			tl.fromTo(
				'.circle-inner',
				{ scale: 0 },
				{ scale: 2, duration: 4 },
				'-=2'
			);
			tl.fromTo(
				'.circle-inner',
				{ opacity: 0 },
				{ opacity: 1, duration: 0.1 },
				'-=4'
			);
			tl.fromTo(
				'#bg-text-name',
				{ scale: 0 },
				{ scale: 80, duration: 22 },
				'-=4'
			);
			tl.fromTo(
				'#bg-text-name',
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 },
				'-=22'
			);
			tl.to('#loader-container', { opacity: 0, duration: 1 }, '-=14');
			tl.to('#loader-container', { display: 'none' }, '-=13.5');
		}, 1000);
	}, []);

	return (
		<Container id='loader-container'>
			<h4 id='bg-text-name'>
				dave
				<br />
				<span>perry</span>
			</h4>
			<h4 id='bg-text-name-red'>
				dave
				<br />
				<span>perry</span>
			</h4>
			<div className='circle-outer' ref={circleOuter}>
				<div className='circle-inner' ref={circleInner}></div>
			</div>
		</Container>
	);
};

export default PageLoader;
