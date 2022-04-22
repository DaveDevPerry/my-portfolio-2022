import React from 'react';
import styled from 'styled-components';

const AboutBgText = () => {
	return (
		<StyledBackgroundTextSVG>
			<svg
				id='name-anim'
				width='311'
				height='63'
				viewBox='0 0 311 63'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='name-anim'
			>
				<path
					d='M1.32353 1.25H15.6485C20.5485 1.25 24.3985 1.925 27.1985 3.275C29.9985 4.575 31.9735 6.6 33.1235 9.35C34.3235 12.05 34.9235 15.65 34.9235 20.15V42.275C34.9235 46.875 34.3235 50.6 33.1235 53.45C31.9735 56.3 30.0235 58.45 27.2735 59.9C24.5235 61.3 20.7985 62 16.0985 62H1.32353V1.25ZM15.7985 54.275C18.2485 54.275 20.0235 53.85 21.1235 53C22.2235 52.15 22.9235 50.975 23.2235 49.475C23.5235 47.925 23.6735 45.65 23.6735 42.65V19.4C23.6735 16.7 23.4985 14.65 23.1485 13.25C22.7985 11.85 22.0485 10.825 20.8985 10.175C19.7985 9.475 18.0485 9.125 15.6485 9.125H12.3485V54.275H15.7985Z'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M48.3321 1.25H60.1821L72.3321 62H62.0571L59.6571 47.975H49.0821L46.6071 62H36.1821L48.3321 1.25ZM58.4571 40.925L54.3321 15.425L50.2071 40.925H58.4571Z'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M69.9462 1.25H79.6962L87.7212 44.225L95.2962 1.25H105.271L93.0462 62H82.1712L69.9462 1.25Z'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M108.093 1.25H133.593V9.05H119.118V26.525H130.518V34.25H119.118V54.425H133.743V62H108.093V1.25Z'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M136.798 1.25H154.648C164.998 1.25 170.173 7 170.173 18.5C170.173 29.5 164.748 35 153.898 35H147.823V62H136.798V1.25ZM152.098 27.2C155.098 27.2 157.123 26.575 158.173 25.325C159.223 24.025 159.748 21.725 159.748 18.425C159.748 16.025 159.573 14.2 159.223 12.95C158.873 11.65 158.148 10.675 157.048 10.025C155.998 9.375 154.348 9.05 152.098 9.05H147.823V27.2H152.098Z'
					stroke='white'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M172.974 1.25H198.474V9.05H183.999V26.525H195.399V34.25H183.999V54.425H198.624V62H172.974V1.25Z'
					stroke='white'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M201.679 1.25H216.304C222.704 1.25 227.479 2.475 230.629 4.925C233.779 7.325 235.354 11.475 235.354 17.375C235.354 21.225 234.779 24.375 233.629 26.825C232.529 29.225 230.604 30.975 227.854 32.075L236.329 62H225.229L217.954 34.175H212.704V62H201.679V1.25ZM216.229 27.275C219.379 27.275 221.604 26.55 222.904 25.1C224.254 23.65 224.929 21.275 224.929 17.975C224.929 14.775 224.329 12.45 223.129 11C221.979 9.55 219.879 8.825 216.829 8.825H212.704V27.275H216.229Z'
					stroke='white'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M240.345 1.25H254.97C261.37 1.25 266.145 2.475 269.295 4.925C272.445 7.325 274.02 11.475 274.02 17.375C274.02 21.225 273.445 24.375 272.295 26.825C271.195 29.225 269.27 30.975 266.52 32.075L274.995 62H263.895L256.62 34.175H251.37V62H240.345V1.25ZM254.895 27.275C258.045 27.275 260.27 26.55 261.57 25.1C262.92 23.65 263.595 21.275 263.595 17.975C263.595 14.775 262.995 12.45 261.795 11C260.645 9.55 258.545 8.825 255.495 8.825H251.37V27.275H254.895Z'
					stroke='white'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
				<path
					d='M286.754 38.825L274.454 1.25H284.804L292.304 25.325L299.354 1.25H309.479L297.329 38.825V62H286.754V38.825Z'
					stroke='white'
					strokeWidth='2'
					mask='url(#path-1-outside-1)'
				/>
			</svg>
		</StyledBackgroundTextSVG>
	);
};
const StyledBackgroundTextSVG = styled.div`
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

export default AboutBgText;
