import styled from 'styled-components';

export const Container = styled.div`
	height: 170px;
	width: 170px;
	position: relative;

	.loader-container {
		transform: scale(0.5);
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: rgb(31, 30, 30); */
		z-index: 50;
		transform: scale(0.5);
		/* } */
		.tv-loader {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			/* background-color: green; */
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			z-index: 500;
		}
	}

	.tv-wrapper {
		/* border: 1px solid blue; */
		position: relative;
		width: 200px;
		height: 239px;
		#tv-signal {
			position: absolute;
			top: 85px;
			left: 28px;
			width: 110px;
			height: 50px;
			background: url('../images/tv-signal.png');
			background-repeat: repeat;
			background-position: 0 0;
			background-size: auto 100%;
			/*adjust s value for speed*/
			animation: tvSignal 500s linear infinite;
		}
		img#terror-tv {
			position: absolute;
			/* top: 0;
			left: 0; */
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 200px;
			z-index: 100000;
		}
	}

	@keyframes tvSignal {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 0;
		}
	}
`;

// export const Container = styled.div`
// 	border: 1px solid green;
// 	height: 200px;
// 	width: 200px;
// 	position: relative;
// 	.container {
// 		.loader-container {
// 			transform: scale(0.5);
// 			/* } */
// 			.tv-loader {
// 				position: absolute;
// 				top: 0;
// 				left: 0;
// 				width: 100%;
// 				height: 100%;
// 				background-color: green;
// 				display: flex;
// 				justify-content: center;
// 				align-items: center;
// 				flex-direction: column;
// 				z-index: 500;
// 			}
// 		}
// 	}

// 	.tv-wrapper {
// 		border: 1px solid blue;
// 		position: relative;
// 		width: 200px;
// 		height: 239px;
// 		#tv-signal {
// 			position: absolute;
// 			top: 120px;
// 			left: 28px;
// 			width: 110px;
// 			height: 50px;
// 			background: url('../images/tv-signal.png');
// 			background-repeat: repeat;
// 			background-position: 0 0;
// 			background-size: auto 100%;
// 			/*adjust s value for speed*/
// 			animation: tvSignal 500s linear infinite;
// 		}
// 		img#terror-tv {
// 			position: absolute;
// 			top: 0;
// 			left: 0;
// 			width: 200px;
// 			z-index: 100000;
// 		}
// 	}

// 	@keyframes tvSignal {
// 		from {
// 			background-position: 0 0;
// 		}
// 		to {
// 			background-position: -10000px 0;
// 		}
// 	}
// `;

/* .glitch {
				font-size: 4rem;
				font-weight: 700;
				text-transform: uppercase;
				color: $white;
				letter-spacing: 0.5rem;
				font-family: 'BadSignal';
				text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
					-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
					0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

				animation: glitch1 2500ms infinite;
				#glitch-hyphen {
					font-family: 'Roboto';
				}
			} */

/* @keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		14% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		49% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		50% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		99% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		100% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	}
	@keyframes glitch1 {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}

		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
		}

		50% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}

		100% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	} */
