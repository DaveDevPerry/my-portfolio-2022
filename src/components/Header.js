import Link from 'next/link';
import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
	const tl = useRef();

	useEffect(() => {
		if (window.innerWidth > 640) {
			tl.current = gsap
				.timeline()
				.fromTo('#header', { y: '-100%' }, { y: 0, duration: 1 })
				.from('#brand', { x: '-200', duration: 1 })
				.from('#work-status', { opacity: 0, duration: 1 })
				.from('#about-link', { y: '-100px', duration: 1.5 }, '-=2')
				.from('#projects-link', { y: '-100px', duration: 1.5 }, '-=1.5')
				.from('#tech-link', { y: '-100px', duration: 1.5 }, '-=1')
				.from('#contact-link', { y: '-100px', duration: 1.5 }, '-=1')
				.from('#typewriter-text', { opacity: 0 }, '+=3.2');
		}
		if (window.innerWidth < 639) {
			tl.current = gsap
				.timeline()
				.fromTo('#header', { y: '-100%' }, { y: 0, duration: 1 })
				.from('#brand', { x: '-200', duration: 1 })
				.from('#work-status', { opacity: 0, duration: 1 })
				.from('#typewriter-text', { opacity: 0 }, '+=0.5');
		}

		typewriterText();
	}, []);

	const typewriterText = () => {
		const text = document.querySelector('#typewriter-text');

		let typewriter = new Typewriter(text, {
			loop: true,
			delay: 100,
		});

		typewriter
			.pauseFor(2000)
			.typeString('AVAILABLE FOR WORK')
			.pauseFor(5000)
			.deleteAll('natural')
			.pauseFor(1000)
			.start();
	};

	return (
		<Container id='header'>
			<Div1>
				<BGBrand>BRAND</BGBrand>
				<Link href='/'>
					<a
						style={{
							display: 'flex',
							alignItems: 'center',
							color: 'white',
							marginBottom: '20px',
						}}
					>
						<Brand id='brand'>
							<div className='email-block'></div>
							<div className='email-bar'></div>
							<div className='email-address'>dave@daveperry.tech</div>
							dave<span>perry</span>
							<span>.</span>tech
						</Brand>
					</a>
				</Link>
			</Div1>
			<WorkStatus id='work-status'>
				<p id='typewriter-text'></p>
			</WorkStatus>
			<Div2>
				<BGNav>NAVIGATION</BGNav>
				<ul>
					<li id='about-link' className='nav-links'>
						<Link href='#about'>
							<NavLink>About</NavLink>
						</Link>
					</li>
					<li id='projects-link' className='nav-links'>
						<Link href='#projects'>
							<NavLink>Projects</NavLink>
						</Link>
					</li>
					<li id='tech-link' className='nav-links'>
						<Link href='#tech'>
							<NavLink>Tech</NavLink>
						</Link>
					</li>
					<li id='contact-link' className='nav-links'>
						<Link href='#contact'>
							<NavLink>Contact</NavLink>
						</Link>
					</li>
				</ul>
			</Div2>
		</Container>
	);
};
const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/* background: #242121; */
	/* background-color: blue; */
	background-color: rgb(27, 27, 27);
	z-index: 2;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 50px;
	grid-column-gap: 2rem;
	padding: 1rem;
	/* border-bottom: 2px solid #c40303; */
	border-bottom: 2px solid ${(props) => props.theme.colors.red};
	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 60px);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-template-rows: auto;
		padding: 0rem 1rem;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		grid-template-rows: auto;
		padding: 0rem 1rem;
	}
`;

const Brand = styled.div`
	font-family: 'Oswald', serif;
	font-size: 2.8rem;
	font-weight: lighter;
	position: relative;
	.email-block {
		position: absolute;
		top: 100%;
		left: 19px;
		background-color: ${(props) => props.theme.colors.red};
		height: 5px;
		width: 20px;
	}
	.email-bar {
		position: absolute;
		top: 100%;
		left: 19px;
		background-color: ${(props) => props.theme.colors.red};
		height: 30px;
		width: 2px;
	}
	.email-address {
		position: absolute;
		top: calc(100% + 34px);
		left: 7px;
		/* transform: translateX(-50%); */
		font-size: 1.8rem;
		letter-spacing: 2px;
		/* background-color: ${(props) => props.theme.colors.red}; */
		/* height: 50px;
		width: 2px; */
		/* writing-mode: vertical-lr; */
		/* writing-mode: vertical-tb; */
		/* writing-mode: vertical-rl; */
		/* text-orientation: sideways; */
		-ms-writing-mode: tb-lr;
		-webkit-writing-mode: vertical-tb;
		writing-mode: vertical-lr;
		transform: rotate(180deg);
	}
	span {
		font-weight: bolder;
	}
	span:last-child {
		color: ${(props) => props.theme.colors.red};
		font-size: 5rem;
		line-height: 1.15;
		font-weight: bolder;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		.email-block {
			display: none;
		}
		.email-bar {
			display: none;
		}
		.email-address {
			display: none;
		}
	}
`;

const Div1 = styled.div`
	position: relative;
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: row;
	align-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;

const BGBrand = styled.div`
	position: absolute;
	font-size: 80px;
	top: 50%;
	left: -1rem;
	transform: translateY(-50%);
	font-family: 'Gemunu Libre', sans-serif;
	color: rgba(255, 255, 255, 0.013);
	-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
	-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
	color: white;
	pointer-events: none;
`;

const Div2 = styled.div`
	position: relative;
	grid-area: 1 / 3/ 2 / 6;
	display: flex;
	justify-content: flex-end;
	column-gap: 2rem;
	align-items: center;
	font-weight: bold;
	ul {
		display: flex;
		column-gap: 2rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		justify-content: space-around;
		column-gap: 0;
		align-items: center;
		grid-area: 2 / 1 / 3 / 6;
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		display: none;
	}
`;

const BGNav = styled.div`
	position: absolute;
	font-size: 80px;
	top: 50%;
	right: -1rem;
	transform: translateY(-50%);
	font-family: 'Gemunu Libre', sans-serif;
	color: rgba(255, 255, 255, 0.013);
	-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
	-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
	color: white;
	pointer-events: none;
	@media ${(props) => props.theme.breakpoints.sm} {
		right: 50%;
		/* top: 50%; */
		transform: translate(50%, -50%);
	}
`;

// Navigation Links
const NavLink = styled.p`
	text-transform: uppercase;
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	z-index: 5;
	&:hover {
		color: ${(props) => props.theme.colors.red};
		opacity: 1;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

const WorkStatus = styled.div`
	position: relative;
	grid-area: 1 / 2/ 2 / 3;
	display: flex;
	justify-content: center;
	column-gap: 2rem;
	align-items: center;
	p {
		width: clamp(220px, 220px, 80%);
		background-color: ${(props) => props.theme.colors.red};
		padding: 0.7rem 1rem;
		font-size: 1.8rem;
		border-radius: 5px;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		p {
			width: clamp(180px, 180px, 100%);
			padding: 0.7rem 0.5rem;
			font-size: 1.4rem;
		}
	}
	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: center;
		column-gap: 0;
		align-items: center;
		grid-area: 2 / 1 / 3 / 6;
		display: none;
	}
	/* font-weight: bold; */
	@media ${(props) => props.theme.breakpoints.sm} {
		justify-content: center;
		column-gap: 0;
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
		/* display: none; */
		display: flex;
		p {
			font-size: 1.2rem;
			padding: 0.5rem 0.2rem;
		}
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		justify-content: center;
		column-gap: 0;
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
		/* display: none; */
		display: flex;
		/* height: 40px; */
		p {
			font-size: 1.4rem;
			padding: 0.4rem 0.8rem;
			height: 40px;
		}
	}
`;

export default Header;
