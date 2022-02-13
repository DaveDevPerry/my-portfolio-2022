import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GrDocumentPdf } from 'react-icons/gr';
import Link from 'next/link';

import {
	Section,
	SectionTitle,
	BtnWrapper,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionText } from './HeroStyles';

const Hero = (props) => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.from('#hero-title', { opacity: 0, duration: 1, delay: 6 })
			.from('#hero-text', { opacity: 0, duration: 1 })
			.from('#hero-buttons', { opacity: 0, duration: 1 });
	}, []);

	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center id='hero-title'>
					{/* Welcome To <br /> */}
					{/* My Personal Portfolio  */}
					I design and develop <br />
					complete solutions for <br />
					the digital world.
				</SectionTitle>
				<SectionText id='hero-text'>
					I aim to help design and develop digital products to turn ideas into
					fully functional, enjoyable experiences.
				</SectionText>
				<BtnWrapper id='hero-buttons'>
					{/* <Link href='#contact'>
					<Button>Contact Me</Button>
				</Link> */}
					{/* <div className='link-btns'> */}
					{/* <img src='/images/bg_cv.png' alt='cv' /> */}
					<Link href='#'>
						<Button>
							{/* <GrDocumentPdf size='3rem' /> */}
							View C.V.
						</Button>
					</Link>
					{/* </div> */}

					<Link href='#projects'>
						<Button>My Projects</Button>
					</Link>
					{/* <Button>Available for work</Button> */}
				</BtnWrapper>

				{/* <Button onClick={() => (window.location = 'https://google.com')}>
				Learn More
			</Button> */}
			</LeftSection>
		</Section>
	);
};

export default Hero;
