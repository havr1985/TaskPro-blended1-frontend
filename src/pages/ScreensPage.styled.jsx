import styled from "styled-components";

export const ScreensPageWrap = styled.div`
    
	flex-grow: 1;
	padding-top: 14px;
    padding: 7px 8px 8px 8px;
	/* padding-left: 20px;
	padding-right: 20px */;
	background-color: var(--secondary-background-color);
	background-image: url(${props => props.$bcgurl});
	background-repeat: no-repeat;

	background-position-y: center;

	background-size: cover;

	@media screen and (min-width: 375px) {
		padding: 7px 20px 13px 20px;
	}
    
	@media screen and (min-width: 767px) {
		padding: 13px 32px 13px 32px;
		height: calc(100vh - 180px);
		height: calc(100vh - 180px);
	}

/* 	@media screen and (max-width: 1439px) {
		padding: 13px 32px 32px 32px;
		height: calc(100vh - 180px);
	} */

	@media screen and (min-width: 1439px) {
		padding: 10px 24px 10px 24px;
		height: calc(100vh - 116px);
	}

	/* @media screen and (max-width: 767px) {
		padding: 7px 20px 24px 20px;
		height: calc(100vh - 180px);
	} */
`;

export const WelcomeMessageWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const WelcomeMessage = styled.p`
	width: 335px;
	text-align: center;
	font-size: 12px;
	line-height: 1.33;
	letter-spacing: -0.02em;
	color: var(--welcome-message-text-color);

	@media (min-width: 768px) {
		width: 486px;
		font-size: 14px;
		line-height: 1.29;
	}
`;
export const WelcomeMessageAccent = styled.span`
	color: var(--welcome-message-text-accent-color);
`;
