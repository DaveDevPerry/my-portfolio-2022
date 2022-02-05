import React from 'react';
import { Container } from './TellyStyles';
const TerrorTelly = () => {
	return (
		<Container>
			<div class='loader-container'>
				<div class='tv-loader'>
					<div class='tv-wrapper'>
						<div id='tv-signal'></div>
						<img
							src='./images/tv-telly_screen2.png'
							alt='telly'
							id='terror-tv'
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default TerrorTelly;
