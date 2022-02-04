import styled from 'styled-components';

export const FooterWrapper = styled.section`
	width: 95%;
	/* max-width: 1040px; */
	/* border: 2px solid blue; */
	padding: 2rem 2rem;
	z-index: 20000;
	margin: 6rem auto 0 auto;
	box-sizing: border-box;
	background-color: rgb(27, 27, 27);
	border-top: 5px solid #780202;
	border: 5px solid #780202;
	border-bottom: 0px solid transparent;
	border-radius: 10px 10px 0 0;
	position: relative;
	height: 4rem;
	#chevron-up {
		position: absolute;
		top: -5rem;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #780202;
		font-size: 8rem;
	}
	.footer-container {
		border: 5px solid #780202;
		padding: 0.5rem;
		background-color: #1b1b1b;
		position: absolute;
		top: 0;
		border-radius: 10rem;
	}
	.links-container {
		left: 2rem;
		transform: translateY(-50%);
		a {
			padding: 0.5rem;
			display: grid;
			place-content: center;
			#footer-gh {
				font-size: 30px;
				color: var(--grey);
			}
		}
	}
	.toggle-container {
		right: 2rem;
		transform: translateY(-50%);
		display: grid;
		place-content: center;
		padding: 0.8rem;
		svg {
			// display: none;
			cursor: pointer;
		}
		// .toggle-mode {
		// 	// display: none;
		// 	// position: absolute;
		// 	// left: 50%;
		// 	// transform: translateX(-50%);
		// 	// @include flex(center, center, row);

		// }
	}
	.company-container {
		padding: 0.5rem 2rem;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	p {
		font-size: 1.2rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 16px 48px;
		/* width: calc(100vw - 32px); */
	}
`;

// footer {
// 	// width: 100vw;
// 	width: 100%;
// 	@include flex(flex-end, center, row);
// 	padding: 0.5rem 2rem;
// 	z-index: 2;
// 	// background-color: var(--background);
// 	background-color: rgb(27, 27, 27);
// 	border-top: 2px solid #780202;
// 	position: relative;
// 	height: 4rem;
// 	#chevron-up {
// 		position: absolute;
// 		top: -5rem;
// 		left: 50%;
// 		transform: translate(-50%, -50%);
// 		color: #780202;
// 		font-size: 8rem;
// 	}
// 	.footer-container {
// 		border: 2px solid #780202;
// 		padding: 0.5rem;
// 		background-color: rgb(27, 27, 27);
// 		position: absolute;
// 		top: 0;
// 		border-radius: 10rem;
// 	}
// 	.links-container {
// 		left: 2rem;
// 		transform: translateY(-50%);
// 		a {
// 			padding: 0.5rem;
// 			display: grid;
// 			place-content: center;
// 			#footer-gh {
// 				font-size: 30px;
// 				color: var(--grey);
// 			}
// 		}
// 	}
// 	.toggle-container {
// 		right: 2rem;
// 		transform: translateY(-50%);
// 		display: grid;
// 		place-content: center;
// 		padding: 0.8rem;
// 		svg {
// 			// display: none;
// 			cursor: pointer;
// 		}
// 		// .toggle-mode {
// 		// 	// display: none;
// 		// 	// position: absolute;
// 		// 	// left: 50%;
// 		// 	// transform: translateX(-50%);
// 		// 	// @include flex(center, center, row);

// 		// }
// 	}
// 	.company-container {
// 		padding: 0.5rem 2rem;
// 		left: 50%;
// 		transform: translate(-50%, -50%);
// 	}
// 	p {
// 		font-size: 1.2rem;
// 	}
// }

// export const LinkItem = styled.a`
// 	font-size: 18px;
// 	line-height: 30px;
// 	color: rgba(255, 255, 255, 0.75);
// 	margin-bottom: 16px;
// 	transition: 0.3s ease;
// 	position: relative;
// 	left: 0;

// 	&:hover {
// 		color: #fff;
// 		left: 6px;
// 	}

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		font-size: 16px;
// 		line-height: 28px;
// 		display: flex;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		font-size: 8px;
// 		line-height: 14px;
// 		margin-bottom: 8px;
// 		display: flex;
// 		align-items: center;
// 	}
// `;

// export const SocialIconsContainer = styled.div`
// 	max-width: 1040px;
// 	display: flex;
// 	justify-content: space-between;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		display: flex;
// 		justify-content: space-between;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		display: flex;
// 		width: 100%;
// 		flex-direction: column;
// 	}
// `;

// export const CompanyContainer = styled.div`
// 	display: flex;
// 	align-items: baseline;
// 	flex-wrap: wrap;
// 	margin-right: auto;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		flex-direction: column;
// 		align-items: baseline;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		display: flex;
// 		flex-direction: column;
// 		margin: 0 0 32px;
// 		align-items: center;
// 	}
// `;

// export const Slogan = styled.p`
// 	color: rgba(255, 255, 255, 0.5);
// 	min-width: 280px;
// 	letter-spacing: 0.02em;
// 	font-size: 18px;
// 	line-height: 30px;
// 	padding: 1rem;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		font-size: 16px;
// 		line-height: 28px;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		line-height: 22px;
// 		font-size: 14px;
// 		min-width: 100px;
// 	}
// `;

// export const SocialContainer = styled.div`
// 	display: flex;
// 	align-items: center;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		justify-content: center;
// 		padding-right: 16px;
// 		flex-wrap: wrap;
// 	}
// `;

// export const LinkList = styled.ul`
// 	border-top: 1px solid #780202;
// 	display: grid;
// 	grid-template-columns: repeat(3, minmax(85px, 220px));
// 	gap: 40px;
// 	padding: 40px 0 28px;

// 	@media ${(props) => props.theme.breakpoints.lg} {
// 		padding: 32px 0 16px;
// 	}

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		width: 100%;
// 		padding: 32px 0 16px;
// 		gap: 16px;
// 	}
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		width: 100%;
// 		padding: 32px 4px 16px;
// 		gap: 5px;
// 	}
// `;

// export const LinkColumn = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	max-width: 220px;
// 	width: 100%;
// `;
// export const LinkTitle = styled.h4`
// 	font-style: normal;
// 	font-weight: 600;
// 	font-size: 12px;
// 	line-height: 24px;
// 	text-transform: uppercase;
// 	color: rgba(255, 255, 255, 0.4);
// 	margin-bottom: 16px;

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		font-size: 10px;
// 		line-height: 12px;
// 		margin-bottom: 8px;
// 	}
// `;

// export const FooterWrapper = styled.section`
// 	width: calc(100vw - 96px);
// 	max-width: 1040px;
// 	padding: 2rem 48px 40px;
// 	margin: 1rem auto;
// 	box-sizing: content-box;

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		padding: 0 16px 48px;
// 		width: calc(100vw - 32px);
// 	}
// `;

// export const LinkItem = styled.a`
// 	font-size: 18px;
// 	line-height: 30px;
// 	color: rgba(255, 255, 255, 0.75);
// 	margin-bottom: 16px;
// 	transition: 0.3s ease;
// 	position: relative;
// 	left: 0;

// 	&:hover {
// 		color: #fff;
// 		left: 6px;
// 	}

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		font-size: 16px;
// 		line-height: 28px;
// 		display: flex;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		font-size: 8px;
// 		line-height: 14px;
// 		margin-bottom: 8px;
// 		display: flex;
// 		align-items: center;
// 	}
// `;

// export const SocialIconsContainer = styled.div`
// 	max-width: 1040px;
// 	display: flex;
// 	justify-content: space-between;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		display: flex;
// 		justify-content: space-between;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		display: flex;
// 		width: 100%;
// 		flex-direction: column;
// 	}
// `;

// export const CompanyContainer = styled.div`
// 	display: flex;
// 	align-items: baseline;
// 	flex-wrap: wrap;
// 	margin-right: auto;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		flex-direction: column;
// 		align-items: baseline;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		display: flex;
// 		flex-direction: column;
// 		margin: 0 0 32px;
// 		align-items: center;
// 	}
// `;

// export const Slogan = styled.p`
// 	color: rgba(255, 255, 255, 0.5);
// 	min-width: 280px;
// 	letter-spacing: 0.02em;
// 	font-size: 18px;
// 	line-height: 30px;
// 	padding: 1rem;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		font-size: 16px;
// 		line-height: 28px;
// 	}

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		line-height: 22px;
// 		font-size: 14px;
// 		min-width: 100px;
// 	}
// `;

// export const SocialContainer = styled.div`
// 	display: flex;
// 	align-items: center;

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		justify-content: center;
// 		padding-right: 16px;
// 		flex-wrap: wrap;
// 	}
// `;

// export const LinkList = styled.ul`
// 	border-top: 1px solid #780202;
// 	display: grid;
// 	grid-template-columns: repeat(3, minmax(85px, 220px));
// 	gap: 40px;
// 	padding: 40px 0 28px;

// 	@media ${(props) => props.theme.breakpoints.lg} {
// 		padding: 32px 0 16px;
// 	}

// 	@media ${(props) => props.theme.breakpoints.md} {
// 		width: 100%;
// 		padding: 32px 0 16px;
// 		gap: 16px;
// 	}
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		width: 100%;
// 		padding: 32px 4px 16px;
// 		gap: 5px;
// 	}
// `;

// export const LinkColumn = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	max-width: 220px;
// 	width: 100%;
// `;
// export const LinkTitle = styled.h4`
// 	font-style: normal;
// 	font-weight: 600;
// 	font-size: 12px;
// 	line-height: 24px;
// 	text-transform: uppercase;
// 	color: rgba(255, 255, 255, 0.4);
// 	margin-bottom: 16px;

// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		font-size: 10px;
// 		line-height: 12px;
// 		margin-bottom: 8px;
// 	}
// `;
