import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const LogoAnimation = () => {
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.to('#dp-logo-svg-path', 2, { strokeDashoffset: 0, delay: 5.2 });
	}, []);
	return (
		<StyledLogoAnimation>
			<svg id='dp-logo-svg' viewBox='0 0 520 520' fill='none'>
				<path
					id='dp-logo-svg-path'
					d='M209.376 104V399.328C156.208 416 51.7771 423.145 59.3951 318.351C61.7758 271.511 87.0107 186.882 168.905 223.084C250.799 259.285 317.298 288.977 340.311 299.298C383.162 313.588 467.437 315.493 461.724 208.794C464.104 165.13 435.536 86.8519 302.221 123.053V416'
					stroke='#780202'
					strokeWidth='80'
				/>
			</svg>
		</StyledLogoAnimation>
	);
};

const StyledLogoAnimation = styled.div`
	/* border: 1px solid black; */
	#dp-logo-svg-path {
		stroke-dasharray: 1569;
		stroke-dashoffset: 1569;
		/* animation: line-anim 2s ease-in-out forwards;
		animation-delay: 5.2s; */
	}
	/* @keyframes line-anim {
		to {
			stroke-dashoffset: 0;
		}
	} */
	/* #dp-logo-svg path:nth-child(1) {
		stroke-dasharray: 1569;
		stroke-dashoffset: 1569;
		animation: line-anim 2s ease-in-out forwards;
		animation-delay: 5.2s;
	}
	@keyframes line-anim {
		to {
			stroke-dashoffset: 0;
		}
	} */
`;

export default LogoAnimation;
