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
		transform: scale(0.3);
	
	.container {
		background-color: rgb(31,30,30);
		padding: 30px;
		border-radius: 15px;
	}
	.board {
		width: 302px;
		height: 302px;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		/* border: 2px solid red; */
	}
	.square {
		border: 2px solid #5c5a5a;
		width: 100px;
		height: 100px;
		display: grid;
		place-content: center;
	}
	.circle {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		opacity: 0;
	}
	.pink {
		background-color: #ce1ac8;
	}
	.win {
	}
	.purple {
		background-color: #6a0eb2;
	}
	.square:nth-child(1n) {
		border-left: 0;
	}
	.square:nth-child(1) {
		border-top: 0;
		position: relative;
	}
	.square:nth-child(1)::after {
		position: absolute;
		content: '';
		width: 300px;
		height: 8px;
		top: 50%;
		left: 0;
		transform: translateX(-100%);
		background-color: green;
		z-index: 2;
		animation: drawLine 0.2s linear forwards;
		animation-delay: 7s;
	}
	.square:nth-child(2) {
		border-top: 0;
	}
	.square:nth-child(3) {
		border-top: 0;
	}
	.square:nth-child(3n) {
		border-right: 0;
	}
	.square:nth-child(7) {
		border-bottom: 0;
	}
	.square:nth-child(8) {
		border-bottom: 0;
	}
	.square:nth-child(9) {
		border-bottom: 0;
	}

	.square:nth-child(2) .circle {
		animation: placeCounter 1s ease-in forwards;
	}
	.square:nth-child(5) .circle {
		animation: placeCounter 1s ease-in forwards;
		animation-delay: 1s;
	}
	.square:nth-child(7) .circle {
		animation: placeCounter 1s ease-in forwards;
		animation-delay: 2s;
	}
	.square:nth-child(9) .circle {
		animation: placeCounter 1s ease-in forwards;
		animation-delay: 3s;
	}
	.square:nth-child(1) .circle {
		animation: placeCounter 1s ease-in forwards;
		animation-delay: 4s;
	}
	.square:nth-child(4) .circle {
		animation: placeCounter 1s ease-in forwards;
		animation-delay: 5s;
	}
	.square:nth-child(3) .circle {
		animation: placeCounter 1s ease-in forwards;
		animation-delay: 6s;
	}

	@keyframes placeCounter {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes win {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.1);
		}
	}

	@keyframes drawLine {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0%);
		}
	}
`;
