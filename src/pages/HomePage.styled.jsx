import styled from "styled-components";

export const HomePageWrapper = styled.div`
	display: flex;
	height: 100vh;

	position: relative;
	overflow: hidden;
`;

export const HeaderAndScreensWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Overlay = styled.div`
	position: fixed;

	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	background-color: #1515154d;
	transition: 0.5s;
	opacity: 0;
	visibility: hidden;

	&.active {
		opacity: 1;
		visibility: visible;
	}
`;
