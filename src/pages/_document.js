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
						content='daveperry.tech | Dave Perry is a web designer and developer from London.'
					/>

					{/* <link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/> */}

					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
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
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
