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
	scrollbar-color: #780202;
	--background2: 'hsl(232.7,27.3%,23.7%)';
	::-webkit-scrollbar {
		height: 12px;
		width: 12px;
		background: rgb(75, 74, 74);
	}

	::-webkit-scrollbar-thumb {
		background-color: #780202;
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}

	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}

  }
  /* html[data-theme="light"]{ */
    /* --background: #fcfcfc;
    --background2: #cecece;
    --text: #2020207f;
    --primary1: '#3b3a35';
    --red: '#780202';
    --accent1: 'hsl(34.9,98.6%,72.9%)';
    --button: 'hsl(205.1,100%,36.1%)'; */
    /* --background2: 'hsl(232.7,27.3%,23.7%)'; */
  /* } */
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


/* #dp-logo-svg path:nth-child(1) {
	stroke-dasharray: 1569;
	stroke-dashoffset: 1569;
	animation: line-anim 2s ease-in-out forwards;
  animation-delay: 5.2s;
} */

#about-anim{
  height: 500px;
}

#about{
  user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

.left #card-temp,
.right #card-temp{
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 50%;
  transform: translate(-50%,0);
  z-index: -5;
}
#card-filter{
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  transform: translate(-50%,0);
  z-index: -4;
}

.font-loopy-lotto{
  font-family: 'Cherl';
  color: #af0303;
}

.font-guitar-archive{
    font-family: 'New Tegomin';
  color: #c7581d;
  span{
    color: rgb(105, 54, 25);
  }
}

.font-terror-fi{
  font-family: 'BadSignal';
  color: #ffffff;
}
.font-funjumble{
  font-family: 'Montserrat', sans-serif;
  color: rgb(228, 207, 23);
  font-weight: bold;
  span{
    font-weight: 100;
  }
}
.font-tv-fan-poll{
  font-family: 'Permanent Marker', cursive;
  color: #ff7c02;
  font-weight: bold;
  span{
    font-weight: 100;
  }
}
.font-pinks-n-purples{
  font-family: 'James Stroker';
  color: #ce1ac8;
}
.font-some-people-say{
  font-family: 'Terrorvision';
  color: #ffffff;
  text-transform: uppercase;
}
.font-tv-times{
  font-family: 'Work Sans', sans-serif;
  color: red;
}
.font-m2m{
  font-family: 'Gala Script';
  color: rgb(255, 196, 0);
}

.link-btns{
  position: relative;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    height: 80px;
    width: 80px;
  }
}

.link-grow {
	transform: scale(2);
	background-color: #780202;
}
.hovered-link {
	color: white;
}

/* @keyframes line-anim {
	to {
		stroke-dashoffset: 0;
	}
} */

`;

export default GlobalStyles;
