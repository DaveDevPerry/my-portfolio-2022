import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	z-index: -5;
	position: absolute;
`;

export const ImgFilter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(36, 33, 33, 0.9);
`;

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 4rem;
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.4);
	margin-bottom: 4rem;
	margin: 3rem auto;
	width: clamp(400px, 100%, 800px);
	position: relative;
	transition: 0.5s;
	&:hover {
		box-shadow: 3px 3px 20px rgba(219, 8, 8, 0.5);
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 2rem 2rem;
		margin: 3rem 0;
	}
	.form-wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		flex: 1;
		form#contact-form {
			width: 100%;
			.form-input {
				width: 100%;
				position: relative;
				height: 6.5rem;
				overflow: hidden;
				margin: 1rem 0rem;
				font-family: 'Oswald';
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
				width: 100%;
				#message-label {
					margin-bottom: 1rem;
					#contact-message {
						font-family: 'Oswald';
						color: white;
						font-size: 2rem;
						text-transform: capitalize;
					}
				}
				textarea {
					margin-top: 0.5rem;
					padding: 0.5rem;
					font-family: 'Oswald';
					font-size: 1.8rem;
					color: white;
					background-color: transparent;
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
		}
	}

	.form-input input:focus + .label-name .content-name,
	.form-input input:valid + .label-name .content-name {
		transform: translateY(-150%);
		color: grey;
		font-size: 1.8rem;
		font-style: italic;
	}

	.form-input input:focus + .label-name::after,
	.form-input input:valid + .label-name::after {
		transform: translateX(0%);
	}

	.end-form-wrapper {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
		margin-top: 4rem;
		/* #submit-form {
			font-family: 'Oswald', sans-serif;
			font-size: 2.6rem;
			color: white;
			font-weight: 600;
			border: 1px solid #780202;
			border-radius: 10px;
			padding: 0 2rem;
			height: 7.5rem;
			width: 200px;
			margin-bottom: 1rem;
			cursor: pointer; */
		/* &:focus {
 				border: 1px solid white;
 				outline: none;
 			} */
		/* @media ${(props) => props.theme.breakpoints.sm} { 
				width: 100%;
				height: 32px;
				font-size: 14px;
			}
		} */
	}
`;

export const FormButton = styled.button`
	font-family: 'Oswald', sans-serif;
	font-size: 22px;
	color: white;
	font-weight: 600;
	border: 2px solid #780202;
	border-radius: 10px;
	padding: 0 2rem;
	height: 7.5rem;
	width: 200px;
	margin-bottom: 1rem;
	cursor: pointer;
	background-color: transparent !important;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		/* height: 32px; */
		font-size: 22px;
	}
`;

export const ContactText = styled.p`
	width: 100%;
	/* max-width: 800px; */
	padding: 0;
	/* color: #e4e6e7; */
	color: rgba(255, 255, 255, 0.5);
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	margin-bottom: 2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;
