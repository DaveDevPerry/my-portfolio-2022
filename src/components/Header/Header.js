import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
	Brand,
	BGBrand,
	BGNav,
	WorkStatus,
} from './HeaderStyles';

const Header = () => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.fromTo('#header', { y: '-500' }, { y: 0, duration: 2, delay: 6 })
			.from('#brand', { x: '-200', duration: 2 })
			.from('#work-status', { opacity: 0, duration: 1 })
			.from('#about-link', { y: '-100px', duration: 1.5 }, '-=1')
			.from('#projects-link', { y: '-100px', duration: 1.5 }, '-=1')
			.from('#tech-link', { y: '-100px', duration: 1.5 }, '-=1')
			.from('#contact-link', { y: '-100px', duration: 1.5 }, '-=1')
			.from('#typewriter-text', { opacity: 0 });
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
			</Div2>
		</Container>
	);
};

export default Header;
