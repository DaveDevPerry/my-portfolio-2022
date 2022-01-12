import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	padding: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	/* width: 400px; */
	width: 450px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
	padding-bottom: 10px;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	/* color: #9cc9e3; */
	/* color: #c40303; */
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const SubtitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
	padding-bottom: 10px;
	font-style: italic;
	/* border: 1px solid white; */
	color: rgba(255, 255, 255, 0.5);
	margin-bottom: 1rem;
`;

export const Hr = styled.hr`
	width: 100px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #c40303;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 30px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: center;
	margin: 1rem 0;
	column-gap: 2rem;
`;

export const ExternalLinks = styled.a`
	color: #ffffff;
	font-size: 1.8rem;
	padding: 0 0.5rem;
	/* background: #6b3030; */
	/* border: 1px solid #c40303; */
	/* border-radius: 15px; */
	transition: 0.5s;
	text-transform: uppercase;
	/* flex: 1; */
	&:hover {
		color: #c40303;
	}
`;
// export const ExternalLinks = styled.a`
// 	color: #ffffff;
// 	font-size: 1.6rem;
// 	padding: 1rem 1.5rem;
// 	/* background: #6b3030; */
// 	border: 1px solid #c40303;
// 	border-radius: 15px;
// 	transition: 0.5s;
// 	/* flex: 1; */
// 	&:hover {
// 		background: #801414;
// 	}
// `;

export const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
`;
export const Tag = styled.li`
	color: #c40303;
	font-size: 1.5rem;
	font-weight: bold;
`;

export const LinkWrapper = styled.div`
	/* border: 1px solid white; */
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	width: 135px;
`;
