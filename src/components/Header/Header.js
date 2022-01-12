import Link from 'next/link';
import React from 'react';
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

const Header = () => (
	<Container>
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
					<Brand>
						dave<span>perry</span>
						<span>.</span>tech
					</Brand>
				</a>
			</Link>
		</Div1>
		<Div2>
			<BGNav>NAVIGATION</BGNav>
			<li>
				<Link href='#about'>
					<NavLink>About</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Tech</NavLink>
				</Link>
			</li>
			<li>
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

export default Header;
