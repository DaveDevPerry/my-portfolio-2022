import styled from 'styled-components';

export const LeftSection = styled.div`
	width: 100%;
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

export const SectionText = styled.p`
	max-width: 800px;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	margin-bottom: 3.6rem;
	color: rgba(255, 255, 255, 0.5);
	padding-left: 20px;
	position: relative;
	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		width: 10px;
		background-color: #780202;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 32px;
		margin-bottom: 24px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		margin-bottom: 16px;
	}
`;
