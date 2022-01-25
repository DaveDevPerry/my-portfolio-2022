import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import LogoAnimation from '../components/BackgroundAnimation/LogoAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				{/* <BgAnimation /> */}
				<LogoAnimation />
			</Section>
			<Projects />
			<Technologies />
			<Timeline />
			<Accomplishments />
			<Contact />
		</Layout>
	);
};

export default Home;
