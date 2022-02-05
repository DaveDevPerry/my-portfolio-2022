import React from 'react';
import { Container } from './MetronomeStyles';
const Metronome = () => {
	return (
		<Container>
			<div class='loader-container'>
				<div class='loader'>
					<div class='top'>
						<div class='point'></div>
						<div class='line'></div>
					</div>

					<div class='middle'>
						<div class='gubbins'>
							<div class='strip'>
								<ul>
									<li class='small'>
										<u>80</u>
									</li>
									<li class='small'>
										<u>84</u>
									</li>
									<li class='small'>
										<u>88</u>
									</li>
									<li class='small'>
										<u>92</u>
									</li>
									<li class='small'>
										<u>96</u>
									</li>
									<li class='small'>
										<u>100</u>
									</li>
									<li class='small'>
										<u>104</u>
									</li>
									<li class='small'>
										<u>108</u>
									</li>
									<li class='small'>
										<u>112</u>
									</li>
									<li class='small'>
										<u>116</u>
									</li>
									<li class='small'>
										<u>120</u>
									</li>
									<li class='medium'>
										<u>126</u>
									</li>
									<li class='medium'>
										<u>132</u>
									</li>
									<li class='medium'>
										<u>138</u>
									</li>
									<li class='medium'>
										<u>144</u>
									</li>
									<li class='medium'>
										<u>152</u>
									</li>
									<li class='medium'>
										<u>160</u>
									</li>
									<li class='medium'>
										<u>168</u>
									</li>
									<li class='large'>
										<u>176</u>
									</li>
									<li class='large'>
										<u>184</u>
									</li>
									<li class='large'>
										<u>192</u>
									</li>
									<li class='large'>
										<u>200</u>
									</li>
									<li class='large'>
										<u>208</u>
									</li>
								</ul>
							</div>
							<div class='wand-wrapper'>
								<div class='wand'>
									<ul class='marks'>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='little'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
										<li class='medium'>
											<u></u>
										</li>
									</ul>
								</div>
								<div class='block'></div>
							</div>
						</div>

						<div class='base'>
							<div class='winder'></div>
						</div>
					</div>

					<div class='bottom'>
						<div class='foot'></div>
						<div class='foot'></div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Metronome;
