import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import PoppinRegular from "./shared/fonts/Poppins-Regular.ttf";
import PoppinMedium from "./shared/fonts/Poppins-Medium.ttf";
import PoppinSemiBold from "./shared/fonts/Poppins-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: local('Poppins-Regular'), local('Poppins-Medium'),
    local('Poppins-SemiBold'),
    url(${PoppinRegular}) format('truetype'),
    url(${PoppinMedium}) format('truetype'),
    url(${PoppinSemiBold}) format('truetype');
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 11250ms cubic-bezier(0.4, 0, 0.2, 1);

  
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
	padding: 0;
	list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}`;
