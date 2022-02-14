import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang='en-GB'>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>

					<link
						href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@800&display=swap'
						rel='stylesheet'
					/>
					{/* <link href='/fonts/style.css' rel='stylesheet' /> */}
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,800&display=swap'
						rel='stylesheet'
					/>
					<script src='https://unpkg.com/typewriter-effect@latest/dist/core.js'></script>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='./favicon/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='./favicon/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='./favicon/favicon-16x16.png'
					/>
					<link rel='manifest' href='/favicon/site.webmanifest' />
					{/* <link
						rel='preload'
						href='/fonts/CheriLiney.woff2'
						as='font'
						crossOrigin=''
					/> */}
					{/* <title>daveperry.tech</title> */}
					{/* <script
						src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
						integrity='sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ=='
						crossOrigin='anonymous'
						referrerpolicy='no-referrer'
					></script>
					<script
						src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js'
						integrity='sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q=='
						crossOrigin='anonymous'
						referrerpolicy='no-referrer'
					></script>
				
					<script
						src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
						integrity='sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ=='
						crossOrigin='anonymous'
						referrerpolicy='no-referrer'
					></script>
					<script
						src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js'
						integrity='sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q=='
						crossOrigin='anonymous'
						referrerpolicy='no-referrer'
					></script> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
