import React from 'react';
import { Container } from './MetronomeStyles';
const Metronome = () => {
	return (
		<Container>
			<div className='loader-container'>
				<div className='loader'>
					<div className='top'>
						<div className='point'></div>
						<div className='line'></div>
					</div>

					<div className='middle'>
						<div className='gubbins'>
							<div className='strip'>
								<ul>
									<li className='small'>
										<u>80</u>
									</li>
									<li className='small'>
										<u>84</u>
									</li>
									<li className='small'>
										<u>88</u>
									</li>
									<li className='small'>
										<u>92</u>
									</li>
									<li className='small'>
										<u>96</u>
									</li>
									<li className='small'>
										<u>100</u>
									</li>
									<li className='small'>
										<u>104</u>
									</li>
									<li className='small'>
										<u>108</u>
									</li>
									<li className='small'>
										<u>112</u>
									</li>
									<li className='small'>
										<u>116</u>
									</li>
									<li className='small'>
										<u>120</u>
									</li>
									<li className='medium'>
										<u>126</u>
									</li>
									<li className='medium'>
										<u>132</u>
									</li>
									<li className='medium'>
										<u>138</u>
									</li>
									<li className='medium'>
										<u>144</u>
									</li>
									<li className='medium'>
										<u>152</u>
									</li>
									<li className='medium'>
										<u>160</u>
									</li>
									<li className='medium'>
										<u>168</u>
									</li>
									<li className='large'>
										<u>176</u>
									</li>
									<li className='large'>
										<u>184</u>
									</li>
									<li className='large'>
										<u>192</u>
									</li>
									<li className='large'>
										<u>200</u>
									</li>
									<li className='large'>
										<u>208</u>
									</li>
								</ul>
							</div>
							<div className='wand-wrapper'>
								<div className='wand'>
									<ul className='marks'>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='little'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
										<li className='medium'>
											<u></u>
										</li>
									</ul>
								</div>
								<div className='block'></div>
							</div>
						</div>

						<div className='base'>
							<div className='winder'></div>
						</div>
					</div>

					<div className='bottom'>
						<div className='foot'></div>
						<div className='foot'></div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Metronome;
