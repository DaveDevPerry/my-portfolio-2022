import React from 'react';
import { Container } from './PinksPurplesStyles';
const PinksPurples = () => {
	// const circles = document.querySelectorAll('.circle');
	// setInterval(() => {

	// 	circles.forEach(circle => {
	// 		circle.classList.add('play')
	// 	})

	// }, 10000)

	return (
		<Container>
			<div className='content-wrapper'>
				<div className='container'>
					<div className='board'>
						<div className='square'>
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
