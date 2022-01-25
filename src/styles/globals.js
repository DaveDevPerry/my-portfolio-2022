import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: #c40303 rgb(75, 74, 74);
	::-webkit-scrollbar {
		height: 12px;
		width: 12px;
		background: rgb(75, 74, 74);
	}

	::-webkit-scrollbar-thumb {
		background-color: #c40303;
		// -webkit-border-radius: 1ex;
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}

	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  #dp-logo-svg {
	/* position: absolute; */
	/* top: 50%; */
	/* left: 50%; */
	/* transform: translate(-50%, -50%); */
	animation: fill 0.5s ease forwards 4s;
  
}
#dp-logo-svg path:nth-child(1) {
	/* stroke-dasharray: 280px; */
	stroke-dasharray: 1569;
	stroke-dashoffset: 1569;
	/* stroke-dashoffset: ; */
	animation: line-anim 2s ease-in-out forwards;
  animation-delay: 2s;
}

@keyframes line-anim {
	to {
		stroke-dashoffset: 0;
	}
}

`;

export default GlobalStyles;
