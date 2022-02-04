import Theme from '../styles/theme';
import Head from 'next/head';
import '../../public/fonts/style.css';
import '../../globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>daveperry.tech</title>
				{/* <link rel='stylesheet' href='/fonts/CheriLiney.woff2' /> */}
			</Head>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
