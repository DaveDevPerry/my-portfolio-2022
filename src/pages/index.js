import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

import About from '../components/About/About';
// import Accomplishments from '../components/Accomplishments/Accomplishments';
// import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import LogoAnimation from '../components/BackgroundAnimation/LogoAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
// import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
// import ProfilePicAnimation from '../components/BackgroundAnimation/ProfilePicAnimation';
// import Loaders from '../components/Loaders/Loaders';
// import PageLoaders from '../components/Loaders/Loaders';
import Animations from '../components/Animations/Animations';

import ContactForm from '../components/ContactForm/contact-form';
import PageLoader from '../components/PageLoader/PageLoader';

const Home = () => {
	// const [state, handleSubmit] = useForm(process.env.YOUR_FORM_ID);
	// useEffect(() => {
	// 	let mouseCursor = document.querySelector('.cursor');
	// 	let navLinks = document.querySelectorAll('.nav-links');
	// 	window.addEventListener('mousemove', cursor);
	// 	function cursor(e) {
	// 		mouseCursor.style.top = e.pageY + 'px';
	// 		mouseCursor.style.left = e.pageX + 'px';
	// 	}

	// 	navLinks.forEach((link) => {
	// 		link.addEventListener('mouseleave', () => {
	// 			mouseCursor.classList.remove('link-grow');
	// 			link.classList.remove('hovered-link');
	// 		});
	// 		link.addEventListener('mouseover', () => {
	// 			mouseCursor.classList.add('link-grow');
	// 			link.classList.add('hovered-link');
	// 		});
	// 	});
	// }, []);
	// window.addEventListener('mousemove', cursor);

	return (
		<Layout>
			{/* <ContactForm /> */}
			{/* <div className='cursor'></div> */}
			<PageLoader />
			<Section grid>
				<Hero />
				{/* <BgAnimation /> */}
				<LogoAnimation />
			</Section>
			<About />
			<Projects />
			<Animations />
			<Technologies />
			{/* <Timeline /> */}
			{/* <Accomplishments /> */}
			{/* <Contact /> */}
			<ContactForm />
		</Layout>
	);
};

export default Home;
