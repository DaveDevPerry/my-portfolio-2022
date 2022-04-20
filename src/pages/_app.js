import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Theme from '../styles/theme';
import Head from 'next/head';
import '../../globals.css';

export default function App({ Component, pageProps }) {
	const { pathname } = useRouter();

	useEffect(() => {
		// some browsers (like safari) may require a timeout to delay calling this
		// function after a page has loaded; otherwise, it may not update the position
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 1);
	}, [pathname]);
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
