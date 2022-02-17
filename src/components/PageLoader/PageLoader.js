// import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';
//
import { Container } from './PageLoaderStyles';

const PageLoader = () => {
	const circleOuter = useRef();
	const circleInner = useRef();
	const bgTextName = useRef();
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.fromTo('#bg-text-name-red', { scale: 50 }, { scale: 0, duration: 3 })
			.fromTo('.circle-outer', { scale: 0 }, { scale: 2, duration: 2 })
			.fromTo('.circle-inner', { scale: 0 }, { scale: 2, duration: 4 }, '-=2')
			.fromTo('#bg-text-name', { scale: 0 }, { scale: 80, duration: 22 }, '-=4')
			.to('#loader-container', { opacity: 0, duration: 1 }, '-=14')
			.to('#loader-container', { display: 'none' }, '-=10');
		// tl.current = gsap
		// 	.timeline()
		// 	.fromTo('#bg-text-name', { scale: 50 }, { scale: 0, duration: 3 })
		// 	.from('.circle-outer', { scale: 0, duration: 2 })
		// 	.from('.circle-inner', { scale: 0, duration: 4 }, '-=2')
		// 	.fromTo('#bg-text-name', { scale: 0 }, { scale: 80, duration: 4 }, '-=4')
		// 	.to('#loader-container', { opacity: 0, duration: 1 })
		// 	.to('#loader-container', { display: 'none' });
	}, []);

	// 	function explode() {
	// 	const tl = new TimelineMax();
	// 	// my name big to small to normal
	// 	tl.fromTo('#bg-text-name', 3, { scale: 50 }, { scale: 0 });
	// 	// tl.call(playWhoosh);
	// 	//circles - scale 0 -1
	// 	tl.from('.circle-outer', 2, { scale: 0 });
	// 	tl.from('.circle-inner', 4, { scale: 0 }, '-=2');
	// 	//my name explode
	// 	tl.fromTo('#bg-text-name', 4, { scale: 0 }, { scale: 80 }, '-=4');
	// 	//my name opacity
	// 	tl.fromTo('#bg-text-name', 3, { scale: 0 }, { scale: 1 }, '-=2');
	// 	return tl;
	// }

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

// export function loadSite(){

// 	// gsap functions
// 	function explode() {
// 		const tl = new TimelineMax();
// 		// my name big to small to normal
// 		tl.fromTo('#bg-text-name', 3, { scale: 50 }, { scale: 0 });
// 		// tl.call(playWhoosh);
// 		//circles - scale 0 -1
// 		tl.from('.circle-outer', 2, { scale: 0 });
// 		tl.from('.circle-inner', 4, { scale: 0 }, '-=2');
// 		//my name explode
// 		tl.fromTo('#bg-text-name', 4, { scale: 0 }, { scale: 80 }, '-=4');
// 		//my name opacity
// 		tl.fromTo('#bg-text-name', 3, { scale: 0 }, { scale: 1 }, '-=2');
// 		return tl;
// 	}
// 	function brand() {
// 		const tl = new TimelineMax();
// 		// brand text
// 		tl.from('#brand', 4, { opacity: 0 }, '-=2');
// 		// email red
// 		tl.from('#email-bar', 4, { opacity: 0 }, '-=4');
// 		return tl;
// 	}

// 	function allEdges() {
// 		const tl = new TimelineMax();

// 		// email from left - PERFECT
// 		tl.from('#bg-text-email', 4, { x: '-150%' }, '-=4');
// 		tl.from('#email-addy', 2, { y: '-50' }, '-=2');

// 		// links - PERFECT
// 		tl.from('#bg-text-links', 4, { y: '300%' }, '-=4');
// 		tl.from('.sm-links', 2, { x: '-200%' }, '-=2');

// 		// download
// 		tl.from('#bg-text-toggle-theme', 4, { x: '150%' }, '-=4');
// 		tl.from('footer ul', 2, { y: '200%' }, '-=2');

// 		//menu
// 		tl.from('#bg-text-menu', 4, { x: '200%' }, '-=4');
// 		tl.from(
// 			'.nav-links',
// 			2,
// 			{
// 				y: '-100%',
// 				stagger: {
// 					from: 'end',
// 					each: '0.5',
// 				},
// 			},
// 			'-=2'
// 		);
// 		return tl;
// 	}
// 	function toggleMode(){
// 		const tl = new TimelineMax();
// 		// tl.from('#dark-mode',1,{ease: 'Bounce.easeOut',y:-70})
// 		tl.from('#dark-mode',3,{ease:
// 			Elastic.easeOut.config(2.5,0.2),y:100})

// 		return tl;
// 	}
