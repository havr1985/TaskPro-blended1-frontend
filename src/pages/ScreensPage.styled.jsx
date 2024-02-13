import styled from "styled-components";

export const ScreensPageWrap = styled.div`
	flex-grow: 1;
	padding-top: 14px;
	/* padding-bottom: 40px; */
	padding-left: 20px;
	padding-right: 20px;
	background-color: var(--secondary-background-color);
	background-image: url(${props => props.$bcgurl});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;

	@media (min-width: 768px) {
		padding-top: 20px;
		padding-left: 32px;
		padding-right: 32px;
	}

	@media (min-width: 1440px) {
		padding-top: 14px;
		padding-left: 24px;
		padding-right: 24px;
	}
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
