// import { useForm, ValidationError } from '@formspree/react';
// import { useEffect } from 'react';

import About from '../components/About';
import LogoAnimation from '../components/LogoAnimation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Animations from '../components/Animations';
import ContactForm from '../components/contact-form';
// import { useState } from 'react';
// import PageLoader from '../components/PageLoader';

const Home = () => {
	// const [modalImgUrl, setModalImgUrl] = useState(null);
	return (
		<Layout>
			{/* <Layout modalImgUrl={modalImgUrl} setModalImgUrl={setModalImgUrl}> */}
			{/* <PageLoader /> */}
			{/* <input type='text' name='test' id='lighthouse test' /> */}
			<Section grid id='top'>
				<Hero />
				<LogoAnimation />
			</Section>
			<About />
			<Projects />
			{/* <Projects modalImgUrl={modalImgUrl} setModalImgUrl={setModalImgUrl} /> */}
			<Animations />
			<Technologies />
			<ContactForm />
		</Layout>
	);
};

export default Home;
