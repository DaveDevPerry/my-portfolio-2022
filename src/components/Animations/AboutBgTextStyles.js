import styled from 'styled-components';

export const StyledSVG = styled.div`
	border: 1px solid green;
	height: 100%;
	width: 100%;
	position: relative;
	#name-anim {
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
	}
`;
