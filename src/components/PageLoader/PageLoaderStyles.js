import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
	/* position: fixed; */
	/* top: 0; */
	/* left: 0; */
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	/* background: red; */
	/* background: #242121; */
	z-index: 5000;
	overflow: hidden;
	h4#bg-text-name {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Gemunu Libre', sans-serif;
		// color: var(--primaryColor);
		-webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
		-webkit-text-fill-color: rgba(255, 255, 255, 0.02);
		font-size: 30rem;
		line-height: 20rem;
		opacity: 0;
		span {
			text-transform: uppercase;
			margin-left: 30rem;
		}
	}
	h4#bg-text-name-red {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Gemunu Libre', sans-serif;
		// color: var(--primaryColor);
		-webkit-text-stroke: 1px rgba(66, 65, 65, 0.329);
		-webkit-text-fill-color: #78020242;
		font-size: 30rem;
		line-height: 20rem;
		opacity: 0;
		span {
			text-transform: uppercase;
			margin-left: 30rem;
		}
	}
	.circle-outer {
		z-index: -2;
		width: 80vw;
		// height is in vw to make circle
		height: 80vw;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 10px solid rgba(196, 196, 196, 0.05);
		border-radius: 50%;
		// @include flex(center, center, row);
		opacity: 0;
		.circle-inner {
			height: 40%;
			width: 40%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			// width:  50%;
			border: 5px solid rgba(196, 196, 196, 0.1);
			border-radius: inherit;
			opacity: 0;
		}
	}

	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;
