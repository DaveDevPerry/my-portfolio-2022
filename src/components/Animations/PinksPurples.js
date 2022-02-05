import React from 'react';
import { Container } from './PinksPurplesStyles';
const PinksPurples = () => {
	return (
		<Container>
			<div class='content-wrapper'>
				<div class='container'>
					<div class='board'>
						<div class='square'>
							<div class='circle pink win' id='win'></div>
						</div>
						<div class='square'>
							<div class='circle pink win' id='win'></div>
						</div>
						<div class='square'>
							<div class='circle pink win' id='win'></div>
						</div>
						<div class='square'>
							<div class='circle purple'></div>
						</div>
						<div class='square'>
							<div class='circle purple'></div>
						</div>
						<div class='square'>
							<div class='circle'></div>
						</div>
						<div class='square'>
							<div class='circle pink'></div>
						</div>
						<div class='square'>
							<div class='circle'></div>
						</div>
						<div class='square'>
							<div class='circle purple'></div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PinksPurples;
