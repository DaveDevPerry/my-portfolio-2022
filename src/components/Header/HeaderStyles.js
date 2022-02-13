import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: #242121;
	z-index: 2;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	/* grid-template-rows: 1fr; */
	grid-template-rows: 50px;
	grid-column-gap: 2rem;
	padding: 1rem;
	/* padding-top: 2rem; */
	/* border-bottom: 1px solid red; */

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 60px);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		grid-template-rows: auto;
		padding: 0rem 1rem;
	}
`;

export const Brand = styled.div`
	font-family: 'Oswald', serif;
	font-size: 2.8rem;
	font-weight: lighter;
	span {
		font-weight: bolder;
	}
	span:last-child {
		color: #780202;
		font-size: 5rem;
		line-height: 1.15;
		font-weight: bolder;
	}
`;
export const Span = styled.span`
	font-size: 2rem;
`;

export const Div1 = styled.div`
	position: relative;
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: row;
	align-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;

export const BGBrand = styled.div`
	position: absolute;
	font-size: 80px;
	top: 50%;
	left: -1rem;
	transform: translateY(-50%);
	font-family: 'Gemunu Libre', sans-serif;
	color: rgba(255, 255, 255, 0.013);
	-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
	-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
	color: white;
	pointer-events: none;
`;
// export const Div1 = styled.div`
// 	grid-area: 1 / 1 / 2 / 2;
// 	display: flex;
// 	flex-direction: row;
// 	align-content: center;
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		grid-area: 1 / 1 / 2 / 3;
// 	}
// `;

export const Div2 = styled.div`
	position: relative;
	grid-area: 1 / 3/ 2 / 6;
	display: flex;
	justify-content: flex-end;
	column-gap: 2rem;
	align-items: center;
	font-weight: bold;
	@media ${(props) => props.theme.breakpoints.sm} {
		justify-content: space-around;
		column-gap: 0;
		align-items: center;
		grid-area: 2 / 1 / 3 / 6;
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		display: none;
	}
`;

export const BGNav = styled.div`
	position: absolute;
	font-size: 80px;
	top: 50%;
	right: -1rem;
	transform: translateY(-50%);
	font-family: 'Gemunu Libre', sans-serif;
	color: rgba(255, 255, 255, 0.013);
	-webkit-text-stroke: 1px rgba(229, 229, 229, 0.08);
	-webkit-text-fill-color: rgba(255, 255, 255, 0.013);
	color: white;
	pointer-events: none;
	@media ${(props) => props.theme.breakpoints.sm} {
		right: 50%;
		/* top: 50%; */
		transform: translate(50%, -50%);
	}
`;

// export const Div2 = styled.div`
// 	grid-area: 1 / 2 / 2 / 4;
// 	display: flex;
// 	justify-content: space-around;
// 	align-items: center;
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		align-items: center;
// 		grid-area: 2 / 2 / 3 / 5;
// 	}
// `;
export const Div3 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
`;

// Navigation Links
export const NavLink = styled.a`
	text-transform: uppercase;
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	z-index: 5;
	&:hover {
		color: #780202;
		opacity: 1;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// Social Icons

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

// export const W = styled.div`
// 	border: 1px solid white;
// 	flex: 1;
// `;

export const WorkStatus = styled.div`
	position: relative;
	grid-area: 1 / 2/ 2 / 3;
	display: flex;
	justify-content: center;
	column-gap: 2rem;
	align-items: center;
	p {
		width: 160px;
		background-color: #780202;
		padding: 0.7rem 1rem;
		font-size: 1.2rem;
		border-radius: 5px;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: center;
		column-gap: 0;
		align-items: center;
		grid-area: 2 / 1 / 3 / 6;
		display: none;
	}
	/* font-weight: bold; */
	@media ${(props) => props.theme.breakpoints.sm} {
		justify-content: center;
		column-gap: 0;
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
		/* display: none; */
		display: flex;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		display: none;
	}
`;
