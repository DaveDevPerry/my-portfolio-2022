// import { useForm, ValidationError } from '@formspree/react';
// import { useEffect } from 'react';

import About from '../components/About/About';
import LogoAnimation from '../components/BackgroundAnimation/LogoAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Animations from '../components/Animations/Animations';
import ContactForm from '../components/ContactForm/contact-form';
import PageLoader from '../components/PageLoader/PageLoader';

const Home = () => {
	return (
		<Layout>
			<PageLoader />
			<Section grid>
				<Hero />
				<LogoAnimation />
			</Section>
			<About />
			<Projects />
			<Animations />
			<Technologies />
			<ContactForm />
		</Layout>
	);
};

export default Home;
