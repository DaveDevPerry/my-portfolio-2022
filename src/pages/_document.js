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
					<meta
						name='description'
						content='We create professional interactive web sites and applications.  From simple landing pages, websites from scratch or re-designing to keep ahead of the trends.  To fully functioning, multi-user platforms fully designed, developed and integrating seamlessly together, incorporating your existing api endpoints, without downtime precisely for your business needs.  '
					/>
					<meta name='robots' content='index,follow' />

					{/* <link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/> */}

					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
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
					{/* <link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
						rel='stylesheet'
					/> */}
					<link
						href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,800&display=optional'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Permanent+Marker&display=optional'
						rel='stylesheet'
					/>
					<script
						defer
						src='https://unpkg.com/typewriter-effect@latest/dist/core.js'
					></script>
					{/* <style data-href="https://fonts.googleapis.com/css2?family=Inter&display=optional">
  @font-face{font-family:'Inter';font-style:'normal'
</style> */}

					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicon/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon/favicon-16x16.png'
					/>
					<link rel='manifest' href='/favicon/site.webmanifest' />
				</Head>
				<body>
					{/* <h1>daveperry.tech</h1> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
