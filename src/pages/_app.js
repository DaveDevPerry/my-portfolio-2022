import Theme from '../styles/theme';
import Head from 'next/head';
import '../../public/fonts/style.css';
import '../../globals.css';

import dynamic from 'next/dynamic';

export default function App({ Component, pageProps }) {
	const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
		ssr: false,
	});
	return (
		<>
			<Head>
				<title>daveperry.tech</title>
				{/* <link rel='stylesheet' href='/fonts/CheriLiney.woff2' /> */}
			</Head>
			<AnimatedCursor
				innerSize={12}
				outerSize={18}
				color='247,223,30'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={3}
			/>
			{/* <AnimatedCursor
				innerSize={14}
				outerSize={18}
				color='120, 2, 2'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/> */}
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
