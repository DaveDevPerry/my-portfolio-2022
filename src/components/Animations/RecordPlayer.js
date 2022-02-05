import React from 'react';
import { Container } from './RecordPlayerStyles';
const RecordPlayer = () => {
	return (
		<Container>
			<div class='content-wrapper'>
				<div class='media-container media-turntable display-record media-active'>
					<div id='turntable'>
						<div class='circle-wrapper lp-table play'>
							<img
								src='./images/vinyl.png'
								alt='vinyl record'
								class='black-vinyl'
							/>
							<img
								src='./images/01 Under the Moon of Love.jpg'
								alt='music-cover'
								class='cover'
							/>
						</div>

						<div class='record-player-arm'>
							<div class='arm-wrapper'>
								<img
									src='./images/record-player-arm-1.png'
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
