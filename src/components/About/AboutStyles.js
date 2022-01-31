import styled from 'styled-components';

export const LeftSection = styled.div`
	width: 100%;
	/* background-color: #780202; */
	/* border: 1px solid red; */
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;

export const InfoText = styled.p`
	width: 100%;
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
