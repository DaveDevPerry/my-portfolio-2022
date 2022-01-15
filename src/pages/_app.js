import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>daveperry.tech</title>
			</Head>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
