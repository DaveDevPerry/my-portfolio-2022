import About from '../components/About/About';
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
import ProfilePicAnimation from '../components/BackgroundAnimation/ProfilePicAnimation';
// import Loaders from '../components/Loaders/Loaders';
import PageLoaders from '../components/Loaders/Loaders';

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				{/* <BgAnimation /> */}
				<LogoAnimation />
			</Section>
			{/* <PageLoaders /> */}
			{/* <Section grid>
				<About />
				<ProfilePicAnimation />
				<BgAnimation />
			</Section> */}
			<About />
			<Projects />
			<Technologies />
			{/* <Timeline /> */}
			<Accomplishments />
			<Contact />
		</Layout>
	);
};

export default Home;
