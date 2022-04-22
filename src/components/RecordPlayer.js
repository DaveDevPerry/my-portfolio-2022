import React from 'react';
import styled from 'styled-components';
const RecordPlayer = () => {
	return (
		<RecordPlayerContainer>
			<div className='content-wrapper'>
				<div className='media-container media-turntable display-record media-active'>
					<div id='turntable'>
						<div className='circle-wrapper lp-table play'>
							<img
								src='./images/vinyl.webp'
								alt='vinyl record'
								className='black-vinyl'
							/>
							<img
								src='./images/01 Under the Moon of Love.webp'
								alt='music-cover'
								className='cover'
							/>
						</div>

						<div className='record-player-arm'>
							<div className='arm-wrapper'>
								<img
									src='./images/record-player-arm-1.webp'
									alt='turntable arm'
									id='player-arm'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</RecordPlayerContainer>
	);
};
const RecordPlayerContainer = styled.div`
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
		transform: scale(0.5);
		.media-container.media-turntable.media-active {
			display: grid;
			place-content: center;
			#turntable {
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
						border-radius: 50%;
						position: absolute;
					}
					.cover {
						height: 60px;
						width: 60px;
						border-radius: 50%;
						animation: rotate 10s linear infinite;
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

export default RecordPlayer;
