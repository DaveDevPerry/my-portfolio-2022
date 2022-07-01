import React, { useEffect } from 'react';
// import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

// import { Container } from './PageLoaderStyles';

const PageLoader = () => {
	// const circleOuter = useRef();
	// const circleInner = useRef();
	// const bgTextName = useRef();
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
		<LoaderContainer id='loader-container'>
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
			<div className='circle-outer'>
				<div className='circle-inner'></div>
				{/* <div className='circle-outer' ref={circleOuter}>
				<div className='circle-inner' ref={circleInner}></div> */}
			</div>
		</LoaderContainer>
	);
};
const LoaderContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 5000;
	overflow: hidden;
	h4#bg-text-name {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Gemunu Libre', sans-serif;
		-webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
		-webkit-text-fill-color: rgba(255, 255, 255, 0.02);
		font-size: 30rem;
		line-height: 20rem;
		opacity: 0;
		span {
			text-transform: uppercase;
			margin-left: 30rem;
		}
	}
	h4#bg-text-name-red {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Gemunu Libre', sans-serif;
		-webkit-text-stroke: 1px rgba(66, 65, 65, 0.329);
		-webkit-text-fill-color: ${(props) => props.theme.colors.red}42;
		font-size: 30rem;
		line-height: 20rem;
		opacity: 0;
		span {
			text-transform: uppercase;
			margin-left: 30rem;
		}
	}
	.circle-outer {
		z-index: -2;
		width: 80vw;
		height: 80vw;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 10px solid rgba(196, 196, 196, 0.05);
		border-radius: 50%;
		opacity: 0;
		.circle-inner {
			height: 40%;
			width: 40%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 5px solid rgba(196, 196, 196, 0.1);
			border-radius: inherit;
			opacity: 0;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;

export default PageLoader;
