import React from 'react';
import styled from 'styled-components';
const TerrorTelly = () => {
	return (
		<TellyContainer>
			<div className='loader-container'>
				<div className='tv-loader'>
					<div className='tv-wrapper'>
						<div id='tv-signal'></div>
						<img
							src='./images/tv-telly_screen2.webp'
							alt='telly'
							id='terror-tv'
						/>
					</div>
				</div>
			</div>
		</TellyContainer>
	);
};
const TellyContainer = styled.div`
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
		z-index: 50;
		transform: scale(0.5);
		.tv-loader {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			z-index: 500;
		}
	}
	.tv-wrapper {
		position: relative;
		width: 200px;
		height: 239px;
		#tv-signal {
			position: absolute;
			top: 85px;
			left: 28px;
			width: 110px;
			height: 50px;
			background: url('../images/tv-signal.webp');
			background-repeat: repeat;
			background-position: 0 0;
			background-size: auto 100%;
			animation: tvSignal 500s linear infinite;
		}
		img#terror-tv {
			position: absolute;
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

export default TerrorTelly;
