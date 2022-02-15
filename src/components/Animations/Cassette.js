import React from 'react';
import { Container } from './CassetteStyles';
const Cassette = () => {
	return (
		<Container>
			<div className='content-wrapper'>
				<div className='media-container media-cassette display-cassette media-active'>
					<div id='cassette'>
						<div className='tc-top'>
							<div className='tc-header'>C90</div>

							<div className='tc-label'>
								<div className='tape-title'>total vegas</div>
							</div>
						</div>

						<div className='tc-reels'>
							<div className='reel' id='left-reel'>
								<div className='tape'>
									<div className='spindle' id='left-spindle'></div>
								</div>
							</div>
							<div className='reel' id='right-reel'>
								<div className='tape'>
									<div className='spindle' id='right-spindle'></div>
								</div>
							</div>
						</div>

						<div className='tc-bottom'>
							<div className='tc-footer'>A</div>
							<div className='tc-base'></div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Cassette;
