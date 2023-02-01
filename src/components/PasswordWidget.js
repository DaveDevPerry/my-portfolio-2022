import React, { useState } from 'react';
import styled from 'styled-components';
// import { RxClipboardCopy } from 'react-icons/rx';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

// import * as SiIcons from 'react-icons/si';
// import * as FaIcons from 'react-icons/fa';
// import * as IoIcons from 'react-icons/io5';
// import { SiNetlify } from 'react-icons/si';
// import { VscGithub } from 'react-icons/vsc';
// import expressIcon from '../../public/svg/express.svg';

import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
// import { projects } from '../constants/constants';
// import ImageModal from './ImageModal';

// import '../../../globals.css';

const PasswordWidget = ({ modalImgUrl, setModalImgUrl }) => {
	// const DynamicSiIcon = ({ name, iconColor }) => {
	// 	// console.log(name, 'icon name');
	// 	let IconComponent;
	// 	if (name[0] === 'S') {
	// 		IconComponent = SiIcons[name];
	// 	} else if (name[0] === 'I') {
	// 		IconComponent = IoIcons[name];
	// 	} else if (name[0] === 'F') {
	// 		IconComponent = FaIcons[name];
	// 	} else if (name[0] === 'E') {
	// 		return (
	// 			<svg
	// 				role='img'
	// 				viewBox='0 0 24 24'
	// 				height='40px'
	// 				width='40px'
	// 				fill='#000000'
	// 				xmlns='http://www.w3.org/2000/svg'
	// 			>
	// 				<title>Express</title>
	// 				<path d='M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z' />
	// 			</svg>
	// 		);
	// 	} else if (name[0] === 'C') {
	// 		return (
	// 			<svg
	// 				role='img'
	// 				viewBox='0 0 24 24'
	// 				height='40px'
	// 				width='40px'
	// 				fill='#FF6384'
	// 				xmlns='http://www.w3.org/2000/svg'
	// 			>
	// 				<title>Chart.js</title>
	// 				<path d='M12 0L1.605 6v12L12 24l10.395-6V6zm0 1.41l9.172 5.295v10.59L12 22.59l-9.172-5.295V6.705zM5.902 8.334c-1.306 0-1.983.956-2.574 2.41v6.262L12 22.014l8.672-5.008v-5.971c-.447-.264-.894-.412-1.336-.412-4.275 0-3.97 4.885-6.717 5.8-2.748.917-3.511-8.089-6.717-8.089zm12.364.457c-2.9 0-2.137 4.732-5.342 4.732-1.63 0-2.52-1.317-3.477-1.981.148.326.3.655.442.98.467 1.068.922 2.09 1.379 2.734.228.322.455.541.644.644a.595.595 0 0 0 .549.05c.558-.187.968-.571 1.36-1.112.39-.541.74-1.228 1.154-1.916.413-.688.894-1.385 1.59-1.918.695-.534 1.607-.881 2.77-.881.465 0 .908.136 1.337.352v-.121c-.633-.849-1.348-1.563-2.406-1.563zm-6.68.152c-.868 0-1.491.82-2.076 2.06.094.055.192.106.277.167 1.06.761 1.798 1.853 3.137 1.853.678 0 1.067-.218 1.418-.585-.722-1.546-1.432-3.492-2.756-3.495Z' />
	// 			</svg>
	// 		);
	// 	}
	// 	if (!IconComponent) {
	// 		return <VscGithub size='0' />;
	// 	}
	// 	return <IconComponent size='35' color={iconColor} />;
	// };

	// const showImgModal = (e) => {
	// 	// console.log(e.target.src, 'source');
	// 	// setModalImgUrl(e.target.src);
	// };
	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText('S4v4nn4h123!');
			console.log('Content copied to clipboard');
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	return (
		<StyledPasswordWidget id='password-widget' onClick={handleClick}>
			<div className='password-content-wrapper'>
				<p>
					{/* <span> */}
					login password
					{/* </span> */}
				</p>
				{/* <div className='password-footer'> */}
				<p>
					<span>S4v4nn4h123!</span>
				</p>
				{/* </div> */}
			</div>
			<div className='copy-icon-wrapper'>
				{/* <RxClipboardCopy className='copy-icon' /> */}
				<HiOutlineClipboardCopy
					className='copy-icon'
					//  onClick={handleClick}
				/>
			</div>
			{/* <p>
				<span>login password</span>
			</p>
			<div className='password-footer'>
				<p>
					<span>S4v4nn4h123!</span>
				</p>
				<div className='copy-icon-wrapper'>
					<HiOutlineClipboardCopy className='copy-icon' onClick={handleClick} />
				</div>
	
			</div> */}
		</StyledPasswordWidget>
	);
};

const StyledPasswordWidget = styled.div`
	/* background-color: ${(props) => props.theme.colors.red};
	padding: 0.5rem 1.5rem;
	display: flex;
	align-items: center;
	border-radius: 0.5rem;
	gap: 1.5rem;
	cursor: pointer; */
	background-color: rgb(27, 27, 27);
	border: 2px solid ${(props) => props.theme.colors.red};
	padding: 0.5rem 1.5rem;
	display: flex;
	align-items: center;
	border-radius: 0.5rem;
	gap: 1.5rem;
	cursor: pointer;
	/* .pulse { */
	box-shadow: 0px 0px 1px 1px #0000001a;
	animation: pulse-animation 2s infinite;
	/* } */
	.password-content-wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
		p {
			color: ${(props) => props.theme.colors.white};
			text-transform: capitalize;
			font-size: 1.8rem;
			font-weight: bolder;
			/* span {
			} */
			span {
				font-weight: lighter;
			}
		}
		/* .password-footer { */
		/* display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem; */
		/* p {
			color: ${(props) => props.theme.colors.white};
			font-size: 1.8rem;
			span {
				font-weight: unset;
			} */
		/* } */

		/* .copy-text-wrapper {
			border: 1px solid white;
			p {
				font-size: 1.2rem;
			}
		} */
		/* } */
	}
	.copy-icon-wrapper {
		display: grid;
		place-content: center;
		.copy-icon {
			font-size: 3rem;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-right: 0.5rem;
		padding: 0.5rem 1rem;
		/* background-color: ${(props) => props.theme.colors.red}; */
		/* padding: 0.5rem 1.5rem; */
		/* display: flex; */
		/* align-items: center; */
		/* flex-direction: column; */
		/* border-radius: 0.5rem; */
		gap: 0.5rem;
		cursor: pointer;
		/* box-shadow: 0px 0px 1px 1px #0000001a; */
		box-shadow: 0px 0px 1px 1px #0000001a;
		animation: unset;
		animation: pulse-animation-mobile 2s infinite;
		.password-content-wrapper {
			/* display: flex;
		align-items: center;
		flex-direction: column; */
			p {
				/* color: ${(props) => props.theme.colors.white}; */
				/* text-transform: capitalize; */
				font-size: 1.5rem;
				/* font-weight: bolder; */
				/* span {
			} */
				/* span {
				font-weight: lighter;
			} */
			}
			/* .password-footer { */
			/* display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem; */
			/* p {
			color: ${(props) => props.theme.colors.white};
			font-size: 1.8rem;
			span {
				font-weight: unset;
			} */
			/* } */

			/* .copy-text-wrapper {
			border: 1px solid white;
			p {
				font-size: 1.2rem;
			}
		} */
			/* } */
		}
		.copy-icon-wrapper {
			display: grid;
			place-content: center;
			.copy-icon {
				font-size: 2.4rem;
			}
		}
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: 0 0 0 0px rgba(208, 5, 5, 0.5);
		}
		100% {
			box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
		}
	}
	@keyframes pulse-animation-mobile {
		0% {
			box-shadow: 0 0 0 0px rgba(208, 5, 5, 1);
		}
		100% {
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}
	}
	/* @keyframes pulse-animation {
		0% {
			box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
		}
		100% {
			box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
		}
	} */
`;

export default PasswordWidget;

{
	/* <Section id='password-widget'>
			<SectionTitle>Password Widget</SectionTitle>
			<SectionText>
				Password text.
			</SectionText>
		</Section> */
}
{
	/* <StyledPasswordWidget id='password-widget'>
			<p>
				Password: <span>S4v4nn4h123!</span>
			</p>
			<div className='copy-icon-wrapper'>
				<HiOutlineClipboardCopy className='copy-icon' onClick={handleClick} />
			</div>
		</StyledPasswordWidget> */
}
// 		const StyledPasswordWidget = styled.div`
// 	background-color: ${(props) => props.theme.colors.red};
// 	padding: 1rem 2rem;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	gap: 2rem;
// 	border-radius: 0.5rem;
// 	p {
// 		color: ${(props) => props.theme.colors.white};
// 		font-size: 2rem;
// 		span {
// 			font-weight: bolder;
// 		}
// 	}
// 	.copy-icon-wrapper {
// 		display: grid;
// 		place-content: center;
// 		cursor: pointer;
// 		.copy-icon {
// 			font-size: 2.5rem;
// 		}
// 	}
// `;

// const StyledPasswordWidget = styled.div`
// 	background-color: ${(props) => props.theme.colors.red};
// 	padding: 0.5rem 2rem;
// 	display: flex;
// 	align-items: center;
// 	flex-direction: column;
// 	border-radius: 0.5rem;
// 	p {
// 		color: ${(props) => props.theme.colors.white};
// 		text-transform: capitalize;
// 		font-size: 1.8rem;
// 		span {
// 			font-weight: bolder;
// 		}
// 	}
// 	.password-footer {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		gap: 1rem;
// 		p {
// 			color: ${(props) => props.theme.colors.white};
// 			font-size: 1.8rem;
// 			span {
// 				font-weight: unset;
// 			}
// 		}
// 		.copy-icon-wrapper {
// 			display: grid;
// 			place-content: center;
// 			cursor: pointer;
// 			.copy-icon {
// 				font-size: 2.5rem;
// 			}
// 		}
// 		.copy-text-wrapper {
// 			border: 1px solid white;
// 			p {
// 				font-size: 1.2rem;
// 			}
// 		}
// 	}
// `;
