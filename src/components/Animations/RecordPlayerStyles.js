import styled from 'styled-components';

export const Container = styled.div`
	height: 170px;
	width: 170px;
	position: relative;
	.content-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 50;
		/* background: green; */
		transform: scale(0.5);

		.media-container.media-turntable.media-active {
			display: grid;
			place-content: center;
			#turntable {
				/* background-color: grey; */
				background-color: rgb(31, 30, 30);
				width: 28rem;
				height: 22rem;
				border-radius: 2rem;
				position: relative;
				box-shadow: -4px -4px 4px rgba(171, 171, 171, 0.25),
					4px 4px 4px rgba(0, 0, 0, 0.55);
				.circle-wrapper.lp-table.play {
					position: absolute;
					top: 50%;
					left: 2rem;
					transform: translate(0, -50%);
					height: 20rem;
					width: 20rem;
					display: grid;
					place-content: center;
					.black-vinyl {
						height: 200px;
						width: 200px;
						/* height: 20rem;
						width: 20rem; */
						border-radius: 50%;
						position: absolute;
					}
					.cover {
						height: 60px;
						width: 60px;
						border-radius: 50%;
						animation: rotate 10s linear infinite;
						/* animation-play-state: paused; */
					}
				}
				.circle-wrapper.lp-table.play .cover {
					animation-play-state: running;
				}
				.record-player-arm {
					position: absolute;
					top: 0;
					left: 20rem;
					height: 220px;
					width: 80px;
					/* height: 22rem;
					width: 8rem; */
					padding-top: 4rem;
					.arm-wrapper {
						position: relative;
						animation: playRecord 60s ease infinite;
						#player-arm {
							position: absolute;
							height: 16rem;
							top: -1.4rem;
							left: 0;
							transform: translate(-25%, 0);
						}
					}
				}
			}
		}
	}
	@keyframes playRecord {
		0% {
			transform: rotate(-10deg);
		}
		5% {
			transform: rotate(2deg);
		}
		90% {
			transform: rotate(25deg);
		}
		100% {
			transform: rotate(-10deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;
