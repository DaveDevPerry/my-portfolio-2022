import React from 'react';
import { Container } from './RecordPlayerStyles';
const RecordPlayer = () => {
	return (
		<Container>
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
		</Container>
	);
};

export default RecordPlayer;
