import styled from 'styled-components';

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 3rem;
	row-gap: 3rem;
	margin-bottom: 1rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-bottom: 0;
	}
`;
export const AnimationCard = styled.div`
	border-radius: 10px;
	padding: 5px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	/* width: 400px; */
	width: 180px;
	transition: 0.5s;
	align-self: start;
	position: relative;
	&:hover {
		box-shadow: 3px 3px 20px rgba(219, 8, 8, 0.5);
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
