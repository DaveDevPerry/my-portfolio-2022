// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
import Theme from '../styles/theme';
import Head from 'next/head';
import '../../globals.css';

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
