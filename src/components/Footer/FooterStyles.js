import styled from 'styled-components';

export const FooterWrapper = styled.section`
	width: 95%;
	/* max-width: 1040px; */
	/* border: 2px solid blue; */
	padding: 2rem 2rem;
	/* z-index: 20000; */
	margin: 6rem auto 0 auto;
	box-sizing: border-box;
	background-color: rgb(27, 27, 27);
	border-top: 3px solid #780202;
	border: 3px solid #780202;
	border-bottom: 0px solid transparent;
	border-radius: 10px 10px 0 0;
	position: relative;
	height: 4rem;
	#chevron-up {
		position: absolute;
		top: -5rem;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #780202;
		font-size: 8rem;
	}
	.footer-container {
		border: 3px solid #780202;
		padding: 0.5rem;
		background-color: #1b1b1b;
		position: absolute;
		top: 0;
		border-radius: 10rem;
	}
	.links-container {
		left: 2rem;
		transform: translateY(-50%);
		a {
			padding: 0.5rem;
			display: grid;
			place-content: center;
			#footer-gh {
				font-size: 30px;
				color: var(--grey);
			}
		}
	}
	.toggle-container {
		right: 2rem;
		transform: translateY(-50%);
		display: grid;
		place-content: center;
		padding: 0.8rem;
		/* svg { */
		// display: none;
		/* cursor: pointer; */
		/* } */
		// .toggle-mode {
		// 	// display: none;
		// 	// position: absolute;
		// 	// left: 50%;
		// 	// transform: translateX(-50%);
		// 	// @include flex(center, center, row);

		// }
	}
	.company-container {
		padding: 0.5rem 2rem;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	p {
		font-size: 1.2rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 16px 48px;
		/* width: calc(100vw - 32px); */
		border: 2px solid #780202;
		padding-bottom: 0px;
		border-bottom: 0px solid transparent;
		.footer-container {
			border: 2px solid #780202;
			/* border-bottom: 0px solid transparent; */
		}
		.company-container p {
			font-size: 10px;
		}
	}
`;
