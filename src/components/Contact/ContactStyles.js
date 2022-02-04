import styled from 'styled-components';

// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
// padding: 3rem;
// place-items: center;
// column-gap: 2rem;
// row-gap: 3rem;
// @media ${(props) => props.theme.breakpoints.sm} {
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
//   padding-bottom: 0;
// }

// @media ${(props) => props.theme.breakpoints.sm} {
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
//   padding-bottom: 0;
// }

// export const ContactContainer = styled.div`
// 	border: 1px solid blue;
// 	display: flex;
// 	flex-wrap: wrap;
// 	.contact-section {
// 		border: 2px solid red;
// 		min-width: 450px;
// 		flex: 1 1 0;
// 	}
// `;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	z-index: -5;
	position: absolute;
`;

export const ImgFilter = styled.div`
	/* border: 2px solid green; */
	width: 100%;
	height: 100%;
	background-color: rgba(36, 33, 33, 0.9);
`;

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 4rem;
/* border: 1px solid red; */
border-radius: 10px;
box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.4);
margin-bottom: 4rem;
/* max-width: 800px; */
/* minmax: (500px, 800px); */
margin: 3rem auto;
width: clamp(400px, 100%, 800px);
position: relative;
transition: 0.5s;
&:hover {
		box-shadow: 3px 3px 20px rgba(219, 8, 8, 0.5);
	}

 		.form-wrapper {
 			// background-color: blue;
 			width: 100%;
 			display: flex;
 			justify-content: flex-start;
 			align-items: flex-start;
 			flex-direction: column;
			 flex: 1;
 			form#contact-form {
 				width: 100%;
 				.form-input {
 					// width: 32rem;
 					width: 100%;
 					/* width: calc(100% - 4rem); */
 					// background-color: blueviolet;
 					position: relative;
 					height: 6.5rem;
 					overflow: hidden;
 					margin: 1rem 0rem;
 					font-family: 'Oswald';
 					// margin-right: 2rem;
 					.content-name {
 						position: absolute;
 						bottom: 5px;
 						left: 0px;
 						transition: all 1s ease;
 					}
 					input {
 						width: 100%;
 						height: 100%;
 						color: white;
 						padding-top: 2rem;
 						border: none;
 						font-size: 1.8rem;
 						// background: var(--black);
 						// background-color: #f9f9f9;
 						background-color: transparent;
 						outline: none;
 						padding-left: 0.5rem;
 					}
 					label {
 						position: absolute;
 						font-size: 2rem;
 						color: var(--darkGrey);
 						bottom: 0px;
 						left: 0px;
 						height: 100%;
 						width: 100%;
 						pointer-events: none;
 						border-bottom: 1px solid grey;
 						&::after {
 							content: '';
 							position: absolute;
 							left: 0px;
 							bottom: -1px;
 							height: 100%;
 							width: 100%;
 							border-bottom: 3px solid white;
 							transform: translateX(-100%);
 							transition: transform 1s ease;
 							z-index: 1000;
 						}
 					}
 				}
 				.form-input1 {
 					margin-top: 4.5rem;
 					// background-color: green;
					/* width: calc(100% - 4rem); */
					width: 100%;
					#message-label {
						margin-bottom: 1rem;

						#contact-message {
							font-family: 'Oswald';
							// color: var(--primaryColor);
 							color: white;
 							font-size: 2rem;
 							text-transform: capitalize;
 							// margin-bottom: 1rem;
 						}
 					}
 					textarea {
 						margin-top: 0.5rem;
 						padding: 0.5rem;
 						font-family: 'Oswald';
 						font-size: 1.8rem;
 						color: white;
 						// background-color: rgb(15, 15, 15);
 						// background-color: white;
 						// background-color: #f9f9f9;
 						background-color: transparent;
 						// border: 1px solid rgb(24, 24, 24);
 						// border: 1px solid var(--white);
 						border: 1px solid grey;
						 border-radius: 0 10px 10px 10px;
 						width: 100%;
 						height: 12rem;
 						resize: none;
 						&:focus {
 							border: 1px solid white;
 							outline: none;
 						}
 					}
 				}
 				.field {
 					input[type='checkbox'] {
 						border: 1px solid white;
 						cursor: pointer;
 					}
 				}
 				// }
 			}
 		}
 	}

 	.form-input input:focus + .label-name .content-name,
 	.form-input input:valid + .label-name .content-name {
 		transform: translateY(-150%);
 		color: grey;
 		font-size: 1.8rem;
 		font-style: italic;
 		/* font-size: 20px; */
 	}

 	.form-input input:focus + .label-name::after,
 	.form-input input:valid + .label-name::after {
 		transform: translateX(0%);
 	}

 	.end-form-wrapper {
 		/* @include flex(space-between, flex-start, row); */
		 display: flex;
		 justify-content: space-between;
		 align-items: flex-start;
		 flex-direction: row;
 		// background-color: yellow;
 		margin-top: 4rem;
 		// flex-wrap: wrap;
		// border: 1px solid grey;
		#submit-form {
			font-family: 'Oswald', sans-serif; 			
			font-size: 2.6rem;
 			background-color: white; 
			 			// color: var(--white);
 			color: grey;
 			font-weight: 800;
 			text-transform: uppercase;
 			// outline: none;
 			/* border: 1px solid rgba(255, 255, 255, 0.5); */
 			border: 1px solid #780202;
			 border-radius: 10px;

 			padding: 0 2rem;
 			height: 7.5rem;
 			width: 100%;
 			/* margin-left: 2rem; */
			 margin-bottom: 1rem;
 			cursor: pointer;
 			&:focus {
 				border: 1px solid white;
 				outline: none;
 			}
 		}
 	}
`;

// export const ContactContainer = styled.div`
// 	display: grid;
// 	grid-template-areas: 'content form';
// 	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

// 	/* grid-auto-columns: 43rem 55rem; */
// 	column-gap: 2rem;
// 	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
// 	border-radius: 10px;
// 	margin-bottom: 2rem;
// 	.contact-content-container {
// 		grid-area: content;
// 		display: grid;
// 		grid-template-areas:
// 			'header'
// 			'content';
// 		grid-template-rows: 7.5rem 1fr;
// 		row-gap: 2rem;
// 		/* &::before {
// 			position: absolute;
// 			content: '';
// 			bottom: 0;
// 			left: 0;
// 			height: 6px;
// 			width: 100px;
// 			background-color: white;
// 		}
// 		&::after {
// 			position: absolute;
// 			content: '';
// 			bottom: 0;
// 			left: 0;
// 			height: 50px;
// 			width: 3px;
// 			background-color: white;
// 		} */
// 		.header {
// 			background-color: white;
// 			color: var(--background);
// 			border-radius: 10px 0 0 0;
// 			display: grid;
// 			place-content: center;
// 			h2.contact-me {
// 				font-size: 4rem;
// 				color: #242121;
// 			}
// 		}
// 		.content-wrapper {
// 			grid-area: content;
// 			padding: 2rem 0 4rem 4rem;
// 			/* @include flex(space-between, space-between, column); */
// 			display: flex;
// 			justify-content: space-between;
// 			align-items: space-between;
// 			flex-direction: column;
// 			p {
// 				font-size: 2rem;
// 				color: rgba(255, 255, 255, 0.5);

// 				&:last-of-type {
// 					align-self: flex-end;
// 					margin-right: 2rem;
// 				}
// 				.iconify {
// 					font-size: 2.2rem;
// 					color: white;
// 					margin-left: 1rem;
// 					vertical-align: bottom;
// 					// background-color: blue;
// 				}
// 			}
// 			.dl-wrapper {
// 				/* @include flex(flex-start, center, row); */
// 				display: flex;
// 				justify-content: flex-start;
// 				align-items: center;
// 				column-gap: 1rem;
// 				height: 40px;
// 				.iconify {
// 					font-size: 40px;
// 					color: rgba(255, 255, 255, 0.5);
// 				}
// 				.dl-text {
// 					font-size: 2.4rem;
// 					height: 100%;
// 					color: white;
// 				}
// 			}
// 		}
// 	}
// 	.form-container {
// 		grid-area: form;

// 		/* @include flex(center, center, row);  */
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		padding: 2rem 0 0 2rem;
// 		/* &::before {
// 			position: absolute;
// 			content: '';
// 			top: 0;
// 			right: 0;
// 			height: 6px;
// 			width: 100px;
// 			background-color: white;
// 		}
// 		&::after {
// 			position: absolute;
// 			content: '';
// 			top: 0;
// 			right: 0;
// 			height: 50px;
// 			width: 3px;
// 			background-color: white;
// 		} */

// 		.form-wrapper {
// 			// background-color: blue;
// 			width: 100%;
// 			display: flex;
// 			justify-content: flex-start;
// 			align-items: flex-start;
// 			flex-direction: column;
// 			form#contact-form {
// 				width: 100%;
// 				.form-input {
// 					// width: 32rem;
// 					width: 100%;
// 					width: calc(100% - 4rem);
// 					// background-color: blueviolet;
// 					position: relative;
// 					height: 6.5rem;
// 					overflow: hidden;
// 					margin: 1rem 0rem;
// 					font-family: 'Oswald';
// 					// margin-right: 2rem;
// 					.content-name {
// 						position: absolute;
// 						bottom: 5px;
// 						left: 0px;
// 						transition: all 1s ease;
// 					}
// 					input {
// 						width: 100%;
// 						height: 100%;
// 						color: white;
// 						padding-top: 2rem;
// 						border: none;
// 						font-size: 1.8rem;
// 						// background: var(--black);
// 						// background-color: #f9f9f9;
// 						background-color: transparent;
// 						outline: none;
// 						padding-left: 0.5rem;
// 					}
// 					label {
// 						position: absolute;
// 						font-size: 2rem;
// 						color: var(--darkGrey);
// 						bottom: 0px;
// 						left: 0px;
// 						height: 100%;
// 						width: 100%;
// 						pointer-events: none;
// 						border-bottom: 1px solid grey;
// 						&::after {
// 							content: '';
// 							position: absolute;
// 							left: 0px;
// 							bottom: -1px;
// 							height: 100%;
// 							width: 100%;
// 							border-bottom: 3px solid white;
// 							transform: translateX(-100%);
// 							transition: transform 1s ease;
// 							z-index: 1000;
// 						}
// 					}
// 				}
// 				.form-input1 {
// 					margin-top: 3rem;
// 					// background-color: green;
// 					width: calc(100% - 4rem);
// 					#message-label {
// 						margin-bottom: 1rem;

// 						#contact-message {
// 							font-family: 'Oswald';
// 							// color: var(--primaryColor);
// 							color: white;
// 							font-size: 2rem;
// 							text-transform: capitalize;
// 							// margin-bottom: 1rem;
// 						}
// 					}
// 					textarea {
// 						margin-top: 0.5rem;
// 						padding: 0.5rem;
// 						font-family: 'Oswald';
// 						font-size: 1.8rem;
// 						color: white;
// 						// background-color: rgb(15, 15, 15);
// 						// background-color: white;
// 						// background-color: #f9f9f9;
// 						background-color: transparent;
// 						// border: 1px solid rgb(24, 24, 24);
// 						// border: 1px solid var(--white);
// 						border: 1px solid grey;
// 						width: 100%;
// 						height: 12rem;
// 						resize: none;
// 						&:focus {
// 							border: 1px solid white;
// 							outline: none;
// 						}
// 					}
// 				}
// 				.field {
// 					input[type='checkbox'] {
// 						border: 1px solid white;
// 						cursor: pointer;
// 					}
// 				}
// 				// }
// 			}
// 		}
// 	}

// 	.form-input input:focus + .label-name .content-name,
// 	.form-input input:valid + .label-name .content-name {
// 		transform: translateY(-150%);
// 		color: grey;
// 		font-size: 1.8rem;
// 		font-style: italic;
// 		/* font-size: 20px; */
// 	}

// 	.form-input input:focus + .label-name::after,
// 	.form-input input:valid + .label-name::after {
// 		transform: translateX(0%);
// 	}

// 	.end-form-wrapper {
// 		@include flex(space-between, flex-start, row);
// 		// background-color: yellow;
// 		margin-top: 4rem;
// 		// flex-wrap: wrap;
// 		// border: 1px solid grey;
// 		#submit-form {
// 			font-family: 'Oswald', sans-serif;
// 			font-size: 2.6rem;
// 			background-color: white;
// 			// color: var(--white);
// 			color: grey;
// 			font-weight: 800;
// 			text-transform: uppercase;
// 			// outline: none;
// 			border: 1px solid rgba(255, 255, 255, 0.5);
// 			padding: 0 2rem;
// 			height: 7.5rem;
// 			width: 100%;
// 			margin-left: 2rem;
// 			cursor: pointer;
// 			&:focus {
// 				border: 1px solid white;
// 				outline: none;
// 			}
// 		}
// 	}
// `;

// export const ImageContainer = styled.div`
//   text-align: center;
//   background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
//   width: 100%;
//   padding: 60px;
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media ${props => props.theme.breakpoints.lg} {
//     background-image: none;
//     padding: 0;
//     margin-top: 40px;
//   }
//   @media ${props => props.theme.breakpoints.md} {
//     background-image: none;
//     padding: 0;
//     margin-top: 16px;
//   }
// `

// export const MainImage = styled.img`
//   width: 100%;
// `

// export const List = styled.ul`
//   list-style-type: none;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   margin: 3rem 0;

//   @media ${props => props.theme.breakpoints.lg}{
//     margin: 64px 0;
//   }

//   @media ${props => props.theme.breakpoints.md}{
//     margin: 64px 0;
//     gap: 24px
//   }

//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     flex-direction: column;
//     margin: 32px 0;
//   }
// `

// export const ListContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     margin-left: 18px;
//   }
// `

// export const ListTitle = styled.h4`
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 32px;
//   letter-spacing: 0.02em;
//   color: #FFFFFF;
//   margin-bottom: 8px;

// @media ${props => props.theme.breakpoints.md}{
//   font-size: 24px;
//   line-height: 28px;
// }

// @media ${props => props.theme.breakpoints.sm}{
//   font-size: 20px;
//   line-height: 28px;
//   letter-spacing: 0.02em;
//   margin-bottom: 4px;
// }
// `

// export const ListParagraph = styled.p`
//   font-size: 18px;
//   line-height: 30px;
//   color: rgba(255, 255, 255, 0.75);

//   @media ${props => props.theme.breakpoints.md}{
//     font-size: 16px;
//     line-height: 28px;
//   }

//   @media ${props => props.theme.breakpoints.sm}{
//     font-size: 14px;
//     line-height: 22px;
//   }
// `

// export const ListItem = styled.li`
//   max-width: 320px;
//   display: flex;
//   flex-direction: column;

// @media ${props => props.theme.breakpoints.md}{
//   max-width: 203px;
// }

// @media ${props => props.theme.breakpoints.sm}{
//   margin-bottom: 14px;
//   max-width: 320px;
//   flex-direction: row;
// }
// `

// export const ListIcon = styled.img`
//   display: block;
//   width: 48px;
//   height: 48px;
//   margin-bottom: 10px;

//   @media ${props => props.theme.breakpoints.md}{
//     width: 40px;
//     height: 40px;
//     margin-bottom: 8px;
//   }

//   @media ${props => props.theme.breakpoints.sm}{
//     width: 32px;
//     height: 32px;
//     margin-bottom: 0px;
//   }
// `
