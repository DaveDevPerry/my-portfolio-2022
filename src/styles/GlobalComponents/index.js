import styled from 'styled-components';

export const Section = styled.section`
	display: ${(props) => (props.grid ? 'grid' : 'flex')};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	padding: ${(props) => (props.nopadding ? '0' : '80px 48px 0')};
	margin: 0 auto;
	max-width: 1040px;
	box-sizing: content-box;
	position: relative;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;

	@media ${(props) => props.theme.breakpoints.md} {
		padding: 24px 48px 0;
		flex-direction: column;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: ${(props) => (props.nopadding ? '150px 0 0 0' : '16px 16px 0')};

		width: calc(100vw - 42px);
		flex-direction: column;
	}
`;

export const SectionTitle = styled.h2`
	font-weight: 800;
	font-size: ${(props) => (props.main ? '65px' : '56px')};
	line-height: ${(props) => (props.main ? '80px' : '80px')};
	width: max-content;
	max-width: 100%;
	background: linear-gradient(
		121.57deg,
		#ffffff 18.77%,
		rgba(255, 255, 255, 0.66) 60.15%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 16px;
	/* padding: ${(props) => (props.main ? '0' : '0')}; */
	padding: ${(props) => (props.main ? '58px 0 16px' : '0')};
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	/* position: relative; */
	/* :after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 5px;
		background-color: red;
	} */
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${(props) => (props.main ? '56px' : '48px')};
		line-height: ${(props) => (props.main ? '56px' : '48px')};
		margin-bottom: 12px;
		padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 32px;
		line-height: 40px;
		font-size: ${(props) => (props.main ? '36px' : '32px')};
		line-height: ${(props) => (props.main ? '42px' : '40px')};
		margin-bottom: 8px;
		padding: ${(props) => (props.main ? '16px 0 8px' : '20px 0 0 0')};
		max-width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		font-size: 32px;
		line-height: 40px;
		font-size: ${(props) => (props.main ? '28px' : '32px')};
		line-height: ${(props) => (props.main ? '32px' : '40px')};
		margin-bottom: 8px;
		padding: ${(props) => (props.main ? '16px 0 8px' : '20px 0 0 0')};
		max-width: 100%;
	}
`;

export const SectionText = styled.p`
	max-width: 100%;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	margin-bottom: 3.6rem;
	color: rgba(255, 255, 255, 0.5);
	padding-left: 20px;
	position: relative;
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
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
		max-width: 100%;
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

export const SectionDivider = styled.div`
	width: 64px;
	height: 6px;
	border-radius: 10px;
	background-color: #780202;
	/* background: ${(props) =>
		props.colorAlt
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'}; */

	margin: ${(props) => (props.divider ? '4rem 0' : '')};

	@media ${(props) => props.theme.breakpoints.md} {
		width: 48px;
		height: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 32px;
		height: 4px;
	}
`;
export const SectionSubText = styled.p`
	max-width: 800px;
	font-weight: 300;
	font-size: 18px;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 672px;
		font-size: 16px;
		line-height: 25px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
	}
`;
export const SecondaryBtn = styled.button`
	color: #fff;
	background: none;
	border: 1px solid rgba(255, 255, 255, 0.33);
	box-sizing: border-box;
	border-radius: 999px;
	padding: 16px 24px;
	font-weight: 600;
	font-size: 18px;
	line-height: 16px;
	width: fit-content;
	margin-top: 32px;
	margin-bottom: 80px;
	cursor: pointer;
	transition: 0.4s ease;
	&:focus {
		outline: none;
	}

	&:hover {
		color: #0f1624;
		background: #fff;
		border: 1px solid #fff;
	}

	&:active {
		background: #e0e4eb;
		border: 1px solid #304169;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
			inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 24px;
		margin-bottom: 64px;
		padding: 16px 24px;
		width: fit-content;
		font-size: 20px;
		line-height: 20px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 16px;
		margin-bottom: 40px;
		padding: 8px 16px;
		width: 100%;
		font-size: 14px;
		line-height: 16px;
	}
`;

export const ButtonBack = styled.div`
	width: ${({ alt }) => (alt ? '150px' : '262px')};
	height: ${({ alt }) => (alt ? '52px' : '64px')};
	border-radius: 10px;
	font-size: ${({ alt }) => (alt ? '20px' : '24px')};
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
	color: #fff;
	/* background: ${({ alt }) =>
		alt
			? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)'
			: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'}; */
	border: ${({ alt }) => (alt ? '1px solid #ecb723' : '2px solid #780202')};
	cursor: pointer;
	transition: 0.5s ease;
	position: relative;
	overflow: hidden;
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	/* a {
		display: none;
	} */
	#cv-btn,
	#proj-btn {
		color: white;
		width: 100%;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: ${({ alt }) => (alt ? '150px' : '184px')};
		height: ${({ alt }) => (alt ? '52px' : '48px')};
		font-size: ${({ alt }) => (alt ? '20px' : '16px')};
		margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		height: 32px;
		/* font-size: 16px;
		margin-bottom: ${({ alt }) => (alt ? '0' : '32px')}; */
		font-size: 22px;
		padding: 2rem;
		margin-bottom: ${({ alt }) => (alt ? '0' : '0px')};
	}
	@media ${(props) => props.theme.breakpoints.xsm} {
		width: 100%;
		height: 32px;
		font-size: 22px;
		padding: 2rem;
		margin-bottom: ${({ alt }) => (alt ? '0' : '0px')};
	}
`;

export const ButtonFront = styled.button`
	border: none;
	border-radius: 10px;
	/* color: #fff; */
	color: transparent;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* background: ${({ alt }) =>
		alt
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'}; */
	background: ${({ alt }) => (alt ? 'transparent' : 'transparent')};
	border: ${({ alt }) => (alt ? '1px solid #ecb723' : '1px solid #780202')};
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	transition: 0.4s ease;
	font-size: ${({ alt }) => (alt ? '20px' : '24px')};
	font-weight: 600;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: ${({ disabled }) =>
		disabled
			? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
			: 'none'};

	&:hover {
		/* opacity: 0; */
		color: transparent;
	}
	&:focus {
		outline: none;
	}
	&:active {
		opacity: 1;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
			inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	&:disabled {
		background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
		opacity: 0.5;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
			inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}
	#cv-btn {
		color: white;
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${({ alt }) => (alt ? '20px' : '16px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

export const LinkContainer = styled.div`
	margin-left: ${({ large }) => (large ? '24px' : '16px')};
	transition: 0.3s ease;
	justify-content: center;
	border-radius: 50px;
	padding: 8px;

	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-left: ${({ large }) => (large ? '16px' : '8px')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: ${({ large }) => (large ? '0' : '8px')};
	}
`;

export const LinkIconImg = styled.div`
	display: flex;
	height: ${({ large }) => (large ? '32px' : '24px')};

	@media ${(props) => props.theme.breakpoints.md} {
		height: ${({ nav }) => (nav ? '16px' : '24px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: ${({ large }) => (large ? '32px' : '16px')};
	}
`;

export const BtnWrapper = styled.div`
	/* border: 1px solid white; */
	display: flex;
	justify-content: flex-start;
	align-items: center;
	column-gap: 2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		row-gap: 2rem;
	}
`;
