import React from 'react';
import { Container } from './PinksPurplesStyles';
const PinksPurples = () => {
	// setTimeout(() => {
	// 	const circles = document.querySelectorAll('.circle');
	// 	circles.forEach((circle) => {
	// 		circle.classList.add('play');
	// 	});
	// 	const square = document.querySelector('.win-line');
	// 	square.classList.add('play');

	// 	// const circlesOff = document.querySelectorAll('.circle');
	// 	// circlesOff.forEach((circle) => {
	// 	// 	circle.classList.remove('play');
	// 	// });
	// 	// const squareOff = document.querySelector('.win-line');
	// 	// squareOff.classList.remove('play');
	// }, 6000);

	return (
		<Container>
			<div className='content-wrapper'>
				<div className='container'>
					<div className='board'>
						<div className='square win-line'>
							<div className='circle pink win' id='win'></div>
						</div>
						<div className='square'>
							<div className='circle pink win' id='win'></div>
						</div>
						<div className='square'>
							<div className='circle pink win' id='win'></div>
						</div>
						<div className='square'>
							<div className='circle purple'></div>
						</div>
						<div className='square'>
							<div className='circle purple'></div>
						</div>
						<div className='square'>
							<div className='circle'></div>
						</div>
						<div className='square'>
							<div className='circle pink'></div>
						</div>
						<div className='square'>
							<div className='circle'></div>
						</div>
						<div className='square'>
							<div className='circle purple'></div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PinksPurples;
