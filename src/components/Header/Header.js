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
} from './HeaderStyles';

const Header = () => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.fromTo('#header', { y: '-500' }, { y: 0, duration: 2, delay: 8 })
			.from('#brand', { x: '-200', duration: 2 })
			.from('#about-link', { y: '-100px', duration: 1.5 })
			.from('#projects-link', { y: '-100px', duration: 1.5 }, '-=1')
			.from('#tech-link', { y: '-100px', duration: 1.5 }, '-=1')
			.from('#contact-link', { y: '-100px', duration: 1.5 }, '-=1');
	}, []);

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
						{/* <DiCssdeck size='3rem' />{' '} */}
						<Brand id='brand'>
							dave<span>perry</span>
							<span>.</span>tech
						</Brand>
					</a>
				</Link>
			</Div1>
			<Div2>
				<BGNav>NAVIGATION</BGNav>
				<li id='about-link'>
					<Link href='#about'>
						<NavLink>About</NavLink>
					</Link>
				</li>
				<li id='projects-link'>
					<Link href='#projects'>
						<NavLink>Projects</NavLink>
					</Link>
				</li>
				<li id='tech-link'>
					<Link href='#tech'>
						<NavLink>Tech</NavLink>
					</Link>
				</li>
				<li id='contact-link'>
					<Link href='#contact'>
						<NavLink>Contact</NavLink>
					</Link>
				</li>
			</Div2>
			{/* <Div3>
			<SocialIcons href='https://github.com'>
				<AiFillGithub size='3rem' />
			</SocialIcons>
			<SocialIcons href='https://linkedin.com'>
				<AiFillLinkedin size='3rem' />
			</SocialIcons>
			<SocialIcons href='https://instagram.com'>
				<AiFillInstagram size='3rem' />
			</SocialIcons>
		</Div3> */}
		</Container>
	);
};

export default Header;
