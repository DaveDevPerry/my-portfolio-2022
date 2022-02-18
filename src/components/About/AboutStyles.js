import styled from 'styled-components';

export const AboutPageContainer = styled.div`
/* @include flex(space-evenly, center, row); */
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
		/* border: 2px solid blue; */
		column-gap: 5rem;
		height: 100%;
		padding: 0;
		user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
		.about-container {
			// border: 5px solid yellow;
			// width: 60%;
			// width: 70%;
			// height: 80%;
			// width: 80rem;
			/* max-width: 80rem; */
			// position: absolute;
			// top: 50%;
			// left: 50%;
			// transform: translate(-50%, -50%);
			// background-color: chocolate;
			/* @include flex(flex-start, center, column); */
			display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
			// background-color: rgba(35, 36, 36, 0.7);
			// border: 1px solid green;
			// background-color: rgba(35, 36, 36, 0.9);
			p {
				font-size: 1.6rem;
				color: rgb(177, 177, 177);
			}

			.about-header {
				// border: 4px solid green;
				/* @include flex(flex-start, center, row); */
				display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
				width: 100%;
				// height: 100%;
				@media ${(props) => props.theme.breakpoints.sm} {
		.about-header{
			display: none;
		}
	}
				.about-image#about-image {
					border: 5px solid #780202;
					border-radius: 10px;
					// width: 25rem;
					// height: 14.5rem;
					// flex-grow: 1;
					height: 100%;
					height: 16rem;
					// width: 40%;
					width: 25rem;
					background-image: url('../images/davedesk.jpg');
					// background-image: url('../img/davedesk.jpg');
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
				}
				.about-brief {
					// border: 3px solid lightblue;
					flex-grow: 1;
					// width: 100%;
					/* @include flex(flex-start, center, column); */
					display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
					.about-top {
						// border: 3px solid orangered;
						/* @include flex(flex-start, center, row); */
						display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
						width: 100%;
						.about-box {
							// border: 5px solid var(--primaryColor);
							height: 6.5rem;
							width: 4.5rem;
							position: relative;
							&::before {
								position: absolute;
								content: '';
								background-color: #780202;
								height: 5px;
								width: 100%;
								top: 50%;
								transform: translateY(-50%);
							}
						}
						.about-name {
							border: 4px solid #780202;
							border-radius: 10px;
							flex-grow: 1;
							text-align: center;
							height: 8rem;
							h2 {
								font-family: 'Oswald', sans-serif;
								color: #ffffff;
								font-size: 3.5rem;
								line-height: 6rem;
								// letter-spacing: 0.5rem;
								// line-height: unset;
							}
						}
					}
					.about-middle {
						position: relative;
						// border: 3px solid orangered;
						width: 100%;
						height: 1rem;
						// margin: 0 1rem;
						&::before {
							position: absolute;
							content: '';
							top: 0;
							right: 4rem;
							height: 1rem;
							width: 5px;
							background-color: #780202;
						}
					}
					.about-bottom {
						// border: 3px solid orangered;
						// @include flex(flex-start, center, row);
						/* @include flex(flex-end, stretch, row); */
						display: flex;
justify-content: flex-end;
align-items: stretch;
flex-direction: row;
						width: 100%;
						// flex-grow: 1;
						// background-color: lightcoral;

						.about-headline {
							// height: 100%;
							// border: 1px solid;
							// flex-shrink: 1;
							flex-grow: 1;
							// overflow-wrap: break-word;
							margin-right: 1rem;
							text-align: center;
							font-style: italic;
							p {
								font-size: 1.6rem;
								font-weight: 400;
								// color: var(--white);
								height: 100%;
							}
						}
						.about-box {
							border: 3px solid #780202;
							border-radius: 10px;
							height: 7rem;
							width: 7rem !important;

							display: grid;
							place-content: center;

							a {
								#about-gh {
									font-size: 5rem;
									color: grey;
								}
								
							}
							
						}
						.about-box.hide-box{
							border: 3px solid transparent;
								}
					}
				}
			}

			.about-intro {
				// border: 4px solid green;
				margin: 1rem 0;
				flex-wrap: wrap;
				// width: 100%;
			}
			.about-coding {
				// border: 4px solid green;
				display: flex;
				.about-left {
					// border: 3px solid lightblue;
					/* @include flex(flex-start, center, column); */
					display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
					padding-right: 2rem;
					p {
						// font-size: 1.8rem;
						margin-bottom: 2rem;
					}
					.tech-icons {
						/* @include flex(space-between, center, row); */
						display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
						width: 100%;
						// padding-right: 2rem;
						img {
							height: 4rem;
						}
					}
				}
				.about-right {
					// border: 3px solid lightblue;
					/* @include flex(space-between, center, column); */
					display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
					a,
					.button {
						background-color: #ffffff;
						display: grid;
						place-content: center;
						width: 12rem;
						// padding: 1rem 0;
						h2 {
							font-size: 2rem;
							color: #242121;
							line-height: 4.8rem;
							// letter-spacing: 0.5rem;
							text-transform: uppercase;
						}
					}
					.button {
						margin-top: 1rem;
					}
				}
			}
			.about-me {
				// border: 4px solid green;
				margin: 2rem 0 1rem 0;
				/* padding-left: 3rem; */
				/* position: relative; */
				/* &::before {
					position: absolute;
					content: '';
					background-color: #780202;
					height: 100%;
					width: 8px;
					top: 0;
					left: 0;
				}
				&::after {
					position: absolute;
					content: '';
					background-color: #780202;
					height: 3px;
					width: 10rem;
					bottom: -3px;
					left: 0;
				} */
				P {
					/* margin-top: 2rem; */
					margin-bottom: 1rem;
				}
			}
		}

		#about-animation-container {
			// border: 2px solid yellow;
			min-width: 60rem;
			// flex: 1;
			padding: 0 0 0 5rem;
			img {
				width: 100%;
			}
		}
	}
	.custom-shape-divider-top-1630700510 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.custom-shape-divider-top-1630700510 svg {
		position: relative;
		display: block;
		width: calc(114% + 1.3px);
		height: 49px;
	}

	.custom-shape-divider-top-1630700510 .shape-fill {
		fill: #7ed321;
	}

	/* @media ${(props) => props.theme.breakpoints.sm} {
		.about-header{
			display: none;
		}
	} */

`;

export const InfoText = styled.p`
	width: 100%;
	/* max-width: 800px; */
	padding: 0;
	/* color: #e4e6e7; */
	color: rgba(255, 255, 255, 0.5);
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	margin-bottom: 2rem;
	pointer-events: none;

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
		font-size: 16px;
		line-height: 24px;
		font-weight: 300;
	}
`;

export const AboutTextWrapper = styled.div`
	/* border: 1px solid green; */
	position: relative;
	overflow: hidden;
	/* &:hover {
		.dave p span {
			animation: jump 1s ease-in-out forwards;
		}
	} */
	/* #name-anim {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-play-state: paused;
		cursor: pointer;
	}
	#name-anim.play {
		path {
			stroke: white;
			&:nth-child(1) {
				stroke-dasharray: 282;
				stroke-dashoffset: 282;
				animation: draw-line-name 3s ease forwards;
				// animation-play-state: paused;
				// animation-delay: 5s;
				stroke: #780202;
			}
			&:nth-child(2) {
				stroke-dasharray: 255;
				stroke-dashoffset: 255;
				stroke: #780202;
				animation: draw-line-name 2s ease forwards 0.8s;
			}
			&:nth-child(3) {
				stroke-dasharray: 242;
				stroke-dashoffset: 242;
				stroke: #780202;
				animation: draw-line-name 1s ease forwards 1.4s;
			}
			&:nth-child(4) {
				stroke-dasharray: 225;
				stroke-dashoffset: 225;
				stroke: #780202;
				animation: draw-line-name 1s ease forwards 1.8s;
			}
			&:nth-child(5) {
				stroke-dasharray: 231;
				stroke-dashoffset: 231;
				stroke: #780202;
				// animation: draw-line 2s ease forwards 0.8s;
				animation: fill 0.5s ease forwards 2.6s;
			}
			&:nth-child(6) {
				stroke-dasharray: 225;
				stroke-dashoffset: 225;
				animation: fill 0.5s ease forwards 2.8s;
			}
			&:nth-child(7) {
				stroke-dasharray: 292;
				stroke-dashoffset: 292;
				animation: fill 0.5s ease forwards 3s;
			}
			&:nth-child(8) {
				stroke-dasharray: 292;
				stroke-dashoffset: 292;
				animation: fill 0.5s ease forwards 3.2s;
			}
			&:nth-child(9) {
				stroke-dasharray: 207;
				stroke-dashoffset: 207;
				animation: fill 0.5s ease forwards 3.4s;
			}
		}
	}

	@keyframes draw-line-name {
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes fill {
		from {
			fill: transparent;
		}
		to {
			fill: #780202;
		}
	} */
	#about-bg-text-name {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Gemunu Libre', sans-serif;
		color: rgba(255, 255, 255, 0.013);
		-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
		-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
		color: white;
		font-size: 20rem;
		/* z-index: -1; */
		width: 100%;
		text-align: center;
		line-height: 14rem;
		transition: 0.5s ease-in;
		/* &:hover{
			color: rgba(221, 9, 9, 0.013);
		-webkit-text-stroke: 1px #5e060621;
		-webkit-text-fill-color: #5e060621;
		} */
		span {
			text-transform: uppercase;
		}
	}
	.red#about-bg-text-name{
		color: rgba(221, 9, 9, 0.013);
		-webkit-text-stroke: 1px #5e060621;
		-webkit-text-fill-color: #5e060621;
	}
	/* .text-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		z-index: -1;
		border: 2px solid green;
		width: 100%;
		justify-content: center;
		.dave {
			p {
				font-family: 'Gemunu Libre', sans-serif;
				color: rgba(255, 255, 255, 0.013);
				-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
				-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
				color: white;
				font-size: 20rem;
				span {
					transition: 1s ease-in-out;
				}
			}
		}
		.perry {
			p {
				font-family: 'Gemunu Libre', sans-serif;
				color: rgba(255, 255, 255, 0.013);
				-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
				-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
				color: white;
				font-size: 20rem;
				span {
					transition: 1s ease-in-out;
				}
			}
		} */

		@media ${(props) => props.theme.breakpoints.sm} {
			font-size: 14rem;
		}
		@media ${(props) => props.theme.breakpoints.xsm} {
			font-size: 10rem;
		}
	}

	@keyframes jump {
		0%,
		100% {
			transform: translateY(0px);
		}
		,
		50% {
			transform: translateY(-50px);
		}
	}
`;
